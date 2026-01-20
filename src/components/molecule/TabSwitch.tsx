"use client";

import React, { useState, useEffect, useRef } from "react";

interface TabSwitchProps {
  tabs: string[];
  initialTab?: string;
  activeTab?: string; // Controlled
  onTabChange?: (tab: string) => void;
  className?: string;
  outerPadding?: number; // horizontal padding from container edges
  verticalGap?: number; // vertical gap between indicator and button
}

const TabSwitch = ({
  tabs,
  initialTab,
  activeTab: controlledActiveTab,
  onTabChange,
  className = "",
  outerPadding = 6, // default 8px
  verticalGap = 8, // default 8px gap top & bottom
}: TabSwitchProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState<string>(
    initialTab ?? tabs[0] ?? ""
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  });

  const activeTab = controlledActiveTab ?? internalActiveTab;

  useEffect(() => {
    if (containerRef.current) {
      const buttons = Array.from(containerRef.current.children).filter(
        (el) => el.tagName === "BUTTON"
      ) as HTMLButtonElement[];

      const activeIndex = tabs.findIndex(
        (tab) => tab.toLowerCase() === activeTab.toLowerCase()
      );
      const activeButton = buttons[activeIndex];
      if (activeButton) {
        const buttonHeight = activeButton.offsetHeight;
        const buttonTop = activeButton.offsetTop;

        setIndicatorStyle({
          left: activeButton.offsetLeft + outerPadding,
          width: activeButton.offsetWidth - outerPadding * 2,
          top: buttonTop + verticalGap / 2, // top offset for vertical gap
          height: buttonHeight - verticalGap, // reduce height by vertical gap
        });
      }
    }
  }, [activeTab, tabs, outerPadding, verticalGap]);

  const handleTabClick = (tab: string) => {
    if (!controlledActiveTab) setInternalActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  if (tabs.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex bg-[#F8FAF7] border border-[#B4C3B4] rounded-full overflow-hidden ${className}`}
    >
      {/* Active Indicator */}
      <div
        className="absolute bg-[#14532D] rounded-full transition-all duration-300"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
          top: indicatorStyle.top,
          height: indicatorStyle.height,
        }}
      />

      {/* Tab Buttons */}
      {tabs.map((tab) => {
        const isActive = tab.toLowerCase() === activeTab.toLowerCase();
        return (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative z-10 flex-1 py-3 px-8  font-medium cursor-pointer transition-colors duration-300 ${
              isActive ? "text-white" : "text-[#000] hover:text-[#14532D]"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default TabSwitch;
