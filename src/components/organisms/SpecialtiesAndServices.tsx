import { FiCheckCircle } from "react-icons/fi";

interface SpecialtiesAndServicesProps {
  services: string[];
}

export default function SpecialtiesAndServices({
  services,
}: SpecialtiesAndServicesProps) {
  return (
    <div className="bg-white border border-[#0E311A]/50 rounded-3xl p-6 sm:p-8">
      <h3 className="text-[#14532D] font-bold text-xl mb-6">
        Specialties & Services
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 space-x-10 space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-3 bg-[#F8FAF7] rounded-lg p-3">
            <FiCheckCircle className="text-[#556B2F] mt-1 flex-shrink-0 w-5 h-5" />
            <span className="text-[#0A0A0A] text-base">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

