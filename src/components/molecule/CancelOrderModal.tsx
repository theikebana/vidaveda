"use client";

import { useState, useEffect, useRef } from "react";
import { X, XCircle } from "lucide-react";

interface CancelOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  productName: string;
}

const CancelOrderModal = ({ isOpen, onClose, orderId, productName }: CancelOrderModalProps) => {
  const [reason, setReason] = useState("");
  const [isCancelling, setIsCancelling] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleCancel = async () => {
    setIsCancelling(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log({ orderId, productName, reason, action: "cancel" });
    setIsCancelling(false);
    onClose();
    setReason("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white p-6 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-200"
      >
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-black">
          <X size={28} strokeWidth={1} />
        </button>

        <div className="mb-6">
          <XCircle size={48} className="text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-[#1B432C] text-center mb-2">Cancel Order</h2>
          <p className="text-gray-500 text-sm text-center">
            Are you sure you want to cancel this order?
          </p>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Order ID:</span> {orderId}</p>
          <p className="text-sm text-gray-600"><span className="font-medium">Product:</span> {productName}</p>
        </div>

        <div className="mb-6">
          <label htmlFor="cancel-reason" className="block font-medium text-[#0E311A] text-sm mb-2">Reason for cancellation (optional)</label>
          <textarea
            id="cancel-reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Please let us know why you're cancelling this order..."
            rows={4}
            className="w-full border border-[#E8EEE9] rounded-lg p-3 focus:border-[#1B432C] outline-none transition-colors text-black resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-full cursor-pointer font-medium hover:bg-gray-50 transition-all active:scale-95"
          >
            Keep Order
          </button>
          <button
            onClick={handleCancel}
            disabled={isCancelling}
            className="flex-1 bg-red-600 text-white px-6 py-3 rounded-full cursor-pointer font-medium hover:bg-red-700 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCancelling ? "Cancelling..." : "Cancel Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModal;




