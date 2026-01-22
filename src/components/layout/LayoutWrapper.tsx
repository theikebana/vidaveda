// src/components/layout/LayoutWrapper.tsx
"use client"; // MUST be the first line

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {!isHomePage && <Navbar />}
      {children}
      {!isHomePage && <Footer />}
    </>
  );
}
