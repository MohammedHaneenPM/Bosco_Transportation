"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Truck,
  Package,
  MapPin,
  Clock,
  Sparkles,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  onSuccess?: () => void;
  className?: string;
  isModal?: boolean;
}

const SERVICE_OPTIONS = [
  { id: "ftl", label: "Full Truckload (FTL)", icon: Truck },
  { id: "ltl", label: "Less-Than-Truckload (LTL)", icon: Package },
  { id: "dedicated", label: "Dedicated Transportation", icon: Clock },
  { id: "gta-city", label: "GTA & City Deliveries", icon: MapPin },
  { id: "power-only", label: "Power-Only Transportation", icon: Cpu },
  { id: "specialized", label: "Specialized Freight", icon: Sparkles },
  { id: "high-value", label: "High-Value & Electronics", icon: ShieldCheck },
];

export default function QuoteForm({
  onSuccess,
  className,
  isModal = false,
}: QuoteFormProps) {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    serviceType: "ftl",
    origin: "",
    destination: "",
    weight: "",
    palletCount: "",
    freightType: "",
    tailgateRequired: false,
    appointmentRequired: false,
    highValueShipment: false,
    driverAssistRequired: false,
    timeSensitive: false,
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleServiceSelect = (id: string) => {
    setFormData((prev) => ({ ...prev, serviceType: id }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Filter out false booleans and empty strings from formData
      const filteredFormData = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value !== false && value !== "")
      );

      // Map serviceType ID to its full label for the email
      const selectedService = SERVICE_OPTIONS.find(opt => opt.id === formData.serviceType);
      const serviceLabel = selectedService ? selectedService.label : formData.serviceType;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Quote Request: ${formData.company || formData.name} - ${formData.origin} to ${formData.destination}`,
          from_name: formData.name || "Bosco Website",
          replyto: formData.email,
          ...filteredFormData,
          serviceType: serviceLabel, // Overwrite the short code with the full label
          submittedAt: new Date().toLocaleString(), // Add timestamp invisible to the user
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        alert(data.message || 'An error occurred while submitting your quote request.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={cn("p-8 text-center", className)}>
        <div className="w-16 h-16 bg-[#FFF3F3] border border-[#BF0505] rounded-full flex items-center justify-center mx-auto mb-6 text-[#BF0505]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#050505] mb-3">Quote Request Received</h3>
        <p className="text-[#373737] max-w-md mx-auto mb-6 text-sm leading-relaxed">
          Thank you. Our Ontario dispatch and operations team has received your freight details and will review and respond promptly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setFormData({
              serviceType: "ftl",
              origin: "",
              destination: "",
              weight: "",
              palletCount: "",
              freightType: "",
              tailgateRequired: false,
              appointmentRequired: false,
              highValueShipment: false,
              driverAssistRequired: false,
              timeSensitive: false,
              company: "",
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#EDEDED] hover:bg-[#DDDEDF] text-[#050505] text-xs font-mono uppercase tracking-wider border border-[#DDDEDF] transition-colors rounded-full"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Step Indicators */}
      <div className="flex items-center justify-between border-b border-[#DDDEDF] pb-4 mb-6">
        {[
          { num: 1, label: "Service" },
          { num: 2, label: "Routing" },
          { num: 3, label: "Freight" },
          { num: 4, label: "Contact" },
        ].map((s) => (
          <div key={s.num} className="flex items-center gap-2">
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono transition-colors",
                step === s.num
                  ? "bg-[#BF0505] text-white font-bold"
                  : step > s.num
                  ? "bg-[#EDEDED] text-[#BF0505] border border-[#BF0505]/40"
                  : "bg-[#F7F7F7] text-[#373737] border border-[#DDDEDF]"
              )}
            >
              {s.num}
            </div>
            <span
              className={cn(
                "text-xs font-mono uppercase tracking-wider hidden sm:inline",
                step === s.num ? "text-[#050505]" : "text-[#373737]"
              )}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1: Service Type */}
      {step === 1 && (
        <div>
          <div className="mb-4">
            <span className="text-[11px] font-mono text-[#BF0505] uppercase tracking-widest block mb-1">
              Step 01 / 04
            </span>
            <h4 className="text-lg font-bold text-[#050505] uppercase tracking-wide">
              What service do you need?
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {SERVICE_OPTIONS.map((item) => {
              const Icon = item.icon;
              const isSelected = formData.serviceType === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleServiceSelect(item.id)}
                  className={cn(
                    "p-4 text-left border flex items-center gap-3.5 transition-all rounded-xl",
                    isSelected
                      ? "border-[#BF0505] bg-[#FFF3F3] text-[#050505]"
                      : "border-[#DDDEDF] bg-[#F7F7F7] text-[#373737] hover:border-[#DDDEDF] hover:text-[#050505]"
                  )}
                >
                  <div
                    className={cn(
                      "p-2 border rounded-lg",
                      isSelected
                        ? "border-[#BF0505] bg-[#BF0505] text-white"
                        : "border-[#DDDEDF] bg-[#EDEDED] text-[#373737]"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#050505]">
                      {item.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#BF0505] hover:bg-[#C5161D] text-white text-xs font-mono uppercase tracking-wider transition-colors rounded-full"
            >
              Next: Routing <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Origin & Destination */}
      {step === 2 && (
        <form onSubmit={handleNext}>
          <div className="mb-4">
            <span className="text-[11px] font-mono text-[#BF0505] uppercase tracking-widest block mb-1">
              Step 02 / 04
            </span>
            <h4 className="text-lg font-bold text-[#050505] uppercase tracking-wide">
              Origin & Destination
            </h4>
            <p className="text-xs text-[#373737] mt-1 font-mono">
              Primary Service Area: Ontario & Greater Toronto Area (GTA)
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#BF0505]" /> Pickup Location (City / Postal Code)
              </label>
              <input
                type="text"
                required
                value={formData.origin}
                onChange={(e) =>
                  setFormData({ ...formData, origin: e.target.value })
                }
                placeholder="e.g. Mississauga, ON (L5T 1B3)"
                className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#BF0505]" /> Delivery Location (City / Postal Code)
              </label>
              <input
                type="text"
                required
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
                placeholder="e.g. Vaughan, ON (L4K 4M5)"
                className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#DDDEDF] bg-[#F7F7F7] text-[#050505] text-xs font-mono uppercase tracking-wider hover:bg-[#EDEDED] transition-colors rounded-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#BF0505] hover:bg-[#C5161D] text-white text-xs font-mono uppercase tracking-wider transition-colors rounded-full"
            >
              Next: Freight Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Freight Details */}
      {step === 3 && (
        <form onSubmit={handleNext}>
          <div className="mb-4">
            <span className="text-[11px] font-mono text-[#BF0505] uppercase tracking-widest block mb-1">
              Step 03 / 04
            </span>
            <h4 className="text-lg font-bold text-[#050505] uppercase tracking-wide">
              Freight Specifications
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5">
                Estimated Weight (lbs)
              </label>
              <input
                type="text"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({ ...formData, weight: e.target.value })
                }
                placeholder="e.g. 15,000 lbs"
                className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5">
                Pallet Count / Skids
              </label>
              <input
                type="text"
                value={formData.palletCount}
                onChange={(e) =>
                  setFormData({ ...formData, palletCount: e.target.value })
                }
                placeholder="e.g. 12 Skids"
                className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors rounded-xl"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5">
              Freight Type / Commodity
            </label>
            <select
              value={formData.freightType}
              onChange={(e) =>
                setFormData({ ...formData, freightType: e.target.value })
              }
              className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] text-sm focus:outline-none focus:border-[#BF0505] transition-colors appearance-none rounded-xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236A6A6A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1em'
              }}
            >
              <option value="" disabled>Select Freight Type</option>
              <option value="General Freight / Palletized Goods">General Freight / Palletized Goods</option>
              <option value="High-Value / Electronics">High-Value / Electronics</option>
              <option value="Consumer Goods / Retail">Consumer Goods / Retail</option>
              <option value="Machinery & Industrial Equipment">Machinery & Industrial Equipment</option>
              <option value="Construction Materials">Construction Materials</option>
              <option value="Specialized / Oversized Cargo">Specialized / Oversized Cargo</option>
              <option value="Other">Other (Specify in notes)</option>
            </select>
          </div>

          {/* Checkbox Options */}
          <div className="space-y-2.5 mb-6 border-t border-b border-[#DDDEDF] py-3">
            <label className="flex items-center gap-3 cursor-pointer text-xs text-[#050505]">
              <input
                type="checkbox"
                checked={formData.tailgateRequired}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tailgateRequired: e.target.checked,
                  })
                }
                className="w-4 h-4 accent-[#BF0505] rounded-none bg-[#F7F7F7] border-[#DDDEDF]"
              />
              <span>Tailgate delivery required (ground level offload)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-xs text-[#050505]">
              <input
                type="checkbox"
                checked={formData.appointmentRequired}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    appointmentRequired: e.target.checked,
                  })
                }
                className="w-4 h-4 accent-[#BF0505] rounded-none bg-[#F7F7F7] border-[#DDDEDF]"
              />
              <span>Strict appointment or dock time required</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-xs text-[#050505]">
              <input
                type="checkbox"
                checked={formData.highValueShipment}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    highValueShipment: e.target.checked,
                  })
                }
                className="w-4 h-4 accent-[#BF0505] rounded-none bg-[#F7F7F7] border-[#DDDEDF]"
              />
              <span>High-value or electronics cargo (security monitored)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-xs text-[#050505]">
              <input
                type="checkbox"
                checked={formData.driverAssistRequired}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    driverAssistRequired: e.target.checked,
                  })
                }
                className="w-4 h-4 accent-[#BF0505] rounded-none bg-[#F7F7F7] border-[#DDDEDF]"
              />
              <span>Driver-assisted manual loading/unloading (Hand-bombing)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer text-xs text-[#050505]">
              <input
                type="checkbox"
                checked={formData.timeSensitive}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeSensitive: e.target.checked,
                  })
                }
                className="w-4 h-4 accent-[#BF0505] rounded-none bg-[#F7F7F7] border-[#DDDEDF]"
              />
              <span>Time-sensitive or expedited transit required</span>
            </label>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#DDDEDF] bg-[#F7F7F7] text-[#050505] text-xs font-mono uppercase tracking-wider hover:bg-[#EDEDED] transition-colors rounded-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#BF0505] hover:bg-[#C5161D] text-white text-xs font-mono uppercase tracking-wider transition-colors rounded-full"
            >
              Next: Contact Info <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}

      {/* Step 4: Contact & Submit */}
      {step === 4 && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <span className="text-[11px] font-mono text-[#BF0505] uppercase tracking-widest block mb-1">
              Step 04 / 04
            </span>
            <h4 className="text-lg font-bold text-[#050505] uppercase tracking-wide">
              Your Details
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Business or 3PL Name"
                className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5">
                Contact Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Full Name"
                className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="name@company.com"
                className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="(416) 000-0000"
                className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors rounded-xl"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-mono uppercase text-[#373737] mb-1.5">
              Additional Notes / Handling Instructions
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Any specific delivery instructions, timing requirements, or broker notes..."
              className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#DDDEDF] text-[#050505] placeholder-[#6A6A6A] text-sm focus:outline-none focus:border-[#BF0505] transition-colors resize-none rounded-xl"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#DDDEDF] bg-[#F7F7F7] text-[#050505] text-xs font-mono uppercase tracking-wider hover:bg-[#EDEDED] transition-colors rounded-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#BF0505] hover:bg-[#C5161D] text-white text-xs font-mono uppercase tracking-wider transition-colors disabled:opacity-50 rounded-full"
            >
              {loading ? "Transmitting..." : "Submit Quote Request"}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
