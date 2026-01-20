"use client";

import React from "react";
import ProductAd from "../ProductAd";
import { MoveRight, MinusCircle } from "lucide-react";

interface BasicInformationData {
  generalName: string;
  glycemicIndex: string;
  botanicalName: string;
  homeopathicName: string;
  description: string[];
  origin: string[];
  grownIn: string[];
  commonNames: string[];
}

interface BasicInformationContentProps {
  data: BasicInformationData;
}

export default function BasicInformationContent({
  data,
}: BasicInformationContentProps) {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 border border-[#E2E8F0] rounded-3xl p-8 bg-white shadow-sm">
      {/* 1. Header with Icon */}
      <div className="flex items-center gap-3">
        <h2 className="text-[#062D1B] text-2xl lg:text-3xl font-medium">
          Basic Information
        </h2>
        <MoveRight className="text-[#6B8E23] mt-1" size={28} />
      </div>

      {/* 2. Top Info Table Grid */}
      <div className="border border-[#E2E8F0] rounded-3xl p-8 bg-white shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-black font-semibold text-sm uppercase tracking-wide">General Name</span>
            <span className="text-[#2D5A27] font-medium">{data.generalName}</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-black font-semibold text-sm uppercase tracking-wide">Glycemic Index / Load</span>
            <span className="text-[#2D5A27] font-medium">{data.glycemicIndex}</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-black font-semibold text-sm uppercase tracking-wide">Botanical Name</span>
            <span className="text-[#2D5A27] font-medium">{data.botanicalName}</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-black font-semibold text-sm uppercase tracking-wide">Homeopathic Name</span>
            <span className="text-[#2D5A27] font-medium">{data.homeopathicName}</span>
          </div>
        </div>
      </div>

      {/* 3. Product Ad Banner */}
      <ProductAd />

      {/* 4. Description Pills */}
      <div className="flex flex-col gap-6">
        <h3 className="text-[#062D1B] text-2xl font-medium">Description</h3>
        <div className="flex flex-wrap gap-4">
          {data.description.map((desc, index) => (
            <span
              key={index}
              className="px-6 py-3 border border-[#BC9454] text-[#BC9454] rounded-full text-base bg-white"
            >
              {desc}
            </span>
          ))}
        </div>
      </div>

      {/* 5. Origin / Grown In Section (List Layout) */}
      <div className="space-y-8">
        <div>
           <h3 className="text-[#062D1B] text-2xl font-medium mb-4">Origin</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
             {data.origin.map((item, i) => (
               <span key={i} className="text-[#1A1A1A] text-lg">{item}</span>
             ))}
           </div>
           <hr className="border-[#E2E8F0]" />
        </div>

        <div>
           <h3 className="text-[#062D1B] text-2xl font-medium mb-4">Grown In</h3>
           {/* Example multi-row mapping */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4">
              {data.grownIn.map((item, i) => (
                <span key={i} className="text-[#1A1A1A] text-lg">{item}</span>
              ))}
           </div>
           <hr className="border-[#E2E8F0] mt-8" />
        </div>
      </div>

      {/* 6. Common Names with Toggle Icon */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-[#062D1B] text-2xl font-medium">Common Names</h3>
          <MinusCircle className="text-[#BC9454] cursor-pointer" size={24} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
          {data.commonNames.map((name, index) => (
            <span key={index} className="text-[#1A1A1A] text-base hover:text-[#BC9454] cursor-default">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}