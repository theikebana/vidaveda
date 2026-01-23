"use client";

import { useState } from "react";
import DietChartTable from "@/components/molecule/DietChartTable";
import ScheduleDietModal from "@/components/molecule/ScheduleDietModal";
import OrderConfirmationModal from "@/components/molecule/OrderConfirmationModal";

const CreateAiDietPlan = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <>
      <div className="max-w-full mx-auto bg-[#f9faf7] rounded-3xl">
        <h2 className="text-2xl font-semibold text-[#1a3d2c] mb-10 px-2">
          Diet Chart
        </h2>

        <DietChartTable />

        <div className="mt-12 flex justify-start">
          <button
            onClick={() => setShowScheduleModal(true)}
            className="bg-[#1a4d2e] text-white px-12 py-3 rounded-full cursor-pointer"
          >
            Complete
          </button>
        </div>
      </div>

      {showScheduleModal && (
        <ScheduleDietModal
          onClose={() => setShowScheduleModal(false)}
          onPaymentSuccess={() => {
            setShowScheduleModal(false);
            setShowConfirmation(true);
          }}
        />
      )}

      {showConfirmation && (
        <OrderConfirmationModal
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </>
  );
};

export default CreateAiDietPlan;
