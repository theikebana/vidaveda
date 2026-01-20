"use client";

import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  // Generate page numbers with ellipsis logic
  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    // If total pages is 7 or less, show all pages
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Always show first page
    pages.push(1);

    // Calculate pages around current page (show 2 pages on each side when possible)
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    // Adjust if we're near the beginning
    if (currentPage <= 3) {
      startPage = 2;
      endPage = Math.min(5, totalPages - 1);
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 4);
      endPage = totalPages - 1;
    }

    // Add ellipsis after first page if there's a gap
    if (startPage > 2) {
      pages.push("...");
    }

    // Add pages around current page
    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    // Add ellipsis before last page if there's a gap
    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const renderPageNumbers = () => {
    const displayPages = generatePageNumbers();
    let ellipsisCount = 0;

    return displayPages.map((page) => {
      if (page === "...") {
        ellipsisCount++;
        return (
          <span
            key={`dots-${ellipsisCount}`}
            className="flex items-end pb-2 px-2 text-[#1A2E1F] font-bold"
          >
            ...
          </span>
        );
      }

      const pageNumber = page as number;
      const isActive = currentPage === pageNumber;

      return (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`
            sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center rounded-lg border text-sm sm:text-base font-bold transition-all
            ${
              isActive
                ? "border-[#4A5D23] text-[#4A5D23] bg-transparent" // Active state matching image
                : "border-[#E5E7EB] text-[#1A2E1F] hover:bg-gray-50" // Inactive state
            }
          `}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <div className="flex items-center justify-center gap-2  py-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 text-gray-400 hover:text-[#4A5D23] cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous Page"
      >
        <HiChevronLeft size={28} />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">{renderPageNumbers()}</div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 text-gray-400 cursor-pointer hover:text-[#4A5D23] disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next Page"
      >
        <HiChevronRight size={28} />
      </button>
    </div>
  );
};

export default Pagination;
