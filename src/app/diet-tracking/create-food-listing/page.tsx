"use client";

import CreateFoodListingDetail from "@/components/organisms/CreateFoodListingDetail";
import CategoryFoodListingSidebar from "@/components/organisms/details-information/CategoryFoodListingSidebar";

export default function ProgressReportPage() {
  return (
    <section className="bg-white navbar-fixer min-h-screen py-12 pb-32">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] leading-tight max-w-[90%] sm:max-w-3xl">
          Beverages
        </h1>

        {/* GRID MUST HAVE HEIGHT */}
        <div className="grid grid-cols-12 gap-6 min-h-[calc(100vh-220px)]">
          
          {/* Sidebar – 3 cols */}
          <div className="col-span-12 lg:col-span-3 h-full">
            <CategoryFoodListingSidebar
              tabs={[
                "Beverages",
                "Confectionery",
                "Dairy",
                "Drinks",
                "Fats and Oils",
                "Bakery Products",
                "Cereals and Grains",
                "Pulses and Legumes",
                "Fruits",
                "Vegetables",
                "Leafy Greens",
                "Roots and Tubers",
                "Nuts and Seeds",
                "Meat and Poultry",
                "Seafood",
                "Eggs",
                "Spices and Herbs",
                "Condiments",
                "Sauces and Dressings",
                "Snacks",
                "Frozen Foods",
                "Ready-to-Eat Foods",
                "Street Foods",
                "Fermented Foods",
                "Probiotic Foods",
                "Baby Foods",
                "Health Supplements",
                "Sweeteners",
                "Traditional Foods",
                "Functional Foods",
              ]}
              activeTab="Beverages"
              onTabChange={() => {}}
            />
          </div>

          {/* Content – 9 cols */}
          <div className="col-span-12 lg:col-span-9">
            <CreateFoodListingDetail />
          </div>
        </div>
      </div>
    </section>
  );
}
