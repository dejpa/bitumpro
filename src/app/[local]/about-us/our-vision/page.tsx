"use client";

import { usePathname } from "next/navigation";
import { FaLeaf, FaRocket, FaGlobe, FaShieldAlt, FaArrowRight, FaBullseye, FaLightbulb, FaHandshake } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function OurVision() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/ourVision-cover.webp')" }}
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
              {t("ourVision.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("ourVision.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("ourVision.partnerWithUs")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text text-shadow-lg">
              {t("ourVision.visionStatementTitle")}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              {t("ourVision.visionStatementDescription")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaLeaf className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-primary-400 mb-2">{t("ourVision.sustainable")}</h3>
                <p className="text-gray-300">{t("ourVision.sustainableDescription")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="h-8 w-8 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-accent-400 mb-2">{t("ourVision.innovative")}</h3>
                <p className="text-gray-300">{t("ourVision.innovativeDescription")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaGlobe className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-primary-400 mb-2">{t("ourVision.global")}</h3>
                <p className="text-gray-300">{t("ourVision.globalDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="relative py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("ourVision.visionPillarsTitle")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("ourVision.visionPillarsDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Innovation & Technology */}
            <div className="glass-card p-8 hover-lift group animate-slide-up">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaLightbulb className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("ourVision.innovationTechnology")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("ourVision.innovationTechnologyDescription")}
              </p>
            </div>

            {/* Sustainability & Environment */}
            <div className="glass-card p-8 hover-lift group animate-slide-up [animation-delay:0.2s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaLeaf className="text-accent-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("ourVision.sustainabilityEnvironment")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("ourVision.sustainabilityEnvironmentDescription")}
              </p>
            </div>

            {/* Global Excellence */}
            <div className="glass-card p-8 hover-lift group animate-slide-up [animation-delay:0.4s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("ourVision.globalExcellence")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("ourVision.globalExcellenceDescription")}
              </p>
            </div>

            {/* Partnership & Trust */}
            <div className="glass-card p-8 hover-lift group animate-slide-up [animation-delay:0.6s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="text-accent-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("ourVision.partnershipTrust")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("ourVision.partnershipTrustDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 hover-lift animate-slide-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text text-shadow-lg">
                {t("ourVision.missionTitle")}
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
                {t("ourVision.missionDescription")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-2xl font-bold gradient-text mb-4 flex items-center">
                    <FaShieldAlt className="mr-3 text-primary-400" />
                    {t("ourVision.qualityAssurance")}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t("ourVision.qualityAssuranceDescription")}
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold gradient-text mb-4 flex items-center">
                    <FaGlobe className="mr-3 text-accent-400" />
                    {t("ourVision.globalImpact")}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t("ourVision.globalImpactDescription")}
                  </p>
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
              {t("ourVision.callToActionTitle")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("ourVision.callToActionDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
{t("ourVision.startYourProject")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href={`/${currentLocale}/about-us`}
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
{t("ourVision.learnMoreAboutUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
