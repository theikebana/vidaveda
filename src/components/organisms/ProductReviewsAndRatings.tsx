"use client";

import { FiThumbsUp } from "react-icons/fi";
import { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  reviewerName: string;
  date: string;
  rating: number;
  comment: string;
  helpfulCount: number;
}

interface ProductReviewsAndRatingsProps {
  overallRating: number;
  totalReviews: number;
  reviews: Review[];
  onWriteReview?: () => void;
}

export default function ProductReviewsAndRatings({
  overallRating,
  totalReviews,
  reviews,
  onWriteReview,
}: ProductReviewsAndRatingsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false);

 

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < Math.floor(rating)
            ? "font-bold text-xl text-[#556B2F]"
            : "font-bold text-xl text-gray-300"
        }
      >
        ★
      </span>
    ));
  };

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="bg-[#F6F8F5] rounded-2xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-[#0E311A]/50 pb-6">
        <div className="flex items-center gap-5">
          <h3 className="text-[#14532D] font-medium text-4xl tracking-tight">
            Reviews & Ratings
          </h3>

          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 fill-[#14532D] text-[#14532D]" />

            <span className="text-[#14532D] font-semibold text-2xl tracking-tight">
              {overallRating}
            </span>

            <span className="text-gray-600 text-lg tracking-tight">
              ({totalReviews} reviews)
            </span>
          </div>
        </div>

        {onWriteReview && (
          <button
            onClick={onWriteReview}
            className="px-6 py-2 bg-[#C0964F] text-white rounded-full font-medium hover:bg-[#A6833D] transition-colors text-sm sm:text-base"
          >
            Write Review
          </button>
        )}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-[#14532D]/20 mb-6 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[#0A0A0A]">
                    {review.reviewerName}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {review.date}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>

            <p className="text-[#000000] mb-3 leading-relaxed">
              {review.comment}
            </p>

          
          </div>
        ))}
      </div>

      {/* View All Button */}
      {reviews.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAllReviews((prev) => !prev)}
            className="text-[#14532D] font-medium hover:underline transition cursor-pointer"
          >
            {showAllReviews ? "View Less Reviews" : "View All Reviews"}
          </button>
        </div>
      )}
    </div>
  );
}
