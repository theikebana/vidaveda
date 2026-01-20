"use client";

import { Star, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const paymentIcons = [
  { src: "/icons/payment-icons/VisaElectron.svg", alt: "Visa", width: 32, height: 12 },
  { src: "/icons/payment-icons/PayPal.svg", alt: "PayPal", width: 32, height: 12 },
  { src: "/icons/payment-icons/GooglePay.svg", alt: "Google Pay", width: 32, height: 12 },
  { src: "/icons/payment-icons/ApplePay.svg", alt: "Apple Pay", width: 32, height: 12 },
];

export const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col h-full max-w-lg w-full p-4">
      
      {/* --- Header --- */}
      <div className="space-y-1">
        <h1 className="text-4xl text-[#1a3c2a]  tracking-tight">Turmeric Complex</h1>
        <p className="text-xl text-[#2d5a42] font-medium">Anti-Inflammatory Support</p>
        <div className="flex items-center gap-2 pt-1 text-sm">
          <span className="text-[#0B0B0B] text-lg font-medium">SKU – 654</span>
          <span className="text-[#485B23] text-sm">(in Stock)</span>
        </div>
      </div>

      {/* --- Rating --- */}
      <div className="mt-5 flex flex-col gap-2">
        <span className="bg-[#AC823B] text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full inline-block w-fit">
          Review Rating
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-800">1.5 Rating</span>
          <span className="text-sm text-gray-500">(5 Comments)</span>
        </div>
        <div className="flex gap-0.5">
          <Star size={18} className="fill-[#b38b4d] text-[#b38b4d]" />
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={18} className="text-gray-300" />
          ))}
        </div>
      </div>

      {/* --- Price & Actions --- */}
      <div className="mt-5 space-y-5">
        <div className="text-5xl font-medium text-[#485B23]">₹300.66</div>

        <div className="flex flex-col gap-6">
          {/* Package */}
          <div className="flex items-center gap-2 text-gray-700 text-lg font-medium">
            Pkg – <span className="uppercase">1 FL OZ</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-5">
            <span className="text-gray-700 text-lg font-medium">Quantity</span>
            <div className="flex items-center bg-gray-50 border border-[#485B23] rounded-full px-3 py-1">
              <button
                onClick={decrement}
                aria-label="Decrease quantity"
                className="p-1 hover:bg-gray-200 rounded-full text-[#485B23] transition-colors cursor-pointer"
              >
                <Minus size={16} />
              </button>
              <span className="px-6 font-bold text-lg text-[#485B23]">{quantity}</span>
              <button
                onClick={increment}
                aria-label="Increase quantity"
                className="p-1 hover:bg-gray-200 rounded-full text-[#485B23] transition-colors cursor-pointer"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="w-full bg-[#14532D] text-white py-3 rounded-full text-md hover:bg-[#142e20] transition-all active:scale-[0.98]">
            Buy Now
          </button>
          <button className="w-full border border-[#14532D] text-[#14532D] py-3 rounded-full text-md hover:bg-gray-50 transition-all active:scale-[0.98]">
            Add to Cart
          </button>
        </div>
      </div>

      {/* --- Payment Logos --- */}
      <div className="mt-10">
        <p className="text-sm text-[#0B0B0B] font-semibold uppercase mb-4">Accept Payment</p>
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
  );
};
