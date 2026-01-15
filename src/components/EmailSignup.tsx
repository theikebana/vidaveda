"use client";

import React, { useState } from "react";

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center  w-full bg-[#DDE5DC] rounded-full border border-[#14532D] overflow-hidden p-2"
    >
      {/* Input */}
      <div className="flex items-center flex-1 px-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to get health updates"
          required
          className="flex-1 bg-transparent border-none outline-none text-[#000] text-base py-4"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-[#14532D] text-white px-8 py-3 mr-1 rounded-full font-extralight hover:bg-[#0e311a] font-unbounded transition-colors"
      >
       Notify me
      </button>
    </form>
  );
};
