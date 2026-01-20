"use client";

import Image from "next/image";
import {
  FiCheckCircle,
  FiTarget,
  FiCoffee,
  FiPlusCircle,
  FiFileText,
} from "react-icons/fi";

export default function DietHero() {
  const leftSteps = [
    {
      step: 1,
      title: "Choose Your Plan",
      desc: "Go with a doctor-provided plan or create your own personalized diet plan based on your goals and preferences.",
      icon: <FiCheckCircle size={20} />,
    },
    {
      step: 2,
      title: "Start Tracking",
      desc: "Go with a doctor-provided plan or create your own personalized diet plan based on your goals and preferences.",
      icon: <FiTarget size={20} />,
    },
    {
      step: 3,
      title: "Mark Your Meals",
      desc: "Go with a doctor-provided plan or create your own personalized diet plan based on your goals and preferences.",
      icon: <FiCoffee size={20} />,
    },
  ];

  const rightSteps = [
    {
      step: 4,
      title: "Add Extra Foods",
      desc: "Click the start button to begin your diet journey. Once started, you cannot switch to another plan without canceling the current one.",
      icon: <FiPlusCircle size={20} />,
    },
    {
      step: 5,
      title: "Get Reports",
      desc: "Go with a doctor-provided plan or create your own personalized diet plan based on your goals and preferences.",
      icon: <FiFileText size={20} />,
    },
  ];

  return (
    <section className="bg-[#f8f9f8] px-4 md:px-10 overflow-hidden relative w-full">

      <div className="absolute right-0 top-[50vh] w-[600px] h-[600px] max-w-full flex items-end">
        <Image
          src="/images/section-images/diet-tracking-hero-strings.png"
          alt="Healthcare Professional"
          width={600}
          height={600}
          className="object-contain object-bottom"
          priority
        />
      </div>
      <div className="container  mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center text-center sm:mt-14 mb-14 lg:mb-20">
          <p className="text-base sm:text-lg text-[#7a4e2d] font-satisfy">
            Diet Tracking
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] leading-tight max-w-[90%] sm:max-w-3xl">
            Stay On Track, Step By Step
          </h1>
        </div>

        {/* Content */}
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative">
          {/* Left Column */}
          <div className="space-y-12 order-2 lg:order-1">
            {leftSteps.map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="bg-[#0a3d2e] p-3 rounded-full shrink-0 text-white">
                  {item.icon}
                </div>
                <div>
                  <span className="bg-[#AC823B] text-white text-[10px] px-2 py-0.5 rounded-full uppercase font-light">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-unbounded text-[#14532D] mt-1">
                    {item.title}
                  </h3>
                  <p className="text-black mt-2 tracking-tight leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Doctor Image – FIXED 600x600 */}
          <div className="flex justify-center items-end order-1 lg:order-2">
            <div className="relative w-[600px] h-[600px] max-w-full flex items-end">
              <Image
                src="/images/section-images/diet-tracking-hero.png"
                alt="Healthcare Professional"
                width={600}
                height={600}
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 order-3">
            {rightSteps.map((item) => (
              <div key={item.step} className="flex gap-4 items-start ">
                <div className="bg-[#0a3d2e] p-3 rounded-full shrink-0 text-white">
                  {item.icon}
                </div>
                <div>
                  <span className="bg-[#AC823B] text-white text-[10px] px-2 py-0.5 rounded-full uppercase font-light">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-unbounded text-[#14532D] mt-1">
                    {item.title}
                  </h3>
                  <p className="text-black mt-2 tracking-tight leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
