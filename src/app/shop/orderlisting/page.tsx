"use client";

import OrderListing from "@/components/organisms/OrderListingTable";



export default function CartPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-16 navbar-fixer">
      <div className="container mx-auto">
        
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532D] leading-tight max-w-[90%] sm:max-w-3xl">
        Order Listing
        </h1>

        {/* Layout */}
        <div>
          <OrderListing /> 
        </div>
      
      </div>
    </div>
  );
}
