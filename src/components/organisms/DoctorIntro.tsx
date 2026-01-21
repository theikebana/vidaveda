import Image from "next/image";
import { FiMapPin, FiCheckCircle } from "react-icons/fi";

interface DoctorIntroProps {
  name: string;
  rating: number;
  reviewCount: number;
  clinicName: string;
  clinicAddress: string;
  imageUrl: string;
  aboutMe: string;
  isVerified?: boolean;
}

export default function DoctorIntro({
  name,
  rating,
  reviewCount,
  clinicName,
  clinicAddress,
  imageUrl,
  aboutMe,
  isVerified = true,
}: DoctorIntroProps) {
  return (
    <div className="bg-white border border-[#0E311A]/50 rounded-2xl p-6 sm:p-8">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#14532D]/20">
            <Image src={imageUrl} alt={name} fill className="object-cover" />
          </div>
        </div>

        {/* Name and Rating */}
        <div className="flex-1 flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-unbounded text-[#14532D] ">
            {name}
          </h2>

          <div className="flex flex-col items-start  mb-4">
            <div className="flex items-center gap-1">
              <span className="text-[#AC823B] font-bold text-3xl">
                {rating}
              </span>
              <span className="text-[#AC823B] font-bold text-3xl">★</span>
            </div>
            <span className="text-gray-600 ">{reviewCount} reviews</span>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="border-t border-[#14532D]/20 pt-6 flex flex-col gap-5">
        {/* Clinic Info */}
        <div className="space-y-2 flex items-start justify-between">
          <div >
            <h3 className="text-[#14532D] font-light text-base sm:text-lg lg:text-xl xl:text-2xl font-unbounded">
              {clinicName}
            </h3>
            <div className="flex items-start gap-2 mt-2">
              <FiMapPin className="text-[#14532D] mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base lg:text-lg ">
                {clinicAddress}
              </span>
            </div>
          </div>

          <div>
            {isVerified && (
              <span className="inline-flex items-center gap-2 px-2 py-1 bg-[#556B2F] text-white text-xs font-medium rounded-md">
                <FiCheckCircle className="w-3 h-3" />
                Verified
              </span>
            )}
          </div>
        </div>

        {/* About Me */}
        <div className="space-y-2">
          <h3 className="text-[#14532D] font-bold text-base sm:text-lg">
            About Me
          </h3>
          <p className="text-gray-700 leading-relaxed">{aboutMe}</p>
        </div>
      </div>
    </div>
  );
}
