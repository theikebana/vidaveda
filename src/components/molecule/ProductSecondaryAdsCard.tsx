"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

interface ProductSecondaryAdsCardProps {
  category: string;
  title: string;
  backgroundImage: string;
  onAddToCart?: () => void;
}

const ProductSecondaryAdsCard = ({
  category,
  title,
  backgroundImage,
  onAddToCart,
}: ProductSecondaryAdsCardProps) => {
  return (
    <div className="relative  w-full overflow-hidden rounded-2xl bg-[#0e311a]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/4" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        {/* Top Content */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#f4e9d8]">
            {category}
          </p>

          <h3 className="mt-1 text-lg font-unbounded font-light text-white leading-snug line-clamp-2">
            {title}
          </h3>
        </div>

        {/* CTA */}
        <button
          onClick={onAddToCart}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c29e5d] px-4 py-2 text-sm  text-white transition-all hover:bg-[#b08d4f] active:scale-95"
        >
          <ShoppingBag size={16} />
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductSecondaryAdsCard;
