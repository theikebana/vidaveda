"use client";

import { useState } from "react";
import DynamicHeroSection from "@/components/organisms/DynamicHeroSection";
import DetailsInformation from "@/components/organisms/details-information/DetailsInformation";
import BasicInformationContent from "@/components/organisms/details-information/BasicInformationContent";
import ProductsModule from "@/components/organisms/details-information/Products";
import { sageBasicInformation } from "@/data/SageBasicInfomation";
import { sageCuresContentData } from "@/data/curescontentdata";
import CuresContent from "@/components/organisms/details-information/CuresContent";
import FactsContent from "@/components/organisms/details-information/FactsContent";
import { factsContentData } from "@/data/factscontentdata";
import GeneralContent from "@/components/organisms/details-information/GeneralContent";
import { actionOfSageData } from "@/data/actionofherbsdata";
import ActionOfHerb from "@/components/organisms/details-information/ActionOfHerbContent";
import SingleHerbContent from "@/components/organisms/details-information/SingleHerbContent";
import { singleHerbContentData } from "@/data/singleHerbContentData";
import { multipleHerbsContentData } from "@/data/multipleHerbsContentData";
import MultipleHerbsContent from "@/components/organisms/details-information/MultipleHerbsContent";
import ProductsContent from "@/components/organisms/details-information/ProductsContent";
const tabs = [
  "Basic Information",
  "Sage Cures",
  "Sage Facts",
  "Action of Sage",
  "Nutrients in Sage",
  "Sage General",
  "Single Herb",
  "Multiple Herbs",
  "Products",
];

export default function BasicInformationPage() {
  const [activeTab, setActiveTab] = useState("Basic Information");

  const tabContent: { [key: string]: React.ReactNode } = {
    "Basic Information": (
      <BasicInformationContent data={sageBasicInformation} />
    ),
    "Sage Cures": <CuresContent data={sageCuresContentData} />,
    "Sage Facts": <FactsContent data={factsContentData} />,
    "Sage General": <GeneralContent data={factsContentData} />,
    "Action of Sage": <ActionOfHerb data={actionOfSageData} />,
    "Single Herb": <SingleHerbContent heading="Sage" items={singleHerbContentData} />,
    "Multiple Herbs": <MultipleHerbsContent heading="Sage" items={multipleHerbsContentData} />,
    Products: <ProductsContent title="Sage" />,
  };

  return (
    <div className="bg-white navbar-fixer">
      {/* Hero Section */}
      <DynamicHeroSection
        title="Sage (Salvia Officinalis)"
        subtitle="Category - Herbs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge for herbs", href: "/knowledge-for-herbs" },
          { label: "Sage", href: "/knowledge-for-herbs/Basic-Information" },
        ]}
        imageSrc="/images/products/immuno-active.png"
      />

      {/* Main Content */}
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <DetailsInformation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabContent={tabContent}
        />
      </div>
    </div>
  );
}
