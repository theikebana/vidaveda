import RecomendedDoctorCard from "@/components/molecule/RecomendedDoctorCard";
import { doctorsData } from "@/data/health-consultation";
import Availability from "../../Availability";
import BookAppointment from "../../BookAppointment";
import DoctorEducation from "../../DoctorEducation";
import DoctorIntro from "../../DoctorIntro";
import ReviewsAndRatings from "../../ReviewsAndRatings";
import SpecialtiesAndServices from "../../SpecialtiesAndServices";

const DietitionDetails = () => {

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
  function handleWriteReview(): void {
    console.log("Write review clicked");
  }

  function handleAppointmentSubmit(data: any): void {
    console.log("Appointment submitted:", data);
  }

  return (
    <>
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
    </>
  );
};

export default DietitionDetails;
