"use client";

import { EcosystemCard } from "@/components/organisms/EcosystemCard";
import { SearchBar } from "@/components/SearchBar";
import { HerbIcon } from "../components/HerbIcon";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHeroTitle from "@/components/molecule/PageHeroTitle";

export default function Home() {
  const ecosystemServices = [
    {
      title: "Knowledge For Herbs",
      icon: (
        <HerbIcon className="w-16 h-16 text-[#c8e6c9]" variant="with-eyes" />
      ),
      href: "/knowledge-for-herbs",
    },
    { title: "Health Consultation", icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />, href: "/health-consultation" },
    { title: "Diagnostic", icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />, href: "/diagnostic" },
    { title: "Shop", icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />, href: "/shop" },
    { title: "Therapies", icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />, href: "/therapies" },
    { title: "Diet Tracking", icon: <HerbIcon className="w-16 h-16 text-[#81c784]" />, href: "/diet-tracking" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] relative overflow-hidden">

      {/* Decorative Images — DESKTOP ONLY */}
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
      <section className="relative z-10 flex flex-col items-center min-h-screen layout-wrapper pt-24 sm:pt-28 lg:pt-32 pb-16">

        {/* Logo */}
        <header className="mb-6 sm:mb-8 w-[150px] sm:w-[170px] lg:w-[185px] h-auto">
          <Image
            src="/logos/homepage-sitelogo.svg"
            alt="Health Icon Logo"
            width={185}
            height={115}
            priority
            className="object-contain"
          />
        </header>

        {/* Hero Text */}


        <PageHeroTitle
          title="Nature & Guided by Naturopathy"
          eyebrow="Healthy Living Powered By" />


        {/* Search */}
        <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl mt-10 sm:mt-14 lg:mt-16 mb-12" role="search">
          <SearchBar />
        </div>

        {/* Ecosystem */}
        <section className="w-full " aria-labelledby="ecosystem-heading">
          <h2 id="ecosystem-heading" className="text-xl sm:text-3xl lg:text-4xl font-unbounded text-[#14532d] text-center mb-6 sm:mb-8">
            Our Ecosystem
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
            {ecosystemServices.map((service) => (
              <li key={service.title}>
                <EcosystemCard
                  title={service.title}
                  href={service.href}
                />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
