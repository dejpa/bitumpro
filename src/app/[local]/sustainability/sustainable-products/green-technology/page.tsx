"use client";

import { usePathname } from "next/navigation";
import { FaCog, FaMicrochip, FaRobot, FaDatabase, FaArrowRight, FaLightbulb, FaShieldAlt, FaRocket } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function GreenTechnology() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const technologies = [
    {
      icon: FaMicrochip,
      title: "Nano-Enhanced Formulation",
      titleFr: "Formulation nano-améliorée",
      description: "Nano-clay and polymer additives are blended with bitumen to improve elasticity, thermal stability, rutting resistance, oxidation resistance, and cold-weather flexibility.",
      descriptionFr: "Des additifs de nano-argile et de polymères sont mélangés au bitume afin d'améliorer l'élasticité, la stabilité thermique, la résistance à l'orniérage, la résistance à l'oxydation et la flexibilité par temps froid.",
      color: "primary"
    },
    {
      icon: FaRobot,
      title: "Controlled Production Process",
      titleFr: "Processus de production contrôlé",
      description: "The production setup is designed around controlled heating, mixing, storage, compounding, and packaging to maintain consistency while supporting lean startup operations.",
      descriptionFr: "Le dispositif de production repose sur un chauffage, un mélange, un stockage, un compoundage et un conditionnement contrôlés afin de maintenir la constance tout en soutenant des opérations de lancement efficaces.",
      color: "accent"
    },
    {
      icon: FaDatabase,
      title: "QC Laboratory Testing",
      titleFr: "Essais en laboratoire QC",
      description: "Laboratory testing, sampling procedures, and technical validation support ASTM, CSA, and Ministry of Transportation requirements for infrastructure adoption.",
      descriptionFr: "Les essais en laboratoire, les procédures d'échantillonnage et la validation technique soutiennent les exigences ASTM, CSA et des ministères des Transports pour l'adoption dans les infrastructures.",
      color: "primary"
    },
    {
      icon: FaShieldAlt,
      title: "Scalable Facility Design",
      titleFr: "Conception d'installation évolutive",
      description: "The 2,000 m² BC facility is designed for 500 tons per month and up to 6,000 tons per year, with room for future Nano Emulsion and Nano Asphalt Sealer lines.",
      descriptionFr: "L'installation de 2 000 m² en C.-B. est conçue pour 500 tonnes par mois et jusqu'à 6 000 tonnes par an, avec une capacité future pour les nano-émulsions et les scellants d'asphalte nano.",
      color: "accent"
    }
  ];

  const innovations = [
    {
      icon: FaLightbulb,
      title: "Annual Design Capacity",
      titleFr: "Capacité annuelle conçue",
      metric: "6,000 t",
      description: "Maximum designed annual Nano PMB capacity in one 8-hour shift",
      descriptionFr: "Capacité annuelle maximale de Nano PMB conçue sur un quart de 8 heures"
    },
    {
      icon: FaRocket,
      title: "Monthly Capacity",
      titleFr: "Capacité mensuelle",
      metric: "500 t",
      description: "Initial production capacity designed for controlled scale-up",
      descriptionFr: "Capacité initiale prévue pour une montée en puissance maîtrisée"
    },
    {
      icon: FaCog,
      title: "Export Expansion",
      titleFr: "Expansion export",
      metric: "Year 3",
      description: "Planned rollout toward the U.S. and selected South American markets",
      descriptionFr: "Déploiement prévu vers les États-Unis et certains marchés d'Amérique du Sud"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/green-tech-cover.webp')" }}
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
              {t("greenTech.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("greenTech.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("greenTech.requestDemo")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("greenTech.technologiesTitle")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("greenTech.technologiesDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologies.map((technology, index) => {
              const IconComponent = technology.icon;
              return (
                <div key={index} className="glass-card p-8 hover-lift group animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${technology.color === 'primary' ? 'from-primary-500/20 to-primary-600/20' : 'from-accent-500/20 to-accent-600/20'} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${technology.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold gradient-text mb-4">
                        {currentLocale === 'fr' ? technology.titleFr : technology.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {currentLocale === 'fr' ? technology.descriptionFr : technology.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Metrics */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("greenTech.innovationTitle")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("greenTech.innovationDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              return (
                <div key={index} className="glass-card p-8 hover-lift group animate-scale-in text-center" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-accent-400 h-10 w-10" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {innovation.metric}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {currentLocale === 'fr' ? innovation.titleFr : innovation.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {currentLocale === 'fr' ? innovation.descriptionFr : innovation.description}
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
              {t("greenTech.ctaTitle")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("greenTech.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("greenTech.contactUs")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href={`/${currentLocale}/sustainability/sustainable-products/eco-friendly-solutions`}
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                {t("greenTech.learnEcoFriendly")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
