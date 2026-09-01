import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/postgres/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { hidden } = await req.json();

    if (typeof hidden !== "boolean") {
      return NextResponse.json({ error: "hidden must be a boolean" }, { status: 400 });
    }

    const result = await query(
      `UPDATE booking_packages
       SET hidden_from_walkin = $1
       WHERE id = $2
       RETURNING id, hidden_from_walkin`,
      [hidden, id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, id, hidden });
  } catch (err) {
    console.error("Failed to update walk-in visibility:", err);
    return NextResponse.json({ error: "Failed to update visibility" }, { status: 500 });
  }
}