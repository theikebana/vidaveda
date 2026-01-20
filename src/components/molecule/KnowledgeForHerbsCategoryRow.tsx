"use client";

import Image from "next/image";
import Link from "next/link";

interface KnowledgeForHerbsCategoryRowProps {
  name: string;
  category: string;
  description: string;
  iconUrl?: string;
  href?: string;
  isActive?: boolean;
}

const KnowledgeForHerbsCategoryRow = ({
  name,
  category,
  description,
  iconUrl = "/icons/herb-icon.svg",
  href = "#",
  isActive = false,
}: KnowledgeForHerbsCategoryRowProps) => {
  return (
    <div
    className="
      flex flex-col sm:flex-row sm:items-center sm:justify-between
      gap-4 sm:gap-6
      p-4 sm:p-5 lg:p-6
      bg-white
      border border-[#0E311A]/32 rounded-2xl
  
      transition-colors duration-500 ease-in-out
      hover:bg-[#F6F8F5]
      hover:border-[#14532D]
      hover:border-none
    "
  >
  
  
      {/* Left Content */}
      <div className="flex items-start gap-4 sm:gap-6 flex-1">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#14532D] flex items-center justify-center">
          <Image
            src={iconUrl}
            alt={name}
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
          />
        </div>

        {/* Text Content (STACKED) */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <h3
            className="
              text-[#0E311A]
              text-md sm:text-lg lg:text-xl
              font-unbounded
              font-light
            "
          >
            {name}
          </h3>

          <span
            className="
              inline-block
              px-3 py-1
              bg-[#AC823B]
              text-white
              text-xs sm:text-sm
              rounded-full
              w-fit
              font-light
            "
          >
            {category}
          </span>

          <p
            className="
              text-[#000]
              text-sm sm:text-base
              leading-relaxed
            "
          >
            {description}
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-shrink-0">
  <Link
    href={href}
    className="
      flex items-center gap-2
      text-[#14532D]
      text-sm sm:text-base
      font-medium
      group
      cursor-pointer
      transition-all duration-500 ease-in-out
      hover:gap-3
    "
  >
    <span>View Details</span>
    <Image
      src="/icons/arrow-icon.svg"
      alt="Arrow"
      width={24}
      height={24}
      className="
        w-5 h-5
        transition-transform duration-300 ease-out
        group-hover:translate-x-1
      "
    />
  </Link>
</div>

    </div>
  );
};

export default KnowledgeForHerbsCategoryRow;
