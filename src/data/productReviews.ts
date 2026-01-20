export interface Review {
    id: string;
    reviewerName: string;
    date: string;
    rating: number;
    comment: string;
    helpfulCount: number;
  }
  
  export const productReviewsData = {
    overallRating: 4.2,
    totalReviews: 5,
  
    reviews: [
      {
        id: "r1",
        reviewerName: "Ananya Sharma",
        date: "12 Jan 2026",
        rating: 5,
        comment:
          "Excellent product! I noticed reduced joint pain within two weeks. The quality feels premium and the packaging was great.",
        helpfulCount: 18,
      },
      {
        id: "r2",
        reviewerName: "Rohit Mehta",
        date: "05 Jan 2026",
        rating: 4,
        comment:
          "Very effective for inflammation. The taste is mild and easy to consume. Slightly pricey but worth it.",
        helpfulCount: 11,
      },
      {
        id: "r3",
        reviewerName: "Priya Nair",
        date: "28 Dec 2025",
        rating: 4,
        comment:
          "Good results so far. Helped with muscle soreness after workouts. Would recommend for daily wellness.",
        helpfulCount: 7,
      },
      {
        id: "r4",
        reviewerName: "Amit Verma",
        date: "20 Dec 2025",
        rating: 3,
        comment:
          "Decent product but took longer than expected to show results. Might work better with consistent use.",
        helpfulCount: 4,
      },
      {
        id: "r5",
        reviewerName: "Sneha Kapoor",
        date: "15 Dec 2025",
        rating: 5,
        comment:
          "Absolutely love this turmeric complex! My digestion and overall energy have improved noticeably.",
        helpfulCount: 22,
      },
    ] as Review[],
  };
  