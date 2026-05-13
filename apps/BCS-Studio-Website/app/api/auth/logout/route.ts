import { NextResponse } from "next/server";
import { query } from "@/lib/postgres/db";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [k, ...rest] = c.split("=");
        return [k, rest.join("=")];
      })
    );

    const refreshToken = cookies["refresh_token"];

    if (refreshToken) {
      const tokenHash = crypto
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");

      // Revoke the token in the DB
      await query(
        `UPDATE refresh_tokens SET revoked_at = NOW() WHERE token_hash = $1`,
        [tokenHash]
      );
    }

    const response = NextResponse.json({ message: "Logged out" });

    // Clear the cookie
    response.cookies.set("refresh_token", "", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });

    return response;
  } catch (err) {
    console.error("LOGOUT ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}