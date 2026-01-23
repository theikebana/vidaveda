"use client";

import { FiCalendar, FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "libphonenumber-js";
import "react-phone-number-input/style.css";

/* =======================
   Types
======================= */

interface BookAppointmentProps {
  defaultName?: string;
  serviceTypes?: string[];
  onSubmit?: (data: AppointmentData) => void;
}

export interface AppointmentData {
  name: string;
  phone: string; // E.164 (+919876543210)
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
}

type Errors = Partial<Record<keyof AppointmentData, string>>;

/* =======================
   Shared Classes
======================= */

const labelClass = "block text-[#818181] font-medium";

const inputBaseClass = `
  w-full px-2 py-2
  border-b border-[#E2E2E2]
  text-[#1D1D1D]
  outline-none
  focus:border-b-[#AAB859]
  transition-colors duration-300
`;

const selectBaseClass = `
  w-full px-2 py-2 pr-10
  border-b border-[#E2E2E2]
  text-gray-700
  outline-none
  appearance-none
  focus:border-b-[#AAB859]
  transition-colors duration-300
`;

const errorClass = "text-sm text-red-600 mt-1";

/* =======================
   Component
======================= */

export default function BookAppointment({
  defaultName = "",
  serviceTypes = [],
  onSubmit,
}: BookAppointmentProps) {
  const [formData, setFormData] = useState<AppointmentData>({
    name: defaultName,
    phone: "",
    email: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  /* =======================
     Load Razorpay Script
  ======================= */

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  /* =======================
     Validation
  ======================= */

  const validate = (): Errors => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a date";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a time";
    }

    return newErrors;
  };

  /* =======================
     Payment Logic
  ======================= */

  const startPayment = async () => {
    const phone = parsePhoneNumber(formData.phone);
    const isIndia = phone?.country === "IN";

    if (isIndia) {
      // ---------- RAZORPAY ----------
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
      });
      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Demo Clinic",
        description: "Appointment Booking",
        handler: function () {
          window.location.href = "/payment-success";
        },
        theme: {
          color: "#14532D",
        },
      };

      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      // ---------- STRIPE ----------
      window.location.href = "/stripe-checkout";
    }
  };

  /* =======================
     Handlers
  ======================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    onSubmit?.(formData);

    // 🔥 Trigger payment
    await startPayment();
  };

  /* =======================
     Data
  ======================= */

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i < 12 ? (i === 0 ? 12 : i) : i - 12;
    const period = i < 12 ? "AM" : "PM";
    return `${hour}:00 ${period}`;
  });

  const dateOptions = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split("T")[0];
  });

  /* =======================
     UI
  ======================= */

  return (
    <div className="bg-[#F8FAF7] border border-[#14532D]/50 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <FiCalendar className="text-[#14532D] w-6 h-6" />
        <h3 className="text-[#14532D] font-bold text-xl">
          Book Appointment
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className={labelClass}>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={inputBaseClass}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone Number</label>
          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.phone}
            onChange={(value) => {
              setFormData((prev) => ({ ...prev, phone: value || "" }));
              setErrors((prev) => ({ ...prev, phone: undefined }));
            }}
            className="border-b border-[#E2E2E2] focus-within:border-[#AAB859]"
            inputClassName="!text-black !bg-transparent !px-2 !py-2"
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={inputBaseClass}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        {/* Service Type */}
        <div>
          <label className={labelClass}>Service Type</label>
          <div className="relative">
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={selectBaseClass}
            >
              <option value="">Select service type</option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.serviceType && (
            <p className={errorClass}>{errors.serviceType}</p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label className={labelClass}>Preferred Date</label>
          <div className="relative">
            <select
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className={selectBaseClass}
            >
              <option value="">Select preferred date</option>
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.preferredDate && (
            <p className={errorClass}>{errors.preferredDate}</p>
          )}
        </div>

        {/* Preferred Time */}
        <div>
          <label className={labelClass}>Preferred Time</label>
          <div className="relative">
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={selectBaseClass}
            >
              <option value="">Select preferred time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          {errors.preferredTime && (
            <p className={errorClass}>{errors.preferredTime}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#14532D] text-white py-3 rounded-full font-light hover:bg-[#0E311A] transition-colors text-base sm:text-lg"
        >
          Pay & Submit
        </button>
      </form>
    </div>
  );
}
