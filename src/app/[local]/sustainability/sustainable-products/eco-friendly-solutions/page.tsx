"use client";

import { usePathname } from "next/navigation";
import { FaLeaf, FaRecycle, FaWater, FaSun, FaArrowRight, FaShieldAlt, FaGlobe, FaIndustry } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function EcoFriendlySolutions() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const solutions = [
    {
      icon: FaRecycle,
      title: "Sustainable Packaging",
      titleFr: "Emballage Durable",
      description: "From factory to execution, we ensure all our packaging materials cause minimal environmental damage. Our eco-friendly packaging solutions reduce waste and carbon footprint throughout the supply chain.",
      descriptionFr: "De l'usine à l'exécution, nous nous assurons que tous nos matériaux d'emballage causent des dommages environnementaux minimaux. Nos solutions d'emballage écologiques réduisent les déchets et l'empreinte carbone tout au long de la chaîne d'approvisionnement.",
      color: "primary"
    },
    {
      icon: FaLeaf,
      title: "Bio Oil Mulch Technology",
      titleFr: "Technologie Bio Oil Mulch",
      description: "With superior technology, we produce bio oil mulch that causes minimal environmental damage. When applied in suitable locations, it effectively prevents dust storms and dust particles from spreading.",
      descriptionFr: "Avec une technologie supérieure, nous produisons du paillis d'huile bio qui cause des dommages environnementaux minimaux. Lorsqu'il est appliqué dans des endroits appropriés, il empêche efficacement la propagation des tempêtes de poussière et des particules de poussière.",
      color: "accent"
    },
    {
      icon: FaShieldAlt,
      title: "Dust Suppression",
      titleFr: "Suppression de la Poussière",
      description: "Our bio oil mulch technology provides effective dust control and suppression, protecting air quality and reducing respiratory health risks in affected areas.",
      descriptionFr: "Notre technologie de paillis d'huile bio fournit un contrôle et une suppression efficaces de la poussière, protégeant la qualité de l'air et réduisant les risques pour la santé respiratoire dans les zones affectées.",
      color: "primary"
    },
    {
      icon: FaGlobe,
      title: "Environmental Protection",
      titleFr: "Protection de l'Environnement",
      description: "Our eco-friendly solutions protect soil, water, and air quality while providing effective industrial applications that meet the highest environmental standards.",
      descriptionFr: "Nos solutions écologiques protègent la qualité du sol, de l'eau et de l'air tout en fournissant des applications industrielles efficaces qui répondent aux plus hauts standards environnementaux.",
      color: "accent"
    }
  ];

  const benefits = [
    {
      icon: FaRecycle,
      title: "Packaging Waste Reduction",
      titleFr: "Réduction des Déchets d'Emballage",
      metric: "70%",
      description: "Reduction in packaging waste from factory to execution",
      descriptionFr: "Réduction des déchets d'emballage de l'usine à l'exécution"
    },
    {
      icon: FaShieldAlt,
      title: "Dust Storm Prevention",
      titleFr: "Prévention des Tempêtes de Poussière",
      metric: "85%",
      description: "Effective dust suppression and prevention of dust storms",
      descriptionFr: "Suppression efficace de la poussière et prévention des tempêtes de poussière"
    },
    {
      icon: FaGlobe,
      title: "Environmental Safety",
      titleFr: "Sécurité Environnementale",
      metric: "95%",
      description: "Bio oil mulch causes minimal environmental damage",
      descriptionFr: "Le paillis d'huile bio cause des dommages environnementaux minimaux"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/ecoSulotion-cover.webp')" }}
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
              {t("ecoFriendly.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {currentLocale === 'fr' 
                ? "Des solutions d'emballage durables et une technologie de paillis d'huile bio innovante pour minimiser l'impact environnemental et contrôler efficacement la poussière."
                : "Sustainable packaging solutions and innovative bio oil mulch technology to minimize environmental impact and effectively control dust."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("ecoFriendly.requestQuote")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("ecoFriendly.solutionsTitle")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {currentLocale === 'fr' 
                ? "Nous nous concentrons sur la création de solutions d'emballage durables qui minimisent les dommages environnementaux de l'usine à l'exécution, et notre technologie de pointe en paillis d'huile bio qui empêche efficacement la propagation des tempêtes de poussière."
                : "We focus on creating sustainable packaging solutions that minimize environmental damage from factory to execution, and our advanced bio oil mulch technology that effectively prevents dust storms from spreading."
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="glass-card p-8 hover-lift group animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color === 'primary' ? 'from-primary-500/20 to-primary-600/20' : 'from-accent-500/20 to-accent-600/20'} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${solution.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold gradient-text mb-4">
                        {currentLocale === 'fr' ? solution.titleFr : solution.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {currentLocale === 'fr' ? solution.descriptionFr : solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("ecoFriendly.benefitsTitle")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {currentLocale === 'fr' 
                ? "Nos solutions écologiques offrent des avantages mesurables en réduisant les déchets d'emballage, en prévenant les tempêtes de poussière et en minimisant l'impact environnemental de nos produits."
                : "Our eco-friendly solutions deliver measurable benefits by reducing packaging waste, preventing dust storms, and minimizing the environmental impact of our products."
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="glass-card p-8 hover-lift group animate-scale-in text-center" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-accent-400 h-10 w-10" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {benefit.metric}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {currentLocale === 'fr' ? benefit.titleFr : benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {currentLocale === 'fr' ? benefit.descriptionFr : benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-lg">
              {t("ecoFriendly.ctaTitle")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {currentLocale === 'fr' 
                ? "Rejoignez-nous pour construire un avenir plus durable avec nos solutions d'emballage écologiques et notre technologie de paillis d'huile bio avancée. Contactez-nous pour découvrir comment nous pouvons minimiser l'impact environnemental de vos projets."
                : "Join us in building a more sustainable future with our eco-friendly packaging solutions and advanced bio oil mulch technology. Contact us to discover how we can minimize the environmental impact of your projects."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("ecoFriendly.contactUs")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href={`/${currentLocale}/sustainability/sustainable-products/green-technology`}
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                {t("ecoFriendly.learnGreenTech")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
