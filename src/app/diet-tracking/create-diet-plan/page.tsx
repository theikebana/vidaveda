"use client";
import CreateDietPlanMain from "@/components/organisms/create-diet-plans/CreateDietPlanMain";

export default function DietTrackingPage() {
    return (
        <div className="bg-white navbar-fixer py-12 pb-32 min-h-screen">

            <div className="container mx-auto ">
                {/* Heading */}
                <div className="flex flex-col gap-2 items-center text-center sm:mt-14 mb-14 lg:mb-20">
                    <p className="text-base sm:text-lg text-[#7a4e2d] font-satisfy">
                        Tell Us About Your Health Goals
                    </p>

                    <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] leading-tight max-w-[90%] sm:max-w-3xl">
                        Create Your Diet Plan
                    </h1>
                </div>

                <CreateDietPlanMain />

            </div>
        </div>
    );
}
