import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/data/company";
import { ArrowUpRight, Shield, Clock, MapPin, Truck, Phone, Mail, ExternalLink } from "lucide-react";
import ParticleText from "@/components/ui/ParticleText";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="w-full bg-[#F6F7F8] py-16 lg:py-24 border-t border-[#DDDEDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#050505] font-grotesk tracking-tight mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-[#373737] text-sm sm:text-base max-w-2xl">
              Ready to streamline your logistics? Contact our team for dedicated support, general inquiries, or a custom quote tailored to your transportation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Phone & Email */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#DDDEDF] flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#BF0505]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#BF0505]" />
                </div>
                <div>
                  <h3 className="text-[10px] font-mono tracking-widest text-[#6A6A6A] uppercase mb-1">Call Us</h3>
                  <a href="tel:+12897889707" className="text-lg font-bold text-[#050505] hover:text-[#BF0505] transition-colors">
                    +1 289 788 9707
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-[#DDDEDF] mb-6"></div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#BF0505]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#BF0505]" />
                </div>
                <div>
                  <h3 className="text-[10px] font-mono tracking-widest text-[#6A6A6A] uppercase mb-2">Email Us</h3>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:operation@boscotransport.ca" className="text-sm font-medium text-[#050505] hover:text-[#BF0505] transition-colors">operation@boscotransport.ca</a>
                    <a href="mailto:dispatch@boscotransport.ca" className="text-sm font-medium text-[#050505] hover:text-[#BF0505] transition-colors">dispatch@boscotransport.ca</a>
                    <a href="mailto:billing@boscotransport.ca" className="text-sm font-medium text-[#050505] hover:text-[#BF0505] transition-colors">billing@boscotransport.ca</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Address */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#DDDEDF] flex flex-col items-start hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-[#BF0505]/10 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#BF0505]" />
              </div>
              <h3 className="text-[10px] font-mono tracking-widest text-[#6A6A6A] uppercase mb-2">Terminal</h3>
              <p className="text-lg font-bold text-[#050505] leading-snug mb-8">
                7499 Auburn Rd<br />
                Milton, ON L9T 7V9
              </p>
              <a
                href="https://maps.app.goo.gl/AguLiq7F8otUZ5Ka8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase font-bold text-[#BF0505] group-hover:text-[#A00404]"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Head Office Address */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#DDDEDF] flex flex-col items-start hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-[#BF0505]/10 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#BF0505]" />
              </div>
              <h3 className="text-[10px] font-mono tracking-widest text-[#6A6A6A] uppercase mb-2">Head Office</h3>
              <p className="text-lg font-bold text-[#050505] leading-snug mb-8">
                105 Ambler Dr<br />
                Mississauga, ON L4W 4J4
              </p>
              <a
                href="https://maps.app.goo.gl/XCb5Ncmex8ZVaZaK9?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase font-bold text-[#BF0505] group-hover:text-[#A00404]"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#FEFEFE] border-t border-[#DDDEDF] text-[#373737] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Col 1: Brand Info */}
            <div className="space-y-4">
              <Link href="/" className="inline-block relative w-52 h-14 mb-2">
                <Image
                  src="/Group 4.png"
                  alt="Bosco Transport Inc. Logo"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-xs leading-relaxed text-[#373737]">
                Ontario-based transportation and logistics company providing dependable freight transportation solutions across Ontario and the Greater Toronto Area since 2010.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#373737]">
                <MapPin className="w-4 h-4 text-[#BF0505]" />
                <span>Ontario, Canada</span>
              </div>
              <div className="pt-4">
                <Image
                  src="/Proudly Canadian.png"
                  alt="Proudly Canadian"
                  width={160}
                  height={160}
                  className="object-contain"
                />
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
                    <span className="text-[#BF0505]">›</span> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#050505] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#BF0505]">›</span> About Bosco
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#050505] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#BF0505]">›</span> Services & Capabilities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#quote"
                    className="hover:text-[#050505] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#BF0505]">›</span> Request a Quote
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
                  <Truck className="w-3.5 h-3.5 text-[#BF0505]" />
                  <span>Full Truckload (FTL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#BF0505]" />
                  <span>Less-Than-Truckload (LTL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#BF0505]" />
                  <span>GTA & City Deliveries</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#BF0505]" />
                  <span>High-Value & Electronics Freight</span>
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#BF0505]" />
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
              <div className="p-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[11px] text-[#373737] font-mono leading-relaxed rounded-2xl">
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
    </>
  );
}
