"use client";

import { useState } from "react";
import Image from "next/image";

const thumbnails = [
  "/images/dummy-images/ProductDetailPage (1).png",
  "/images/dummy-images/ProductDetailPage (2).png",
  "/images/dummy-images/ProductDetailPage (3).png",
  "/images/dummy-images/ProductDetailPage (4).png",
  "/images/dummy-images/ProductDetailPage (2).png",
];

export const ProductGallery = () => {
  const [mainImage, setMainImage] = useState("/images/dummy-images/ProductDetailPage.png");

  return (
    <div className="flex flex-col gap-4 h-full w-full">
      {/* ---------- Main Image ---------- */}
      <div className="relative  w-full flex-1 overflow-hidden rounded-2xl bg-[#F8FAF7] flex items-center justify-center p-12 ">
        <Image
          src={mainImage}
          alt="Product Detail Page"
          width={400}
          height={400}
          className="object-contain"
        />

        {/* Optional favorite button */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* ---------- Thumbnails ---------- */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {thumbnails.map((src, i) => {
          const isActive = mainImage === src;

          return (
            <button
              key={i}
              onClick={() => setMainImage(src)}
              className={`relative w-20 h-20 flex-shrink-0 border-2 rounded-md cursor-pointer overflow-hidden transition-all ${isActive
                  ? "border-emerald-600"
                  : "border-transparent hover:border-emerald-600"
                }`}
            >
              <Image src={src} alt={`View ${i}`} fill className="object-cover" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
