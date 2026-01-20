import Image from "next/image";

interface ConsultationRowProps {
  title: string;
  date: string;
  status: "Completed" | "Cancelled" | "Upcoming";
  isPaid: boolean;
}

const ConsultationRow = ({
  title,
  date,
  status,
  isPaid,
}: ConsultationRowProps) => {
  return (
    <div
      className="
        flex flex-col gap-4
        lg:flex-row lg:items-center lg:justify-between
        p-4 sm:p-5 lg:p-6
        bg-white border border-[#14532D]/50 rounded-3xl
        transition-hover
      "
    >
      {/* Left Content */}
      <div className="flex-1">
        <h3
          className="
            text-[#14532D]
             lg:text-xl
            font-unbounded
            mb-1
          "
        >
          {title}
        </h3>

        <p className="text-gray-600 text-sm">
          Date & Time <span className="ml-2">— {date}</span>
        </p>
      </div>

      {/* Right Content */}
      <div
        className="
          flex  items-center justify-between
          lg:justify-end
          lg:gap-8
          w-full md:w-auto
        "
      >
        {/* Status */}
        <p className="text-sm text-gray-700 font-medium">
          Status – {status}
        </p>

        {/* Payment */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-700 font-medium">
            {isPaid ? "Paid" : "Unpaid"}
          </span>

          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/icons/check-icon.svg"
              alt="Check"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationRow;
