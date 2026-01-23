"use client";

import { useState, useMemo, useEffect } from "react";
import Pagination from "@/components/molecule/Pagination";
import TabSwitch from "@/components/molecule/TabSwitch";
import ConsultationRow from "@/components/molecule/ConsultationRow";

// Example consultation data
import { consultationsData } from "@/data/appointments";

export default function AppointmentsPage() {
  const [currentTab, setCurrentTab] = useState<"upcoming" | "history">(
    "upcoming"
  );

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter consultations by tab
  const filteredConsultations = useMemo(() => {
    return consultationsData.filter(
      (c) => c.type === currentTab
    );
  }, [currentTab]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredConsultations.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentConsultations = filteredConsultations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab]);

  return (
    <div className="bg-white navbar-fixer">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col gap-8 items-center text-center w-full">
          <div className="flex flex-col gap-2 items-center text-center w-full">
            <p className="text-base sm:text-lg text-[#7a4e2d] font-satisfy">
              Overview
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] leading-tight max-w-full sm:max-w-[90%] lg:max-w-7xl">
              Appointments
            </h1>
          </div>

          {/* Tabs */}
          <TabSwitch
            tabs={["Upcoming", "History"]}
            activeTab={currentTab === "upcoming" ? "Upcoming" : "History"}
            onTabChange={(tab) => setCurrentTab(tab.toLowerCase() as "upcoming" | "history")}
          />

        </div>

        {/* Consultation Rows */}
        <div className="mt-8 flex flex-col gap-2 ">
          {currentConsultations.map((consultation) => (
            <ConsultationRow
              key={consultation.id}
              title={consultation.title}
              date={consultation.date}
              status={consultation.status}
              isPaid={consultation.isPaid}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
