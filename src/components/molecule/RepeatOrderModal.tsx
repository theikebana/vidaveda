"use client";

import { useState, useEffect, useRef } from "react";
import { X, RotateCcw } from "lucide-react";

interface RepeatOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  productName: string;
  quantity: number;
  size: string;
}

const RepeatOrderModal = ({ isOpen, onClose, orderId, productName, quantity, size }: RepeatOrderModalProps) => {
  const [repeatQuantity, setRepeatQuantity] = useState(quantity);
  const [isAdding, setIsAdding] = useState(false);
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

  // Reset quantity when modal opens
  useEffect(() => {
    if (isOpen) {
      setRepeatQuantity(quantity);
    }
  }, [isOpen, quantity]);

  const handleRepeatOrder = async () => {
    setIsAdding(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log({ orderId, productName, quantity: repeatQuantity, size, action: "repeat" });
    setIsAdding(false);
    onClose();
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
          <RotateCcw size={48} className="text-[#A67C37] mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-[#1B432C] text-center mb-2">Repeat Order</h2>
          <p className="text-gray-500 text-sm text-center">
            Add this item to your cart again
          </p>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Product:</span> {productName}</p>
          <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Size:</span> {size}</p>
          <p className="text-sm text-gray-600"><span className="font-medium">Original Quantity:</span> {quantity}</p>
        </div>

        <div className="mb-6">
          <label htmlFor="repeat-quantity" className="block font-medium text-[#0E311A] text-sm mb-2">Quantity</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setRepeatQuantity(Math.max(1, repeatQuantity - 1))}
              className="w-10 h-10 border border-[#E8EEE9] rounded-lg flex items-center justify-center hover:border-[#1B432C] transition-colors"
              aria-label="Decrease quantity"
            >
              <span className="text-lg">−</span>
            </button>
            <input
              id="repeat-quantity"
              type="number"
              min="1"
              value={repeatQuantity}
              onChange={(e) => setRepeatQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
              className="w-20 text-center border-b border-[#E8EEE9] py-2 focus:border-[#1B432C] outline-none transition-colors text-black"
            />
            <button
              onClick={() => setRepeatQuantity(repeatQuantity + 1)}
              className="w-10 h-10 border border-[#E8EEE9] rounded-lg flex items-center justify-center hover:border-[#1B432C] transition-colors"
              aria-label="Increase quantity"
            >
              <span className="text-lg">+</span>
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-full cursor-pointer font-medium hover:bg-gray-50 transition-all active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={handleRepeatOrder}
            disabled={isAdding}
            className="flex-1 bg-[#1B432C] text-white px-6 py-3 rounded-full cursor-pointer font-medium hover:bg-[#143321] transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepeatOrderModal;



