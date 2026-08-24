export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  iconName: string;
  isCore: boolean;
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "ftl",
    number: "01",
    title: "Full Truckload (FTL)",
    shortDesc: "Dedicated trucks for large shipments with direct, scheduled, and customer-specific delivery.",
    fullDesc:
      "Reliable full-load transportation solutions across Ontario and the GTA. Designed for scheduled freight, customer-specific dedicated routes, and high-volume commodity transport with prompt dispatch and direct transit.",
    highlights: [
      "Scheduled & dedicated freight routes",
      "Direct transit with minimal handling",
      "Appointment-compliant scheduling",
      "Full 53-ft dry van capacity",
    ],
    iconName: "Truck",
    isCore: true,
  },
  {
    id: "ltl",
    number: "02",
    title: "Less-Than-Truckload (LTL)",
    shortDesc: "Flexible LTL solutions to move smaller shipments and partial loads efficiently.",
    fullDesc:
      "Cost-effective transportation for partial loads, palletized freight, and smaller shipments. We provide reliable consolidation, careful handling, and dependable scheduling across Ontario regional corridors.",
    highlights: [
      "Cost-effective partial load solutions",
      "Tailgate delivery options available",
      "Tight scheduling across Ontario hubs",
      "Careful freight handling & load security",
    ],
    iconName: "Boxes",
    isCore: true,
  },
  {
    id: "dedicated",
    number: "03",
    title: "Dedicated Transportation",
    shortDesc: "Custom dedicated solutions designed around your business lanes and ongoing requirements.",
    fullDesc:
      "Assigned tractors, trailers, and experienced professional commercial drivers dedicated to regular customer lanes and long-term recurring transportation programs.",
    highlights: [
      "Assigned drivers and equipment",
      "Consistent recurring schedules & lanes",
      "Seamless integration into customer supply chains",
      "Tailored operational reporting",
    ],
    iconName: "Handshake",
    isCore: true,
  },
  {
    id: "gta-city",
    number: "04",
    title: "GTA & City Deliveries",
    shortDesc: "Local and regional deliveries across the GTA and surrounding metropolitan areas.",
    fullDesc:
      "Proven local operations specializing in complex urban traffic, multi-stop deliveries, congested commercial docks, and time-critical urban freight across Greater Toronto.",
    highlights: [
      "Multi-stop city delivery routing",
      "Tight urban dock navigation",
      "Same-day & scheduled GTA distribution",
      "Straight truck & day cab versatility",
    ],
    iconName: "MapPin",
    isCore: true,
  },
  {
    id: "power-only",
    number: "05",
    title: "Power-Only Transportation",
    shortDesc: "Tractors and professional drivers ready to move your customer-owned or leased trailers.",
    fullDesc:
      "Flexible power-only tractor services to pull customer-owned dry vans, specialized trailers, or broker equipment across scheduled regional routes with experienced commercial drivers.",
    highlights: [
      "Highway tractors & day cabs available",
      "Customer-owned & leased trailer transport",
      "Experienced licensed commercial operators",
      "Rapid deployment for surge capacity",
    ],
    iconName: "Cpu",
    isCore: true,
  },
  {
    id: "specialized",
    number: "06",
    title: "Specialized Freight",
    shortDesc: "Secure handling and coordinated transport for high-value, oversized, and unique shipments.",
    fullDesc:
      "Customized logistics solutions for freight requiring specialized trailers, enhanced securement, tailgate offloading, or driver assistance during pickup and delivery.",
    highlights: [
      "High-value cargo security procedures",
      "Non-standard dimensional handling",
      "Tailgate & driver-assisted offloading",
      "Comprehensive proof-of-delivery paperwork",
    ],
    iconName: "ShieldAlert",
    isCore: true,
  },
];

export const ADDITIONAL_CAPABILITIES: ServiceItem[] = [
  {
    id: "straight-truck",
    number: "07",
    title: "26-ft Straight Truck Service",
    shortDesc: "Agile delivery for tight city docks, retail stores, and locations where 53-ft access is restricted.",
    fullDesc: "Versatile medium-duty straight trucks equipped to navigate tight metropolitan centers and commercial retail locations.",
    highlights: ["Urban dock accessibility", "Ideal for urban distribution", "Fast loading & turnaround"],
    iconName: "Truck",
    isCore: false,
  },
  {
    id: "tailgate",
    number: "08",
    title: "Tailgate Deliveries",
    shortDesc: "Hydraulic tailgate-equipped vehicles for delivery sites without ground docks or forklifts.",
    fullDesc: "Safe, ground-level loading and unloading with heavy-duty hydraulic tailgates operated by trained drivers.",
    highlights: ["Ground-level offloading", "Job-site and retail delivery", "Driver-assisted offloading"],
    iconName: "Layers",
    isCore: false,
  },
  {
    id: "dry-van",
    number: "09",
    title: "Dry Van Transportation",
    shortDesc: "Weather-sealed, secure 53-ft dry van logistics for general commodities, retail, and packaged freight.",
    fullDesc: "Standard clean, dry, secure 53-foot dry van trailers protecting freight from weather and transit hazards.",
    highlights: ["Clean, dry, secure interiors", "High-capacity load volume", "Standard Ontario freight lanes"],
    iconName: "Package",
    isCore: false,
  },
  {
    id: "hand-bombing",
    number: "10",
    title: "Hand-Bombing & Driver-Assisted",
    shortDesc: "Driver-assisted manual loading and unloading for shipments requiring physical handling at destination.",
    fullDesc: "Dedicated driver support for piece-by-piece unstacking, customer-site placement, and specialized unloading.",
    highlights: ["Manual piece handling", "Inside delivery assistance", "Customer-site procedural care"],
    iconName: "Users",
    isCore: false,
  },
  {
    id: "pickup-delivery",
    number: "11",
    title: "Pickup & Delivery Services",
    shortDesc: "Reliable scheduled first-mile pickups and last-mile deliveries across Ontario commercial centers.",
    fullDesc: "Timely dispatch coordinating origin pickups with destination appointments and real-time status tracking.",
    highlights: ["Scheduled pickup windows", "Immediate dispatch communication", "Seamless last-mile completion"],
    iconName: "Clock",
    isCore: false,
  },
  {
    id: "time-sensitive",
    number: "12",
    title: "Time-Sensitive Freight",
    shortDesc: "Expedited transit and prioritized scheduling for urgent commercial shipments.",
    fullDesc: "Priority routing and continuous dispatch supervision for critical production lines, urgent orders, and tight appointments.",
    highlights: ["Expedited transit protocols", "Direct driver communication", "Strict appointment compliance"],
    iconName: "Zap",
    isCore: false,
  },
  {
    id: "broker-3pl",
    number: "13",
    title: "Broker & 3PL Transportation Support",
    shortDesc: "Dependable carrier partnerships for freight brokers and third-party logistics providers.",
    fullDesc: "Trusted asset-based capacity providing accurate updates, professional customer representation, and prompt POD documentation.",
    highlights: ["Seamless broker carrier relations", "Prompt POD & documentation return", "Professional customer-site demeanor"],
    iconName: "Briefcase",
    isCore: false,
  },
];
