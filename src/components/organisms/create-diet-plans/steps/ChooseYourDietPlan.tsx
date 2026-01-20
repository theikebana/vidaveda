"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react"; // Assuming lucide-react for icons

const ChooseYourDietPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<"recommended" | "dietitian">("recommended");

  return (
    <div className="max-w-full mx-auto  bg-[#f9faf7] rounded-3xl">
      <h2 className="text-2xl font-semibold text-[#1a3d2c] mb-10 px-2">
        Choose To Proceed Further
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* --- RECOMMENDED PLAN CARD --- */}
        <div
          onClick={() => setSelectedPlan("recommended")}
          className={`relative border rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 bg-[#F8FAF7] ${selectedPlan === "dietitian" ? "border-[#0E311A]/50 " : "border-[#0E311A]/50"
            }`}
        >
          {/* Card Header */}
          <div className="bg-[#1a3d2c] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === "recommended" ? "border-white" : "border-gray-400"}`}>
                {selectedPlan === "recommended" && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
              </div>
              <span className="font-medium">Select</span>
            </div>
            <span className="font-unbounded text-center self-center font-light">Recommended Plan</span>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-unbounded  text-[#1a3d2c] mb-6">Daily Calories: 1600</h3>

            {/* Macros Table */}
            <div className="w-full text-sm space-y-2 mb-6">
              {/* HEADER TABLE */}
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-[#0B0B0B]">
                    <th className="text-left pb-2 font-medium px-4">Macro Nutrients</th>
                    <th className="text-center pb-2 font-medium px-4">% Consume</th>
                    <th className="text-right pb-2 font-medium px-4">By Grams</th>
                  </tr>
                </thead>
              </table>

              {/* BODY TABLE (BORDERED) */}
              <div className="border border-[#0E311A]/50 rounded-2xl overflow-hidden">
                <table className="w-full border-collapse">
                  <tbody className="text-[#1a3d2c] font-medium">
                    <tr className="">
                      <td className="py-4 px-4 text-gray-600">Carbs</td>
                      <td className="py-4 px-4 text-center">50 %</td>
                      <td className="py-4 px-4 text-right">325 Grams</td>
                    </tr>

                    <tr className="">
                      <td className="py-4 px-4 text-gray-600">Fats</td>
                      <td className="py-4 px-4 text-center">38 %</td>
                      <td className="py-4 px-4 text-right">109 Grams</td>
                    </tr>

                    <tr className="">
                      <td className="py-4 px-4 text-gray-600">Proteins</td>
                      <td className="py-4 px-4 text-center">12 %</td>
                      <td className="py-4 px-4 text-right">78 Grams</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* FOOTER TABLE */}
              <table className="w-full border-collapse">
                <tfoot>
                  <tr className="text-[#0B0B0B] font-medium ">
                    <td className="pt-2 px-4 uppercase">Total</td>
                    <td className="pt-2 px-4 text-center">100%</td>
                    <td className="pt-2 px-4 text-right  normal-case text-xs">
                      The Percentage must equal to 100 only
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>


           <div>
             {/* Essentials Grid */}
             <h4 className="text-[#14532D] font-semibold mb-3">Essential</h4>
            <div className="grid grid-cols-4 gap-2 border border-[#0E311A]/50 rounded-2xl p-4 bg-white">
              {[
                { label: "Fiber (Gm)", val: "12" },
                { label: "Glycemic Load", val: "100" },
                { label: "Sodium (Mg)", val: "3000" },
                { label: "Potassium (Mg)", val: "400" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm text-[#0B0B0B] font-medium leading-tight mb-2">{item.label}</span>
                  <span className="text-sm font-bold text-[#1a3d2c]">{item.val}</span>
                </div>
              ))}
            </div>
           </div>
          </div>
        </div>

        {/* --- TALK TO DIETITIAN CARD --- */}
        <div
          onClick={() => setSelectedPlan("dietitian")}
          className={`relative border rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 bg-[#F8FAF7] ${selectedPlan === "dietitian" ? "border-[#0E311A]/50 " : "border-[#0E311A]/50"
            }`}
        >
          {/* Card Header */}
          <div className="bg-[#1a3d2c] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === "dietitian" ? "border-white" : "border-gray-400"}`}>
                {selectedPlan === "dietitian" && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
              </div>
              <span className="font-medium">Select</span>
            </div>

            {/* Vertically center text */}
            <div className="flex-1 flex items-center justify-center">
              <span className="font-unbounded font-light text-center">Talk to a Dietitian</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="relative h-[400px]">
            {/* Dietitian Image */}
            <img
              src="/images/section-images/diet-tracking-doctor.png"
              alt="Dietitian"
              className="absolute -bottom-20 left-0 w-auto h-auto object-contain z-10 border-b border-l border-[#E5E7EB]"
            />

            {/* Content Overlay Box */}
            <div className="absolute right-6 top-2/4 transform -translate-y-1/2 z-20 bg-[#14532D] text-white p-8 rounded-2xl w-[248px] shadow-xl">
              <h3 className="text-xl font-unbounded leading-tight mb-4">
                Tailored Diet Plans For Every Lifestyle
              </h3>
              <ul className="space-y-6 font-light">
                <li className="flex gap-2 items-start ">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <h5 className="font-dm-sans font-medium ">3 Expert Sessions</h5>
                    <p className="text-white text-sm">One-on-one guidance with your dietitian.</p>
                  </div>
                </li>
                <li className="flex gap-2 items-start ">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <h5 className="font-dm-sans font-medium ">Custom Diet Plan</h5>
                    <p className="text-white text-sm">Designed around your lifestyle & food preferences.</p>
                  </div>
                </li>
                <li className="flex gap-2 items-start ">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <h5 className="font-dm-sans font-medium ">Progress Tracking</h5>
                    <p className="text-white text-sm ">Monitor and review your results with expert feedback.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default ChooseYourDietPlan;