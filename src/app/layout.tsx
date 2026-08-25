import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/quote/QuoteModal";
import LenisProvider from "@/components/ui/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import { getLogisticsStructuredData } from "@/lib/seo";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const viewport: Viewport = {
  themeColor: "#F6F7F8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://boscotransport.ca"),
  title: {
    default: "Bosco Transport Inc. | Freight Transportation & Logistics Ontario",
    template: "%s | Bosco Transport Inc.",
  },
  description:
    "Founded in 2016, Bosco Transport Inc. is an Ontario-based freight transportation and logistics company providing dependable FTL, LTL, dedicated, and specialized solutions across Ontario and the GTA.",
  keywords: [
    "Ontario freight transportation",
    "GTA transportation",
    "freight carrier Ontario",
    "transportation company Ontario",
    "logistics services Ontario",
    "FTL carrier Ontario",
    "LTL transport Toronto",
    "Dedicated transportation Ontario",
    "High-value cargo trucking Ontario",
  ],
  authors: [{ name: "Bosco Transport Inc." }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://boscotransport.ca",
    siteName: "Bosco Transport Inc.",
    title: "Bosco Transport Inc. | Freight Transportation & Logistics Ontario",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${openSans.className} ${openSans.variable} min-h-screen bg-[#F6F7F8] text-[#050505] flex flex-col antialiased selection:bg-[#3b5fc2] selection:text-white`}
        suppressHydrationWarning
      >
        <LenisProvider>
          <Header />
          {children}
          <Footer />
          <QuoteModal />
          <CustomCursor />
        </LenisProvider>
      </body>
    </html>
  );
}
