"use client";

import { useMemo, useState } from "react";
import ShopCard from "@/components/molecule/ShopCard";
import Pagination from "@/components/molecule/Pagination";
import { products } from "@/data/ShopCardsData";

const PRODUCTS_PER_PAGE = 9;

export default function ProductsContent({ title }: { title: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  /* ------------------ Filtering ------------------ */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesName = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesPrice =
        maxPrice === null || product.price <= maxPrice;

      return matchesName && matchesPrice;
    });
  }, [search, maxPrice]);

  /* ------------------ Pagination ------------------ */
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [currentPage, filteredProducts]);

  return (
    <section className="bg-white rounded-2xl border border-[#0E311A32] p-6">
      {/* ------------------ Header + Filters ------------------ */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Heading (Left) */}
        <h2 className="text-2xl sm:text-3xl font-unbounded font-light text-[#14532D]">
          {title}
        </h2>

        {/* Filters (Right) */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-56 rounded-xl text-black border border-[#0E311A30] px-4 py-2 text-sm focus:outline-none"
          />

          {/* Price Dropdown */}
          <select
            value={maxPrice ?? ""}
            onChange={(e) => {
              setMaxPrice(
                e.target.value ? Number(e.target.value) : null
              );
              setCurrentPage(1);
            }}
            className="w-full sm:w-44 rounded-xl text-black border border-[#0E311A30] bg-white px-4 py-2 text-sm focus:outline-none cursor-pointer"
          >
            <option value="">All Prices</option>
            <option value="100">Under ₹100</option>
            <option value="250">Under ₹250</option>
            <option value="500">Under ₹500</option>
            <option value="1000">Under ₹1000</option>
          </select>
        </div>
      </div>

      {/* ------------------ Products Grid ------------------ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      )}
    </section>
  );
}
