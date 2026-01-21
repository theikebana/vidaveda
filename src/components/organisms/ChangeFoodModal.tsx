"use client";

import React, { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { IoCheckmarkCircle } from "react-icons/io5";

/* ================= HEADERS ================= */
const ALT_HEADERS = [
  { key: "food", label: "Food" },
  { key: "ph", label: "PH" },
  { key: "serving", label: "Serving" },
  { key: "wt", label: "Wt" },
  { key: "gi", label: "GI" },
  { key: "gl", label: "GL" },
  { key: "cals", label: "Cals" },
  { key: "carbs", label: "Carbs" },
  { key: "fats", label: "Fats" },
  { key: "prots", label: "Prots" },
  { key: "sod", label: "Sod" },
  { key: "pot", label: "Pot" },
  { key: "action", label: "Action", highlight: true },
] as const;

/* ================= DATA ================= */
const ALTERNATIVES_DATA = [
  { food: "Almonds", ph: 6.8, serving: "01", wt: 30, gi: 30, gl: 2.1, cals: 352, carbs: 6, fats: 6, prots: 13.5, sod: 40, pot: 350 },
  { food: "Dates", ph: 6.8, serving: "01", wt: 30, gi: 30, gl: 2.1, cals: 352, carbs: 6, fats: 6, prots: 13.5, sod: 40, pot: 350 },
  { food: "Honey", ph: 6.8, serving: "01", wt: 30, gi: 30, gl: 2.1, cals: 352, carbs: 6, fats: 6, prots: 13.5, sod: 40, pot: 350 },
];

interface ChangeFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalFood: string;
}

/* ================= CONFIRM MODAL ================= */
function ConfirmReplaceModal({
  open,
  from,
  to,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  from: string;
  to: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl text-center">

      <IoCheckmarkCircle size={48} className="text-[#C0964F] mx-auto mb-2" />

        <h3 className="text-lg font-medium text-emerald-900 mb-1">
          Are you sure you want to replace
        </h3>

        <p className="text-gray-700 mb-6">
          <span className="font-medium">{from}</span> with{" "}
          <span className="font-medium">{to}</span>?
        </p>

        <div className="flex justify-center gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-1 rounded-full bg-emerald-900 text-white hover:bg-emerald-800"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN MODAL ================= */
export default function ChangeFoodModal({
  isOpen,
  onClose,
  originalFood = "Oats",
}: ChangeFoodModalProps) {
  const [replacedRow, setReplacedRow] = useState<number | null>(null);
  const [pendingRow, setPendingRow] = useState<number | null>(null);

  if (!isOpen) return null;

  const confirmReplace = () => {
    setReplacedRow(pendingRow);
    setPendingRow(null);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
        <div className="w-full max-w-6xl bg-white rounded-xl p-8 shadow-2xl">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-light font-unbounded text-emerald-900">
              {originalFood} – Alternatives
            </h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
              <X size={28} />
            </button>
          </div>

          <hr className="border-gray-200 my-3" />

          {/* Table */}
          <div className="overflow-x-auto mb-5">
            <table className="w-full border-separate border-spacing-y-2 text-sm">
              <thead>
                <tr>
                  {ALT_HEADERS.map((h) => (
                    <th
                      key={h.key}
                      className={`px-4 py-3 text-left font-medium text-emerald-950
                        }`}
                    >
                      {h.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {ALTERNATIVES_DATA.map((row, idx) => {
                  const isReplaced = replacedRow === idx;

                  return (
                    <tr key={idx}>
                      {ALT_HEADERS.map((h, cIdx) => (
                        <td
                          key={h.key}
                          className={`
                            px-4 py-4 font-medium
                            ${isReplaced ? "bg-[#DCC8A3] text-[#0E311A] border-none" : "bg-[#E5E9E2] text-emerald-950"}
                            ${cIdx === 0 ? "rounded-l-xl" : ""}
                            ${cIdx === ALT_HEADERS.length - 1 ? "rounded-r-xl" : " "}
                          `}
                        >
                          {h.key === "action" ? (
                            !isReplaced && (
                              <button
                                onClick={() => setPendingRow(idx)}
                                className="flex items-center gap-2 text-emerald-900 hover:text-emerald-700 cursor-pointer"
                              >
                                <CheckCircle2 size={18} />
                                <span>Replace</span>
                              </button>
                            )
                          ) : (
                            row[h.key as keyof typeof row]
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <p className="text-emerald-950 font-medium">
              Need Help? Connect with Our Dietitian
            </p>
            <button className="bg-emerald-950 text-white px-8 py-2 rounded-full text-sm">
              Consult a Dietician
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmReplaceModal
        open={pendingRow !== null}
        from={originalFood}
        to={pendingRow !== null ? ALTERNATIVES_DATA[pendingRow].food : ""}
        onConfirm={confirmReplace}
        onCancel={() => setPendingRow(null)}
      />
    </>
  );
}
