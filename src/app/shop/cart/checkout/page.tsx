"use client";
import CheckoutInformation from "@/components/organisms/CheckoutInformation";
import OrderSummary from "@/components/organisms/OrderSummry";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-16 navbar-fixer">
      <div className="container mx-auto">

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532D] leading-tight max-w-[90%] sm:max-w-3xl">
          Checkout
        </h1>

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
      </div>
    </div>
  );
}
