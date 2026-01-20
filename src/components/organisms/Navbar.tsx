"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "KNOWLEDGE FOR HERBS", href: "/knowledge-for-herbs" },
  { name: "HEALTH CONSULTATION", href: "/health-consultation" },
  { name: "SHOP", href: "/shop" },
  { name: "THERAPIES", href: "/therapies" },
  { name: "DIET TRACKING", href: "/diet-tracking" },
];

interface NavbarStats {
  cartCount: number;
  notificationCount: number;
  isAuthenticated: boolean;
}

export default function Navbar() {
  const [stats, setStats] = useState<NavbarStats>({
    cartCount: 0,
    notificationCount: 0,
    isAuthenticated: false,
  });

  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Fetch navbar data */
  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const res = await fetch("/api/navbar", { credentials: "include" });
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Navbar fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNavbarData();
  }, []);

  /* Desktop-only scroll listener */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleScroll = () => {
      if (!mediaQuery.matches) return; // ❌ ignore mobile/tablet
      setScrolled(window.scrollY > 0);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300
        ${
          scrolled
            ? "border-b border-gray-200 shadow-sm"
            : "border-b border-transparent"
        }
      `}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-0">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/VedaVida-logo-darkgreen.svg"
              alt="VedaVida"
              width={130}
              height={36}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-black hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4 md:gap-6 text-[#D4AF37]">
            {/* AUTH */}
            {!loading && !stats.isAuthenticated ? (
              <Link
                href="/auth/login"
                className="hidden md:flex items-center gap-2"
              >
                <FiUser />
                <span className="text-sm">LOGIN</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hidden md:flex items-center gap-2"
              >
                <FiUser />
                <span className="text-sm">ACCOUNT</span>
              </Link>
            )}

            {/* CART */}
            <Link href="/cart" className="relative">
              <FiShoppingCart className="text-xl" />
              {stats.cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-[#D4AF37] text-black text-xs rounded-full flex items-center justify-center">
                  {stats.cartCount}
                </span>
              )}
            </Link>

            {/* NOTIFICATIONS */}
            <Link href="/notifications" className="relative">
              <span className="text-xl">🔔</span>
              {stats.notificationCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-[#D4AF37] text-black text-xs rounded-full flex items-center justify-center">
                  {stats.notificationCount}
                </span>
              )}
            </Link>

            {/* MOBILE MENU */}
            <button
              className="lg:hidden text-2xl text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-black hover:text-[#D4AF37]"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t">
              {!stats.isAuthenticated ? (
                <Link
                  href="/auth/login"
                  className="flex items-center gap-2 bg-[#14532D] text-white p-2 rounded-md text-sm"
                >
                  <FiUser />
                  LOGIN / SIGN UP
                </Link>
              ) : (
                <Link href="/account" className="flex items-center gap-2">
                  <FiUser />
                  MY ACCOUNT
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
