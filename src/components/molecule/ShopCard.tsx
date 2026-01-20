"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";

interface ShopCardProps {
  title: string;
  subtitle: string;
  price: number;
  currencySymbol?: string;
  imageSrc: string;
  onAddToCart?: () => void;
  onFavorite?: (isFav: boolean) => void;
  onDetails?: () => void;
}

const ShopCard = ({
  title,
  subtitle,
  price,
  currencySymbol = "₹",
  imageSrc,
  onAddToCart,
  onFavorite,
  onDetails,
}: ShopCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  /* ---------------- Load favorite from localStorage ---------------- */
  useEffect(() => {
    const storedFavs = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(storedFavs.includes(title));
  }, [title]);

  /* ---------------- Toggle favorite ---------------- */
  const handleFavorite = () => {
    const storedFavs: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    let updatedFavs;

    if (storedFavs.includes(title)) {
      updatedFavs = storedFavs.filter((item) => item !== title);
      setIsFavorite(false);
      onFavorite?.(false);
    } else {
      updatedFavs = [...storedFavs, title];
      setIsFavorite(true);
      onFavorite?.(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-[#B8CDC1] bg-[#f4f7f4] hover:scale-[1.01] transition-all duration-300">
      {/* ---------------- Image Section ---------------- */}
      <div className="relative flex h-64 items-center justify-center p-8">
        <button
          onClick={handleFavorite}
          aria-label="Add to favourites"
          className="absolute right-6 top-6 z-10 transition-transform hover:scale-110 cursor-pointer"
        >
          <Heart
            size={28}
            className={`transition-colors ${
              isFavorite
                ? "fill-[#0E311A] stroke-[#0E311A]"
                : "stroke-[#8ba894]"
            }`}
          />
        </button>

        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* ---------------- Content ---------------- */}
      <div className="p-5 border-t border-[#B8CDC1]">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#0E311A]">
              {title}
            </h3>
            <p className="mt-1 text-sm text-[#000]">{subtitle}</p>
          </div>

          <span className="text-lg font-semibold text-[#0E311A]">
            {currencySymbol}
            {price.toLocaleString()}
          </span>
        </div>

        {/* ---------------- Actions ---------------- */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={onAddToCart}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c29e5d] text-white group-hover:bg-[#b08d4f] transition-all">
              <ShoppingBag size={16} />
            </div>
            <span className="text-lg font-semibold text-[#0E311A]">
              Add to Cart
            </span>
          </button>

          <button
            onClick={onDetails}
            className="hover:translate-x-1 transition-transform cursor-pointer"
          >
            <Image
              src="/icons/arrow-icon.svg"
              alt="Details"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
