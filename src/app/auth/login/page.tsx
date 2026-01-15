"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement login logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    console.log("Google login");
  };

  const handleFacebookLogin = () => {
    // TODO: Implement Facebook OAuth
    console.log("Facebook login");
  };

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Welcome Title */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#0E311A] font-satisfy"
          >
            Welcome Back{" "}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-[40px] font-unbounded font-light text-[#14532d] text-center leading-tight  w-full sm:max-w-7xl"
          >
            To Log In, Provide The Required Information.
          </motion.h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Section - Illustration & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-full w-full col-span-1"
          >
            {/* Decorative Circle */}

            {/* Branch/Leaf Illustration */}
            <div className="h-full w-full flex items-center justify-center">
              <Image
                src="/images/section-images/user-dashboard.png"
                alt="Decorative leaves"
                width={512}
                height={512}
                className="object-contain h-full w-full max-w-auto  mx-auto lg:mx-0"
              />
            </div>
          </motion.div>

          {/* Right Section - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full   lg:mx-0 col-span-1"
          >
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border lg:shadow-none lg:border-none border-gray-100">
              {/* Social Login Buttons */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 text-nowrap font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FcGoogle className="text-xl" />
                  <span>Login with Google</span>
                </button>

                <button
                  onClick={handleFacebookLogin}
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 text-nowrap font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaFacebook className="text-xl text-blue-600" />
                  <span>Login with Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    OR
                  </span>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#14532d] mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#000]" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-[#14532d] transition-colors text-[#000]"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#14532d] mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#000]" />
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:outline-none focus:border-[#14532d] transition-colors text-[#000]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-[#14532d] border-gray-300 rounded focus:ring-[#14532d]"
                    />
                    <span className="text-sm text-gray-700">Remember me</span>
                  </label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-[#C0964F] hover:underline font-medium"
                  >
                    Forgot Password
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-auto bg-[#14532d] text-white font-light py-3 px-12 cursor-pointer rounded-full hover:bg-[#0e311a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-6 ">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-[#14532d] hover:underline font-semibold"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
