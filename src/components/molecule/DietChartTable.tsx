"use client";
import React from "react";

/* ================= TYPES ================= */
type DietRow = {
  food: string;
  ph: number;
  serving: string;
  wt: number;
  gi: number;
  gl: number;
  cals: number;
  carbs: number;
  fats: number;
  prots: number;
  sod: number;
  pot: number;
};

type Header = {
  key: keyof DietRow;
  label: string;
  highlight?: boolean; // optional now
};

type Meal = {
  title: string;
  time: string;
  data: DietRow[];
};

/* ================= HEADERS ================= */
const HEADERS: Header[] = [
  { key: "food", label: "Food" },
  { key: "ph", label: "pH" },
  { key: "serving", label: "Serving" },
  { key: "wt", label: "Wt" },
  { key: "gi", label: "GI" },
  { key: "gl", label: "GL" },
  { key: "cals", label: "Cals" },
  { key: "carbs", label: "Carbs", highlight: true },
  { key: "fats", label: "Fats", highlight: true },
  { key: "prots", label: "Prots", highlight: true },
  { key: "sod", label: "Sod" },
  { key: "pot", label: "Pot" },
];

/* ================= DATA ================= */
const commonData: DietRow[] = [
  {
    food: "Oats",
    ph: 6.8,
    serving: "01",
    wt: 30,
    gi: 30,
    gl: 2.1,
    cals: 352,
    carbs: 6,
    fats: 6,
    prots: 13.5,
    sod: 40,
    pot: 350,
  },
  {
    food: "Dates",
    ph: 6.8,
    serving: "01",
    wt: 30,
    gi: 30,
    gl: 2.1,
    cals: 352,
    carbs: 6,
    fats: 6,
    prots: 13.5,
    sod: 40,
    pot: 350,
  },
];

/* ================= MEALS ================= */
const meals: Meal[] = [
  { title: "Breakfast", time: "8:00 – 9:00 am", data: commonData },
  { title: "Lunch", time: "1:00 – 2:00 pm", data: commonData },
  { title: "Dinner", time: "8:00 – 9:00 pm", data: commonData },
];

/* ================= COMPONENT ================= */
export default function DietChartTable() {
  return (
    <div className=" space-y-12">
      {meals.map((meal, idx) => (
        <div key={idx}>
          {/* MEAL TITLE */}
          <div className="mb-4">
            <h2 className="text-[#1a4d2e] font-semibold text-lg">{meal.title}</h2>
            <p className="text-sm text-gray-500">{meal.time}</p>
          </div>

          <div className="flex border border-[#14532D]/50 rounded-2xl overflow-hidden">
            {/* TABLE */}
            <div className="flex-1 overflow-x-auto p-4">
              <table className="w-full border-separate  border-spacing-y-1 text-sm text-black">
                <thead>
                  <tr>
                    {HEADERS.map((h) => (
                      <th key={h.key} className="text-left font-medium px-4 py-3">
                        {h.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {meal.data.map((row, r) => (
                    <tr key={r}>
                      {HEADERS.map((h, c) => (
                        <td
                          key={h.key}
                          className={`
                            bg-[#DDE5DC]
                            px-4 py-3
                            ${c === 0 ? "rounded-l-lg font-medium" : ""}
                            ${c === HEADERS.length - 1 ? "rounded-r-lg" : ""}
                            ${h.highlight ? "font-semibold text-[#1a4d2e]" : ""}
                          `}
                        >
                          {row[h.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SIDEBAR */}
            <div className="w-64 border-l border-[#14532D]/50 p-6 flex flex-col gap-2">
              <div className="text-center">
                <p className="font-bold text-[#0B0B0B]">Get Your Diet</p>
                <span className="text-sm text-[#C0964F]">( Optional )</span>
              </div>

              <button className="bg-[#1a4d2e] text-white rounded-lg py-2">O Chicken</button>
              <button className="bg-[#1a4d2e] text-white rounded-lg py-2">Dynamic Diet</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
