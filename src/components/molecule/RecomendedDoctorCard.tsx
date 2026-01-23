import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DoctorProps {
  name: string;
  experience: string;
  clinicName: string;
  clinicAddress: string;
  rating: number;
  imageUrl: string;
}

const RecomendedDoctorCard = ({
  name = "Aarsley Neteh",
  experience = "6Yrs",
  clinicName = "Healing Roots Herbals",
  clinicAddress = "Downtown District, City 12345",
  rating = 4.8,
  imageUrl = "/doctor-avatar.png",
}: DoctorProps) => {
  return (
    <div
      className="
        w-full bg-white cursor-pointer
        rounded-2xl lg:rounded-3xl overflow-hidden
        border border-[#0E311A50]
        transition-all duration-500 ease-out
        hover:bg-[#F6F8F5]
      hover:border-none
      hover:border-[#fff]
       
      "
    >
      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-4 transition-all duration-500">
        {/* ================= MOBILE LAYOUT ================= */}
        <div className="flex flex-col items-center text-center gap-2 lg:hidden">
          <div className="relative w-16 h-16 rounded-full overflow-hidden transition-transform duration-500 hover:scale-105">
            <Image src={imageUrl} alt={name} fill className="object-cover" />
          </div>

          <h3 className="text-[#0E311A] text-lg leading-tight transition-colors duration-300">
            {name.split(" ")[0]}{" "}
            <span className="font-light text-[#1A2E1F]">
              {name.split(" ")[1]}
            </span>
          </h3>

          <span className="px-3 py-1 bg-[#A6833D] text-white text-[10px] rounded-full transition-all duration-300">
            Experience – {experience}
          </span>
        </div>

        {/* ================= DESKTOP / TABLET LAYOUT ================= */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative w-15 h-15 rounded-full overflow-hidden transition-transform duration-500 hover:scale-105">
            <Image src={imageUrl} alt={name} fill className="object-cover" />
          </div>

          <div>
            <h3 className="text-[#0E311A] text-xl leading-tight font-unbounded mb-1 transition-colors duration-300">
              {name.split(" ")[0]}{" "}
              <span className="font-light">{name.split(" ")[1]}</span>
            </h3>

            <span className="inline-block mt-1 px-4 py-[2px] bg-[#A6833D] text-white font-light text-xs rounded-full transition-all duration-300">
              Experience – {experience}
            </span>
          </div>
        </div>

        <div>
          {/* Clinic */}
          <div className="text-center sm:text-left transition-all duration-300">
            <h4 className="text-[#14532D] font-bold text-sm sm:text-base">
              Clinic
            </h4>
            <p
              className="
    text-[#334155] text-sm sm:text-base leading-snug
    line-clamp-2
    min-h-[2.8em] sm:min-h-[3.2em]
  "
            >
              {clinicName}, {clinicAddress}
            </p>
          </div>

          {/* Rating */}
          <div className="flex justify-center sm:justify-start items-center gap-2 sm:gap-3 transition-all duration-300">
            <h4 className="text-[#0E311A] font-bold text-sm sm:text-base">
              Rating
            </h4>
            <div className="flex items-center gap-1 px-3 py-0 border border-[#14532D] rounded-full transition-all duration-300 hover:bg-[#14532D10]">
              <span className="text-[#0E311A] font-medium text-xs">
                {rating}
              </span>
              <span className="text-[#0E311A]">★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#0E311A50] px-4 sm:px-5 pt-3 pb-5 transition-all duration-300">
        <Link
          href="/health-consultation/doctor-info"
          className="w-full"
        >
          <button
            type="button"
            className="w-full flex items-center justify-center sm:justify-start gap-3 group"
          >
            <span className="text-[#14532D] text-sm sm:text-base transition-all duration-300 group-hover:font-medium">
              Book Now
            </span>

            <Image
              src="/icons/arrow-icon.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="
        w-5 h-5
        transition-transform duration-300 ease-out
        group-hover:translate-x-1
      "
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecomendedDoctorCard;
