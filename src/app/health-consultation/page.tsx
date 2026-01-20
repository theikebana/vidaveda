"use client";

import { useState, useMemo, useEffect } from "react";
import HeroSectionPages from "@/components/organisms/HeroSectionPages";
import RecomendedDoctorCard from "@/components/molecule/RecomendedDoctorCard";
import Pagination from "@/components/molecule/Pagination"; // Importing your new component
import { doctorsData } from "@/data/health-consultation";
import { ChevronDown } from "lucide-react";

export default function HealthConsultationPage() {
  // State for filters
  const [sortBy, setSortBy] = useState("A-Z");
  const [expFilter, setExpFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");

  // State for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjust based on your design preference (e.g., 8 or 12)

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, expFilter, ratingFilter]);

  // Logic to filter and sort doctors
  const filteredDoctors = useMemo(() => {
    let list = [...doctorsData];

    if (expFilter !== "All") {
      const years = parseInt(expFilter);
      list = list.filter((doc) => parseInt(doc.experience) >= years);
    }

    if (ratingFilter !== "All") {
      const minRating = parseFloat(ratingFilter);
      list = list.filter((doc) => doc.rating >= minRating);
    }

    if (sortBy === "A-Z") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Z-A") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [sortBy, expFilter, ratingFilter]);

  // Pagination Calculations
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="bg-white navbar-fixer ">
      <HeroSectionPages
        subtitle="Health Consultation"
        title="Connect with Holistic Health Experts"
      />

      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-10">
        {/* Header and Filter Bar */}
        <div className="flex flex-col lg:flex-row md:items-center justify-between mb-10 gap-4">
          <h3 className="text-[#14532D] text-xl text-center lg:text-left   font-unbounded">
            Recommended doctor
          </h3>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
            <span className="text-[#14532D] font-medium mr-1 hidden sm:inline-block">
              Sort by
            </span>

            {/* Rating Dropdown */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent border border-[#A6833D] rounded-full sm:text-sm text-xs px-5 py-1 pr-10 text-[#A6833D] focus:outline-none cursor-pointer"
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
              >
                <option value="All">Rating - All</option>
                <option value="4">4.0+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A6833D] pointer-events-none" />
            </div>

            {/* Experience Dropdown */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent border border-[#A6833D] rounded-full sm:text-sm text-xs px-5 py-1 pr-10 text-[#A6833D] focus:outline-none cursor-pointer"
                value={expFilter}
                onChange={(e) => setExpFilter(e.target.value)}
              >
                <option value="All">Experience - All</option>
                <option value="5">5+ Years</option>
                <option value="10">10+ Years</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A6833D] pointer-events-none" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                className="appearance-none bg-transparent border border-[#A6833D] rounded-full sm:text-sm text-xs px-5 py-1 pr-10 text-[#A6833D] focus:outline-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="A-Z">Alphabetical Order A-Z</option>
                <option value="Z-A">Alphabetical Order Z-A</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A6833D] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 lg:gap-5 gap-3">
          {currentDoctors.length > 0 ? (
            currentDoctors.map((doctor) => (
              <RecomendedDoctorCard
                key={doctor.id}
                name={doctor.name}
                experience={doctor.experience}
                clinicName={doctor.clinicName}
                clinicAddress={doctor.clinicAddress}
                rating={doctor.rating}
                imageUrl={doctor.imageUrl}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No doctors found matching these filters.
            </div>
          )}
        </div>

        {/* Pagination Section */}
        {filteredDoctors.length > itemsPerPage && (
          <div className="mt-16">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 400, behavior: "smooth" }); // Optional: scroll up on page change
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
