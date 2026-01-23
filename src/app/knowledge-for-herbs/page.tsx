"use client";

import { useState, useMemo, useEffect } from "react";
import HeroSectionPages from "@/components/organisms/HeroSectionPages";
import CategoryTabs from "@/components/organisms/CategoryTabs";
import KnowledgeForHerbsCategoryRow from "@/components/molecule/KnowledgeForHerbsCategoryRow";
import Pagination from "@/components/molecule/Pagination";
import { herbData } from "@/data/herbdata";


// Mock data - replace with actual data source
interface HerbData {
  id: string;
  name: string;
  category: string;
  description: string;
  iconUrl?: string;
}


const categories = [
  "All Category",
  "Trees",
  "Shrubs",
  "Herbs",
  "Climbers",
  "Creepers",
  "Grasses",
  "Vines",
];

export default function KnowledgeForHerbsPage() {
  const [activeCategory, setActiveCategory] = useState("All Category");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset to page 1 whenever category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Filter herbs based on active category
  const filteredHerbs = useMemo(() => {
    if (activeCategory === "All Category") {
      return herbData;
    }
    return herbData.filter(
      (herb) => herb.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredHerbs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHerbs = filteredHerbs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white navbar-fixer">
      {/* Hero Section */}
      <HeroSectionPages
        subtitle="Knowledge For Herbs"
        title="Discover The Power Of Nature's Remedies"
      />

      {/* Main Content */}
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Category Tabs */}
        <div className="mb-8 lg:mb-12">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            totalCount={filteredHerbs.length}
          />
        </div>

        {/* Herb Listings */}
        <div className="flex flex-col gap-4 mb-8 lg:mb-12">
          {currentHerbs.length > 0 ? (
            currentHerbs.map((herb) => (
              <KnowledgeForHerbsCategoryRow
                key={herb.id}
                name={herb.name}
                category={herb.category}
                description={herb.description}
                iconUrl={herb.iconUrl}
                // href={`/knowledge-for-herbs/${herb.id}`}
                href="/knowledge-for-herbs/Basic-Information"
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No herbs found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
          />
        )}
      </div>
    </div>
  );
}