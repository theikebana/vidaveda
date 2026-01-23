"use client";

import { useEffect, useState } from "react";
import { Scale, Dumbbell, TrendingUp } from "lucide-react";

interface UserData {
  name: string;
  email: string;
  height: string;
  weight: string;
  gender: string;
  age: string;
}

interface Props {
  goal: string;
  setGoal: (v: string) => void;
  userData: UserData;
  setUserData: (v: UserData) => void;
}

const GoalsAndPreferences = ({
  goal,
  setGoal,
  userData,
  setUserData,
}: Props) => {
  // ✅ LOCAL STATE (fixes typing issue)
  const [localData, setLocalData] = useState<UserData>({
    name: "",
    email: "",
    height: "",
    weight: "",
    gender: "",
    age: "",
  });

  // ✅ Sync parent → local
  useEffect(() => {
    setLocalData(userData);
  }, [userData]);

  // ✅ Update both local + parent
  const handleInputChange = (field: keyof UserData, value: string) => {
    setLocalData((prev) => {
      const updated = { ...prev, [field]: value };
      setUserData(updated);
      return updated;
    });
  };

  /* ===== GOAL PILL ===== */
  const GoalPill = ({
    label,
    active,
    onClick,
    icon: Icon,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
    icon: any;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 px-5 py-2 rounded-full border font-unbounded !font-light transition-all duration-200
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

      <Icon size={18} className={active ? "text-green-800" : "text-gray-500"} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="w-full">
      <h3 className="text-2xl font-unbounded text-[#0E311A] mb-2">
        Goals & Preferences
      </h3>
      <p className="text-gray-600 mb-10">Tell us about your health goals</p>

      {/* Goal Selection */}
      <section className="mb-12">
        <h4 className="text-lg font-medium text-[#060606] mb-6">
          What's your primary goal?
        </h4>
        <div className="flex flex-wrap gap-4">
          <GoalPill
            label="Lose Weight"
            active={goal === "lose"}
            onClick={() => setGoal("lose")}
            icon={Scale}
          />
          <GoalPill
            label="Maintain Weight"
            active={goal === "maintain"}
            onClick={() => setGoal("maintain")}
            icon={Dumbbell}
          />
          <GoalPill
            label="Weight Gain"
            active={goal === "gain"}
            onClick={() => setGoal("gain")}
            icon={TrendingUp}
          />
        </div>
      </section>

      {/* Inputs */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <Input
          label="Name"
          value={localData.name}
          placeholder="Mohit"
          onChange={(v) => handleInputChange("name", v)}
        />

        <Input
          label="Email"
          value={localData.email}
          placeholder="example@mail.com"
          onChange={(v) => handleInputChange("email", v)}
        />

        <Input
          label="Current Height (cm)"
          value={localData.height}
          placeholder="172"
          onChange={(v) => handleInputChange("height", v)}
        />

        <Input
          label="Current Weight (kg)"
          value={localData.weight}
          placeholder="70"
          onChange={(v) => handleInputChange("weight", v)}
        />

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 mb-1">
            Gender
          </label>
          <select
            value={localData.gender}
            onChange={(e) =>
              handleInputChange("gender", e.target.value)
            }
            className="w-full border-b border-gray-300 py-3 bg-transparent text-black font-medium outline-none focus:border-[#0E311A]"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <Input
          label="Age"
          value={localData.age}
          placeholder="25"
          onChange={(v) => handleInputChange("age", v)}
        />
      </section>

      <div className="max-w-sm mt-12">
        <button className="w-fit bg-[#14532D] text-white py-3 px-12 rounded-full hover:bg-[#142e20] transition-all active:scale-[0.98]">
          Next
        </button>
      </div>
    </div>
  );
};

/* ===== INPUT ===== */
const Input = ({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
}) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-500 mb-1">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border-b border-gray-300 py-3 text-black font-medium outline-none focus:border-[#0E311A] bg-transparent"
    />
  </div>
);

export default GoalsAndPreferences;
