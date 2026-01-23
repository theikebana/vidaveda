"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const submit = async () => {
    if (!stripe || !elements) return;

    await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    });
  };

  return (
    <button
      onClick={submit}
      className="w-full bg-[#14532D] text-white py-3 rounded-full mt-4"
    >
      Dummy Pay
    </button>
  );
}

export default function StripeCheckout() {
  const [secret, setSecret] = useState("");

  useEffect(() => {
    fetch("/api/stripe/intent", { method: "POST" })
      .then(res => res.json())
      .then(data => setSecret(data.clientSecret));
  }, []);

  if (!secret) return null;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl">
      <Elements stripe={stripePromise} options={{ clientSecret: secret }}>
        <PaymentElement />
        <CheckoutForm />
      </Elements>
    </div>
  );
}
