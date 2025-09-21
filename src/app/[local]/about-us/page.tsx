"use client";

import { usePathname } from "next/navigation";
import { FaCheckCircle, FaShieldAlt, FaBuilding, FaChartLine, FaHistory , FaArrowRight } from "react-icons/fa";
import { getTranslator } from "@/i18n";

import Link from "next/link";

const locales = ["en", "fr"];

export default function AboutUs() {

  const pathname = usePathname();

  // استخراج زبان فعلی از مسیر
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
    {/* Hero Section */}
    <section className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-top overflow-hidden" style={{ backgroundImage: "url('/about-us-cover.webp')" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      
      {/* Floating animated elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-400/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent-400/20 rounded-full animate-float [animation-delay:2s]"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-500/40 rounded-full animate-float [animation-delay:4s]"></div>
      
      <div className="container mx-auto text-center relative z-10 px-6">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text text-shadow-lg">{t("aboutUs.heroTitle")}</h1>
        <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">{t("aboutUs.heroDescription")}</p>
        <Link href="/contact" className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-xl hover:shadow-glow transition-all duration-300 hover-cursor-expand">
          {t("aboutUs.contactUs")}
        </Link>
      </div>
    </section>

    {/* Page Content */}
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6 text-shadow-lg">
            {t("aboutUs.ourBusiness")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("aboutUs.aboutUsDescription")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Our Business */}
          <div className="glass-card p-8 hover-lift animate-scale-in group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaBuilding className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              <Link className="flex justify-center items-center hover-cursor-glow" href={`/${currentLocale}/contact`}>
                {t("aboutUs.ourBusiness")}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </h3>
            <p className="text-gray-300 leading-relaxed">{t("aboutUs.ourBusinessDescription")}</p>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 hover-lift animate-scale-in group [animation-delay:0.2s]">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCheckCircle className="h-8 w-8 text-accent-400" />
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              <Link className="flex justify-center items-center hover-cursor-glow" href={`/${currentLocale}/contact`}>
                {t("aboutUs.ourVision")}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </h3>
            <p className="text-gray-300 leading-relaxed">{t("aboutUs.ourVisionDescription")}</p>
          </div>

          {/* Corporate Governance */}
          <div className="glass-card p-8 hover-lift animate-scale-in group [animation-delay:0.4s]">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaShieldAlt className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              <Link className="flex justify-center items-center hover-cursor-glow" href={`/${currentLocale}/contact`}>
                {t("aboutUs.corporateGovernance")}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </h3>
            <p className="text-gray-300 leading-relaxed">{t("aboutUs.corporateGovernanceDescription")}</p>
          </div>

        {/* Financials */}
        {/* <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <FaChartLine className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            <Link className="flex justify-center items-center" href={`/${currentLocale}/contact`}>
              {t("aboutUs.financials")}
              <FaArrowRight className="ml-2" />
            </Link>
          </h3>
          <p className="text-gray-300">{t("aboutUs.financialsDescription")}</p>
        </div> */}

          {/* History */}
          <div className="glass-card p-8 hover-lift animate-scale-in group [animation-delay:0.6s]">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaHistory className="h-8 w-8 text-accent-400" />
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              <Link className="flex justify-center items-center hover-cursor-glow" href={`/${currentLocale}/contact`}>
                {t("aboutUs.history")}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </h3>
            <p className="text-gray-300 leading-relaxed">{t("aboutUs.historyDescription")}</p>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="glass-card p-12 hover-lift animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-lg">{t("aboutUs.readyToRestore")}</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("aboutUs.readyToRestoreDescription")}</p>
          <Link href="/contact" className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-xl hover:shadow-glow transition-all duration-300 hover-cursor-expand">
            {t("aboutUs.contactUs")}
          </Link>
        </div>
      </div>
    </section>
  </div>
  );

}