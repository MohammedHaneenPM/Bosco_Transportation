"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { openQuoteModal } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/#quote" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0D0F]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white font-grotesk group-hover:text-[#FF5722] transition-colors flex items-center gap-1">
              BOSCO
              <span className="w-2 h-2 bg-[#FF5722] inline-block mb-0.5"></span>
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#85898C] uppercase -mt-1">
              TRANSPORT INC.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 ${
                  isActive
                    ? "text-[#FF5722] font-bold"
                    : "text-[#85898C] hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5722]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#FF5722] text-white border border-white/20 hover:border-[#FF5722] text-xs font-mono uppercase tracking-wider transition-all duration-200 group"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#FF5722] border border-white/10"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0D0F]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-widest uppercase text-[#85898C] hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF5722] text-white text-xs font-mono uppercase tracking-wider font-bold"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
