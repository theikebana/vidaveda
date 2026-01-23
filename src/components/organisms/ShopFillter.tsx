import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface FilterCategory {
  id: string;
  name: string;
  options: string[];
}

interface ShopFilterProps {
  categories: FilterCategory[];
  minPrice?: number;
  maxPrice?: number;
  onFilterChange?: (filters: string[]) => void; // Emit selected category options
}

const ShopFilter = ({ 
  categories, 
  minPrice = 0, 
  maxPrice = 1000, 
  onFilterChange 
}: ShopFilterProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });

  // Emit changes to parent
  useEffect(() => {
    onFilterChange?.(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  const handleToggle = (option: string) => {
    const next = selectedFilters.includes(option)
      ? selectedFilters.filter(f => f !== option)
      : [...selectedFilters, option];
    setSelectedFilters(next);
  };

  return (
    <div className="w-full max-w-[360px] sticky top-0 overflow-hidden rounded-2xl border border-[#e2ece5] bg-[#f7faf7] font-sans">
      {/* Header */}
      <div className="border-b border-[#e2ece5] p-5">
        <h2 className="text-xl font-semibold text-[#0E311A] ">Filter Products</h2>
      </div>

      <div className="p-5 space-y-6">
        {/* Dynamic Categories */}
        {categories.map((category) => (
          <div key={category.id} className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0E311A]">{category.name}</h3>
            <div className="space-y-3">
              {category.options.map((option, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer group">
                  <div className={`relative flex h-5 w-5 items-center justify-center rounded-sm border transition-colors
                    ${selectedFilters.includes(option) 
                      ? 'bg-[#1a4d2e] border-[#1a4d2e]' 
                      : 'border-[#1a4d2e] bg-white'}`}
                  >
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={selectedFilters.includes(option)}
                      onChange={() => handleToggle(option)}
                    />
                    {selectedFilters.includes(option) && <Check size={16} className="text-white" strokeWidth={3} />}
                  </div>
                  <span className="text-md text-[#0a0a0a]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Price Range Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-[#0E311A]">Price Range</h3>
          
          {/* Visual Slider Placeholder */}
          <div className="relative h-2 w-full rounded-full bg-[#8ba894]">
            <div className="absolute left-0 h-full w-2/3 rounded-full bg-[#1a4d2e]"></div>
            <div className="absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#1a4d2e] shadow-md"></div>
            <div className="absolute left-2/3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#1a4d2e] shadow-md"></div>
          </div>

          <div className="flex justify-between text-sm font-medium text-[#0e301a]">
            <span>₹{minPrice}</span>
            <span>₹{maxPrice}</span>
          </div>

          {/* Price Inputs */}
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label className="text-xs font-semibold text-[#0e301a]">Min Price</label>
              <div className="rounded-lg border border-[#c2d6c9] bg-white p-2 text-[#0e301a]">
                ${priceRange.min}
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-xs font-semibold text-[#0e301a]">Max Price</label>
              <div className="rounded-lg border border-[#c2d6c9] bg-white p-2 text-[#0e301a]">
                ${priceRange.max}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
