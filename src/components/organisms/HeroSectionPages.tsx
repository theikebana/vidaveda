"use client";

import { PrimarySearchBar } from "../molecule/PrimarySearchBar";
import { SearchBar } from "../SearchBar";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function HeroSectionPages({
  title,
  subtitle,
  className = "bg-[#F6F8F5]",
}: HeroSectionProps) {
  return (
    <section
      className={`w-full text-[#C0964F]    py-16 sm:py-20 lg:py-24  overflow-hidden 
      rounded-b-[60px] sm:rounded-b-[100px] lg:rounded-b-[139px] 
      ${className}`}
    >
      <div
        className="
          mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
          flex flex-col items-center relative
          gap-8 sm:gap-10
       
        "
      >
        {/* Hero Text */}
        <div className="flex flex-col gap-2 items-center text-center w-full">
          {subtitle && (
            <p className="text-base sm:text-lg lg:text-2xl text-[#7a4e2d] font-satisfy">
              {subtitle}
            </p>
          )}

          <h1
            className="
              text-2xl sm:text-3xl lg:text-[40px]
              font-unbounded font-light
              text-[#14532d]
              leading-tight
              max-w-full sm:max-w-[90%] lg:max-w-7xl
            "
          >
            {title}
          </h1>
        </div>

        {/* Search */}
        <div className="w-full max-w-full sm:max-w-4xl lg:max-w-7xl">
          <PrimarySearchBar />
        </div>
      </div>
    </section>
  );
}
