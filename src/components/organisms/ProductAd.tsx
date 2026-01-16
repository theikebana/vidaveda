"use client";

import React from "react";
import Image from "next/image";

interface ProductAdProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  buttonText?: string;
}

export default function ProductAd({
  title = "Herbpathy Immuno Active",
  subtitle = "Herbpathy IMMUNO Active Plant Based 1FL OZ (30mL)",
  description = "Boosts your body's natural defenses and supports overall immunity",
  imageSrc = "/images/products/immuno-active.png",
  buttonText = "Add to Cart",
}: ProductAdProps) {
  return (
    <div className="bg-gradient-to-br from-[#14532D] to-[#0E311A] rounded-2xl p-6 lg:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <Image
          src="/images/decorative/leaves-pattern.svg"
          alt=""
          width={128}
          height={128}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 lg:w-40 lg:h-40">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-white text-lg lg:text-xl font-unbounded font-medium mb-2">
            {title}
          </h4>
          <p className="text-white/90 text-sm lg:text-base mb-3">
            {subtitle}
          </p>
          <p className="text-white/80 text-sm lg:text-base mb-4">
            {description}
          </p>
          <button className="bg-[#C0964F] hover:bg-[#AC823B] text-white px-6 py-2 rounded-full text-sm lg:text-base font-medium transition-colors duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

