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
      <div className="relative w-full max-w-2xl bg-[#0B0D0F] border border-white/20 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#FF5722] text-xs font-mono uppercase tracking-widest">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Bosco Transport Freight Dispatch</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-wide mt-1">
              REQUEST A FREIGHT QUOTE
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#85898C] hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
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
