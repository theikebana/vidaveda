import { FiClock } from "react-icons/fi";

interface ScheduleItem {
  days: string;
  hours: string;
}

interface AvailabilityProps {
  schedule: ScheduleItem[];
}

export default function Availability({ schedule }: AvailabilityProps) {
  return (
    <div className="bg-[#F8FAF7] border border-[#14532D]/50 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <FiClock className="text-[#14532D] w-6 h-6" />
        <h3 className="text-[#14532D] font-bold text-xl">Availability</h3>
      </div>
      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
            <span className="text-gray-700 font-medium">{item.days}:</span>
            <span className="text-gray-600">{item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

