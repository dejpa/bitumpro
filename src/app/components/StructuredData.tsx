"use client";

import Script from 'next/script';
import { getSocialMediaUrls } from '../constants/socialMedia';

interface StructuredDataProps {
  locale?: string;
}

export default function StructuredData({ locale = 'en' }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bitumpro.com/#organization",
        "name": "Bitumpro",
        "url": "https://bitumpro.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bitumpro.com/logo.png",
          "width": 400,
          "height": 100
        },
        "description": "British Columbia-based manufacturing startup developing Nano Polymer Modified Bitumen (Nano PMB) for durable, climate-resilient infrastructure.",
        "foundingDate": "2025",
        "numberOfEmployees": "7-10",
        "industry": "Nano Polymer Modified Bitumen Manufacturing, Asphalt Binder Technology, Infrastructure Materials",
        "slogan": "High-performance nano-modified binders for more durable infrastructure",
        "knowsAbout": [
          "Bitumen Production",
          "Nano Polymer Modified Bitumen",
          "Polymer Modified Bitumen",
          "Nano-Modified Asphalt Binders",
          "Asphalt Binder Manufacturing",
          "Pavement Durability",
          "Rutting Resistance",
          "Freeze-Thaw Resistance",
          "Quality Control",
          "Infrastructure Materials"
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "1470 Camelot RD",
            "addressLocality": "West Vancouver",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V7S 2N2"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Business Bay",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-778-877-1052",
          "contactType": "customer service",
          "availableLanguage": ["English", "French"]
        },
        "sameAs": getSocialMediaUrls()
      },
      {
        "@type": "Person",
        "@id": "https://bitumpro.com/#person",
        "name": "Vahid Sheikhi",
        "jobTitle": "Chief Executive Officer",
        "worksFor": {
          "@id": "https://bitumpro.com/#organization"
        },
        "description": "Over 25 years of executive and industrial experience in bitumen, petroleum refining, polymer-modified and nano-bitumen production, international logistics, quality control, and R&D.",
        "alumniOf": "MBA in Entrepreneurship, University of Tehran",
        "knowsAbout": [
          "Bitumen Production",
          "Nano Polymer Modified Bitumen",
          "Polymer Modified Bitumen",
          "Nano-Bitumen Production",
          "Petroleum Refining",
          "International Logistics",
          "Quality Control",
          "Research and Development",
          "Industrial Plant Operations"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bitumpro.com/#website",
        "url": "https://bitumpro.com",
        "name": "Bitumpro",
        "description": "Nano Polymer Modified Bitumen manufacturer and high-performance asphalt binder technology company",
        "publisher": {
          "@id": "https://bitumpro.com/#organization"
        },
        "inLanguage": ["en", "fr"]
      },
      {
        "@type": "WebPage",
        "@id": "https://bitumpro.com/#webpage",
        "url": "https://bitumpro.com",
        "name": "Bitumpro | Canadian Nano PMB Manufacturer",
        "isPartOf": {
          "@id": "https://bitumpro.com/#website"
        },
        "about": {
          "@id": "https://bitumpro.com/#organization"
        },
        "description": "British Columbia-based manufacturer of Nano Polymer Modified Bitumen for durable, climate-resilient infrastructure.",
        "inLanguage": locale
      },
      {
        "@type": "Service",
        "@id": "https://bitumpro.com/#service",
        "name": "Nano Polymer Modified Bitumen Manufacturing",
        "description": "Production and technical support for Nano PMB, a high-performance asphalt binder designed for longer pavement life, rutting resistance, cracking resistance, and climate resilience.",
        "provider": {
          "@id": "https://bitumpro.com/#organization"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Canada"
          },
          {
            "@type": "Country", 
            "name": "United States"
          },
          {
            "@type": "Continent",
            "name": "South America"
          }
        ],
        "serviceType": [
          "Nano PMB Manufacturing",
          "Polymer Modified Bitumen",
          "Asphalt Binder Technology",
          "Pilot Batches",
          "Quality Control Testing",
          "Technical Field Support",
          "Infrastructure Materials"
        ]
      },
      {
        "@type": "Product",
        "name": "Nano Polymer Modified Bitumen",
        "description": "Nano-enhanced polymer modified asphalt binder engineered for rutting resistance, cracking resistance, thermal stability, elasticity, and longer pavement life",
        "manufacturer": {
          "@id": "https://bitumpro.com/#organization"
        },
        "category": "Asphalt Binder",
        "brand": {
          "@id": "https://bitumpro.com/#organization"
        }
      },
      {
        "@type": "Product",
        "name": "Nano Bitumen Emulsions",
        "description": "Future product line planned for urban resurfacing, cold mix applications, and pavement preservation",
        "manufacturer": {
          "@id": "https://bitumpro.com/#organization"
        },
        "category": "Bitumen Emulsion",
        "brand": {
          "@id": "https://bitumpro.com/#organization"
        }
      },
      {
        "@type": "Product",
        "name": "Nano Asphalt Sealers",
        "description": "Future nano-enhanced asphalt sealers planned for waterproofing, surface protection, and pavement preservation",
        "manufacturer": {
          "@id": "https://bitumpro.com/#organization"
        },
        "category": "Asphalt Sealer",
        "brand": {
          "@id": "https://bitumpro.com/#organization"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Roadmap",
            "value": "Future product line"
          },
          {
            "@type": "PropertyValue", 
            "name": "Application",
            "value": "Waterproofing, pavement preservation, surface protection"
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
