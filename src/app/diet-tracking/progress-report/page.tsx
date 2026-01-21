"use client";

import DietChartTrackingTable from "@/components/molecule/DietChartTrackingTable";

export default function ProgressReportPage() {
  return (
    <section className="bg-white navbar-fixer min-h-screen py-12 pb-32">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* Heading */}
    
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] leading-tight max-w-[90%] sm:max-w-3xl">
          Diet Tracking
          </h1>

          <DietChartTrackingTable />
     
      </div>
    </section>
  );
}
