// components/molecules/ProductTechnicalDetails.tsx
import React from 'react';
import Image from 'next/image';

const INGREDIENTS = [
  { name: 'Ashwagandha', scientific: '(Withania Somnifera)', dose: '250MG', benefit: '(Helps reduce stress & supports vitality)' },
  { name: 'Tulsi', scientific: '(Ocimum Sanctum)', dose: '250MG', benefit: '(Supports respiratory health & boosts immunity)' },
  { name: 'Giloy', scientific: '(Tinospora Cordifolia)', dose: '200MG', benefit: '(Enhances immunity & detoxification)' },
  { name: 'Amla', scientific: '(Emblica officinalis)', dose: '250MG', benefit: '(Helps reduce stress & supports vitality)' },
  { name: 'Triphala', scientific: '', dose: '250MG', benefit: '(Supports respiratory health & boosts immunity)' },
];

const CERTIFICATIONS = [
  { name: 'Approved GMP', img: '/images/dummy-images/trustedby (1).png' },
  { name: 'ISO Certification', img: '/images/dummy-images/trustedby (2).png' },
  { name: 'Certification Organic', img: '/images/dummy-images/trustedby (3).png' },
  { name: 'Certification Ayush', img: '/images/dummy-images/trustedby (4).png' },
];

export const ProductTechnicalDetails = () => {
  return (
    <section className="py-12 bg-white">
      {/* Replaced max-w-7xl with container */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex flex-col">
          
          {/* Vertical Timeline Wrapper */}
          <div className="relative ml-[180px] border-l border-[#0E311A]/50 min-h-[600px]">
            
            {/* --- 1. Description --- */}
            <div className="relative pl-12 pb-16">
              <h3 className="absolute -left-[180px] top-0 w-[140px] text-xl font-medium text-[#0B0B0B]">
                Description
              </h3>
              {/* Connector Arrow */}
              <div className="absolute left-0 top-[14px] w-10 h-[1px] bg-[#0E311A]/50 flex items-center justify-end">
                 <div className="w-1.5 h-1.5 border-t border-r border-[#0E311A]/50 rotate-45 -mr-[1px]" />
              </div>
              <p className="text-[#000] leading-relaxed max-w-3xl">
                If you&apos;re experiencing 3 or more of these symptoms regularly, consider consulting a naturopath for a comprehensive sleep assessment and personalized treatment plan.
              </p>
            </div>

            {/* --- 2. Ingredients --- */}
            <div className="relative pl-12 pb-16">
              <h3 className="absolute -left-[180px] top-0 w-[140px] text-xl font-medium text-[#0B0B0B]">
                Ingredients Details
              </h3>
              <div className="absolute left-0 top-[14px] w-10 h-[1px] bg-[#2d5a42]/30 flex items-center justify-end">
                 <div className="w-1.5 h-1.5 border-t border-r border-[#2d5a42]/60 rotate-45 -mr-[1px]" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                {INGREDIENTS.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <h4 className="text-[17px] text-gray-900 leading-snug">
                      {item.name} <span className="text-[15px] text-gray-500 font-light">{item.scientific}</span>
                    </h4>
                    <p className="text-[#485B23]  text-lg mt-1">{item.dose}</p>
                    <p className="text-sm text-[#000]  mt-1">{item.benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- 3. Dosage --- */}
            <div className="relative pl-12 pb-16">
              <h3 className="absolute -left-[180px] top-0 w-[140px] text-xl font-medium text-[#0B0B0B]">
                Dosage & Directions
              </h3>
              <div className="absolute left-0 top-[14px] w-10 h-[1px] bg-[#2d5a42]/30 flex items-center justify-end">
                 <div className="w-1.5 h-1.5 border-t border-r border-[#2d5a42]/60 rotate-45 -mr-[1px]" />
              </div>
              <p className="text-gray-800 text-[17px]">
                Recommended dosage & how to take (e.g., 1–2 tablets daily with water after meals).
              </p>
            </div>

            {/* --- 4. Safety --- */}
            <div className="relative pl-12 pb-16">
              <h3 className="absolute -left-[180px] top-0 w-[140px] text-xl font-medium text-[#0B0B0B]">
                Safety Information
              </h3>
              <div className="absolute left-0 top-[14px] w-10 h-[1px] bg-[#2d5a42]/30 flex items-center justify-end">
                 <div className="w-1.5 h-1.5 border-t border-r border-[#2d5a42]/60 rotate-45 -mr-[1px]" />
              </div>
              <p className="text-gray-800 text-[17px]">
                Warnings (pregnant, lactating women, children, or people with conditions should consult a doctor).
              </p>
            </div>

            {/* --- 5. Trusted By --- */}
            <div className="relative pl-12">
              <h3 className="absolute -left-[180px] top-0 w-[140px] text-xl font-medium text-[#0B0B0B]">
                Trusted By
              </h3>
              <div className="absolute left-0 top-[14px] w-10 h-[1px] bg-[#2d5a42]/30 flex items-center justify-end">
                 <div className="w-1.5 h-1.5 border-t border-r border-[#2d5a42]/60 rotate-45 -mr-[1px]" />
              </div>
              
              <div className="flex flex-wrap gap-5 mt-4 items-start">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="flex flex-col items-center max-w-[100px] gap-3">
                    <div className="relative w-15 h-15">
                      <Image src={cert.img} alt={cert.name} fill className="object-contain" />
                    </div>
                    <p className="text-[11px] font-semibold text-[#000] uppercase text-center leading-[1.2]">
                      {cert.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};