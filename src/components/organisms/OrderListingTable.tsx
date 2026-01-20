"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MoreVertical, FileText, XCircle, RotateCcw, Check, X, Star } from "lucide-react";
// 1. Ensure this path matches your file structure and use the correct export name
import { ordersData } from "@/data/orderlistingdata";

/* ================= TYPES ================= */
type OrderItemType = {
  id: string;
  name: string;
  orderId: string;
  size: string;
  quantity: number;
  address: string;
  price: number;
  paymentMethod: string;
  status: string;
  deliveryDate?: string;
  image: string;
};

/* ================= REVIEW MODAL COMPONENT ================= */
const ReviewModal = ({ isOpen, onClose, productName }: { isOpen: boolean; onClose: () => void; productName: string }) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("I like the product");
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white p-6 md:p-10 rounded-sm shadow-2xl animate-in fade-in zoom-in duration-200"
      >
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-black">
          <X size={28} strokeWidth={1} />
        </button>

        <h2 className="text-3xl font-serif text-[#1B432C] mb-2">Write a review</h2>
        <p className="text-gray-500 text-sm mb-10">
          Reviews help other shoppers. Please keep feedback respectful and honest.
        </p>

        <div className="mb-10">
          <h3 className="font-bold text-lg mb-4 text-[#0E311A]">Your rating</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className="focus:outline-none transition-transform active:scale-90">
                <Star
                  size={38}
                  fill={star <= rating ? "#4a5d23" : "none"}
                  stroke={star <= rating ? "#4a5d23" : "#4a5d23"}
                  strokeWidth={1.5}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <label className="block text-gray-500 text-sm mb-2">Write your review</label>
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border-b border-[#E8EEE9] py-3 focus:border-[#1B432C] outline-none transition-colors text-lg text-gray-800"
          />
        </div>

        <button
          onClick={() => { console.log({ productName, rating, review }); onClose(); }}
          className="bg-[#1B432C] text-white px-12 py-3.5 rounded-full font-medium hover:bg-[#143321] transition-all shadow-lg active:scale-95"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

/* ================= ORDER ITEM COMPONENT ================= */
const OrderItem = ({ item }: { item: OrderItemType }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
      <div className="grid grid-cols-12 items-center py-6 border-b border-[#E8EEE9] last:border-0 relative">
        <div className="col-span-3 flex items-center gap-4">
          <div className="w-20 h-20 bg-[#F8F9F8] rounded-xl flex items-center justify-center p-2">
            <Image src={item.image} alt={item.name} width={80} height={80} className="h-full w-auto object-contain" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-[#0E311A] leading-tight">{item.name}</h3>
            <p className="text-sm text-gray-500">Order ID - {item.orderId}</p>
          </div>
        </div>

        <div className="col-span-1 text-gray-700 text-sm font-medium">{item.size}</div>
        <div className="col-span-1 text-gray-700 text-sm font-medium">{item.quantity}</div>
        <div className="col-span-3 pr-4 text-gray-600 text-sm leading-relaxed">{item.address}</div>
        <div className="col-span-1 text-gray-700 font-medium">₹{item.price}</div>

        <div className="col-span-1 flex items-start gap-1">
          <Check size={16} className="text-[#A67C37] mt-1" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-700">paid</span>
            <span className="text-[10px] text-gray-400 font-mono">{item.paymentMethod}</span>
          </div>
        </div>

        <div className="col-span-2 flex justify-between items-start pl-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-700 capitalize">{item.status}</span>
            {item.deliveryDate && <span className="text-xs text-gray-500">{item.deliveryDate}</span>}
            {item.status === "Delivered" && (
              <button 
                onClick={() => setIsReviewOpen(true)}
                className="text-sm text-[#1B432C] underline text-left mt-1 font-medium hover:text-[#0E311A]"
              >
                Write Review
              </button>
            )}
          </div>

          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowMenu(!showMenu)} className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={20} />
            </button>
            {showMenu && (
              <div className="absolute right-0 top-8 w-48 bg-white border border-gray-100 shadow-xl rounded-xl z-10 py-2">
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <FileText size={16} className="text-[#A67C37]" /> Invoice Download
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <RotateCcw size={16} className="text-[#A67C37]" /> Repeat Order
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-red-600">
                  <XCircle size={16} /> Cancel Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ReviewModal 
        isOpen={isReviewOpen} 
        onClose={() => setIsReviewOpen(false)} 
        productName={item.name} 
      />
    </>
  );
};

/* ================= ORDER LISTING MOLECULE ================= */
export default function OrderListing() {
  // 2. Initialize state with the imported data
  const [orderList] = useState<OrderItemType[]>(ordersData);

  return (
    <div className="w-full max-w-auto mx-auto p-6">
      <div className="grid grid-cols-12 px-8 mb-4 text-xs uppercase tracking-wider font-semibold text-gray-400">
        <div className="col-span-3">Items</div>
        <div className="col-span-1">Size</div>
        <div className="col-span-1">Quantity</div>
        <div className="col-span-3">Delivery address</div>
        <div className="col-span-1">Price</div>
        <div className="col-span-1">Payment</div>
        <div className="col-span-2 pl-4">Status</div>
      </div>

      <div className="bg-white border border-[#E8EEE9] rounded-2xl px-8 py-2">
        {/* 3. Map through orderList state */}
        {orderList.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}