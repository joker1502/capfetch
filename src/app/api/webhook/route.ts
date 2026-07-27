import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyCreemSignature } from "@/lib/creem/verify-signature";

export async function POST(request: Request) {
  const secret = process.env.CREEM_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Not configured" }, { status: 501 });
  }

  const body = await request.text();
  const signature = request.headers.get("x-creem-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  if (!verifyCreemSignature(body, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
  }

  const event = JSON.parse(body);

  if (event.type === "checkout.session.completed") {
    const email = event.data?.customer?.email;
    const userId = event.data?.metadata?.user_id;

    if (email && userId) {
      await prisma.profile.upsert({
        where: { userId },
        update: {
          email,
          name: event.data?.customer?.name,
        },
        create: {
          userId,
          email,
          name: event.data?.customer?.name,
        },
      });
    }
  }

  return NextResponse.json({ received: true });
}
