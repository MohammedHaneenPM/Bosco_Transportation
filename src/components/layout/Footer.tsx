import Link from "next/link";
import { COMPANY } from "@/data/company";
import { ArrowUpRight, Shield, Clock, MapPin, Truck } from "lucide-react";
import ParticleText from "@/components/ui/ParticleText";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FEFEFE] border-t border-[#DDDEDF] text-[#373737] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tighter text-[#050505] font-grotesk flex items-center gap-1">
                BOSCO
                <span className="w-2 h-2 bg-[#3b5fc2] inline-block"></span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#373737] uppercase -mt-0.5">
                TRANSPORT INC.
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#373737]">
              Ontario-based transportation and logistics company providing dependable freight transportation solutions across Ontario and the Greater Toronto Area since 2016.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#373737]">
              <MapPin className="w-4 h-4 text-[#3b5fc2]" />
              <span>Ontario, Canada</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#050505] border-b border-[#DDDEDF] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#050505] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#3b5fc2]">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#050505] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#3b5fc2]">›</span> About Bosco
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#050505] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#3b5fc2]">›</span> Services & Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/#quote"
                  className="hover:text-[#050505] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#3b5fc2]">›</span> Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Operations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#050505] border-b border-[#DDDEDF] pb-2">
              Core Operations
            </h4>
            <ul className="space-y-2 text-xs text-[#373737]">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#3b5fc2]" />
                <span>Full Truckload (FTL)</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#3b5fc2]" />
                <span>Less-Than-Truckload (LTL)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#3b5fc2]" />
                <span>GTA & City Deliveries</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#3b5fc2]" />
                <span>High-Value & Electronics Freight</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#3b5fc2]" />
                <span>Dedicated Transportation</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Safety Commitment */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#050505] border-b border-[#DDDEDF] pb-2">
              Our Commitment
            </h4>
            <p className="text-xs leading-relaxed">
              Reliable • Safe • Flexible • Professional • Cost-Effective
            </p>
            <div className="p-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[11px] text-[#373737] font-mono leading-relaxed">
              Experience supporting direct shippers, dedicated customers, 3PL partners, and freight brokers across Ontario.
            </div>
          </div>
        </div>

        {/* Interactive Particle Text */}
        <div className="w-full flex justify-center py-4 border-t border-[#DDDEDF] mt-16 mb-8">
           <ParticleText text="BOSCO" fontSize={180} />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#DDDEDF] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6A6A6A]">
           <p>
            © {currentYear} {COMPANY.legalName}. All rights reserved. Ontario, Canada.
          </p>
          <div className="flex items-center gap-6">
            <span>Safety • Compliance • On-Time</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
