// app/api/walk-in-booking/route.ts
import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/postgres/db";

interface WalkInAddon {
  id: string;
  label: string;
  price: number;
}

interface WalkInItem {
  serviceId: string;
  addons: WalkInAddon[];
  basePrice: number;
  quantity: number;
}

interface WalkInRequestBody {
  customerName?: string;
  customerPhone?: string;
  items: WalkInItem[];
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as WalkInRequestBody;
    const { items } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items in order" }, { status: 400 });
    }

    const customerName = body.customerName?.trim() || "Walk-in Customer";
    const customerPhone = body.customerPhone?.trim() || null;
    const customerEmail = `walkin+${Date.now()}@onsite.blinkcreativestudio.local`;

    const now = new Date();
    const bookingDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    const bookingTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    const bookingIds: string[] = [];

    for (const item of items) {
      if (!item.serviceId) continue;
      const addons = Array.isArray(item.addons) ? item.addons : [];
      const addonsTotal = addons.reduce((s, a) => s + Number(a.price || 0), 0);
      const totalPrice = Number(item.basePrice || 0) + addonsTotal;
      const qty = Math.max(1, Math.floor(item.quantity || 1));

      for (let i = 0; i < qty; i++) {
        const result = await query<{ id: string }>(
  `INSERT INTO booking_appointments (
    full_name, email, phone, description,
    booking_date, booking_time, service_id, addons,
    total_price, payment_proof, payment_proof_type, status, created_at
  )
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,'Confirmed',NOW())
  RETURNING id`,
  [
    customerName,
    customerEmail,
    customerPhone,
    "Walk-in booking (front desk)",
    bookingDate,
    bookingTime,
    item.serviceId,
    JSON.stringify(addons),
    totalPrice,
    "Walk-in (no proof required)",
    "walk-in",
  ]
);
        bookingIds.push(String(result.rows[0].id));
      }
    }

    if (bookingIds.length === 0) {
      return NextResponse.json({ error: "No valid items to book" }, { status: 400 });
    }

    return NextResponse.json({
      message: "Walk-in booking created",
      bookingIds,
      date: bookingDate,
      time: bookingTime,
    });
  } catch (error) {
    console.error("Walk-in booking error:", error);
    return NextResponse.json({ error: "Failed to create walk-in booking" }, { status: 500 });
  }
}