"use client";

import { useState, useMemo } from "react";
import ShopFilter from "@/components/organisms/ShopFillter";
import ShopCard from "@/components/molecule/ShopCard";
import Pagination from "@/components/molecule/Pagination";
import { products } from "@/data/ShopCardsData";
import ProductPrimaryAdsCard from "@/components/molecule/ProductPrimaryAdsCard";
import ProductSecondaryAdsCard from "@/components/molecule/ProductSecondaryAdsCard";

/* ------------------ Filter Data ------------------ */
const filterData = [
  {
    id: "cat1",
    name: "Product Category 1",
    options: ["Herbs", "Herbs", "Herbs", "Herbs"],
  },
  {
    id: "cat2",
    name: "Product Category 2",
    options: ["Herbs", "Herbs"],
  },
];

const PRODUCTS_PER_PAGE = 6; // products AFTER ads

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Filtered products (skip top 3)
  const filteredProducts = useMemo(() => {
    let filtered = products.slice(3); // Skip top products

    // If filters are selected, filter products
    if (selectedFilters.length > 0) {
      filtered = filtered.filter((product) => {
        // For demo, all products are "Herbs", replace this with real category field
        const productCategory = "Herbs"; 
        return selectedFilters.includes(productCategory);
      });
    }

    return filtered;
  }, [selectedFilters]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, end);
  }, [currentPage, filteredProducts]);

  // Top products always visible
  const topProducts = products.slice(0, 3);

  return (
    <div className="bg-[#f9f7f3] min-h-screen navbar-fixer py-12 lay">
      <div className="layout-wrapper">
        {/* ------------------ Hero Section ------------------ */}
        <div className="flex flex-col gap-2 items-center text-center mt-10 sm:mt-14 lg:mt-20">
          <p className="text-base sm:text-lg text-[#7a4e2d] font-satisfy">
            Healthy Living Powered By
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] leading-tight max-w-[90%] sm:max-w-3xl">
            Nature & Guided by Naturopathy
          </h1>
        </div>

        {/* ------------------ Content Section ------------------ */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 mt-12 pb-20">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Sidebar Filter */}
            <aside className="w-full lg:w-1/4">
              <ShopFilter
                categories={filterData}
                minPrice={0}
                maxPrice={500}
                onFilterChange={(filters) => {
                  setSelectedFilters(filters);
                  setCurrentPage(1); // Reset page on filter change
                }}
              />
            </aside>

            {/* Products */}
            <section className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {/* ---------- Row 1: Top Products ---------- */}
                {topProducts.map((product) => (
                  <ShopCard
                    key={product.id}
                    {...product}
                    onAddToCart={() =>
                      console.log(`Added ${product.title} to cart`)
                    }
                  />
                ))}

                {/* ---------- Row 2: Ads (FIXED) ---------- */}
                <div className="xl:col-span-2">
                  <ProductPrimaryAdsCard
                    category="Herbal Supplements"
                    title="Pure Turmeric for Daily Immunity"
                    backgroundImage="/images/dummy-images/ProductAddsBanner.png"
                    onAddToCart={() => console.log("Added to cart")}
                  />
                </div>

                <ProductSecondaryAdsCard
                  category="Ayurvedic Herbs"
                  title="Organic Turmeric"
                  backgroundImage="/images/dummy-images/ProductAddsBanner.png"
                  onAddToCart={() => console.log("Added turmeric")}
                />

                {/* ---------- Remaining Products (Paginated) ---------- */}
                {paginatedProducts.map((product) => (
                  <ShopCard
                    key={product.id}
                    {...product}
                    onAddToCart={() =>
                      console.log(`Added ${product.title} to cart`)
                    }
                  />
                ))}
              </div>

              {/* ------------------ Pagination ------------------ */}
              <div className="mt-12">
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  />
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
