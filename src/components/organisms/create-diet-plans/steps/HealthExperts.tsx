"use client";

import RecomendedDoctorCard from "@/components/molecule/RecomendedDoctorCard";
import { useState } from "react";
import { doctorsData } from "@/data/health-consultation";

interface Props {
  selectedAllergies: string[];
  setSelectedAllergies: (v: string[]) => void;
  preference: string;
  setPreference: (v: string) => void;
  healthIssues: string[];
  setHealthIssues: (v: string[]) => void;
}

const HealthExpert = ({
  selectedAllergies,
  setSelectedAllergies,
  preference,
  setPreference,
  healthIssues,
  setHealthIssues,
}: Props) => {
  const toggle = (item: string, state: string[], setState: any) => {
    setState(
      state.includes(item)
        ? state.filter((i) => i !== item)
        : [...state, item]
    );
  };

  /* ===== LOCAL STATES FOR INPUTS ===== */
  const [healthExplanation, setHealthExplanation] = useState("");
  const [dislikedFoods, setDislikedFoods] = useState("");

  /* ===== LOCAL PILL ===== */
  const Pill = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-1.5 rounded-full border font-unbounded !font-light cursor-pointer transition-all duration-200
        ${active
          ? "border-[#0E311A] bg-green-50 text-[#0E311A]"
          : "border-gray-400 bg-white text-gray-700 hover:border-gray-600"
        }`}
    >
      <span
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${active ? "border-green-800" : "border-gray-400"}`}
      >
        {active && (
          <span className="w-2.5 h-2.5 bg-green-800 rounded-full" />
        )}
      </span>
      <span className="text-base">{label}</span>
    </button>
  );

  return (
    <>
      <div>

        <h3 className="text-xl font-unbounded text-[#0E311A] mb-">
          Connect with Holistic Health Experts
        </h3>
        <p className="text text-[#0B0B0B] font-light">Choose with who you like to sechule session</p>

      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 lg:gap-5 gap-3 mt-12">
        {doctorsData.length > 0 ? (
          doctorsData.map((doctor) => (
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

    </>
  );
};

export default HealthExpert;
