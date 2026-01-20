"use client";

import { FiCalendar, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

interface BookAppointmentProps {
  defaultName?: string;
  serviceTypes?: string[];
  onSubmit?: (data: AppointmentData) => void;
}

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
}

/* =======================
   Shared Classes
======================= */

const labelClass =
  "block text-[#818181] font-medium ";

const inputBaseClass = `
  w-full px-2 py-2
  border-b border-[#E2E2E2]
  text-[#1D1D1D]
  outline-none
  focus:border-b-[#AAB859]
  transition-colors duration-300
  cursor-pointer-none
`;

const selectBaseClass = `
  w-full px-2 py-2 pr-10
  border-b border-[#E2E2E2]
  text-gray-700
  outline-none
  appearance-none
  focus:border-b-[#AAB859]
  transition-colors duration-300
  mb-2
  cursor-pointer
`;

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

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
            required
            className={inputBaseClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className={inputBaseClass}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className={inputBaseClass}
          />
        </div>

        {/* Service Type */}
        <div>
          <label className={labelClass}>Service Type</label>
          <div className="relative">
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className={selectBaseClass}
            >
              <option value="">Select service type</option>
              {serviceTypes.map((service, index) => (
                <option key={index} value={service} className="cursor-pointer">
                  {service}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label className={labelClass}>Preferred Date</label>
          <div className="relative">
            <select
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className={selectBaseClass}
            >
              <option value="">Select preferred date</option>
              {dateOptions.map((date) => {
                const formattedDate = new Date(date).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                );
                return (
                  <option key={date} value={date} className="cursor-pointer">
                    {formattedDate}
                  </option>
                );
              })}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Preferred Time */}
        <div>
          <label className={labelClass}>Preferred Time</label>
          <div className="relative">
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className={selectBaseClass}
            >
              <option value="">Select preferred time</option>
              {timeSlots.map((time, index) => (
                <option key={index} value={time} className="cursor-pointer">
                  {time}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#14532D] text-white py-3 rounded-full font-light cursor-pointer hover:bg-[#0E311A] transition-colors text-base sm:text-lg"
        >
          Pay & Submit
        </button>
      </form>
    </div>
  );
}
