"use client";

import { Link, MoveRight } from "lucide-react";

interface GeneralContentData {
  combinesWith: string[];
  taste: string[];
  nature: string[];
  partsUsed: string[];
  sideEffects: string[];
}

interface GeneralContentProps {
  data: GeneralContentData;
}

export default function GeneralContent({ data }: GeneralContentProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#0E311A32] bg-white p-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h2 className="text-2xl text-[#0E311A] font-unbounded">Sage General</h2>
        <MoveRight size={28} className="mt-1 text-[#6B8E23]" />
      </div>

      {/* Combines With */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg text-[#0E311A] font-unbounded">
          Materia Medica : How to use Sage - Uses and Benefits
        </h3>
        <p className="text-black">
          Materia Medica : How to use Sage - Uses and Benefits
        </p>

        <hr className="border-[#0E311A50]" />
      </div>

      {/* Side Effects & Cautions */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg text-[#0E311A] font-unbounded">Caution.</h3>

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

        <hr className="border-[#0E311A50]" />
      </div>

      {/* Taste */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-[#0E311A] font-unbounded">
          Methods of Administration. How to take
        </h3>

        <div className="flex flex-col gap-2 ">
          {/* Tincture */}
          <div>
            <p className="text-black">
              <span className="font-bold">Tincture: </span>
              The best and the most potent method of consuming Sage is to
              tincture it.
            </p>
            <p className="text-[#556B2F]">
              To learn how to make your own tinctures{" "}
            </p>
          </div>

          {/* Decoction */}
          <div>
            <p className="text-black">
              <span className="font-bold">Decoction: </span>
              Make a tea. 
            </p>
            <p className="text-[#556B2F]">
            Put 1/2 teaspoonful of the powdered leaves in a cup of
            water. Boil it and simmer for 10 minutes. Drink three times a day.            </p>
          </div>

          {/* Chew */}
          <div>
            <p className="text-black">
              <span className="font-bold">Chew: </span>
              The leaves may be chewed as such.
            </p>
            <p className="text-[#556B2F]">
            The leaves may be chewed as such. </p>
          </div>
        </div>
     
      </div>
    </div>
  );
}
