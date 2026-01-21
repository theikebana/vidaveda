import React from 'react';
import { MoveRight } from 'lucide-react';

const nutrients = [
  { label: "GI", value: "45" },
  { label: "GL", value: "45" },
  { label: "Cals", value: "45" },
  { label: "Carbs", value: "45" },
  { label: "Fats", value: "45" },
  { label: "Protein", value: "45" },
  { label: "Fiber", value: "45" },
  { label: "Sodium", value: "45" },
];

const CreateFoodListingDetail = () => {
  return (
    <section className="w-full  mx-auto bg-white rounded-3xl border border-[#0E311A]/12 p-6 overflow-hidden ">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-light font-unbounded text-emerald-900 tracking-tight">
            Hot Chocolate
          </h1>
          <MoveRight className="text-emerald-800 h-6 w-6 mt-1" />
        </div>
        <button className="bg-emerald-950 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-900 transition-colors text-sm">
          Add To diet
        </button>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Main Image Banner */}
      <div className="w-full h-[320px]  overflow-hidden mb-8">
        <img 
          src="/images/dummy-images/create-food-listing.png" 
          alt="Hot Chocolate" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nutritional Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {nutrients.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#E5E9E2] rounded-lg p-5 flex justify-between items-center"
          >
            <span className="text-emerald-900 font-medium text-sm">{item.label}</span>
            <span className="text-emerald-900 font-semibold text-2xl">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Potassium/K Detail (Full width or custom size) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#E5E9E2] rounded-lg p-5 flex justify-between items-center md:col-span-1">
          <span className="text-emerald-900 font-medium text-sm">K.</span>
          <span className="text-emerald-900 font-semibold text-2xl">492.00</span>
        </div>
      </div>

    </section>
  );
};

export default CreateFoodListingDetail;