import { NextResponse } from "next/server";

const WEB3FORMS_ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY ?? "fc2b219a-5e68-4ac6-bf4d-404de0a4f549";

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };
  const email = normalize(body.email);

  if (!email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Sentinel newsletter signup: ${email}`,
        from_name: "Sentinel Imports Website",
        Email: email,
        Message: `Newsletter signup request from ${email}`,
      }),
      cache: "no-store",
    });

    const data = (await response.json()) as { success?: boolean };

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { error: "The signup service did not accept this request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach the signup service right now." },
      { status: 502 },
    );
  }
}
