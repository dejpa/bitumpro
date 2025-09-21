"use client";

import { usePathname } from "next/navigation";
import { FaTruck, FaLeaf, FaOilCan, FaRoad, FaBuilding, FaIndustry, FaArrowRight, FaDownload, FaInfoCircle } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function Products() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const productCategories = [
    {
      id: "bitumen",
      title: "Bitumen",
      titleFr: "Bitume",
      icon: FaRoad,
      description: "Essential for road construction and maintenance, providing optimal binding agent for durable and flexible asphalt mixtures.",
      descriptionFr: "Essentiel pour la construction et l'entretien des routes, fournissant un agent liant optimal pour des mélanges d'asphalte durables et flexibles.",
      color: "primary",
      products: [
        { name: "Performance Grade (PG)", code: "PG" },
        { name: "Penetration Grade", code: "PEN" },
        { name: "VG (Viscosity Grade)", code: "VG" },
        { name: "AC (Asphalt Cement)", code: "AC" },
        { name: "Building Construction Bitumen", code: "BCB" },
        { name: "EN (European Norms)", code: "EN" },
        { name: "SC (Slow Curing)", code: "SC" },
        { name: "MC (Medium Curing)", code: "MC" },
        { name: "RC (Rapid Curing)", code: "RC" },
        { name: "PMB Type I (Polymer Modified)", code: "PMB-I" },
        { name: "PMB Type II (Polymer Modified)", code: "PMB-II" },
        { name: "Anionic Emulsion Bitumen", code: "AE" },
        { name: "Cationic Emulsion Bitumen", code: "CE" }
      ]
    },
    {
      id: "hydrocarbon",
      title: "HydroCarbon",
      titleFr: "Hydrocarbure",
      icon: FaOilCan,
      description: "High-quality hydrocarbon products including fuel oils for various industrial processes and heating applications.",
      descriptionFr: "Produits hydrocarbures de haute qualité, y compris les fiouls pour divers processus industriels et applications de chauffage.",
      color: "accent",
      products: [
        { name: "CST 180 - Fuel Oil", code: "CST-180" },
        { name: "CST 280 - Fuel Oil", code: "CST-280" },
        { name: "Type I Fuel Oil", code: "TYPE-I" },
        { name: "II-B Fuel Oil", code: "II-B" },
        { name: "46-10 Fuel Oil", code: "46-10" },
        { name: "85/25 Fuel Oil", code: "85/25" },
        { name: "46-22 Fuel Oil", code: "46-22" },
        { name: "MS-1 Fuel Oil", code: "MS-1" },
        { name: "I-D Fuel Oil", code: "I-D" },
        { name: "CRS-1 Fuel Oil", code: "CRS-1" },
        { name: "76-16 Fuel Oil", code: "76-16" }
      ]
    },
    {
      id: "oil-mulch",
      title: "Oil Mulch",
      titleFr: "Paillis d'huile",
      icon: FaLeaf,
      description: "Environmentally friendly oil mulch used in agriculture to stabilize soil, maintain moisture, and improve soil quality while minimizing erosion.",
      descriptionFr: "Paillis d'huile écologique utilisé en agriculture pour stabiliser le sol, maintenir l'humidité et améliorer la qualité du sol tout en minimisant l'érosion.",
      color: "primary",
      products: [
        { name: "Bio Oil Mulch", code: "BIO" },
        { name: "Oil Mulch", code: "MUL" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/products-cover.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl floating"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl floating [animation-delay:2s]"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary-400/30 rounded-full blur-lg floating [animation-delay:4s]"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 px-6">
          <div className="animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 gradient-text text-shadow-lg leading-tight">
              {t("products.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("products.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("products.requestQuote")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href={`/${currentLocale}/about-us`}
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                {t("products.learnMoreAboutUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("products.productCategories")}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              BitumAsphalt offers a diverse range of high-quality products to meet various industrial needs, 
              focusing on three main categories: bitumen, hydrocarbon, and oil mulch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="glass-card p-8 hover-lift group animate-scale-in text-center" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-10 w-10 ${category.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    {currentLocale === 'fr' ? category.titleFr : category.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {currentLocale === 'fr' ? category.descriptionFr : category.description}
                  </p>
                  <div className="text-sm text-primary-400 font-semibold">
                    {category.products.length} {t("products.productTypes")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Products */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("products.completeProductRange")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("products.completeProductRangeDescription")}
            </p>
          </div>

          {productCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="mb-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
                      <IconComponent className={`h-8 w-8 ${category.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`} />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold gradient-text">
                      {currentLocale === 'fr' ? category.titleFr : category.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    {currentLocale === 'fr' ? category.descriptionFr : category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <div key={product.code} className="glass-card p-6 hover-lift group animate-slide-up" style={{animationDelay: `${(categoryIndex * 0.1) + (productIndex * 0.05)}s`}}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                            {product.name}
                          </h4>
                          <p className="text-sm text-gray-400 font-mono bg-gray-800/50 px-3 py-1 rounded-full inline-block">
                            {product.code}
                          </p>
                        </div>
                        <button className="glass-button p-2 rounded-lg hover:shadow-glow transition-all duration-300 hover-cursor-expand opacity-0 group-hover:opacity-100">
                          <FaInfoCircle className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 glass-button px-3 py-2 text-xs font-semibold text-white rounded-lg hover:shadow-glow transition-all duration-300 hover-cursor-expand">
                          <FaDownload className="h-3 w-3 inline mr-1" />
                          {t("products.specs")}
                        </button>
                        <button className="flex-1 glass bg-white/10 border border-white/20 text-white px-3 py-2 text-xs font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow">
                          {t("products.quote")}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-lg">
                  {t("products.qualityAssurance")}
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  BitumAsphalt's commitment to providing high-performance products ensures that each batch meets the exacting quality standards 
                  expected by customers, making us a trusted partner in the industry.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full flex items-center justify-center">
                      <FaIndustry className="text-primary-400 h-4 w-4" />
                    </div>
                    <span className="text-gray-300">{t("products.isoCertified")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-full flex items-center justify-center">
                      <FaBuilding className="text-accent-400 h-4 w-4" />
                    </div>
                    <span className="text-gray-300">{t("products.laboratoryServices")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center">
                      <FaTruck className="text-primary-400 h-4 w-4" />
                    </div>
                    <span className="text-gray-300">{t("products.internationalDistribution")}</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-3xl flex items-center justify-center mx-auto">
                  <FaIndustry className="text-primary-400 h-32 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-lg">
              {t("products.readyToGetStarted")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("products.readyToGetStartedDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("products.requestProductInformation")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href={`/${currentLocale}/about-us`}
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                {t("products.learnAboutOurCompany")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
