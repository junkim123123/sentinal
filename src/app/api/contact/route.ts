import { NextResponse } from "next/server";

const WEB3FORMS_ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY ?? "fc2b219a-5e68-4ac6-bf4d-404de0a4f549";

type ContactPayload = {
  intent?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  clientStatus?: string;
  requestCategory?: string;
  expectedUse?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

const intentSubjectMap: Record<string, string> = {
  contact: "commercial intake",
  demo: "demo request",
  consultation: "consultation request",
  "support-request": "support request",
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const payload = {
    intent: normalize(body.intent) || "contact",
    name: normalize(body.name),
    email: normalize(body.email),
    phone: normalize(body.phone),
    company: normalize(body.company),
    message: normalize(body.message),
    clientStatus: normalize(body.clientStatus),
    requestCategory: normalize(body.requestCategory),
    expectedUse: normalize(body.expectedUse),
  };

  if (!payload.name || !payload.email || !payload.phone || !payload.message) {
    return NextResponse.json(
      { error: "Name, email, phone, and message are required." },
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
        subject: `Sentinel ${intentSubjectMap[payload.intent] ?? "website inquiry"} from ${payload.name}`,
        from_name: "Sentinel Imports Website",
        Intent: payload.intent,
        Name: payload.name,
        Email: payload.email,
        PhoneNumber: payload.phone,
        Company: payload.company,
        ClientStatus: payload.clientStatus,
        RequestCategory: payload.requestCategory,
        ExpectedUse: payload.expectedUse,
        Message: payload.message,
      }),
      cache: "no-store",
    });

    const data = (await response.json()) as { success?: boolean };

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { error: "The form service did not accept this request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach the form service right now." },
      { status: 502 },
    );
  }
}
