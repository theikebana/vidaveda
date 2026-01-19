"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

interface ProductPrimaryAdsCardProps {
  category: string;
  title: string;
  backgroundImage: string;
  onAddToCart?: () => void;
}

const ProductPrimaryAdsCard = ({
  category,
  title,
  backgroundImage,
  onAddToCart,
}: ProductPrimaryAdsCardProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[#0e311a]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/4" />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[220px] items-center">
        <div className="w-full max-w-sm px-8 py-10">
          {/* Category */}
          <p className="text-sm uppercase tracking-wide text-[#f4e9d8]">
            {category}
          </p>

          {/* Title */}
          <h2 className="mt-2 text-lg sm:text-xl  font-unbounded font-light text-white leading-snug">
            {title}
          </h2>

          {/* CTA */}
          <button
            onClick={onAddToCart}
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#c29e5d] px-6 py-2 text-sm  text-white transition-all hover:bg-[#b08d4f] active:scale-95"
          >
            {/* <ShoppingBag size={18} /> */}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPrimaryAdsCard;
