import { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  keywords: string[]
}

export const generatePageMetadata = (
  page: string,
  locale: string = 'en'
): Metadata => {
  const baseUrl = 'https://bitumpro.com'
  const isFrench = locale === 'fr'
  
  const metadataMap: Record<string, PageMetadata> = {
    home: {
      title: isFrench 
        ? "Bitumpro | Fabricant canadien de Nano PMB | Liants asphaltique haute performance"
        : "Bitumpro | Canadian Nano PMB Manufacturer | High-Performance Asphalt Binders",
      description: isFrench
        ? "Bitumpro développe et fabrique du bitume polymère modifié aux nanoparticules (Nano PMB) en Colombie-Britannique pour des chaussées plus durables, résilientes au climat et économiques sur le cycle de vie."
        : "Bitumpro develops and manufactures Nano Polymer Modified Bitumen (Nano PMB) in British Columbia for more durable, climate-resilient pavements with lower lifecycle costs.",
      keywords: [
        'bitumen supplier', 'asphalt manufacturer', 'petroleum products', 'bitumen production', 
        'asphalt production', 'petroleum derivatives', 'high-value petroleum products',
        'environmentally friendly petroleum derivatives', 'petroleum products value creation',
        'bitumen solutions', 'asphalt solutions', 'petroleum industry', 'bitumen trading',
        'asphalt trading', 'petroleum products manufacturing', 'bitumen manufacturing',
        'asphalt manufacturing', 'petroleum derivatives production', 'petroleum products innovation',
        'sustainable petroleum', 'petroleum export', 'bitumen export', 'asphalt export',
        'premium bitumen', 'quality asphalt', 'petroleum products wholesale', 'bitumen wholesale',
        'asphalt wholesale', 'petroleum products distribution', 'bitumen distribution',
        'asphalt distribution', 'petroleum products supply chain', 'bitumen supply chain',
        'asphalt supply chain', 'petroleum products global', 'bitumen global', 'asphalt global'
      ]
    },
    leadership: {
      title: isFrench
        ? "Équipe de direction | Expertise en bitume, Nano PMB et innovation industrielle"
        : "Leadership Team | Bitumen, Nano PMB, and Industrial Innovation Expertise",
      description: isFrench
        ? "Découvrez la direction de Bitumpro, menée par Vahid Sheikhi, avec plus de 25 ans d'expérience dans le bitume, le raffinage, la R&D, le contrôle qualité et les marchés internationaux."
        : "Meet Bitumpro's leadership, led by Vahid Sheikhi, with 25+ years of experience in bitumen, refining, R&D, quality control, and international markets.",
      keywords: [
        'petroleum products leadership', 'bitumen industry leadership', 'asphalt industry leadership',
        'petroleum products team leadership', 'petroleum products value creation', 'oil chain wealth creation',
        'petroleum industry expertise', 'bitumen industry expertise', 'asphalt industry expertise',
        'petroleum products innovation', 'bitumen innovation', 'asphalt innovation',
        'petroleum products development', 'bitumen development', 'asphalt development',
        'petroleum products sustainability', 'bitumen sustainability', 'asphalt sustainability',
        'petroleum industry leadership', 'petroleum products excellence', 'bitumen excellence',
        'asphalt excellence', 'petroleum products management', 'bitumen management',
        'asphalt management', 'petroleum products strategy', 'bitumen strategy', 'asphalt strategy'
      ]
    },
    products: {
      title: isFrench
        ? "Produits | Nano PMB | Nano-émulsions bitumineuses | Scellants d'asphalte nano"
        : "Products | Nano PMB | Nano Bitumen Emulsions | Nano Asphalt Sealers",
      description: isFrench
        ? "Découvrez la feuille de route produit de Bitumpro: Nano Polymer Modified Bitumen, futures nano-émulsions bitumineuses et scellants d'asphalte nano pour infrastructures durables."
        : "Explore Bitumpro's product roadmap: Nano Polymer Modified Bitumen, future Nano Bitumen Emulsions, and Nano Asphalt Sealers for durable infrastructure.",
      keywords: [
        'premium bitumen', 'quality asphalt', 'high-value petroleum products', 'bitumen products',
        'asphalt products', 'petroleum products', 'bitumen grades', 'asphalt types',
        'petroleum derivatives', 'environmentally friendly petroleum derivatives',
        'bitumen solutions', 'asphalt solutions', 'petroleum solutions', 'bitumen applications',
        'asphalt applications', 'petroleum applications', 'bitumen specifications',
        'asphalt specifications', 'petroleum specifications', 'bitumen quality',
        'asphalt quality', 'petroleum quality', 'bitumen performance', 'asphalt performance',
        'petroleum performance', 'bitumen durability', 'asphalt durability', 'petroleum durability'
      ]
    },
    sustainability: {
      title: isFrench
        ? "Durabilité | Chaussées plus durables et coûts de cycle de vie réduits"
        : "Sustainability | Longer-Lasting Pavements and Lower Lifecycle Costs",
      description: isFrench
        ? "La durabilité chez Bitumpro repose sur des matériaux plus durables, une production locale, moins de cycles de maintenance et une meilleure efficacité des infrastructures."
        : "Bitumpro's sustainability approach focuses on durable materials, local production, fewer maintenance cycles, and improved infrastructure efficiency.",
      keywords: [
        'sustainable petroleum', 'environmentally friendly petroleum products', 'sustainable bitumen',
        'sustainable asphalt', 'green petroleum products', 'eco-friendly bitumen', 'eco-friendly asphalt',
        'sustainable petroleum derivatives', 'environmentally friendly petroleum derivatives',
        'sustainable petroleum industry', 'green petroleum industry', 'eco-friendly petroleum industry',
        'sustainable petroleum manufacturing', 'green petroleum manufacturing', 'eco-friendly petroleum manufacturing',
        'sustainable petroleum production', 'green petroleum production', 'eco-friendly petroleum production',
        'sustainable petroleum solutions', 'green petroleum solutions', 'eco-friendly petroleum solutions',
        'petroleum sustainability', 'bitumen sustainability', 'asphalt sustainability',
        'petroleum environmental impact', 'bitumen environmental impact', 'asphalt environmental impact'
      ]
    }
  }

  const pageMetadata = metadataMap[page] || metadataMap.home
  
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords.join(', '),
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      url: `${baseUrl}/${locale}/${page}`,
      siteName: 'Bitumpro',
      images: [
        {
          url: `${baseUrl}/og-${page}.jpg`,
          width: 1200,
          height: 630,
          alt: pageMetadata.title,
        },
      ],
      locale: isFrench ? 'fr_CA' : 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: [`${baseUrl}/twitter-${page}.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/${page}`,
      languages: {
        'en': `${baseUrl}/en/${page}`,
        'fr': `${baseUrl}/fr/${page}`,
      },
    },
  }
}
