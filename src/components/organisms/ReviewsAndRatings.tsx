"use client";

import { FiThumbsUp } from "react-icons/fi";
import { useState } from "react";

interface Review {
  id: string;
  reviewerName: string;
  date: string;
  rating: number;
  comment: string;
  helpfulCount: number;
}

interface ReviewsAndRatingsProps {
  overallRating: number;
  totalReviews: number;
  reviews: Review[];
  onWriteReview?: () => void;
}

export default function ReviewsAndRatings({
  overallRating,
  totalReviews,
  reviews,
  onWriteReview,
}: ReviewsAndRatingsProps) {
  const [helpfulReviews, setHelpfulReviews] = useState<Set<string>>(new Set());

  const handleHelpful = (reviewId: string) => {
    const newSet = new Set(helpfulReviews);
    if (newSet.has(reviewId)) {
      newSet.delete(reviewId);
    } else {
      newSet.add(reviewId);
    }
    setHelpfulReviews(newSet);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < Math.floor(rating) ? "font-bold text-xl text-[#556B2F]" : "font-bold text-xl text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white border border-[#14532D]/50 rounded-2xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-[#14532D] font-bold text-xl mb-2">
            Reviews & Ratings
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[#14532D] font-semibold text-2xl">
              {overallRating}
            </span>
            <div className="flex items-center">
              {renderStars(overallRating)}
            </div>
            <span className="text-gray-600 text-sm">
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
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-[#14532D]/20 pb-6 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[#0A0A0A]">
                    {review.reviewerName}
                  </span>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="flex items-center font-light gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
            <p className="text-[#000000] mb-3 leading-relaxed">{review.comment}</p>
            <button
              onClick={() => handleHelpful(review.id)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#14532D] transition-colors text-sm"
            >
              <FiThumbsUp
                className={`w-4 h-4 ${
                  helpfulReviews.has(review.id) ? "text-[#14532D]" : ""
                }`}
              />
              <span>
                {review.helpfulCount +
                  (helpfulReviews.has(review.id) ? 1 : 0)}{" "}
                people found this helpful
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

