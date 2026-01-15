"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface EcosystemCardProps {
  title: string;
  href: string; // 👈 destination page
}

export const EcosystemCard: React.FC<EcosystemCardProps> = ({
  title,
  href,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} className="block h-full">
      <div
        className="
          group relative flex flex-col gap-4 items-center justify-between
          h-full rounded-2xl p-6 cursor-pointer
          bg-[#B8CDC1]/12 border border-[#B8CDC1] text-[#0E311A]
          hover:bg-[#14532d] hover:text-white hover:shadow-lg
          transition-all duration-500 backdrop-blur-md
        "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Leaf Icon */}
        <div className="w-16 h-16 relative">
          {/* Inactive Leaf */}
          <Image
            src="/images/cards/leave-inactive.png"
            alt="Inactive Leaf"
            width={64}
            height={64}
            className={`
              absolute inset-0 object-contain
              transition-opacity duration-500
              ${hovered ? "opacity-0" : "opacity-100"}
            `}
          />

          {/* Active Leaf */}
          <Image
            src="/images/cards/leave-active.png"
            alt="Active Leaf"
            width={64}
            height={64}
            className={`
              absolute inset-0 object-contain
              transition-opacity duration-500
              ${hovered ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        {/* Title & Arrow */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-md text-center font-light font-unbounded transition-colors duration-500">
            {title}
          </h3>
          <FiArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
