"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { name: "CONTACT US", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F6F7F8]/90 backdrop-blur-md border-b border-[#DDDEDF] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group relative w-48 h-14 sm:w-56 sm:h-16">
          <Image
            src="/Group 4.png"
            alt="Bosco Transport Inc. Logo"
            fill
            className="object-contain object-left"
            priority
          />
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

            const isContact = link.name === "CONTACT US";

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-mono tracking-widest uppercase transition-colors duration-200 relative group ${
                  isContact
                    ? "text-[#BF0505] font-bold bg-[#BF0505]/10 px-4 py-2 rounded-full hover:bg-[#BF0505]/20"
                    : isActive
                    ? "text-[#BF0505] font-bold py-1"
                    : "text-[#6A6A6A] hover:text-[#BF0505] py-1"
                }`}
              >
                {link.name}
                {!isContact && (
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#BF0505] transition-all duration-300 ease-out ${
                      isActive ? "w-full right-0" : "w-0 group-hover:w-full"
                    }`} 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#BF0505] text-[#050505] hover:text-white border border-[#DDDEDF] hover:border-[#BF0505] text-xs font-mono uppercase tracking-wider transition-all duration-200 group rounded-full"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2 sm:gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-4 py-1.5 bg-[#BF0505] hover:bg-[#A00404] text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest rounded-full font-bold shadow-sm transition-colors"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#050505] hover:text-[#BF0505] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F7F8]/95 backdrop-blur-xl border-b border-[#DDDEDF] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-widest uppercase text-[#373737] hover:text-[#050505] py-2 border-b border-[#DDDEDF]"
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
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#BF0505] text-white text-xs font-mono uppercase tracking-wider font-bold rounded-full"
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
