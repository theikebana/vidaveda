"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react"; // Assuming lucide-react for icons

const ConfirmationScreen = () => {

  return (
    <div className="max-w-full mx-auto  bg-[#f9faf7] rounded-3xl">
     <div className="text-center">
     <h1 className="text-4xl font-semibold text-[#1a3d2c] mb-10 px-2">
      Diet Plan Created — You're Ready to Begin      
      </h1>
      <p className="text text-[#0B0B0B] font-light">We’ve sent your login info to your email</p>

     </div>

     <div className="text-center">
     <h1 className="text-4xl font-semibold text-[#1a3d2c] mb-10 px-2">
     Your session with the dietitian has been successfully booked.
     </h1>
      <p className="text text-[#0B0B0B] font-light">We’ve sent your login info to your email</p>

     </div>



    </div>
  );
};

export default ConfirmationScreen;