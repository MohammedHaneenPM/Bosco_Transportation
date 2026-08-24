"use client";

import { useEffect, useState } from "react";
import { X, ShieldAlert } from "lucide-react";
import QuoteForm from "./QuoteForm";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-quote-modal", handleOpen);
    window.addEventListener("close-quote-modal", handleClose);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-quote-modal", handleOpen);
      window.removeEventListener("close-quote-modal", handleClose);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#F6F7F8] border border-[#DDDEDF] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#DDDEDF] mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#3b5fc2] text-xs font-mono uppercase tracking-widest">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Bosco Transport Freight Dispatch</span>
            </div>
            <h2 className="text-xl font-bold text-[#050505] tracking-wide mt-1">
              REQUEST A FREIGHT QUOTE
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#6A6A6A] hover:text-[#050505] hover:bg-[#DDDEDF]/50 border border-transparent hover:border-[#DDDEDF] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <QuoteForm isModal onSuccess={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
