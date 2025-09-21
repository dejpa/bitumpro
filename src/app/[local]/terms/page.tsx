"use client";

import { usePathname } from "next/navigation";
import { FaFileContract, FaGavel, FaUserCheck, FaShieldAlt, FaExclamationTriangle, FaArrowRight } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function Terms() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const termsSections = [
    {
      icon: FaUserCheck,
      title: "Acceptance of Terms",
      titleFr: "Acceptation des Conditions",
      description: "By accessing and using our services, you agree to be bound by these terms and conditions.",
      descriptionFr: "En accédant et en utilisant nos services, vous acceptez d'être lié par ces conditions générales."
    },
    {
      icon: FaFileContract,
      title: "Service Description",
      titleFr: "Description du Service",
      description: "We provide bitumen, asphalt, and related products and services to customers worldwide.",
      descriptionFr: "Nous fournissons du bitume, de l'asphalte et des produits et services connexes aux clients du monde entier."
    },
    {
      icon: FaShieldAlt,
      title: "User Responsibilities",
      titleFr: "Responsabilités de l'Utilisateur",
      description: "Users are responsible for providing accurate information and complying with applicable laws.",
      descriptionFr: "Les utilisateurs sont responsables de fournir des informations exactes et de se conformer aux lois applicables."
    },
    {
      icon: FaExclamationTriangle,
      title: "Limitation of Liability",
      titleFr: "Limitation de Responsabilité",
      description: "Our liability is limited to the maximum extent permitted by applicable law.",
      descriptionFr: "Notre responsabilité est limitée dans la mesure maximale autorisée par la loi applicable."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/terms-cover.webp')" }}
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
              {t("terms.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("terms.heroDescription")}
            </p>
            <p className="text-sm text-gray-400">
              {t("terms.lastUpdated")}: {t("terms.lastUpdatedDate")}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 hover-lift animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                {t("terms.overviewTitle")}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t("terms.overviewDescription")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {termsSections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-accent-400 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {currentLocale === 'fr' ? section.titleFr : section.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {currentLocale === 'fr' ? section.descriptionFr : section.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Agreement */}
              <div className="glass-card p-8 hover-lift animate-scale-in">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("terms.agreementTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("terms.agreementDescription")}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t("terms.agreementPoint1")}</li>
                    <li>{t("terms.agreementPoint2")}</li>
                    <li>{t("terms.agreementPoint3")}</li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.2s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("terms.servicesTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("terms.servicesDescription")}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t("terms.service1")}</li>
                    <li>{t("terms.service2")}</li>
                    <li>{t("terms.service3")}</li>
                    <li>{t("terms.service4")}</li>
                  </ul>
                </div>
              </div>

              {/* User Obligations */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.4s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("terms.userObligationsTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("terms.userObligationsDescription")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">{t("terms.obligation1")}</h4>
                      <p className="text-sm">{t("terms.obligation1Description")}</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">{t("terms.obligation2")}</h4>
                      <p className="text-sm">{t("terms.obligation2Description")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liability */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.6s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("terms.liabilityTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("terms.liabilityDescription")}</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg mt-6">
                    <p className="text-sm text-gray-300 italic">
                      {t("terms.liabilityDisclaimer")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.8s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("terms.terminationTitle")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("terms.terminationDescription")}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t("terms.termination1")}</li>
                    <li>{t("terms.termination2")}</li>
                    <li>{t("terms.termination3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card p-12 hover-lift animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
              {t("terms.contactTitle")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("terms.contactDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("terms.contactUs")}
                  <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
