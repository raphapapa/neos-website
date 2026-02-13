"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import content from "@/constants/content";

const t = content.ja;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = Object.entries(t.nav).map(([key, label]) => ({
    key,
    label,
    href: `#${key}`,
  }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neos-black/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo_01.png"
              alt="NEOS"
              width={40}
              height={40}
              className="w-8 h-8 lg:w-10 lg:h-10 invert"
            />
            <span className="font-heading text-xl lg:text-2xl tracking-wider">
              NEOS E-SPORTS
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm tracking-wider text-neos-gray hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="メニュー"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2"
                    : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-neos-black/95 backdrop-blur-sm border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm tracking-wider text-neos-gray hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
