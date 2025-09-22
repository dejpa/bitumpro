import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitumAsphalt | Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing | High-Value Petroleum Derivatives",
  description: "Leading bitumen and asphalt supplier with 25 years of petroleum products expertise. We manufacture high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure. Expert petroleum products value creation and innovative asphalt manufacturing.",
  keywords: "bitumen supplier, asphalt manufacturer, petroleum products, bitumen production, asphalt production, petroleum derivatives, high-value petroleum products, environmentally friendly petroleum derivatives, petroleum products value creation, bitumen solutions, asphalt solutions, petroleum industry, bitumen trading, asphalt trading, petroleum products manufacturing, bitumen manufacturing, asphalt manufacturing, petroleum derivatives production, petroleum products innovation, sustainable petroleum, petroleum export, bitumen export, asphalt export, petroleum products team leadership, petroleum derivatives production, petroleum industry expertise, petroleum products development, petroleum solutions, petroleum products sustainability, petroleum industry leadership, petroleum products excellence, premium bitumen, quality asphalt, petroleum products wholesale, bitumen wholesale, asphalt wholesale, petroleum products distribution, bitumen distribution, asphalt distribution, petroleum products supply chain, bitumen supply chain, asphalt supply chain, petroleum products global, bitumen global, asphalt global, petroleum products Canada, bitumen Canada, asphalt Canada, petroleum products UAE, bitumen UAE, asphalt UAE, petroleum products international, bitumen international, asphalt international",
  authors: [{ name: "BitumAsphalt Team" }],
  creator: "BitumAsphalt",
  publisher: "BitumAsphalt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bitumasphalt.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fr': '/fr',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Petroleum Products & Bitumen Manufacturing',
  classification: 'Petroleum Industry, Bitumen Production, Asphalt Manufacturing',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "BitumAsphalt | Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing",
    description: "Leading bitumen and asphalt supplier with 25 years of petroleum products expertise. We manufacture high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure development.",
    url: "https://bitumasphalt.com",
    siteName: "BitumAsphalt",
    images: [
      {
        url: "https://bitumasphalt.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BitumAsphalt - Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing",
      },
    ],
    type: "website",
    locale: "en_US",
    countryName: "Canada",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BitumAsphalt",
    creator: "@BitumAsphalt",
    title: "Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing - 25 Years of Excellence",
    description: "Leading bitumen and asphalt supplier specializing in high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure development.",
    images: ["https://bitumasphalt.com/twitter-card.jpg"],
  },
  other: {
    'application-name': 'BitumAsphalt',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'BitumAsphalt',
    'msapplication-TileColor': '#1a1a1a',
    'theme-color': '#1a1a1a',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Header/>
        <main className="pt-20">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
