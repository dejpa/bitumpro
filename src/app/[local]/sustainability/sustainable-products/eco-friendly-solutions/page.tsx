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
      title: "Extended Pavement Life",
      titleFr: "Durée de vie prolongée des chaussées",
      description: "Nano PMB is engineered to improve rutting resistance, cracking resistance, elasticity, and thermal stability, helping roads last longer under heavy traffic and harsh climate conditions.",
      descriptionFr: "Le Nano PMB est conçu pour améliorer la résistance à l'orniérage, la résistance à la fissuration, l'élasticité et la stabilité thermique, afin d'aider les routes à durer plus longtemps sous trafic lourd et conditions climatiques difficiles.",
      color: "primary"
    },
    {
      icon: FaLeaf,
      title: "Lower Lifecycle Maintenance",
      titleFr: "Maintenance réduite sur le cycle de vie",
      description: "Longer pavement service life can reduce repeated repair cycles, road interventions, material use, and lifecycle maintenance costs for public and private infrastructure owners.",
      descriptionFr: "Une durée de service plus longue des chaussées peut réduire les cycles de réparation répétés, les interventions routières, l'utilisation de matériaux et les coûts de maintenance sur le cycle de vie.",
      color: "accent"
    },
    {
      icon: FaShieldAlt,
      title: "Local Canadian Production",
      titleFr: "Production locale au Canada",
      description: "A domestic BC production facility helps reduce reliance on imported binders, shorten lead times, and lower logistics-related emissions for Canadian infrastructure projects.",
      descriptionFr: "Une installation de production locale en Colombie-Britannique aide à réduire la dépendance aux liants importés, à raccourcir les délais et à limiter les émissions liées à la logistique pour les projets d'infrastructure canadiens.",
      color: "primary"
    },
    {
      icon: FaGlobe,
      title: "Nano-Enhanced Material Efficiency",
      titleFr: "Efficacité des matériaux nano-améliorés",
      description: "Nano-additives can improve binder performance and support more efficient use of materials while maintaining the performance required by demanding infrastructure projects.",
      descriptionFr: "Les additifs nano-ingénierés peuvent améliorer la performance du liant et soutenir une utilisation plus efficace des matériaux tout en maintenant le niveau requis pour les projets d'infrastructure exigeants.",
      color: "accent"
    }
  ];

  const benefits = [
    {
      icon: FaRecycle,
      title: "Longer Pavement Lifespan",
      titleFr: "Durée de vie des chaussées prolongée",
      metric: "10-20%",
      description: "Recognized potential lifespan improvement for nano-enhanced PMB",
      descriptionFr: "Potentiel reconnu d'amélioration de la durée de vie pour les PMB nano-améliorés"
    },
    {
      icon: FaShieldAlt,
      title: "Annual Design Capacity",
      titleFr: "Capacité annuelle conçue",
      metric: "6,000 t",
      description: "Scalable BC facility capacity for domestic supply and export readiness",
      descriptionFr: "Capacité évolutive de l'installation en C.-B. pour l'approvisionnement local et la préparation à l'export"
    },
    {
      icon: FaGlobe,
      title: "Domestic Launch Focus",
      titleFr: "Lancement centré sur le marché local",
      metric: "Canada",
      description: "Initial focus on BC and Canadian infrastructure before phased export growth",
      descriptionFr: "Priorité initiale à la C.-B. et aux infrastructures canadiennes avant une croissance export progressive"
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
              {t("ecoFriendly.heroDescription")}
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
              {t("ecoFriendly.solutionsDescription")}
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
              {t("ecoFriendly.benefitsDescription")}
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
              {t("ecoFriendly.ctaDescription")}
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
