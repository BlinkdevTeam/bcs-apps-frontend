// app/api/bookings/route.ts

import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/postgres/db";
import { sendBookingConfirmationEmail } from "@/lib/email/sendConfirmation";
import { BookingData } from "@/types/BookingData";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";

// ✅ Helper: Safe error message extractor
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

// ─── GET: Fetch all bookings ─────────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const sql = `
      SELECT * FROM booking_appointments
      ORDER BY booking_date DESC, booking_time DESC
    `;
    const result = await query(sql);

    const bookings: (BookingData & {
      id: string;
      status: string;
      proof: string | null;
    })[] = result.rows.map((b) => {
      // Parse service JSON safely
      let service: BookingData["service"] = {
        id: 0,
        slug: "",
        title: "",
        price: 0
      };
      try {
        service = typeof b.service === "string" ? JSON.parse(b.service) : b.service;
      } catch (err) {
        console.error("Failed to parse service JSON:", b.service, err);
      }

      // Parse addons JSON safely
      let addons: BookingData["addons"] = [];
      try {
        addons = typeof b.addons === "string" ? JSON.parse(b.addons) : b.addons || [];
      } catch (err) {
        console.error("Failed to parse addons JSON:", b.addons, err);
        addons = [];
      }

      return {
        id: b.id.toString(),
        customer: {
          name: b.full_name,
          email: b.email,
          phone: b.phone,
          description: b.description || undefined,
        },
        service,
        addons,
        // ✅ Use raw date string from DB to avoid timezone shift
        date: b.booking_date,  
        time: b.booking_time,
        totalPrice: parseFloat(b.total_price),
        status: b.status,
        proof: b.payment_proof,
      };
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("GET bookings failed:", error);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

// ─── POST: Create new booking ─────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const bookingRaw = formData.get("booking");
    const proof = formData.get("proof") as File | null;

    if (!bookingRaw || !proof) {
      return NextResponse.json(
        { error: "Missing booking data or payment proof" },
        { status: 400 }
      );
    }

    // Validate file size
    if (proof.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File must be 5MB or smaller" },
        { status: 400 }
      );
    }

    // Validate type
    const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
    if (!allowedTypes.includes(proof.type)) {
      return NextResponse.json(
        { error: "Invalid file type" },
        { status: 400 }
      );
    }

    // Parse booking safely
    let booking: BookingData;
    try {
      booking = JSON.parse(bookingRaw.toString());
    } catch (err: unknown) {
      console.error("JSON parse error:", err);
      return NextResponse.json(
        { error: "Invalid booking data format" },
        { status: 400 }
      );
    }

    const { customer, service, addons, date, time, totalPrice } = booking;

    // Basic validation
    if (!customer?.name || !customer?.email || !date || !time) {
      return NextResponse.json(
        { error: "Missing required booking fields" },
        { status: 400 }
      );
    }

    // Check env
    if (!process.env.DO_SPACES_BUCKET || !process.env.DO_SPACES_REGION) {
      throw new Error("Missing DigitalOcean Spaces environment variables");
    }

    // ─── Upload to DigitalOcean Spaces ─────────────────────────
    let fileUrl = "";

    try {
      const buffer = Buffer.from(await proof.arrayBuffer());

      const safeName = proof.name
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9.-]/g, "");

      const fileName = `studio/receipt/${Date.now()}-${safeName}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.DO_SPACES_BUCKET,
          Key: fileName,
          Body: buffer,
          ContentType: proof.type,
          ACL: "public-read",
        })
      );

      fileUrl = `https://${process.env.DO_SPACES_BUCKET}.${process.env.DO_SPACES_REGION}.cdn.digitaloceanspaces.com/${fileName}`;
    } catch (uploadError: unknown) {
      console.error("S3 Upload Error:", uploadError);

      return NextResponse.json(
        {
          error:
            getErrorMessage(uploadError) ||
            "Failed to upload payment proof",
        },
        { status: 500 }
      );
    }

    // ─── Save to DB ─────────────────────────────────────────────
    let bookingId: string;

    try {
      const sql = `
        INSERT INTO booking_appointments (
          full_name,
          email,
          phone,
          description,
          booking_date,
          booking_time,
          service_id,
          addons,
          total_price,
          payment_proof,
          status
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,'Pending')
        RETURNING id
      `;

      // ✅ FIX: use slug, NOT id
      const serviceId = service.slug;

      const values = [
        customer.name,
        customer.email,
        customer.phone || null,
        customer.description || null,
        date,
        time,
        serviceId, // ✅ FIXED HERE
        JSON.stringify(addons ?? []),
        totalPrice,
        fileUrl,
      ];

      const result = await query(sql, values);
      bookingId = result.rows[0].id;
    } catch (dbError: unknown) {
      console.error("DB Insert Error:", dbError);

      return NextResponse.json(
        {
          error: getErrorMessage(dbError) || "Database error while saving booking",
        },
        { status: 500 }
      );
    }

    // ─── Send Email (non-blocking) ─────────────────────────────
    try {
      await sendBookingConfirmationEmail(customer.email, customer.name, {
        serviceTitle: service.title,
        date,
        time,
        totalPrice,
      });
    } catch (emailError: unknown) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json({
      message: "Booking confirmed",
      bookingId,
      fileUrl,
    });
  } catch (error: unknown) {
    console.error("POST booking error:", error);

    return NextResponse.json(
      { error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}

// ─── PUT: Update booking ─────────────────────────────────────────────
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, customer, service, addons, date, time, totalPrice } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing booking ID" }, { status: 400 });
    }

    const sql = `
      UPDATE booking_appointments
      SET
        booking_date = $1,
        booking_time = $2,
        addons = $3,
        total_price = $4
      WHERE id = $5
      RETURNING *
    `;

    const values = [
      date,
      time,
      JSON.stringify(addons ?? []),
      totalPrice,
      id,
    ];

    await query(sql, values);

    return NextResponse.json({ message: "Booking updated successfully" });
  } catch (error) {
    console.error("PUT booking error:", error);
    return NextResponse.json(
      { error: "Failed to update booking" },
      { status: 500 }
    );
  }
}