"use client";

import { MoveRight } from "lucide-react";

interface SingleHerbItem {
  title: string;
  preparation: string;
  caution?: string;
}

interface SingleHerbContentProps {
  heading: string;
  items: SingleHerbItem[];
}

export default function SingleHerbContent({
  heading,
  items,
}: SingleHerbContentProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#0E311A32] bg-white p-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-unbounded text-[#0E311A]">
          {heading}
        </h2>
        <MoveRight size={28} className="mt-1 text-[#6B8E23]" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <h3 className="text-lg font-unbounded text-[#14532D]">
              {item.title}
            </h3>

            <p className="text-black leading-relaxed">
              {item.preparation}
            </p>

            {item.caution && (
              <p className="text-sm text-[#C0964F]">
                <span className="font-medium">Caution:</span>{" "}
                {item.caution}
              </p>
            )}

            <hr className="border-[#0E311A30]" />
          </div>
        ))}
      </div>
    </div>
  );
}
