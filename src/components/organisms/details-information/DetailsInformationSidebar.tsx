"use client";

import React from "react";
import { Moon } from "lucide-react";

interface DetailsInformationSidebarProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function DetailsInformationSidebar({
  tabs,
  activeTab,
  onTabChange,
}: DetailsInformationSidebarProps) {
  return (
    <div className="w-full lg:w-[320px] sticky top-0 flex-shrink-0 rounded-2xl border border-[#D1D5DB] bg-[#F9FBF9] h-fit overflow-hidden">
      {/* Header */}
      <div className="bg-[#0E311A] p-6 text-center">
        <h3 className="text-white text-lg font-medium tracking-wide">
          Details Information
        </h3>
      </div>

      {/* Tabs */}
      <nav className="flex flex-col gap-3 p-6">
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
