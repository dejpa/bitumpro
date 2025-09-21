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
      title: "Smart Bitumen Production",
      titleFr: "Production Intelligente de Bitume",
      description: "AI-powered bitumen production processes that optimize temperature control, reduce energy consumption by 40%, and ensure consistent quality while minimizing environmental emissions.",
      descriptionFr: "Processus de production de bitume alimentés par l'IA qui optimisent le contrôle de température, réduisent la consommation d'énergie de 40% et assurent une qualité constante tout en minimisant les émissions environnementales.",
      color: "primary"
    },
    {
      icon: FaRobot,
      title: "Automated Oil Processing",
      titleFr: "Traitement Automatisé du Pétrole",
      description: "Advanced robotics in oil processing facilities that enhance efficiency, reduce human exposure to hazardous materials, and ensure precise control of processing parameters.",
      descriptionFr: "Robotique avancée dans les installations de traitement du pétrole qui améliore l'efficacité, réduit l'exposition humaine aux matériaux dangereux et assure un contrôle précis des paramètres de traitement.",
      color: "accent"
    },
    {
      icon: FaDatabase,
      title: "Real-time Quality Monitoring",
      titleFr: "Surveillance Qualité en Temps Réel",
      description: "IoT sensors continuously monitor bitumen viscosity, temperature, and composition, enabling predictive maintenance and ensuring optimal product quality throughout the supply chain.",
      descriptionFr: "Les capteurs IoT surveillent continuellement la viscosité, la température et la composition du bitume, permettant une maintenance prédictive et assurant une qualité de produit optimale tout au long de la chaîne d'approvisionnement.",
      color: "primary"
    },
    {
      icon: FaShieldAlt,
      title: "Emission Control Systems",
      titleFr: "Systèmes de Contrôle des Émissions",
      description: "Integrated digital systems that monitor and control emissions from bitumen and oil processing, ensuring compliance with environmental regulations and reducing air pollution.",
      descriptionFr: "Systèmes numériques intégrés qui surveillent et contrôlent les émissions du traitement du bitume et du pétrole, assurant la conformité aux réglementations environnementales et réduisant la pollution de l'air.",
      color: "accent"
    }
  ];

  const innovations = [
    {
      icon: FaLightbulb,
      title: "Bitumen Innovation Center",
      titleFr: "Centre d'Innovation Bitume",
      metric: "12+",
      description: "Active R&D projects in sustainable bitumen and oil technologies",
      descriptionFr: "Projets de R&D actifs dans les technologies durables de bitume et de pétrole"
    },
    {
      icon: FaRocket,
      title: "Industry Patents",
      titleFr: "Brevets Industriels",
      metric: "6",
      description: "Green technology patents in oil and bitumen processing",
      descriptionFr: "Brevets de technologie verte dans le traitement du pétrole et du bitume"
    },
    {
      icon: FaCog,
      title: "Energy Efficiency",
      titleFr: "Efficacité Énergétique",
      metric: "45%",
      description: "Reduction in energy consumption in bitumen production",
      descriptionFr: "Réduction de la consommation d'énergie dans la production de bitume"
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
              {currentLocale === 'fr' 
                ? "Technologies de pointe révolutionnaires dans l'industrie du pétrole et du bitume, combinant intelligence artificielle, robotique avancée et systèmes IoT pour une production durable et efficace."
                : "Revolutionary cutting-edge technologies in the oil and bitumen industry, combining artificial intelligence, advanced robotics, and IoT systems for sustainable and efficient production."
              }
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
              {currentLocale === 'fr' 
                ? "Nous exploitons les technologies les plus avancées pour révolutionner la production de bitume et le traitement du pétrole, en réduisant l'impact environnemental tout en maximisant l'efficacité et la qualité."
                : "We leverage the most advanced technologies to revolutionize bitumen production and oil processing, reducing environmental impact while maximizing efficiency and quality."
              }
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
              {currentLocale === 'fr' 
                ? "Notre engagement envers l'innovation technologique verte se reflète dans nos investissements continus en R&D, nos brevets industriels et nos améliorations significatives de l'efficacité énergétique dans la production de bitume."
                : "Our commitment to green technology innovation is reflected in our continuous R&D investments, industry patents, and significant improvements in energy efficiency in bitumen production."
              }
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
              {currentLocale === 'fr' 
                ? "Découvrez comment nos technologies vertes révolutionnaires peuvent transformer vos opérations de production de bitume et de traitement du pétrole, tout en contribuant à un avenir plus durable et efficace."
                : "Discover how our revolutionary green technologies can transform your bitumen production and oil processing operations, while contributing to a more sustainable and efficient future."
              }
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
