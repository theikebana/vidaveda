"use client";

import React from "react";
import { Moon } from "lucide-react";
import NextLink from "next/link";

interface CategoryFoodListingSidebarProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function CategoryFoodListingSidebar({
  tabs,
  activeTab,
  onTabChange,
}: CategoryFoodListingSidebarProps) {
  return (
    <div
      className="
        w-full
        flex
        flex-col
        rounded-2xl
        border border-[#D1D5DB]
        bg-[#F9FBF9]
        overflow-hidden
      "
      /* 👇 THIS is the key */
      style={{ maxHeight: "calc(100vh - 200px)" }}
    >
      {/* Header (fixed height ~72px) */}
      <div className="bg-[#0E311A] p-6 flex items-center justify-between shrink-0">
        <h3 className="text-white text-lg font-medium tracking-wide">
          Beverages
        </h3>

        <NextLink
          href="/change"
          className="text-[#C0964F] font-medium tracking-wide hover:underline"
        >
          Change
        </NextLink>
      </div>

      {/* Tabs (scrollable area) */}
      <nav
        className="
          flex-1
          overflow-y-auto
          p-6
          flex
          flex-col
          gap-3
        "
      >
        {tabs.map((tab) => {
          const isActive = tab.toLowerCase() === activeTab.toLowerCase();

          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`
                flex items-center gap-4
                px-5 py-3.5
                rounded-full border
                text-left cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "bg-[#BC9454] border-[#BC9454] text-white shadow-sm"
                    : "bg-white border-[#E2E8F0] text-[#1A1A1A] hover:bg-[#FDF9F3] hover:border-[#BC9454]"
                }
              `}
            >
              <Moon
                size={18}
                className={isActive ? "text-white" : "text-[#1A1A1A]"}
              />
              <span className="text-sm lg:text-base leading-none">
                {tab}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
