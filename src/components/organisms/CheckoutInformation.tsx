"use client";

import { ReactNode, useState } from "react";
import { Check, ArrowDown, Lock } from "lucide-react";

/* ================= TYPES ================= */
type FormFieldProps = {
  label: string;
  defaultValue?: string;
  type?: string;
};

type InfoSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

/* ================= FORM FIELD ================= */
const FormField = ({
  label,
  defaultValue = "",
  type = "text",
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[#6B7280]">
        {label}
      </label>

      <input
        type={type}
        defaultValue={defaultValue}
        className="bg-transparent border-b border-[#CEDCC7] py-2 text-lg text-[#1B432C] focus:outline-none focus:border-[#1B432C] transition-colors"
      />
    </div>
  );
};

/* ================= INFO SECTION ================= */
const InfoSection = ({
  title,
  children,
  defaultOpen = true,
}: InfoSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`w-full bg-[#F7F9F7] rounded-2xl border p-6 mb-3 transition-colors ${
        isOpen ? "border-[#0E311A]/50 pb-12" : "border-[#CEDCC7]"
      }`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#1B432C] p-2 rounded-full">
            <Check className="text-white" size={20} strokeWidth={3} />
          </div>

          <h2 className="text-xl font-regular font-unbounded text-[#485B23] tracking-tight">
            {title}
          </h2>
        </div>

        <ArrowDown
          size={24}
          className={`text-[#1B432C] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-10"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

/* ================= PAYMENT METHOD ================= */
const PaymentMethod = () => {
  const [method, setMethod] = useState<"razorpay" | "stripe">("razorpay");

  const pillClass = (active: boolean) =>
    `flex items-center gap-4 px-4 py-2 rounded-full border cursor-pointer transition-all
     ${
       active
         ? "border-[#1B432C] bg-[#EAF2EC]"
         : "border-[#CEDCC7] hover:border-[#1B432C]/40"
     }`;

  return (
    <InfoSection title="Payment Method" defaultOpen>
      <div className="flex flex-col gap-8">
        {/* Payment Options */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Razorpay */}
          <label
            className={pillClass(method === "razorpay")}
            onClick={() => setMethod("razorpay")}
          >
            <span
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                method === "razorpay"
                  ? "border-[#1B432C]"
                  : "border-[#CEDCC7]"
              }`}
            >
              {method === "razorpay" && (
                <span className="h-2.5 w-2.5 rounded-full bg-[#1B432C]" />
              )}
            </span>

            <span className="text-lg font-medium text-[#1B432C]">
              Razorpay
            </span>
          </label>

          {/* Stripe */}
          <label
            className={pillClass(method === "stripe")}
            onClick={() => setMethod("stripe")}
          >
            <span
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                method === "stripe"
                  ? "border-[#1B432C]"
                  : "border-[#CEDCC7]"
              }`}
            >
              {method === "stripe" && (
                <span className="h-2.5 w-2.5 rounded-full bg-[#1B432C]" />
              )}
            </span>

            <span className="text-lg font-medium text-[#1B432C]">
              Stripe
            </span>
          </label>
        </div>

        {/* Security Message */}
        <div className="flex items-center gap-3 text-sm text-[#6B7280]">
          <Lock size={16} className="text-[#1B432C]" />
          <span>Your payment is secured with 256-bit SSL encryption</span>
        </div>
      </div>
    </InfoSection>
  );
};

/* ================= CHECKOUT INFORMATION ================= */
const CheckoutInformation = () => {
  return (
    <div className="w-full max-w-auto mx-auto">
      
      {/* Personal Details */}
      <InfoSection title="Personal Details" defaultOpen>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FormField label="Your Name" />
          <FormField label="Your Email" type="email" />
          <FormField label="Phone Number" type="tel" />
        </div>
      </InfoSection>

      {/* Address Details */}
      <InfoSection title="Address Details" defaultOpen={false}>
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FormField label="Address" />
            <FormField label="State" />
            <FormField label="City" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FormField label="Zipcode" />
            <FormField label="Landmark" />
          </div>
        </div>
      </InfoSection>

      {/* Payment */}
      {/* <PaymentMethod /> */}
    </div>
  );
};

export default CheckoutInformation;
