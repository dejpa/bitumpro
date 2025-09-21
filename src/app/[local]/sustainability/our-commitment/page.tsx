"use client";

import { usePathname } from "next/navigation";
import { FaLeaf, FaShieldAlt, FaUsers, FaGlobe, FaHandshake, FaArrowRight, FaRocket, FaHeart, FaStar, FaCheckCircle, FaIndustry, FaTree, FaRecycle } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function OurCommitment() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const commitments = [
    {
      icon: FaLeaf,
      title: t("commitment.environmentalStewardship"),
      description: t("commitment.environmentalStewardshipDescription"),
      color: "primary"
    },
    {
      icon: FaShieldAlt,
      title: t("commitment.qualityExcellence"),
      description: t("commitment.qualityExcellenceDescription"),
      color: "accent"
    },
    {
      icon: FaUsers,
      title: t("commitment.communityImpact"),
      description: t("commitment.communityImpactDescription"),
      color: "primary"
    },
    {
      icon: FaIndustry,
      title: t("commitment.innovationTechnology"),
      description: t("commitment.innovationTechnologyDescription"),
      color: "accent"
    }
  ];

  const values = [
    {
      icon: FaHeart,
      title: t("commitment.integrity"),
      description: t("commitment.integrityDescription")
    },
    {
      icon: FaRocket,
      title: t("commitment.innovation"),
      description: t("commitment.innovationDescription")
    },
    {
      icon: FaHandshake,
      title: t("commitment.partnership"),
      description: t("commitment.partnershipDescription")
    },
    {
      icon: FaStar,
      title: t("commitment.excellence"),
      description: t("commitment.excellenceDescription")
    }
  ];

  const sustainabilityGoals = [
    {
      icon: FaRecycle,
      title: t("commitment.wasteReduction"),
      target: "50%",
      description: t("commitment.wasteReductionDescription")
    },
    {
      icon: FaTree,
      title: t("commitment.carbonFootprint"),
      target: "30%",
      description: t("commitment.carbonFootprintDescription")
    },
    {
      icon: FaGlobe,
      title: t("commitment.globalStandards"),
      target: "100%",
      description: t("commitment.globalStandardsDescription")
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/commitment-cover.webp')" }}
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
              {t("commitment.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("commitment.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("commitment.joinOurMission")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("commitment.ourCommitments")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("commitment.ourCommitmentsDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => {
              const IconComponent = commitment.icon;
              return (
                <div key={index} className="glass-card p-8 hover-lift group animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${commitment.color === 'primary' ? 'from-primary-500/20 to-primary-600/20' : 'from-accent-500/20 to-accent-600/20'} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${commitment.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold gradient-text mb-4">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("commitment.ourValues")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("commitment.ourValuesDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="glass-card p-6 hover-lift group animate-slide-up text-center" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-primary-400 h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("commitment.sustainabilityGoals")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("commitment.sustainabilityGoalsDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sustainabilityGoals.map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <div key={index} className="glass-card p-8 hover-lift group animate-scale-in text-center" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-accent-400 h-10 w-10" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {goal.target}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {goal.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-lg">
              {t("commitment.joinOurJourney")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("commitment.joinOurJourneyDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("commitment.contactUs")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href={`/${currentLocale}/sustainability`}
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                {t("commitment.learnMoreSustainability")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
