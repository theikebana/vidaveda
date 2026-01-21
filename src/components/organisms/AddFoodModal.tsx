import React from 'react';
import { X } from 'lucide-react';

const categories = [
  "Beverages", "Beverages", "Beverages", "Beverages",
  "Confectionery", "Confectionery", "Confectionery", "Confectionery",
  "Dairy", "Dairy", "Dairy", "Dairy",
  "Drinks", "Drinks", "Drinks", "Drinks",
  "Fats and Oils", "Fats and Oils", "Fats and Oils", "View More"
];

const AddFoodModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-[#F8FAF7] shadow-2xl">
        
        {/* Header Section */}
        <div className="flex items-center justify-between p-6 pb-2">
          <h2 className="text-2xl  font-unbouned text-emerald-900">
            Let's Select Foods by Category
          </h2>
          <button 
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 p-8">
          {categories.map((item, index) => (
            <label 
              key={index} 
              className="group flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="foodCategory"
                  className="peer h-5 w-5 appearance-none rounded-full border border-gray-400 checked:border-amber-500 transition-all"
                />
                <div className="absolute h-2.5 w-2.5 rounded-full bg-amber-500 opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className={`text-base font-medium transition-colors 
                ${index === 0 ? 'text-emerald-900 underline underline-offset-4 font-bold' : 'text-gray-700 group-hover:text-emerald-700'}
                ${item === 'View More' ? 'text-gray-600' : ''}`}
              >
                {item}
              </span>
            </label>
          ))}
        </div>

        {/* Footer Image Banner */}
        <div className="relative h-48 w-full overflow-hidden px-4 pb-4">
          <div className="h-full w-full rounded-2xl overflow-hidden relative">
             <img 
              src="/images/section-images/dummy-add-food-modal.png" 
              alt="Nature Background" 
              className="h-full w-full object-cover"
            />
            {/* Visual overlay for the "stem" effect seen in your image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AddFoodModal;