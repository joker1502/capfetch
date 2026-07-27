import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.CREEM_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Payment not configured" },
      { status: 501 },
    );
  }

  const { priceId } = await request.json();

  const res = await fetch("https://api.creem.io/v1/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      price_id: priceId,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to create checkout" },
      { status: 500 },
    );
  }

  const data = await res.json();
  return NextResponse.json({ url: data.checkout_url });
}
