"use client";

import React from "react";
import Image from "next/image";

const PromotionVerticalBanner = () => {
  return (
    <div className="relative w-full max-w-auto aspect-[9/19] overflow-hidden rounded-2xl bg-[#0e311a] mx-auto">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/dummy-images/PromotionVerticalBanner.png" // Replace with your actual path
          alt="Herbal background"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/12" />
      </div>

      {/* Content Layer at Bottom */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-6 text-center">
        {/* Leaf Icon */}
        <div className="mb-4">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          >
            <path d="M12 22C12 22 12 14 12 12M12 12C12 12 17 12 19 9C21 6 20 2 20 2C20 2 16 3 13 5C11 7 12 12 12 12ZM12 12C12 12 7 12 5 9C3 6 4 2 4 2C4 2 8 3 11 5C13 7 12 12 12 12Z" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-4xl leading-tight font-normal text-white tracking-tight">
          Discover
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-white font-light max-w-[240px]">
          The Right Herbal Expert For You
        </p>

        {/* Action Button */}
        <button
          onClick={() => console.log("Connecting...")}
          className="mt-6 max-w-sm w-full rounded-full bg-[#b0874b] py-1.5 text-white transition-all hover:brightness-110 active:scale-95 shadow-lg"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export { PromotionVerticalBanner };
