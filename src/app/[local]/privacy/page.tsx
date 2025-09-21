"use client";

import { usePathname } from "next/navigation";
import { FaShieldAlt, FaUser, FaLock, FaEye, FaDatabase, FaGavel, FaArrowRight } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function Privacy() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  const privacySections = [
    {
      icon: FaUser,
      title: "Information We Collect",
      titleFr: "Informations que nous collectons",
      description: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.",
      descriptionFr: "Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte, effectuez un achat ou nous contactez pour obtenir de l'aide."
    },
    {
      icon: FaDatabase,
      title: "How We Use Your Information",
      titleFr: "Comment nous utilisons vos informations",
      description: "We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.",
      descriptionFr: "Nous utilisons les informations collectées pour fournir, maintenir et améliorer nos services, traiter les transactions et communiquer avec vous."
    },
    {
      icon: FaShieldAlt,
      title: "Information Security",
      titleFr: "Sécurité des informations",
      description: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access and disclosure.",
      descriptionFr: "Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès et la divulgation non autorisés."
    },
    {
      icon: FaEye,
      title: "Your Rights",
      titleFr: "Vos droits",
      description: "You have the right to access, update, or delete your personal information, and to opt out of certain communications from us.",
      descriptionFr: "Vous avez le droit d'accéder, de mettre à jour ou de supprimer vos informations personnelles, et de vous désabonner de certaines communications de notre part."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/privacy-cover.webp')" }}
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
              {t("privacy.heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t("privacy.heroDescription")}
            </p>
            <p className="text-sm text-gray-400">
              {t("privacy.lastUpdated")}: {t("privacy.lastUpdatedDate")}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 hover-lift animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                {t("privacy.overviewTitle")}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t("privacy.overviewDescription")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {privacySections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-primary-400 h-6 w-6" />
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

      {/* Detailed Privacy Policy */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Information Collection */}
              <div className="glass-card p-8 hover-lift animate-scale-in">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("privacy.informationCollection")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("privacy.informationCollectionDescription")}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t("privacy.personalInformation")}</li>
                    <li>{t("privacy.usageData")}</li>
                    <li>{t("privacy.cookiesData")}</li>
                    <li>{t("privacy.communicationData")}</li>
                  </ul>
                </div>
              </div>

              {/* Data Usage */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.2s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("privacy.dataUsage")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("privacy.dataUsageDescription")}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t("privacy.serviceProvision")}</li>
                    <li>{t("privacy.communication")}</li>
                    <li>{t("privacy.improvement")}</li>
                    <li>{t("privacy.legalCompliance")}</li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.4s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("privacy.dataProtection")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("privacy.dataProtectionDescription")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start gap-3">
                      <FaLock className="text-accent-400 h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">{t("privacy.encryption")}</h4>
                        <p className="text-sm">{t("privacy.encryptionDescription")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaShieldAlt className="text-accent-400 h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">{t("privacy.accessControl")}</h4>
                        <p className="text-sm">{t("privacy.accessControlDescription")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="glass-card p-8 hover-lift animate-scale-in [animation-delay:0.6s]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 gradient-text">
                  {t("privacy.yourRights")}
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>{t("privacy.yourRightsDescription")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3">
                      <FaEye className="text-primary-400 h-5 w-5" />
                      <span>{t("privacy.rightAccess")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaDatabase className="text-primary-400 h-5 w-5" />
                      <span>{t("privacy.rightCorrection")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaShieldAlt className="text-primary-400 h-5 w-5" />
                      <span>{t("privacy.rightDeletion")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGavel className="text-primary-400 h-5 w-5" />
                      <span>{t("privacy.rightObjection")}</span>
                    </div>
                  </div>
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
              {t("privacy.contactTitle")}
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("privacy.contactDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={`/${currentLocale}/contact`}
                className="glass-button px-8 py-4 text-lg font-semibold text-white rounded-2xl hover:shadow-glow transition-all duration-300 hover-cursor-expand group"
              >
                <span className="flex items-center gap-3">
                  {t("privacy.contactUs")}
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
