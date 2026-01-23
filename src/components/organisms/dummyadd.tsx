"use client";

import React from "react";
import Image from "next/image";

interface DummyAddProps {
  imageSrc?: string;
  altText?: string;
}

export default function DummyAdd({
  imageSrc = "/images/dummy-images/BasicInformationImage.png",
  altText = "Background Image",
}: DummyAddProps) {
  return (
    <div className="relative w-full h-64 ">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-fill"
      />
    </div>
  );
}
