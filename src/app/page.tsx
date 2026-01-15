"use client";

import { EcosystemCard } from "@/components/organisms/EcosystemCard";
import { SearchBar } from "@/components/SearchBar";
import { HerbIcon } from "../components/HerbIcon";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const ecosystemServices = [
    {
      title: "Knowledge For Herbs",
      icon: (
        <HerbIcon className="w-16 h-16 text-[#c8e6c9]" variant="with-eyes" />
      ),
      href: "/knowledge-for-herbs",
    },
    {
      title: "Health Consultation",
      icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />,
      href: "/health-consultation",
    },
    {
      title: "Diagnostic",
      icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />,
      href: "/diagnostic",
    },
    {
      title: "Shop",
      icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />,
      href: "/shop",
    },
    {
      title: "Therapies",
      icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />,
      href: "/therapies",
    },
    {
      title: "Diet Tracking",
      icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />,
      href: "/diet-tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Decorative Images — DESKTOP ONLY (UNCHANGED) */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute top-48 left-0 hidden xl:block"
      >
        <Image
          src="/images/homepage/treebranch-left.png"
          alt="Left Decoration"
          width={343}
          height={335}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute top-48 right-0 hidden xl:block"
      >
        <Image
          src="/images/homepage/leaves-right.png"
          alt="Right Decoration"
          width={470}
          height={400}
          priority
        />
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 w-[150px] sm:w-[170px] lg:w-[185px] h-auto">
          <Image
            src="/logos/homepage-sitelogo.svg"
            alt="Health Icon"
            width={185}
            height={115}
            priority
            className="object-contain"
          />
        </div>

        {/* Hero Text */}
        <div className="flex flex-col gap-2 items-center text-center mt-10 sm:mt-14 lg:mt-20">
          <p className="text-base sm:text-lg text-[#7a4e2d] font-satisfy">
            Healthy Living Powered By
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] leading-tight max-w-[90%] sm:max-w-3xl">
            Nature & Guided by Naturopathy
          </h1>
        </div>

        {/* Search */}
        <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl mt-10 sm:mt-14 lg:mt-16 mb-12">
          <SearchBar />
        </div>

        {/* Ecosystem */}
        <div className="w-full max-w-7xl">
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-unbounded text-[#14532d] text-center mb-6 sm:mb-8">
            Our Ecosystem
          </h3>

          {/* Grid tweaks ONLY for small screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
            {ecosystemServices.map((service) => (
              <EcosystemCard
                key={service.title}
                title={service.title}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
