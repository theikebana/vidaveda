"use client";

import { useState } from "react";

interface Props {
  selectedAllergies: string[];
  setSelectedAllergies: (v: string[]) => void;
  preference: string;
  setPreference: (v: string) => void;
  healthIssues: string[];
  setHealthIssues: (v: string[]) => void;
}

const DietaryRestrictions = ({
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
        ${
          active
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
      <h3 className="text-xl font-unbounded text-[#0E311A] mb-8">
        Dietary Restrictions
      </h3>

      {/* Food Allergies */}
      <section className="mb-5">
        <h3 className="text-xl font-medium text-[#060606] mb-2">
          Food Allergies
        </h3>
        <div className="flex flex-wrap gap-4">
          {["Nuts", "Dairy", "Eggs", "Gluten"].map((item) => (
            <Pill
              key={item}
              label={item}
              active={selectedAllergies.includes(item)}
              onClick={() =>
                toggle(item, selectedAllergies, setSelectedAllergies)
              }
            />
          ))}
        </div>
      </section>

      {/* Diet Preference */}
      <section className="mb-5">
        <h3 className="text-xl font-medium text-[#060606] mb-4">
          Diet Preference
        </h3>
        <div className="flex gap-4">
          {["Vegetarian", "Non-Vegetarian"].map((item) => (
            <Pill
              key={item}
              label={item}
              active={preference === item}
              onClick={() => setPreference(item)}
            />
          ))}
        </div>
      </section>

      {/* Health Issues */}
      <section className="mb-6">
        <h3 className="text-xl font-medium text-[#060606] mb-4">
          Health Issues
        </h3>
        <div className="flex flex-wrap gap-4">
          {["Diabetes", "BP", "Heart"].map((item) => (
            <Pill
              key={item}
              label={item}
              active={healthIssues.includes(item)}
              onClick={() =>
                toggle(item, healthIssues, setHealthIssues)
              }
            />
          ))}
        </div>
      </section>

      {/* Explain Health Issue */}
      <section className="mb-6">
        <h3 className="font-medium text-gray-500 mb-2">
          Explain about health issue
        </h3>
        <input
          type="text"
          value={healthExplanation}
          onChange={(e) => setHealthExplanation(e.target.value)}
          placeholder="Anxiety since 4 years"
          className="w-full border-b border-gray-300 px-4 py-3 text-black outline-none focus:border-[#0E311A]"
        />
      </section>

      {/* Foods to Avoid */}
      <section>
        <h3 className="font-medium text-gray-500 mb-2">
          Foods You Dislike or Want to Avoid
        </h3>
        <input
          type="text"
          value={dislikedFoods}
          onChange={(e) => setDislikedFoods(e.target.value)}
          placeholder="Anxiety since 4 years"
          className="w-full border-b border-gray-300 px-4 py-3 text-black outline-none focus:border-[#0E311A]"
        />
      </section>
    </>
  );
};

export default DietaryRestrictions;
