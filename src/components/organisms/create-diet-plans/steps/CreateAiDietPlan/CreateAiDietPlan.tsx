"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react"; // Assuming lucide-react for icons
import DietChartTable from "@/components/molecule/DietChartTable";
import ScheduleDietModal from "@/components/molecule/ScheduleDietModal";

const CreateAiDietPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<"recommended" | "dietitian">("recommended");

  return (
    <>
    <div className="max-w-full mx-auto  bg-[#f9faf7] rounded-3xl">
      <h2 className="text-2xl font-semibold text-[#1a3d2c] mb-10 px-2">
       Diet Chart
      </h2>

      <DietChartTable />

      <div className="mt-12 flex justify-start">
          <button
          
            className="bg-[#1a4d2e] text-white px-12 py-3 rounded-full cursor-pointer"
          >
           Complete
          </button>
        </div>
    </div>

    <ScheduleDietModal />
    </>
  );
};

export default CreateAiDietPlan;