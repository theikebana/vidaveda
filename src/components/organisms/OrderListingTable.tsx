"use client";

import { useState } from "react";
import Image from "next/image";
import { MoreVertical, FileText, XCircle, RotateCcw, Check } from "lucide-react";

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

/* ================= ORDER ITEM COMPONENT ================= */
const OrderItem = ({ item }: { item: OrderItemType }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="grid grid-cols-12 items-center py-4 border-b border-[#E8EEE9] last:border-0 relative">
      {/* Items */}
      <div className="col-span-3 flex items-center gap-4">
        <div className="w-20 h-20 bg-[#F8F9F8] rounded-xl flex items-center justify-center p-2">
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-[#0E311A] leading-tight">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500">Order ID - {item.orderId}</p>
        </div>
      </div>

      {/* Size */}
      <div className="col-span-1 text-gray-700 text-sm font-medium">
        {item.size}
      </div>

      {/* Quantity */}
      <div className="col-span-1 text-gray-700 text-sm font-medium">
        {item.quantity}
      </div>

      {/* Delivery Address */}
      <div className="col-span-3 pr-4 text-gray-600 text-sm leading-relaxed">
        {item.address}
      </div>

      {/* Price */}
      <div className="col-span-1 text-gray-700 font-medium">
        {item.price}
      </div>

      {/* Payment */}
      <div className="col-span-1 flex items-start gap-1">
        <Check size={16} className="text-[#A67C37] mt-1" />
        <div className="flex flex-col">
          <span className="text-sm text-gray-700">paid</span>
          <span className="text-[10px] text-gray-400 font-mono">{item.paymentMethod}</span>
        </div>
      </div>

      {/* Status & Actions */}
      <div className="col-span-2 flex justify-between items-start pl-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-700 capitalize">
            {item.status}
          </span>
          {item.deliveryDate && (
            <span className="text-xs text-gray-500">{item.deliveryDate}</span>
          )}
          {item.status === "Delivered" && (
            <button className="text-sm text-[#1B432C] underline text-left mt-1 font-medium">
              Write Review
            </button>
          )}
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <MoreVertical size={20} />
          </button>

          {/* Action Menu (Popover) */}
          {showMenu && (
            <div className="absolute right-0 top-8 w-48 bg-white border border-gray-100 shadow-xl rounded-xl z-10 py-2">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <FileText size={16} className="text-[#A67C37]" /> Invoice Download
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <XCircle size={16} className="text-[#A67C37]" /> Cancel Order
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <RotateCcw size={16} className="text-[#A67C37]" /> Repeat Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ================= ORDER LISTING MOLECULE ================= */
export default function OrderListing() {
  const [orders] = useState<OrderItemType[]>([
    {
      id: "1",
      name: "Turmeric Complex",
      orderId: "44646464",
      size: "1 FL OZ",
      quantity: 1,
      address: "123B Blossom Residency, Sector 14 Rohini, New Delhi — 110085",
      price: 300,
      paymentMethod: "XXXXXXXXXXX9898",
      status: "Out for delivery",
      image: "/product.png",
    },
    {
        id: "2",
        name: "Turmeric Complex",
        orderId: "44646464",
        size: "1 FL OZ",
        quantity: 1,
        address: "123B Blossom Residency, Sector 14 Rohini, New Delhi — 110085",
        price: 300,
        paymentMethod: "XXXXXXXXXXX9898",
        status: "Delivered",
        deliveryDate: "28, Jan 2025",
        image: "/product.png",
      },
      // ... more items
  ]);

  return (
    <div className="w-full max-w-auto mx-auto p-6">
      {/* Header Labels */}
      <div className="grid grid-cols-12 px-6 mb-4 text-sm font-medium text-gray-900">
        <div className="col-span-3">Items</div>
        <div className="col-span-1">Size</div>
        <div className="col-span-1">Quantity</div>
        <div className="col-span-3">Delivery address</div>
        <div className="col-span-1">Price (₹)</div>
        <div className="col-span-1">payment</div>
        <div className="col-span-2 pl-4">Status</div>
      </div>

      {/* Container */}
      <div className="bg-white border border-[#E8EEE9] rounded-2xl px-8 py-4">
        {orders.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}