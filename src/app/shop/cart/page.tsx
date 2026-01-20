"use client";

import ShoppingCart from "@/components/organisms/CartTable";
import OrderSummary from "@/components/organisms/OrderSummry";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-16 navbar-fixer">
      <div className="container mx-auto">
        
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532D] leading-tight max-w-[90%] sm:max-w-3xl">
          Your Cart
        </h1>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-12">
          
          {/* Cart Table */}
          <div className="lg:col-span-9">
            <ShoppingCart />
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
