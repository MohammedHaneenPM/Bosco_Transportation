import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/quote/QuoteModal";
import LenisProvider from "@/components/ui/LenisProvider";
import { getLogisticsStructuredData } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#0B0D0F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://boscotransport.ca"),
  title: {
    default: "Bosco Transport Inc. | Transportation & Logistics Ontario",
    template: "%s | Bosco Transport Inc.",
  },
  description:
    "Founded in 2016, Bosco Transport Inc. is an Ontario-based freight transportation and logistics company providing dependable FTL, LTL, dedicated, and specialized solutions across Ontario and the GTA.",
  keywords: [
    "Bosco Transport",
    "Ontario trucking company",
    "GTA freight transportation",
    "FTL carrier Ontario",
    "LTL transport Toronto",
    "Dedicated transportation Ontario",
    "Electronics freight transport Canada",
    "High-value cargo trucking Ontario",
    "Straight truck delivery GTA",
  ],
  authors: [{ name: "Bosco Transport Inc." }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://boscotransport.ca",
    siteName: "Bosco Transport Inc.",
    title: "Bosco Transport Inc. | Transportation & Logistics Ontario",
    description:
      "Reliable transportation solutions across Ontario and the GTA. Built on trust, driven by professionalism.",
    images: [
      {
        url: "/HeroImage.webp",
        width: 1200,
        height: 630,
        alt: "Bosco Transport Inc. Commercial Truck Fleet",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = getLogisticsStructuredData();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className="min-h-screen bg-[#0B0D0F] text-white flex flex-col antialiased selection:bg-[#FF5722] selection:text-white"
        suppressHydrationWarning
      >
        <LenisProvider>
          <Header />
          {children}
          <Footer />
          <QuoteModal />
        </LenisProvider>
      </body>
    </html>
  );
}
