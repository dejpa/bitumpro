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
        ? "Bitumpro | Fournisseur Principal de Bitume et d'Asphalte | Fabrication de Produits Pétroliers"
        : "Bitumpro | Premier Bitumen & Asphalt Supplier | Petroleum Products Manufacturing",
      description: isFrench
        ? "Fournisseur principal de bitume et d'asphalte avec 25 ans d'expertise en produits pétroliers. Nous fabriquons des produits pétroliers à haute valeur, des dérivés pétroliers respectueux de l'environnement et des solutions de bitume premium pour le développement d'infrastructure mondiale."
        : "Leading bitumen and asphalt supplier with 25 years of petroleum products expertise. We manufacture high-value petroleum products, environmentally friendly petroleum derivatives, and premium bitumen solutions for global infrastructure development.",
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
        ? "Équipe de Direction | Leadership en Produits Pétroliers | 25 Ans d'Expérience"
        : "Leadership Team | Petroleum Products Leadership | 25 Years of Experience",
      description: isFrench
        ? "Rencontrez notre équipe de direction avec 25 ans d'expérience en leadership d'équipe et création de valeur des produits pétroliers. Expertise dans la production de produits pétroliers à haute valeur et de dérivés pétroliers respectueux de l'environnement."
        : "Meet our leadership team with 25 years of experience in team leadership and petroleum products value creation. Expertise in producing high-value petroleum products and environmentally friendly petroleum derivatives.",
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
        ? "Produits | Bitume Premium | Asphalte de Qualité | Produits Pétroliers à Haute Valeur"
        : "Products | Premium Bitumen | Quality Asphalt | High-Value Petroleum Products",
      description: isFrench
        ? "Découvrez notre gamme complète de produits bitume premium, asphalte de qualité et produits pétroliers à haute valeur. Solutions innovantes pour le développement d'infrastructure mondiale."
        : "Discover our comprehensive range of premium bitumen, quality asphalt, and high-value petroleum products. Innovative solutions for global infrastructure development.",
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
        ? "Durabilité | Produits Pétroliers Respectueux de l'Environnement | Développement Durable"
        : "Sustainability | Environmentally Friendly Petroleum Products | Sustainable Development",
      description: isFrench
        ? "Engagés envers la durabilité avec des produits pétroliers respectueux de l'environnement et des dérivés pétroliers durables. Développement responsable dans l'industrie pétrolière."
        : "Committed to sustainability with environmentally friendly petroleum products and sustainable petroleum derivatives. Responsible development in the petroleum industry.",
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
