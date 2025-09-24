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
        "@id": "https://bitumasphalt.com/#organization",
        "name": "BitumAsphalt",
        "url": "https://bitumasphalt.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bitumasphalt.com/logo.png",
          "width": 400,
          "height": 100
        },
        "description": "Premier bitumen and asphalt supplier with 25 years of team leadership in petroleum products value creation, specializing in high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure development.",
        "foundingDate": "2001",
        "numberOfEmployees": "50-200",
        "industry": "Petroleum Products Manufacturing, Bitumen Production, Asphalt Manufacturing",
        "slogan": "Creating wealth in the oil chain through knowledge, experience, and collective creativity",
        "knowsAbout": [
          "Bitumen Production",
          "Asphalt Manufacturing", 
          "Petroleum Products Manufacturing",
          "High-Value Petroleum Products",
          "Environmentally Friendly Petroleum Derivatives",
          "Petroleum Products Value Creation",
          "Bitumen Trading",
          "Asphalt Trading",
          "Petroleum Derivatives Production",
          "Oil Chain Wealth Creation"
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
          "telephone": "+1-604-XXX-XXXX",
          "contactType": "customer service",
          "availableLanguage": ["English", "French"]
        },
        "sameAs": getSocialMediaUrls()
      },
      {
        "@type": "Person",
        "@id": "https://bitumasphalt.com/#person",
        "name": "Vahid Sheikhi",
        "jobTitle": "Chief Executive Officer",
        "worksFor": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "description": "25 years of team leadership in petroleum products value creation, specializing in producing high-value petroleum products and environmentally friendly petroleum derivatives.",
        "alumniOf": "Advanced Business Management and Leadership",
        "knowsAbout": [
          "Bitumen Production",
          "Asphalt Manufacturing",
          "Petroleum Products Value Creation",
          "High-Value Petroleum Products",
          "Environmentally Friendly Petroleum Derivatives",
          "Team Building for Innovation",
          "Oil Chain Wealth Creation",
          "Petroleum Products Manufacturing",
          "Bitumen Trading",
          "Asphalt Trading",
          "Petroleum Derivatives Production"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bitumasphalt.com/#website",
        "url": "https://bitumasphalt.com",
        "name": "BitumAsphalt",
        "description": "Premier petroleum products and bitumen solutions company",
        "publisher": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "inLanguage": ["en", "fr"]
      },
      {
        "@type": "WebPage",
        "@id": "https://bitumasphalt.com/#webpage",
        "url": "https://bitumasphalt.com",
        "name": "BitumAsphalt | Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing",
        "isPartOf": {
          "@id": "https://bitumasphalt.com/#website"
        },
        "about": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "description": "Leading bitumen and asphalt supplier with 25 years of expertise in high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure development.",
        "inLanguage": locale
      },
      {
        "@type": "Service",
        "@id": "https://bitumasphalt.com/#service",
        "name": "Petroleum Products Manufacturing & Trading",
        "description": "High-value petroleum products, environmentally friendly petroleum derivatives, and innovative bitumen solutions for global infrastructure development.",
        "provider": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Canada"
          },
          {
            "@type": "Country", 
            "name": "United Arab Emirates"
          },
          {
            "@type": "Country",
            "name": "Global"
          }
        ],
        "serviceType": [
          "Petroleum Products Manufacturing",
          "Bitumen Production",
          "Asphalt Manufacturing",
          "Bitumen Trading",
          "Asphalt Trading",
          "Petroleum Derivatives Trading",
          "High-Value Petroleum Products",
          "Environmentally Friendly Petroleum Derivatives",
          "Premium Bitumen Solutions",
          "Quality Asphalt Solutions",
          "Petroleum Products Wholesale",
          "Bitumen Wholesale",
          "Asphalt Wholesale",
          "Petroleum Products Distribution",
          "Bitumen Distribution",
          "Asphalt Distribution"
        ]
      },
      {
        "@type": "Product",
        "name": "High-Value Petroleum Products",
        "description": "Premium petroleum products manufactured with 25 years of expertise in petroleum products value creation",
        "manufacturer": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "category": "Petroleum Products",
        "brand": {
          "@id": "https://bitumasphalt.com/#organization"
        }
      },
      {
        "@type": "Product",
        "name": "Environmentally Friendly Petroleum Derivatives",
        "description": "Sustainable petroleum derivatives produced through innovative team building and petroleum products development",
        "manufacturer": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "category": "Petroleum Derivatives",
        "brand": {
          "@id": "https://bitumasphalt.com/#organization"
        }
      },
      {
        "@type": "Product",
        "name": "Premium Bitumen",
        "description": "High-quality bitumen products for road construction and infrastructure development",
        "manufacturer": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "category": "Bitumen",
        "brand": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Grade",
            "value": "Multiple grades available"
          },
          {
            "@type": "PropertyValue", 
            "name": "Application",
            "value": "Road construction, infrastructure, waterproofing"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Quality Asphalt",
        "description": "Premium asphalt products for road construction and infrastructure projects",
        "manufacturer": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "category": "Asphalt",
        "brand": {
          "@id": "https://bitumasphalt.com/#organization"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Type",
            "value": "Hot mix, cold mix, polymer modified"
          },
          {
            "@type": "PropertyValue",
            "name": "Application", 
            "value": "Road construction, parking lots, driveways"
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
