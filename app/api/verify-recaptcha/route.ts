import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { token } = await request.json();
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return NextResponse.json(
      { success: false, error: "Token missing" },
      { status: 400 }
    );
  }

  if (!secretKey) {
    return NextResponse.json(
      { success: false, error: "reCAPTCHA secret key not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" }
    );

    const data = await response.json();

    return NextResponse.json({ success: data.success });
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json(
      { success: false, error: "Verification failed" },
      { status: 500 }
    );
  }
}
