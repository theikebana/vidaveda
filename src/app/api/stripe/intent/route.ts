import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  const intent = await stripe.paymentIntents.create({
    amount: 499 * 100, // $4.99 dummy
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });

  return NextResponse.json({
    clientSecret: intent.client_secret,
  });
}
