import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST() {
  const order = await razorpay.orders.create({
    amount: 499 * 100, // ₹499 dummy
    currency: "INR",
    receipt: "appointment_dummy",
  });

  return NextResponse.json(order);
}
