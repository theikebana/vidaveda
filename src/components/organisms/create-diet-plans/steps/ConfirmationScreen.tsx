"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react"; // Assuming lucide-react for icons

const ConfirmationScreen = () => {

  return (
    <div className="max-w-full mx-auto h-[500px] flex items-center justify-center bg-[#f9faf7] rounded-3xl">
      {/* <div className="text-center">
        <h1 className="text-3xl font-medium text-[#1a3d2c]  px-2">
          Diet Plan Created — You're Ready to Begin
        </h1>
        <p className="text text-[#0B0B0B] font-light">We’ve sent your login info to your email</p>

      </div> */}

      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-medium text-[#1a3d2c]  mb-2">
          Your session with the dietitian has been successfully booked.
        </h1>
        <p className="text text-[#0B0B0B] font-light">We’ve sent your login info to your email</p>

      </div>



    </div>
  );
};

export default ConfirmationScreen;