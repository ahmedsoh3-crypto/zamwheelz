import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!scriptUrl) {
      return NextResponse.json({ error: "Missing GOOGLE_APPS_SCRIPT_URL" }, { status: 500 });
    }

    const body = await req.json();

    const forward = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // (optional) cache: "no-store",
    });

    const text = await forward.text();
    let data: any = {};
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!forward.ok || data?.ok === false) {
      return NextResponse.json({ error: data?.error || "Google Sheet write failed" }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}