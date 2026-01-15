"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EmailSignup } from "@/components/EmailSignup";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Left Herb Bundle - outside the green section */}
      <motion.div
        initial={{ x: -160, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute top-1/3 left-0 z-0 hidden lg:block pointer-events-none"
      >
        <Image
          src="/images/coming-soon/leaf-left.png"
          alt="Left Herb Bundle"
          width={280}
          height={400}
          className="object-contain opacity-80"
        />
      </motion.div>

      {/* Right Herb Bundle - outside the green section */}
      <motion.div
        initial={{ x: 160, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute top-1/3 right-0 z-0 hidden lg:block pointer-events-none"
      >
        <Image
          src="/images/coming-soon/leaf-right.png"
          alt="Right Herb Bundle"
          width={350}
          height={400}
          className="object-contain opacity-80"
        />
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Logo - Above the green section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 sm:mb-8 lg:mb-10"
        >
          <Image
            src="/logos/homepage-sitelogo.svg"
            alt="VedaVida Logo"
            width={185}
            height={115}
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Central Light Green Section - contains all content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl bg-[#f8fcf9] rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 xl:p-16 shadow-sm relative z-10"
        >
          <div className="flex flex-col items-center">
            {/* Food Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 sm:mb-8 lg:mb-10 w-full max-w-md"
            >
              <Image
                src="/images/coming-soon/dishpalte-center.png"
                alt="Food Image"
                width={500}
                height={500}
                className="object-contain w-full h-auto"
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-[#14532d] text-center mb-2 sm:mb-3"
            >
              Where Nature Heals
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl font-unbounded font-light text-[#14532d] text-center mb-8 sm:mb-10 lg:mb-12"
            >
              Coming Soon...
            </motion.p>

            {/* Email Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-full max-w-xl"
            >
              <EmailSignup />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
