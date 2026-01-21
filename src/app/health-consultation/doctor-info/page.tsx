"use client";

import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import DoctorIntro from "../../../components/organisms/DoctorIntro";
import DoctorEducation from "../../../components/organisms/DoctorEducation";
import SpecialtiesAndServices from "../../../components/organisms/SpecialtiesAndServices";
import ReviewsAndRatings from "@/components/organisms/ReviewsAndRatings";
import Availability from "@/components/organisms/Availability";
import BookAppointment from "@/components/organisms/BookAppointment";
import type { AppointmentData } from "@/components/organisms/BookAppointment";
import Image from "next/image";
// Mock data - in a real app, this would come from an API or props
const doctorData = {
  name: "Aarsley Neteh",
  rating: 4.8,
  reviewCount: 124,
  clinicName: "Healing Roots Herbals",
  clinicAddress: "123 Healthcare Ave, Downtown District, City 12345",
  imageUrl: "/images/dummy-images/doctor-dummy-image.png",
  aboutMe:
    "A comprehensive rehabilitation center offering state-of-the-art therapy services with experienced professionals dedicated to your recovery and wellness journey.",
  qualifications: [
    "Bachelor of Homeopathic Medicine (BHMS)",
    "Traditional Chinese Medicine",
    "Naturopathic Doctor (ND) Programs",
    "Bachelor's in Ayurveda, Siddha (India)",
  ],
  services: [
    "Reiki with Herbal Support",
    "Flower Essence Therapy",
    "Herbal Massage Therapy",
    "Digestive Herbal Therapy",
  ],
  schedule: [
    { days: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  serviceTypes: [
    "Reiki with Herbal Support",
    "Flower Essence Therapy",
    "Herbal Massage Therapy",
    "Digestive Herbal Therapy",
    "General Consultation",
  ],
  reviews: [
    {
      id: "1",
      reviewerName: "Sarah M.",
      date: "15/01/2024",
      rating: 5,
      comment:
        "Excellent service! The staff was very professional and the therapy sessions really helped with my recovery. Highly recommend this center.",
      helpfulCount: 12,
    },
    {
      id: "2",
      reviewerName: "John D.",
      date: "10/01/2024",
      rating: 3,
      comment:
        "Great facilities and knowledgeable therapists. The only downside was the wait time for appointments, but the quality of care made it worth it.",
      helpfulCount: 8,
    },
    {
      id: "3",
      reviewerName: "Maria L.",
      date: "05/01/2024",
      rating: 5,
      comment:
        "Amazing experience! Dr. Johnson helped me regain mobility after my injury. The center is clean, modern, and the staff is incredibly caring.",
      helpfulCount: 15,
    },
  ],
  overallRating: 4.7,
  totalReviews: 3,
};

export default function HealthConsultationPage() {
  const handleAppointmentSubmit = (data: AppointmentData) => {
    console.log("Appointment submitted:", data);
    // Handle appointment submission (e.g., API call)
  };

  const handleWriteReview = () => {
    console.log("Write review clicked");
    // Handle write review action
  };

  return (
    <div className="bg-white navbar-fixer py-12 relative">
      <div className="absolute left-0 top-0 w-64 h-full overflow-hidden ">
        <Image
          src="/images/section-images/health-consultation-leave.png"
          alt="Doctor"
          fill
          className="object-contain w-auto h-full"
          priority
        />
      </div>

      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative">

    
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#14532D] transition-colors">
                Home
              </Link>
            </li>
            <FiChevronRight className="w-4 h-4" />
            <li>
              <Link
                href="/knowledge-for-health/health-consultation"
                className="hover:text-[#14532D] transition-colors"
              >
                Health Consultation
              </Link>
            </li>
            <FiChevronRight className="w-4 h-4" />
            <li className="text-[#14532D] font-medium">{doctorData.name}</li>
          </ol>
        </nav>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  relative">
          {/* Left Column - Doctor Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Intro */}
            <DoctorIntro
              name={doctorData.name}
              rating={doctorData.rating}
              reviewCount={doctorData.reviewCount}
              clinicName={doctorData.clinicName}
              clinicAddress={doctorData.clinicAddress}
              imageUrl={doctorData.imageUrl}
              aboutMe={doctorData.aboutMe}
              isVerified={true}
            />

            {/* Education */}
            <DoctorEducation qualifications={doctorData.qualifications} />

            {/* Specialties & Services */}
            <SpecialtiesAndServices services={doctorData.services} />

            {/* Reviews & Ratings */}
            <ReviewsAndRatings
              overallRating={doctorData.overallRating}
              totalReviews={doctorData.totalReviews}
              reviews={doctorData.reviews}
              onWriteReview={handleWriteReview}
            />
          </div>

          {/* Right Column - Booking */}
          <div className="space-y-6 lg:sticky lg:top-24 self-start">
            {/* Availability */}
            <Availability schedule={doctorData.schedule} />

            {/* Book Appointment */}
            <BookAppointment
              defaultName="Diego Martin"
              serviceTypes={doctorData.serviceTypes}
              onSubmit={handleAppointmentSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
