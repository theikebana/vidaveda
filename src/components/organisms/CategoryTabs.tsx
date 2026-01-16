"use client";

import React from "react";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  totalCount?: number;
  className?: string;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
  totalCount,
  className = "",
}: CategoryTabsProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Title */}
        <h2 className="text-[#14532D] text-2xl sm:text-3xl lg:text-4xl font-unbounded font-light">
          Category
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
            {categories.map((category) => {
              const isActive =
                category.toLowerCase() === activeCategory.toLowerCase();

              return (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`
                    relative
                    text-sm
                    transition-colors duration-300 cursor-pointer font-medium
                    ${isActive
                      ? "text-[#C0964F]"
                      : "text-gray-600 hover:text-[#14532D]"
                    }
                  `}
                >
                  {category}

                  {/* Active underline only */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-[4px]
                        h-[2px]
                        w-full
                        bg-[#C0964F]
                      "
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Count */}
          {totalCount !== undefined && (
            <span className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
              ({totalCount})
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
