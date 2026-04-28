import { NextResponse } from "next/server";
import { query } from "@/lib/postgres/db";
import bcrypt from "bcryptjs";
import crypto, { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 }
      );
    }

    // 1. Get user from DB
    const result = await query(
      `
      SELECT
        id,
        employee_code,
        first_name,
        last_name,
        email,
        role_title,
        password_hash,
        must_change_password,
        is_active
      FROM employees
      WHERE email = $1 AND deleted_at IS NULL
      LIMIT 1
      `,
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!user.is_active) {
      return NextResponse.json(
        { message: "Account disabled" },
        { status: 403 }
      );
    }

    // 2. Check password
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 3. Generate refresh token
    const refreshToken = crypto.randomBytes(32).toString("hex");

    const tokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // 🔥 FIX: manually insert UUID
await query(
  `
  INSERT INTO refresh_tokens (
    id,
    employee_id,
    app,
    token_hash,
    expires_at,
    created_at
  )
  VALUES ($1, $2, $3, $4, NOW() + INTERVAL '7 days', NOW())
  `,
  [randomUUID(), user.id, "booking", tokenHash]
);

    // 4. Safe user object
    const safeUser = {
      id: user.id,
      employeeCode: user.employee_code,
      name: `${user.first_name} ${user.last_name}`,
      email: user.email,
      role: user.role_title,
      mustChangePassword: user.must_change_password,
    };

    // 5. Response
    const response = NextResponse.json({
      accessToken: "temp-access-token",
      user: safeUser,
    });

    // 6. Set refresh token cookie
    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: false, // ⚠️ must be false in localhost
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}