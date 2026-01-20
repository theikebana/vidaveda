import { FiCheckCircle } from "react-icons/fi";

interface DoctorEducationProps {
  qualifications: string[];
}

export default function DoctorEducation({
  qualifications,
}: DoctorEducationProps) {
  return (
    <div className="bg-white border border-[#0E311A]/50 rounded-3xl p-6 sm:p-8">
      <h3 className="text-[#14532D] font-bold text-xl mb-6">Education</h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 space-x-10 space-y-3">
        {qualifications.map((qualification, index) => (
          <div key={index} className="flex items-start gap-3">
            <FiCheckCircle className="text-[#556B2F] mt-1 flex-shrink-0 w-5 h-5" />
            <span className="text-[#0a0a0a] text-base">{qualification}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

