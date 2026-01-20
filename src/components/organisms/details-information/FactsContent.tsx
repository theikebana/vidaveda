"use client";

import { MoveRight } from "lucide-react";

interface FactsContentData {
  combinesWith: string[];
  taste: string[];
  nature: string[];
  partsUsed: string[];
  sideEffects: string[];
}

interface FactsContentProps {
  data: FactsContentData;
}

export default function FactsContent({ data }: FactsContentProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#0E311A32] bg-white p-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h2 className="text-2xl text-[#0E311A] font-unbounded">
          Sage Facts
        </h2>
        <MoveRight size={28} className="mt-1 text-[#6B8E23]" />
      </div>

      {/* Combines With */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg text-[#0E311A] font-unbounded">
          Combines With
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-black">
          {data.combinesWith.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <hr className="border-[#0E311A50]" />
      </div>

      {/* Taste */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-[#0E311A] font-unbounded">
          Taste of Sage
        </h3>

        <p className="text-black">{data.taste.join(", ")}</p>

        <hr className="border-[#0E311A50]" />
      </div>

      {/* Nature */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-[#0E311A] font-unbounded">
          Nature of Sage
        </h3>

        <p className="text-black">{data.nature.join(", ")}</p>

        <hr className="border-[#0E311A50]" />
      </div>

      {/* Parts Used */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-[#0E311A] font-unbounded">
          Parts Used
        </h3>

        <p className="text-black">{data.partsUsed.join(", ")}</p>

        <hr className="border-[#0E311A50]" />
      </div>

      {/* Side Effects & Cautions */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg text-[#0E311A] font-unbounded">
          Side Effects, Risk Factors & Cautions
        </h3>

        <div className="flex flex-wrap gap-2">
          {data.sideEffects.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#C0964F] px-5 py-1.5 text-[#C0964F]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
