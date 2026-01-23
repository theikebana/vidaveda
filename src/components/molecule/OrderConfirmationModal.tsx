"use client";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface OrderConfirmationModalProps {
  onClose: () => void;
}

const OrderConfirmationModal = ({ onClose }: OrderConfirmationModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
      <div className="bg-white w-full max-w-md  p-8 text-center shadow-xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle2 size={56} className="text-green-600" />
        </div>

        {/* Content */}
        <p className="text-h5 font-unbounded !text-[#14532D] mb-2">
          Oats Meal Included : Dates & Honey
        </p>

        <p className="text-[#000000] text-xl  mb-1">
          Order ID - <span className="font-semibold">44448585</span>
        </p>

        <p className="text-h2 font-unbounded !text-[#14532D] mt-4">
          Order has been
      <br/>
          succesfuly place
        </p>

        {/* OK Button */}
        <Link
          href="/organisms/create-diet-plans/steps/ConfirmationScreen.tsx"
          className="w-full "
        >

             <button
          onClick={onClose}
          className="mt-6 bg-[#1a4d2e] text-white px-10 py-3 rounded-full font-medium hover:bg-[#143b24] transition"
          
        >
          Ok
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
