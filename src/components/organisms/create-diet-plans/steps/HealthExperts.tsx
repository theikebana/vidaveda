import RecomendedDoctorCard from "@/components/molecule/RecomendedDoctorCard";
import { doctorsData } from "@/data/health-consultation";

const HealthExpert = () => {
  return (
    <>
      {/* Heading */}
      <div>
        <h3 className="text-xl font-unbounded text-[#0E311A]">
          Connect with Holistic Health Experts
        </h3>
        <p className="text-[#0B0B0B] font-light">
          Choose who you’d like to schedule a session with
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 lg:gap-5 gap-3 mt-12">
        {doctorsData.length > 0 ? (
          doctorsData.map((doctor) => (
            <RecomendedDoctorCard
              key={doctor.id}
              name={doctor.name}
              experience={doctor.experience}
              clinicName={doctor.clinicName}
              clinicAddress={doctor.clinicAddress}
              rating={doctor.rating}
              imageUrl={doctor.imageUrl}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-500">
            No doctors found.
          </div>
        )}
      </div>
    </>
  );
};

export default HealthExpert;
