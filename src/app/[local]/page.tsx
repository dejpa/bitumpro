"use client";

import { usePathname } from "next/navigation";
import { FaLeaf, FaCheckCircle, FaShieldAlt, FaTruck, FaGlobe, FaBoxOpen, FaArrowRight } from "react-icons/fa";
import { getTranslator } from "@/i18n";

import Link from "next/link";

const locales = ["en", "fr"];

export default function Home() {

  const pathname = usePathname();


    // استخراج زبان فعلی از مسیر
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);



  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/homepage-cover.webp')" }}
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
              {t("home.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("home.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/about-us`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("home.learnMore")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <a
                href="/contact"
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                {t("home.getQuote")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("home.aboutUs")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("home.aboutUsDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="glass-card p-8 hover-lift group animate-slide-up">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaLeaf className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("home.ourVision")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("home.ourVisionDescription")}
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card p-8 hover-lift group animate-slide-up [animation-delay:0.2s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="text-accent-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("home.ourMission")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("home.ourMissionDescription")}
              </p>
            </div>

            {/* Values */}
            <div className="glass-card p-8 hover-lift group animate-slide-up [animation-delay:0.4s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaShieldAlt className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("home.ourValues")}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary-500/50 pl-4">
                  <h4 className="font-bold text-primary-400 mb-1">{t("home.ourValuesInnovation")}</h4>
                  <p className="text-gray-300 text-sm">{t("home.ourValuesInnovationDescription")}</p>
                </div>
                <div className="border-l-2 border-accent-500/50 pl-4">
                  <h4 className="font-bold text-accent-400 mb-1">{t("home.ourValuesSustainability")}</h4>
                  <p className="text-gray-300 text-sm">{t("home.ourValuesSustainabilityDescription")}</p>
                </div>
                <div className="border-l-2 border-primary-500/50 pl-4">
                  <h4 className="font-bold text-primary-400 mb-1">{t("home.ourValuesExcellence")}</h4>
                  <p className="text-gray-300 text-sm">{t("home.ourValuesExcellenceDescription")}</p>
                </div>
                <div className="border-l-2 border-accent-500/50 pl-4">
                  <h4 className="font-bold text-accent-400 mb-1">{t("home.ourValuesIntegrity")}</h4>
                  <p className="text-gray-300 text-sm">{t("home.ourValuesIntegrityDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Products Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("home.ourProducts")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("home.ourProductsDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Product 1: Bitumen for Land Restoration */}
            <div className="glass-card p-8 hover-lift group animate-scale-in">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <FaTruck className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("home.bitumenForLandRestoration")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("home.bitumenForLandRestorationDescription")}
              </p>
            </div>

            {/* Product 2: Eco-Friendly Packaging */}
            <div className="glass-card p-8 hover-lift group animate-scale-in [animation-delay:0.1s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <FaBoxOpen className="text-accent-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("home.ecoFriendlyPackaging")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("home.ecoFriendlyPackagingDescription")}
              </p>
            </div>

            {/* Product 3: International Distribution */}
            <div className="glass-card p-8 hover-lift group animate-scale-in [animation-delay:0.2s]">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <FaGlobe className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  {t("home.globalDistribution")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                {t("home.globalDistributionDescription")}
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              className="group inline-flex items-center gap-3 glass-button px-8 py-4 text-lg font-semibold rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand" 
              href={`/${currentLocale}/products`}
            >
              {t("home.exploreProducts")}
              <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CEO Spotlight Section */}
      <section className="py-24 bg-gray-900">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <div className="glass-card p-12 hover-lift group animate-slide-up">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* CEO Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-3 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/vahid-sheikhi.jpeg" 
                  alt="Vahid Sheikhi - CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* CEO Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Meet Our CEO
            </h2>
            <h3 className="text-2xl font-bold text-accent-400 mb-4">
              Vahid Sheikhi
            </h3>
            <p className="text-xl text-primary-400 mb-6">
              Chief Executive Officer
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With over 25 years of experience in team leadership and petroleum products value creation, Vahid Sheikhi leads BitumAsphalt with a vision of sustainable infrastructure development. He specializes in producing high-value petroleum products and environmentally friendly petroleum derivatives through team building for innovation in valuable petroleum product development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={`/${currentLocale}/about-us/leadership`}
                className="glass-button px-6 py-3 text-sm font-semibold text-white rounded-xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-2">
                  Learn More
                  <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                href={`/${currentLocale}/contact`}
                className="glass bg-white/10 border border-white/20 text-white px-6 py-3 text-sm font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                Contact CEO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("home.contactUs")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("home.contactUsDescription")}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 hover-lift">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaGlobe className="text-primary-400 h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-6">
                  {t("home.canadaOffice")}
                </h3>
                <div className="space-y-4 text-lg">
                  <p className="text-gray-300 leading-relaxed">
                    {t("home.canadaOfficeAddress")}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-primary-400 font-medium">{t("home.phone")}:</span> +1 (778) 877-1052
                  </p>
                  <p className="text-gray-300">
                    <span className="text-accent-400 font-medium">{t("home.email")}:</span> info@company.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {t("home.readyToRestore")}
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-gray-300 leading-relaxed">
              {t("home.readyToRestoreDescription")}
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 glass-button px-12 py-6 text-xl font-bold rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand"
            >
              {t("home.contactUs")}
              <FaArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}