"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E311A] text-[#C0964F] overflow-hidden">
      {/* Top Footer */}
      <div className="mx-auto max-w-[1440px] px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Brand + Address */}
          <div className="lg:col-span-2 space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Image
                src="/logos/VedaVida-golden-logo.svg"
                alt="VedaVida"
                width={180}
                height={50}
                priority
              />
            </div>

            <p className="font-medium text-lg">+91 - 7973257640</p>

            <p className="text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              C-136, Industrial Area, Phase 8,<br />
              Chandigarh, 160071
            </p>
          </div>

          {/* Links & Social */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <Link href="/faqs" className="hover:underline">
                FAQs
              </Link>
              <Link href="/download-app" className="hover:underline">
                Download App
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms & Policies
              </Link>
            </div>

            {/* Social Icons */}
            <div className="space-y-4 flex flex-col items-center sm:items-start">
              <p className="font-semibold">Follow us</p>

              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
                <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} />
                <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
                <SocialIcon href="https://youtube.com" icon={<FaYoutube />} />
                <SocialIcon href="https://twitter.com" icon={<FaXTwitter />} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#C9A24F] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-center sm:text-left">
            Copyright © All Rights Reserved by Seasia Infotech
          </p>

          <div className="flex items-center justify-center sm:justify-start">
  <Link
    href="/privacy-policy"
    className="hover:underline px-2"
  >
    Privacy Policy
  </Link>
  <span className="h-4 border-l border-white mx-2"></span>
  <Link
    href="/cookie-policy"
    className="hover:underline px-2"
  >
    Cookie Policy
  </Link>
</div>

        </div>
      </div>
    </footer>
  );
}

/* Social Icon Component with optional link */
function SocialIcon({ icon, href }: { icon: React.ReactNode; href?: string }) {
  const content = (
    <div className="w-10 h-10 xl:w-12 xl:h-12  rounded-full bg-[#D4AF37] text-[#123822] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer text-xl sm:text-2xl">
      {icon}
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
