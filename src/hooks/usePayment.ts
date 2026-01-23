export const usePayment = () => {
    const payWithRazorpay = async () => {
      const res = await fetch("/api/razorpay/order", { method: "POST" });
      const order = await res.json();
  
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Demo Clinic",
        description: "Appointment Booking",
        handler: () => {
          window.location.href = "/payment-success";
        },
        theme: { color: "#14532D" },
      };
  
      // @ts-ignore
      new window.Razorpay(options).open();
    };
  
    const payWithStripe = () => {
      window.location.href = "/stripe-checkout";
    };
  
    return { payWithRazorpay, payWithStripe };
  };
  