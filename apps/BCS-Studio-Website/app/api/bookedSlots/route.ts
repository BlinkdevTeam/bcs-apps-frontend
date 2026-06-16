// GET: Fetch booked slots for a specific date
// app/api/bbokedSlots/route.ts
import { NextResponse } from "next/server";
import { query } from "@/lib/postgres/db";

interface BookingSlotRow {
  time: string;
  duration: number;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }

  try {
    const result = await query<BookingSlotRow>(
      `SELECT 
        TO_CHAR(a.booking_time, 'HH24:MI') AS time,
        p.duration
      FROM booking_appointments a
      JOIN booking_packages p ON a.service_id = p.id
      WHERE a.booking_date = $1
        AND a.status != 'Cancelled'`,
      [date]
    );

    return NextResponse.json(result.rows); // [{ time: "13:30", duration: 60 }, ...]
  } catch (error) {
    console.error("Booked slots fetch error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}