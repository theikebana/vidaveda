"use client";

import { MoveRight } from "lucide-react";

interface ActionOfHerbData {
  mostEffective: string[];
  highlyEffective: string[];
  effective: string[];
}

interface ActionOfHerbProps {
  data: ActionOfHerbData;
}

export default function ActionOfHerb({ data }: ActionOfHerbProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#0E311A32] bg-white p-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-unbounded text-[#0E311A]">
          Action of Sage
        </h2>
        <MoveRight size={28} className="mt-1 text-[#6B8E23]" />
      </div>

      {/* Most Effective */}
      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-unbounded text-[#0E311A]">
          Most Effective
        </h3>

        <div className="flex flex-wrap gap-2">
          {data.mostEffective.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#0E311A] px-5 py-1.5 text-[#0E311A]"
            >
              {item}
            </span>
          ))}
        </div>

        <hr className="border-[#0E311A50]" />
      </section>

      {/* Highly Effective */}
      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-unbounded text-[#0E311A]">
          Highly Effective
        </h3>

        <div className="flex flex-wrap gap-2">
          {data.highlyEffective.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#6B8E23] px-5 py-1.5 text-[#6B8E23]"
            >
              {item}
            </span>
          ))}
        </div>

        <hr className="border-[#0E311A50]" />
      </section>

      {/* Effective */}
      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-unbounded text-[#0E311A]">
          Effective
        </h3>

        <div className="flex flex-wrap gap-2">
          {data.effective.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#C0964F] px-5 py-1.5 text-[#C0964F]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
