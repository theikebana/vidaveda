"use client";

import Image from "next/image";

/* ---------------- Payment Icons ---------------- */
const paymentIcons = [
    {
        src: "/icons/payment-icons/VisaElectron.svg",
        alt: "Visa",
        width: 32,
        height: 12,
    },
    {
        src: "/icons/payment-icons/PayPal.svg",
        alt: "PayPal",
        width: 32,
        height: 12,
    },
    {
        src: "/icons/payment-icons/GooglePay.svg",
        alt: "Google Pay",
        width: 32,
        height: 12,
    },
    {
        src: "/icons/payment-icons/ApplePay.svg",
        alt: "Apple Pay",
        width: 32,
        height: 12,
    },
];

/* ---------------- Order Summary ---------------- */
const OrderSummary = () => {
    return (
        <div className="max-w-auto mx-auto  bg-[#F8FAF7] rounded-2xl border border-[#CEDCC7] font-sans">
            <div className="space-y-4 mb-8 text-lg text-[#0B0B0B] font-dm-sans border-b border-[#CEDCC7] p-6">
                <h2 className="text-2xl font-medium text-[#0E311A] ">
                    Order Summary
                </h2>

                {/* Pricing Breakdown */}
                <div className="space-y-4 mb-5 text-lg text-[#0B0B0B] font-dm-sans">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹300</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>₹40</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span>₹120</span>
                    </div>
                </div>
            </div>



            <div className="px-6">
                {/* Total */}
                <div className="flex justify-between items-center mb-8">
                    <span className="text-lg font-medium text-[#0B0B0B] font-dm-sans">Total</span>
                    <span className="text-lg font-medium text-[#0B0B0B] font-dm-sans">₹460</span>
                </div>

                {/* Actions */}
                <div className="space-y-5 text-center mb-5">
                    <button className="w-full bg-[#14532D] text-white py-3 rounded-full text-md hover:bg-[#142e20] transition-all active:scale-[0.98] font-light font-unbounded">
                        Proceed
                    </button>

                    <button className="w-full text-[#AC823B] py-3 rounded-full text-md transition-all active:scale-[0.98] font-regular font-unbounded">
                        Continue Shopping
                    </button>
                </div>
            </div>

            <div className="px-6 py-5 border-t border-[#CEDCC7]">
                {/* Footer Info */}
                <div className="text-[#0B0B0B] font-dm-sans mb-8">
                    <p>Secure Checkout</p>
                    <p>The order will be delivered within 14 days</p>
                </div>

                {/* Payment Logos */}
                <div className="my-10">
                    <p className="text-sm text-[#0B0B0B] font-semibold uppercase mb-4">
                        Accept Payment
                    </p>

                    <div className="flex items-center gap-2">
                        {paymentIcons.map((icon, idx) => (
                            <div key={idx} className="relative h-10 w-auto">
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={icon.width}
                                    height={icon.height}
                                    className="object-contain h-10 w-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
