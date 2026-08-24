export function getLogisticsStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    name: "Bosco Transport Inc.",
    alternateName: "Bosco Transportation",
    description:
      "Ontario-based transportation and logistics company providing dependable FTL, LTL, dedicated, and specialized freight transportation solutions since 2016.",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Ontario",
      },
      {
        "@type": "AdministrativeArea",
        name: "Greater Toronto Area (GTA)",
      },
    ],
    serviceType: [
      "Full Truckload (FTL) Transportation",
      "Less-Than-Truckload (LTL) Transportation",
      "Dedicated Transportation",
      "GTA & City Deliveries",
      "Power-Only Transportation",
      "Specialized Freight Transportation",
      "High-Value & Electronics Cargo Transportation",
    ],
    foundingDate: "2016",
    knowsAbout: [
      "Freight Transportation",
      "Ontario Logistics",
      "Commercial Trucking",
      "Cargo Security",
      "Tailgate Deliveries",
    ],
  };
}
