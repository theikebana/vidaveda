"use client";
import React, { useState } from "react";
import DietaryRestrictions from "./steps/DietaryRestrictions";
import GoalsAndPreferences from "./steps/GoalsAndPreferences";

const steps = [
  { label: "Dietary Restrictions", component: DietaryRestrictions },
  { label: "Goals & Preferences", component: GoalsAndPreferences },
];

const CreateDietPlanMain = () => {
  const [activeStep, setActiveStep] = useState(0); // ✅ FIX

  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [preference, setPreference] = useState("");
  const [healthIssues, setHealthIssues] = useState<string[]>([]);

  const StepComponent = steps[activeStep]?.component; // ✅ SAFE

  return (
    <div className="relative max-w-6xl mx-auto">

      {/* ===== FLOATING TABS ===== */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[90%] z-10">
        <div className="bg-[#C0964F] rounded-full py-4 px-6 flex justify-between items-center text-white text-sm font-medium shadow-md">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={`w-3 h-3 rounded-full border-2 border-white ${
                  activeStep === idx ? "bg-white" : ""
                }`}
              />
              <span
                className={activeStep === idx ? "opacity-100" : "opacity-70"}
              >
                {step.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== MAIN CARD ===== */}
      <div className="bg-[#F8FAF7] rounded-4xl border border-[#CEDCC7] p-8 pt-24">
        {StepComponent && (
          <StepComponent
                      selectedAllergies={selectedAllergies}
                      setSelectedAllergies={setSelectedAllergies}
                      preference={preference}
                      setPreference={setPreference}
                      healthIssues={healthIssues}
                      setHealthIssues={setHealthIssues} goal={""} setGoal={function (v: string): void {
                          throw new Error("Function not implemented.");
                      } } userData={{
                          name: "",
                          email: "",
                          height: "",
                          weight: "",
                          gender: "",
                          age: ""
                      }} setUserData={function (v: any): void {
                          throw new Error("Function not implemented.");
                      } }          />
        )}

        {/* Navigation */}
        <div className="mt-12 flex justify-start">
          <button
            onClick={() =>
              setActiveStep((prev) =>
                Math.min(prev + 1, steps.length - 1)
              )
            }
            className="bg-[#1a4d2e] text-white px-12 py-3 rounded-full cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDietPlanMain;
