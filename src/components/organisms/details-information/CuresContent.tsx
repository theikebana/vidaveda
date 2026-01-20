"use client";

import React from "react";
import ProductAd from "../ProductAd";
import { MoveRight, Info } from "lucide-react";

interface CuresContentData {
  superEffective: string[];
  mostEffective: string[][];
  highlyEffective: string[];
  effective: string[];
}

interface CuresContentProps {
  data: CuresContentData;
}

export default function CuresContent({ data }: CuresContentProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#0E311A32] bg-white p-6 ">
      {/* Header */}
      <div className="flex items-center gap-3">
      <h2 className="text-2xl   text-[#0E311A] font-unbounded">
      Sage Cures</h2>
        <MoveRight size={28} className="mt-1 text-[#6B8E23]" />
      </div>

      {/* Super Effective Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg  !text-[#0E311A] font-unbounded">
          Super Effective
        </h3>
        <div className="rounded-2xl border border-[#0E311A50] bg-[#F0F9F0] p-6">
          <div className="flex flex-wrap gap-4">
            {data.superEffective.map((item) => (
              <span key={item} className="text-base font-medium text-[#0E311A]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Most Effective Sections */}
      {data.mostEffective.map((section, sectionIndex) => (
        <div
          key={`most-effective-${section.join("-")}-${sectionIndex}`}
          className="flex flex-col gap-4"
        >
          <h3 className="text-lg  !text-[#0E311A] font-unbounded">
            Most Effective
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-black">
            {section.map((item, itemIndex) => (
              <span key={`${item}-${itemIndex}`}>{item}</span>
            ))}
          </div>
          <hr className="border-[#0E311A50]" />
        </div>
      ))}

      {/* Highly Effective Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg  !text-[#0E311A] font-unbounded">
            Highly Effective
          </h3>
       
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-black">
          {data.highlyEffective.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <hr className="border-[#0E311A50]" />
      </div>

      {/* Effective Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg  !text-[#0E311A] font-unbounded">
            Effective
          </h3>
       
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-black">
          {data.effective.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
