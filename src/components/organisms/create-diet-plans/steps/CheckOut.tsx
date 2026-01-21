import RecomendedDoctorCard from "@/components/molecule/RecomendedDoctorCard";
import { doctorsData } from "@/data/health-consultation";
import CheckoutInformation from "../../CheckoutInformation";
import OrderSummary from "../../OrderSummry";

const CheckOut = () => {
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

    {/* Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-12">

{/* Cart Table */}
<div className="lg:col-span-9">

  <CheckoutInformation />
  <div className="flex gap-3 mt-12 max-w-md">
          <button className="w-full bg-[#14532D] text-white py-3 rounded-full text-md hover:bg-[#142e20] transition-all active:scale-[0.98]">
              Checkout
          </button>
          <button className="w-full border border-[#14532D] text-[#14532D] py-3 rounded-full text-md hover:bg-gray-50 transition-all active:scale-[0.98]">
              Back
          </button>
      </div>
</div>

{/* Order Summary */}
<div className="lg:col-span-3 lg:sticky lg:top-8">
  <OrderSummary />
</div>

</div>
    </>
  );
};

export default CheckOut;
