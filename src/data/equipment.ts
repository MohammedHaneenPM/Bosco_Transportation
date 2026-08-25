export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  application: string;
  features: string[];
  image: string;
  altText?: string;
}

export const FLEET_EQUIPMENT: EquipmentItem[] = [
  {
    id: "dry-van-53",
    name: "53' Dry Van Trailer",
    altText: "53-foot dry van trailer for Ontario freight transportation",
    category: "Highway & Regional",
    application: "Highway freight, general cargo, and scheduled deliveries across Ontario corridors.",
    features: [
      "Full 53-ft high-cube volume",
      "Weather-sealed & clean interior",
      "Standard palletized freight capacity",
      "Load lock & e-track securement",
    ],
    image: "/images/53-ft Dry Van Trailers.webp",
  },
  {
    id: "straight-truck-26",
    name: "26' Straight Truck",
    altText: "26-foot straight truck for GTA deliveries",
    category: "City & Regional",
    application: "Versatile for city deliveries, urban pickups, retail distribution, and tight dock spaces.",
    features: [
      "Agile urban maneuverability",
      "Dock-height loading compatibility",
      "City center & commercial delivery",
      "Driver-assisted offloading ready",
    ],
    image: "/images/26' Straight Truck.webp",
  },
  {
    id: "flatbed-trailer",
    name: "Flatbed Trailer",
    altText: "Flatbed trailer for specialized freight transportation",
    category: "Specialized & Industrial",
    application: "Ideal for oversized, side-loaded, construction, or non-standard industrial freight.",
    features: [
      "Open-deck side & crane loading",
      "Heavy-duty strap & chain securement",
      "Dimensional & machinery cargo",
      "Direct job-site transit",
    ],
    image: "/images/Flatbed Trailer.webp",
  },
  {
    id: "tailgate-truck",
    name: "Tailgate Equipped Truck",
    altText: "Tailgate-equipped truck for delivery operations",
    category: "Specialized Delivery",
    application: "Safe and efficient loading/unloading at locations without dedicated loading docks or forklifts.",
    features: [
      "Heavy-duty hydraulic power lift",
      "Ground-level freight placement",
      "Ideal for retail & job-site delivery",
      "Driver-operated safe handling",
    ],
    image: "/images/Tailgate-Equipped Trucks.webp",
  },
  {
    id: "day-cab-tractor",
    name: "Day Cab Tractor",
    altText: "Day cab tractor for local and regional transportation",
    category: "Local & Regional Power",
    application: "High-efficiency tractors tailored for local GTA pickups, shuttles, and inter-city freight turns.",
    features: [
      "Optimal urban visibility & turning",
      "High power-to-weight ratio",
      "Dedicated lane & power-only service",
      "Electronic logging & GPS tracking",
    ],
    image: "/images/Day Cabs.webp",
  },
  {
    id: "sleeper-tractor",
    name: "Sleeper Tractor",
    altText: "Sleeper tractor for highway freight transportation",
    category: "Highway Transport",
    application: "Highway long-haul power unit equipped for regional and extended Ontario transit runs.",
    features: [
      "Comfort cab for multi-day routes",
      "Continuous GPS & telematics tracking",
      "High-mileage highway dependability",
      "Safety-certified commercial specs",
    ],
    image: "/images/Sleeper Tractors.webp",
  },
  {
    id: "pickup-specialized",
    name: "Pickup Truck & Specialized Units",
    category: "Hot-Shot & Expedited",
    application: "Expedited small-parcel transit, rapid response, and specialized support equipment.",
    features: [
      "Rapid dispatch capability",
      "Small dimensional cargo transit",
      "Urgent emergency transport",
      "Versatile logistics support",
    ],
    image: "/images/Pickup Trucks.webp",
  },
];
