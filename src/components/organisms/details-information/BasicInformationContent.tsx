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
    <div className="flex flex-col gap-6 rounded-2xl border border-[#0E311A32] bg-white p-6 ">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h2 className="text-2xl   text-[#0E311A] font-unbounded">
          Basic Information
        </h2>
        <MoveRight size={28} className="mt-1 text-[#6B8E23]" />
      </div>

      {/* Top Info Grid */}
      <div className="rounded-2xl border border-[#0E311A50] bg-[#F8FAF7] p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
          {[
            { label: "General Name", value: data.generalName },
            { label: "Glycemic Index / Load", value: data.glycemicIndex },
            { label: "Botanical Name", value: data.botanicalName },
            { label: "Homeopathic Name", value: data.homeopathicName },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-base font-medium uppercase tracking-wide text-[#000]">
                {item.label}
              </span>
              <span className="text-base font-medium text-[#14532D]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ad */}
      <ProductAd />

      {/* Description */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg  !text-[#0E311A] font-unbounded">Description</h3>
        <div className="flex flex-wrap gap-2">
          {data.description.map((desc, index) => (
            <span
              key={index}
              className="rounded-full border border-[#C0964F] bg-white px-5 py-1.5  text-[#C0964F]"
            >
              {desc}
            </span>
          ))}
        </div>
      </div>

      {/* Origin & Grown In */}
      <div className="flex flex-col gap-10">
        {/* Origin */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg  text-[#0E311A] font-unbounded">Origin</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3  text-black">
            {data.origin.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
          <hr className="border-[#0E311A50]" />
        </div>

        {/* Grown In */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-[#0E311A] font-unbounded">Grown In</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3  text-black">
            {data.grownIn.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
          <hr className="border-[#0E311A50]" />
        </div>
      </div>

      {/* Common Names */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg  text-[#0E311A] font-unbounded">Common Names</h3>
          <MinusCircle size={24} className="cursor-pointer text-[#BC9454]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 ">
          {data.commonNames.map((name, index) => (
            <span
              key={index}
              className="cursor-default text-black transition-colors hover:text-[#BC9454]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
