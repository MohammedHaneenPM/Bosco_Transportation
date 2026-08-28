import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/quote/QuoteModal";
import LenisProvider from "@/components/ui/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";

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
  title: "Bosco Transport Inc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${openSans.className} ${openSans.variable} min-h-screen bg-[#F6F7F8] text-[#050505] flex flex-col antialiased selection:bg-[#BF0505] selection:text-white`}
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
