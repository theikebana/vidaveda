"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

export const PrimarySearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="
      flex items-center w-full max-w-7xl
      bg-[#F8FAF7] rounded-full border border-[#14532D]
      overflow-hidden p-1 sm:p-2
    "
    >
      {/* Input Section - Added 'relative' and 'group' here */}
      <div className="relative flex items-center flex-1 group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#14532d] pointer-events-none">
          <IoSearch size={24} />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for ailment, symptoms, herb, product or therapy"
          className="
          flex-1 bg-transparent border-none outline-none
          text-[#000]
          text-sm sm:text-base
          py-1 sm:py-2
          pl-12 pr-4  /* Added left padding to make room for the icon */
          placeholder:text-xs sm:placeholder:text-sm
        "
        />
      </div>

      {/* Button (Desktop) */}
      <button
        type="submit"
        className="
        hidden sm:flex
        bg-[#14532D] text-white
        px-6 lg:px-8
        py-2 lg:py-3
        mr-1 rounded-full
        font-extralight font-unbounded
        hover:bg-[#0e311a]
        transition-colors
        cursor-pointer
      "
      >
        Search
      </button>

      {/* Button (Mobile Icon) */}
      <button
        type="submit"
        aria-label="Search"
        className="
        sm:hidden
        bg-[#14532D] text-white
        p-3 mr-1 px-5 rounded-full
        flex items-center justify-center
        hover:bg-[#0e311a]
        transition-colors
      "
      >
        <FiSearch className="text-lg" />
      </button>
    </form>
  );
};
