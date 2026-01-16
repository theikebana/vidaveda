"use client";

import React from "react";
import DetailsInformationSidebar from "./DetailsInformationSidebar";

interface TabContent {
  [key: string]: React.ReactNode;
}

interface DetailsInformationProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabContent: TabContent;
}

export default function DetailsInformation({
  tabs,
  activeTab,
  onTabChange,
  tabContent,
}: DetailsInformationProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      {/* Left Sidebar */}
      <DetailsInformationSidebar
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />

      {/* Right Content */}
      <div className="flex-1 min-w-0">
        {tabContent[activeTab] || (
          <div className="bg-white rounded-2xl border border-[#14532D]/20 p-6 lg:p-8">
            <p className="text-gray-600">
              Content for {activeTab} coming soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
