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
  title: "Bitumpro | Canadian Nano PMB Manufacturer | High-Performance Asphalt Binders",
  description: "Bitumpro Products Inc. develops and manufactures Nano Polymer Modified Bitumen (Nano PMB) in British Columbia for durable, climate-resilient infrastructure with improved rutting resistance, cracking resistance, and lower lifecycle costs.",
  keywords: "Nano PMB, Nano Polymer Modified Bitumen, polymer modified bitumen, nano modified asphalt binder, asphalt binder manufacturer Canada, bitumen manufacturer British Columbia, high performance asphalt binder, pavement durability, rutting resistance, cracking resistance, freeze thaw resistance, climate resilient infrastructure, road construction materials, asphalt mix plants, municipal road projects, highway contractors, nano bitumen emulsion, nano asphalt sealer",
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
  category: 'Infrastructure Materials & Nano Modified Bitumen Manufacturing',
  classification: 'Nano PMB Manufacturing, Asphalt Binder Technology, Infrastructure Materials',
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
    title: "Bitumpro | Canadian Nano PMB Manufacturer",
    description: "British Columbia-based manufacturer of Nano Polymer Modified Bitumen for durable, climate-resilient infrastructure.",
    url: "https://bitumpro.com",
    siteName: "Bitumpro",
    images: [
      {
        url: "https://bitumpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bitumpro - Canadian Nano PMB Manufacturer",
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
    title: "Canadian Nano PMB Manufacturer | High-Performance Asphalt Binders",
    description: "Nano Polymer Modified Bitumen engineered for longer pavement life, climate resilience, and lower lifecycle maintenance costs.",
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
