"use client";

import { usePathname } from "next/navigation";
import { FaCompass, FaGavel, FaArrowRight, FaLeaf, FaRecycle, FaTree, FaGlobe } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function Sustainability() {
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
          style={{ backgroundImage: "url('/sustainability-cover.webp')" }}
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
              {t("sustainability.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("sustainability.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("sustainability.contactUs")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{t("sustainability.description")}</p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="relative py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              Our Sustainability Focus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our commitment to sustainable practices and environmental responsibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Guiding Principles */}
            <Link href={`/${currentLocale}/sustainability/guiding-principles`} className="glass-card p-8 hover-lift group animate-slide-up">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaCompass className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("sustainability.guidingPrinciples")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("sustainability.guidingPrinciplesDesc")}
              </p>
            </Link>

            {/* Policy */}
            <Link href={`/${currentLocale}/sustainability/policy`} className="glass-card p-8 hover-lift group animate-slide-up [animation-delay:0.2s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaGavel className="text-accent-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("sustainability.policy")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("sustainability.policyDesc")}
              </p>
            </Link>

            {/* Sustainable Products */}
            <div className="glass-card p-8 hover-lift group animate-slide-up [animation-delay:0.4s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaLeaf className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Sustainable Products
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Innovative eco-friendly solutions for a better tomorrow
              </p>
            </div>

            {/* Environmental Impact */}
            <div className="glass-card p-8 hover-lift group animate-slide-up [animation-delay:0.6s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaGlobe className="text-accent-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Environmental Impact
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                Measuring and reducing our environmental footprint
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Call to Action */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text text-shadow-lg">{t("sustainability.readyToAct")}</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("sustainability.readyToActDesc")}</p>
            <Link href={`/${currentLocale}/contact`} className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-xl hover:shadow-glow transition-all duration-300 hover-cursor-expand">
              {t("sustainability.contactUs")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
