"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

/* ================= TYPES ================= */
type CartItemType = {
    id: number;
    name: string;
    category: string;
    size: string;
    quantity: number;
    price: number;
    image: string;
};

type CartItemProps = {
    item: CartItemType;
    onUpdateQuantity: (id: number, delta: number) => void;
    onRemove: (id: number) => void;
};

/* ================= CART ITEM ================= */
const CartItem = ({
    item,
    onUpdateQuantity,
    onRemove,
}: CartItemProps) => {
    return (
        <div className="grid grid-cols-12 items-center  first:pt-0 last:pb-0  last:border-0">
            {/* Product Info */}
            <div className="col-span-5 flex items-center gap-6">
                <div className="w-24 h-24 bg-[#F8F9F8] rounded-xl flex items-center justify-center p-4">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="h-full w-auto object-contain"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-medium text-[#0E311A] leading-tight">
                        {item.name}
                    </h3>
                    <span className="inline-block w-fit px-5 py-1 bg-[#AC823B] font-light text-white text-sm rounded-full">
                        {item.category}
                    </span>
                </div>
            </div>

            {/* Size */}
            <div className="col-span-2 text-gray-700  font-medium">
                {item.size}
            </div>

            {/* Quantity */}
            <div className="col-span-2">
                <div className="flex items-center gap-1 justify-between border border-[#1B432C] rounded-full px-4 py-1 w-28">
                    <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-[#1B432C] hover:opacity-50 transition cursor-pointer"
                    >
                        <Minus size={20} />
                    </button>

                    <span className=" font-bold text-[#1B432C]">
                        {item.quantity}
                    </span>

                    <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-[#1B432C] hover:opacity-50 transition cursor-pointer"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>

            {/* Price */}
            <div className="col-span-2 text-center  font-medium text-gray-800">
                ₹{item.price * item.quantity}
            </div>

            {/* Remove */}
            <div className="col-span-1 flex justify-end">
                <button
                    onClick={() => onRemove(item.id)}
                    className="text-[#A67C37] hover:scale-110 transition-transform cursor-pointer"
                >
                    <X size={24} strokeWidth={1.5} />
                </button>
            </div>
        </div>
    );
};

/* ================= SHOPPING CART ================= */
export default function ShoppingCart() {
    const [items, setItems] = useState<CartItemType[]>([
        {
            id: 1,
            name: "Turmeric Complex",
            category: "Herbs",
            size: "1 FL OZ",
            quantity: 1,
            price: 300,
            image: "/images/dummy-images/shop-product-dummy.png",
        },
        {
            id: 2,
            name: "Turmeric Complex",
            category: "Herbs",
            size: "1 FL OZ",
            quantity: 1,
            price: 300,
            image: "/images/dummy-images/shop-product-dummy.png",
        },
        {
            id: 3,
            name: "Turmeric Complex",
            category: "Herbs",
            size: "1 FL OZ",
            quantity: 1,
            price: 300,
            image: "/images/dummy-images/shop-product-dummy.png",
        },
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="w-full mx-auto ">
            {/* Headers */}
            <div className="grid grid-cols-12 px-10 mb-4  font-medium">
                <div className="col-span-5 text-black">Items</div>
                <div className="col-span-2 text-black">Size</div>
                <div className="col-span-2 text-black">Quantity</div>
                <div className="col-span-3 text-center text-black">Price (₹)</div>
            </div>

            {/* Cart Container */}
            <div className="bg-white border border-[#E8EEE9] rounded-2xl p-5 h-full">
                {items.length > 0 ? (
                    <div className="flex flex-col gap-8">
                        {items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onUpdateQuantity={updateQuantity}
                                onRemove={removeItem}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 py-10">
                        Your cart is empty.
                    </p>
                )}
            </div>
        </div>
    );
}
