import { NextResponse } from "next/server";
import { query } from "@/lib/postgres/db";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const cookieHeader = req.headers.get("cookie") || "";

    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [k, v] = c.split("=");
        return [k, v];
      })
    );

    const refreshToken = cookies["refresh_token"];

    if (!refreshToken) {
      return NextResponse.json(
        { message: "No refresh token" },
        { status: 401 }
      );
    }

    // Hash token
    const tokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // Find token
    const result = await query(
      `
      SELECT rt.*, e.*
      FROM refresh_tokens rt
      JOIN employees e ON e.id = rt.employee_id
      WHERE rt.token_hash = $1
        AND rt.revoked_at IS NULL
        AND rt.expires_at > NOW()
      LIMIT 1
      `,
      [tokenHash]
    );

    const row = result.rows[0];

    if (!row) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    const user = {
      id: row.id,
      employeeCode: row.employee_code,
      name: `${row.first_name} ${row.last_name}`,
      email: row.email,
      role: row.role_title,
      mustChangePassword: row.must_change_password,
    };

    return NextResponse.json({
      accessToken: "new-temp-access-token",
      user,
    });
  } catch (err) {
    console.error("REFRESH ERROR:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}