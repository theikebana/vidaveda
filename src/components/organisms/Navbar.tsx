"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navLinks = [
  { name: "KNOWLEDGE FOR HERBS", href: "/knowledge-for-herbs" },
  { name: "HEALTH CONSULTATION", href: "/health-consultation" },
  { name: "SHOP", href: "/shop" },
  { name: "THERAPIES", href: "/therapies" },
  { name: "DIET TRACKING", href: "/diet-tracking" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dummy counts (for now)
  const wishlistCount = 7;
  const cartCount = 12;

  /* Desktop-only scroll listener */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleScroll = () => {
      if (!mediaQuery.matches) return;
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300
        ${scrolled
          ? "border-b border-gray-200 shadow-sm"
          : "border-b border-transparent"
        }
      `}
    >
      <div className="mx-auto layout-wrapper">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/VedaVida-logo-darkgreen.svg"
              alt="VedaVida"
              width={234}
              height={60}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors
                    ${isActive
                      ? "text-[#C0964F]"
                      : "text-black hover:text-[#C0964F]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* LOGIN */}
            <Link
              href="/auth/login"
              className="hidden md:flex items-center gap-2 text-black hover:text-[#C0964F]"
            >
              <FiUser className="text-2xl" />
              <span className="text-base">Login / Sign up</span>
            </Link>

            {/* WISHLIST */}
            <Link
              href="/wishlist"
              className={`relative transition-colors
                ${pathname === "/wishlist"
                  ? "text-[#C0964F]"
                  : "text-black hover:text-[#C0964F]"
                }
              `}
            >
              <FiHeart className="text-2xl" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-[#C0964F] text-black text-xs rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            </Link>

            {/* SHOPPING BAG */}
            <Link
              href="/cart"
              className={`relative transition-colors
                ${pathname === "/cart"
                  ? "text-[#C0964F]"
                  : "text-black hover:text-[#C0964F]"
                }
              `}
            >
              <FiShoppingBag className="text-2xl" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-[#C0964F] text-black text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition-colors
                    ${isActive
                      ? "text-[#C0964F]"
                      : "text-black hover:text-[#C0964F]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t">
              <Link
                href="/auth/login"
                className="flex items-center gap-2 bg-[#14532D] text-white p-2 rounded-md text-sm"
              >
                <FiUser />
                Login / Sign up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
