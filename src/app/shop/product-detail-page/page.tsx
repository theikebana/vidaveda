"use client";

import { ProductDetails } from "@/components/molecule/ProductDetails";
import { ProductGallery } from "@/components/molecule/ProductGallery";
import { PromotionVerticalBanner } from "@/components/molecule/PromotionVerticalBanner";
import ProductReviewsAndRatings from "@/components/organisms/ProductReviewsAndRatings";
import { ProductTechnicalDetails } from "@/components/organisms/ProductTechnicalDetails";
import { productReviewsData } from "@/data/productReviews";
import Image from "next/image";
export default function ProductDetailPage() {
    return (
        <div className="min-h-screen bg-white navbar-fixer py-20">

            <div className="absolute right-0 top-[100%] w-64 h-full overflow-hidden ">
                <Image
                    src="/images/section-images/product-info-section.png"
                    alt="Doctor"
                    fill
                    className="object-contain w-auto h-full"
                    priority
                />
            </div>
            <div className="container mx-auto px-6 ">
                {/* 12-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column (Images) - 6/12 */}
                    <div className="lg:col-span-6 flex h-full w-full">
                        <ProductGallery />
                    </div>

                    {/* Middle Column (Info + Buy) - 4/12 */}
                    <div className="lg:col-span-4 flex h-full w-full">
                        <ProductDetails />
                    </div>

                    {/* Right Column (Vertical Banner) - 2/12 */}
                    <div className="lg:col-span-2 flex h-full w-full">
                        <PromotionVerticalBanner />
                    </div>

                </div>

                <div className="mt-20">
                    <ProductTechnicalDetails />
                </div>

                <div className="mt-20">
                    <ProductReviewsAndRatings overallRating={productReviewsData.overallRating} totalReviews={productReviewsData.totalReviews} reviews={productReviewsData.reviews} />
                </div>
            </div>
        </div>
    );
}
