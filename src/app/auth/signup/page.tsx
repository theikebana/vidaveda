"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiUser, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    // TODO: Implement signup logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  function handleFacebooksignup(): void {
    console.log("Facebook signup");
  }

  function handleGooglesignup(): void {
    console.log("Google signup");
  }

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-[#0E311A] font-satisfy"
          >
            Welcome{" "}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d]"
          >
            Please provide your details to sign up
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <Image
              src="/images/section-images/user-dashboard.png"
              alt="Signup Illustration"
              width={520}
              height={520}
              className="object-contain"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-100 lg:shadow-none lg:border-none">
              {/* Social Buttons */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={handleGooglesignup}
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 text-nowrap font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FcGoogle className="text-xl" />
                  <span>Signup with Google</span>
                </button>

                <button
                  onClick={handleFacebooksignup}
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 text-nowrap font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaFacebook className="text-xl text-blue-600" />
                  <span>Signup with Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#14532d] mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full pl-10 py-3 border-b-2 border-gray-200 focus:border-[#14532d] outline-none text-black placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[#14532d] mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full pl-10 py-3 border-b-2 border-gray-200 focus:border-[#14532d] outline-none text-black placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email (Full Width) */}
                <div>
                  <label className="block text-sm font-medium text-[#14532d] mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 py-3 border-b-2 border-gray-200 focus:border-[#14532d] outline-none text-black placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Passwords */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#14532d] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        className="w-full pl-10 py-3 border-b-2 border-gray-200 focus:border-[#14532d] outline-none text-black placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Hint: Minimum 8 characters
                    </p>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#14532d] mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter your password"
                        className="w-full pl-10 py-3 border-b-2 border-gray-200 focus:border-[#14532d] outline-none text-black placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#14532d] text-white px-12 py-3 rounded-full hover:bg-[#0e311a] transition disabled:opacity-50"
                >
                  {isLoading ? "Creating account..." : "Sign Up"}
                </button>
              </form>

              {/* Login Link */}
              <p className="text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-[#14532d] font-semibold hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
