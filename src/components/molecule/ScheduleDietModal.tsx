"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

const ScheduleDietModal = () => {
  const [selections, setSelections] = useState<{ morning: string; dinner: string }>({
    morning: "",
    dinner: "",
  });

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-3xl overflow-hidden relative">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-3 border-b border-[#86A79264]">
          <h2 className="text-2xl text-[#0B0B0B] font-unbounded">
            Schedule Your Meal
          </h2>
          <button className="text-gray-400 hover:text-gray-600 transition">
            <X size={28} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row relative min-h-[450px]">
          
          {/* Form Side */}
          <div className="flex-1 p-8 space-y-8 z-10 bg-white/80 md:bg-transparent">
            
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-[8px] text-white font-bold">LOGO</span>
              </div>
              <span className="font-bold text-[#0B0B0B] text-lg">
                O Chicken
              </span>
            </div>

            {/* Meal Sections */}
            {[
              { id: "morning", label: "Morning – 9:00 am" },
              { id: "dinner", label: "Dinner – 7:30 pm" },
            ].map((meal) => (
              <div key={meal.id} className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B0B0B] capitalize">
                    {meal.label}
                  </h3>
                  <p className="text-[#1a4d2e] text-sm font-medium">
                    Oats Meal Included : Dates & Honey
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-3 border border-black rounded-full px-4 py-2 cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name={meal.id}
                      className="w-5 h-5 accent-[#1a4d2e]"
                      onChange={() =>
                        setSelections({ ...selections, [meal.id]: "one-time" })
                      }
                    />
                    <span className="text-gray-700 font-medium">
                      One Time – ₹120
                    </span>
                  </label>

                  <label className="flex items-center gap-3 border border-black rounded-full px-4 py-2 cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name={meal.id}
                      className="w-5 h-5 accent-[#1a4d2e]"
                      onChange={() =>
                        setSelections({ ...selections, [meal.id]: "week" })
                      }
                    />
                    <span className="text-gray-700 font-medium">
                      Week – ₹600
                    </span>
                  </label>
                </div>
              </div>
            ))}

            {/* CTA */}
            <button className="bg-[#1a4d2e] text-white px-12 py-3 rounded-full font-semibold text-lg hover:bg-[#143b24] transition shadow-lg">
              Pay
            </button>
          </div>

          {/* Image Side */}
          <div className="hidden md:block absolute right-0 bottom-0 w-1/2 h-full pointer-events-none">
            <img
              src="/images/section-images/diet-select-modal.png"
              alt="Healthcare professionals"
              className="object-contain object-bottom h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDietModal;
