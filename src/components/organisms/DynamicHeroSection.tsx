"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
  imageSrc?: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function DynamicHeroSection({
  title,
  subtitle,
  className = "bg-[#F6F8F5]",
  imageSrc = "/images/hero-images/hero-image-1.png", // The "Immuno Active" banner
  breadcrumbs,
}: HeroSectionProps) {
  return (
    <section
      className={`w-full py-12 lg:py-16 overflow-hidden rounded-b-[60px] sm:rounded-b-[100px] lg:rounded-b-[139px] ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left w-full md:w-2/3">
            {subtitle && (
              <p className="text-lg lg:text-xl text-[#C0964F] font-serif italic mb-2">
                {subtitle}
              </p>
            )}

            <h1 className="text-h1 font-unbounded mb-8">
              {title}
            </h1>

            {/* Breadcrumbs (Route) */}
            <nav className="flex items-center gap-2 text-sm md:text-base font-medium">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  <Link
                    href={crumb.href}
                    className={`${
                      index === breadcrumbs.length - 1
                        ? "text-[#4A4A4A] cursor-default"
                        : "text-[#062D1B] hover:underline"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-[#C0964F] mx-1">{" >> "}</span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Side: Image Banner */}
          <div className="w-full md:w-auto flex justify-end">
            <div className="relative w-full max-w-[400px] aspect-[2.5/1] md:aspect-auto">
              <Image 
                // src={imageSrc} 
                src="/images/dummy-images/dynamichero-add.png"
                alt="Promotion Banner" 
                width={400}
                height={160}
                className="rounded-3xl shadow-lg object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}