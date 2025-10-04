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
  title: "Bitumpro | Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing | High-Value Petroleum Derivatives",
  description: "Leading bitumen and asphalt supplier with 25 years of petroleum products expertise. We manufacture high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure. Expert petroleum products value creation and innovative asphalt manufacturing.",
  keywords: "bitumen supplier, asphalt manufacturer, petroleum products, bitumen production, asphalt production, petroleum derivatives, high-value petroleum products, environmentally friendly petroleum derivatives, petroleum products value creation, bitumen solutions, asphalt solutions, petroleum industry, bitumen trading, asphalt trading, petroleum products manufacturing, bitumen manufacturing, asphalt manufacturing, petroleum derivatives production, petroleum products innovation, sustainable petroleum, petroleum export, bitumen export, asphalt export, petroleum products team leadership, petroleum derivatives production, petroleum industry expertise, petroleum products development, petroleum solutions, petroleum products sustainability, petroleum industry leadership, petroleum products excellence, premium bitumen, quality asphalt, petroleum products wholesale, bitumen wholesale, asphalt wholesale, petroleum products distribution, bitumen distribution, asphalt distribution, petroleum products supply chain, bitumen supply chain, asphalt supply chain, petroleum products global, bitumen global, asphalt global, petroleum products Canada, bitumen Canada, asphalt Canada, petroleum products UAE, bitumen UAE, asphalt UAE, petroleum products international, bitumen international, asphalt international",
  authors: [{ name: "Bitumpro Team" }],
  creator: "Bitumpro",
  publisher: "Bitumpro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bitumpro.com'),
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
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "icon", 
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  openGraph: {
    title: "Bitumpro | Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing",
    description: "Leading bitumen and asphalt supplier with 25 years of petroleum products expertise. We manufacture high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure development.",
    url: "https://bitumpro.com",
    siteName: "Bitumpro",
    images: [
      {
        url: "https://bitumpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bitumpro - Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing",
      },
    ],
    type: "website",
    locale: "en_US",
    countryName: "Canada",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bitumpro",
    creator: "@Bitumpro",
    title: "Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing - 25 Years of Excellence",
    description: "Leading bitumen and asphalt supplier specializing in high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure development.",
    images: ["https://bitumpro.com/twitter-card.jpg"],
  },
  manifest: "/site.webmanifest",
  other: {
    'application-name': 'Bitumpro',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Bitumpro',
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
