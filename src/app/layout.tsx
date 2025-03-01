import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitumAsphalt | Innovative Bitumen Solutions & Sustainable Asphalt Products",
  description: "BitumAsphalt is a leading provider of high-quality bitumen and asphalt solutions, offering innovative and sustainable products for infrastructure and road construction. With a commitment to excellence, we serve the Canadian and international markets with reliable and eco-friendly bitumen solutions.",
  keywords: "Bitumen, Asphalt, Bitumen Products, Asphalt Solutions, Sustainable Bitumen, Road Construction Materials, Infrastructure Development, Industrial Bitumen, High-Quality Asphalt, Bitumen Supplier, Asphalt Manufacturer, Eco-Friendly Bitumen, Canada Bitumen Industry, Bitumen Exporter",
  icons: {
    icon: "/favicon.ico", // Favicon اصلی
    shortcut: "/favicon-16x16.png", // Favicon برای Shortcut
    apple: "/apple-touch-icon.png", // Favicon برای دستگاه‌های Apple
  },
  openGraph: {
    title: "BitumAsphalt | Innovative Bitumen & Asphalt Solutions",
    description:  "BitumAsphalt provides high-quality, sustainable bitumen and asphalt products for infrastructure and road construction. Discover our innovative solutions for a greener future.",
    url: "https://bitumasphalt.yourdomain.com",
    siteName: "BitumAsphalt",
    images: [
      {
        url: "https://bitumasphalt.yourdomain.com",
        width: 1200,
        height: 630,
        alt: "Eco-Friendly Bio-Oil Mulch",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BitumAsphalt",
    title: "Innovative Bitumen & Asphalt Solutions for Sustainable Infrastructure",
    description: "Discover BitumAsphalt's high-quality, eco-friendly bitumen and asphalt products designed for modern infrastructure and road construction.",
    // image: "https://mulch.yourdomain.com/images/twitter-card.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
    </body>
  </html>
  );
}
