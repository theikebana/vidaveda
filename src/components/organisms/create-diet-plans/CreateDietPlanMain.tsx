"use client";
import { useState } from "react";
import DietaryRestrictions from "./steps/DietaryRestrictions";
import GoalsAndPreferences from "./steps/GoalsAndPreferences";
import ChooseYourDietPlan from "./steps/ChooseYourDietPlan";
import CreateAiDietPlan from "./steps/CreateAiDietPlan/CreateAiDietPlan";
import HealthExpert from "./steps/HealthExperts";
import DietitionDetails from "./steps/DietitionDetails";
import CheckOut from "./steps/CheckOut";
import ConfirmationScreen from "./steps/ConfirmationScreen";

const steps = [

  { label: "Goals & Preferences", component: GoalsAndPreferences },
  { label: "Dietary Restrictions", component: DietaryRestrictions },
  { label: "Choose Your Diet Plan", component: ChooseYourDietPlan },
  { label: "Create AI Diet Plan", component: CreateAiDietPlan },
  { label: "Helath Expert", component: HealthExpert },
  { label: "Dietition Details", component: DietitionDetails },
  { label: "Check Out", component: CheckOut },
  { label: "Confirmation", component: ConfirmationScreen },

];

const CreateDietPlanMain = () => {
  const [activeStep, setActiveStep] = useState(0); // ✅ FIX

  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [preference, setPreference] = useState("");
  const [healthIssues, setHealthIssues] = useState<string[]>([]);

  const StepComponent = steps[activeStep]?.component; // ✅ SAFE

  return (
    <div className="relative max-w-[1440px]  mx-auto">

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
                className={`w-3 h-3 rounded-full border-2 border-white ${activeStep === idx ? "bg-white" : ""
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
      <div className="bg-[#F8FAF7]  rounded-4xl border border-[#CEDCC7] p-8 pt-12">
        {StepComponent && (
          <StepComponent
            selectedAllergies={selectedAllergies}
            setSelectedAllergies={setSelectedAllergies}
            preference={preference}
            setPreference={setPreference}
            healthIssues={healthIssues}
            setHealthIssues={setHealthIssues} goal={""} setGoal={function (v: string): void {
              throw new Error("Function not implemented.");
            }} userData={{
              name: "",
              email: "",
              height: "",
              weight: "",
              gender: "",
              age: ""
            }} setUserData={function (v: any): void {
              throw new Error("Function not implemented.");
            }} />
        )}

        {/* Navigation */}
       
      </div>
    </div>
  );
};

export default CreateDietPlanMain;
