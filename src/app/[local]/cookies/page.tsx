"use client";

import { usePathname } from "next/navigation";
import { FaCookie, FaCog, FaChartBar, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function Cookies() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const cookieTypes = [
    {
      icon: FaCog,
      title: "Essential Cookies",
      titleFr: "Cookies Essentiels",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      descriptionFr: "Ces cookies sont nécessaires au bon fonctionnement du site web et ne peuvent pas être désactivés.",
      color: "primary"
    },
    {
      icon: FaChartBar,
      title: "Analytics Cookies",
      titleFr: "Cookies d'Analyse",
      description: "These cookies help us understand how visitors interact with our website by collecting anonymous information.",
      descriptionFr: "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant des informations anonymes.",
      color: "accent"
    },
    {
      icon: FaShieldAlt,
      title: "Security Cookies",
      titleFr: "Cookies de Sécurité",
      description: "These cookies help protect against fraud and maintain the security of our services.",
      descriptionFr: "Ces cookies aident à protéger contre la fraude et à maintenir la sécurité de nos services.",
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/cookies-cover.webp')" }}
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text text-shadow-lg leading-tight">
              {t("cookies.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("cookies.heroDescription")}
            </p>
            <p className="text-sm text-gray-400">
              {t("cookies.lastUpdated")}: {t("cookies.lastUpdatedDate")}
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Overview */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 hover-lift animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                {t("cookies.overviewTitle")}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t("cookies.overviewDescription")}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {cookieTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div key={index} className="glass-card p-6 hover-lift group animate-scale-in text-center" style={{animationDelay: `${index * 0.2}s`}}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${type.color === 'primary' ? 'from-primary-500/20 to-primary-600/20' : 'from-accent-500/20 to-accent-600/20'} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-8 w-8 ${type.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`} />
                      </div>
                      <h3 className="text-xl font-bold gradient-text mb-3">
                        {currentLocale === 'fr' ? type.titleFr : type.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {currentLocale === 'fr' ? type.descriptionFr : type.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* What Are Cookies */}
              <div className="glass-card p-8 hover-lift animate-scale-in">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("cookies.whatAreCookiesTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("cookies.whatAreCookiesDescription")}</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-sm">
                      {t("cookies.cookieExample")}
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Cookies */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.2s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("cookies.howWeUseTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("cookies.howWeUseDescription")}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t("cookies.use1")}</li>
                    <li>{t("cookies.use2")}</li>
                    <li>{t("cookies.use3")}</li>
                    <li>{t("cookies.use4")}</li>
                  </ul>
                </div>
              </div>

              {/* Cookie Management */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.4s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("cookies.managementTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("cookies.managementDescription")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">{t("cookies.browserSettings")}</h4>
                      <p className="text-sm">{t("cookies.browserSettingsDescription")}</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">{t("cookies.cookieConsent")}</h4>
                      <p className="text-sm">{t("cookies.cookieConsentDescription")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.6s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("cookies.thirdPartyTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("cookies.thirdPartyDescription")}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t("cookies.thirdParty1")}</li>
                    <li>{t("cookies.thirdParty2")}</li>
                    <li>{t("cookies.thirdParty3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Preferences */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
              {t("cookies.preferencesTitle")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("cookies.preferencesDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group">
                <span className="flex items-center gap-3">
                  <FaCookie className="h-5 w-5" />
                  {t("cookies.managePreferences")}
                </span>
              </button>
              <Link
                href={`/${currentLocale}/contact`}
                className="glass bg-white/10 border border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover-cursor-glow"
              >
                {t("cookies.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
