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
  <div className="min-h-screen bg-gray-900 text-white">
    {/* Hero Section */}
    <section className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-top" style={{ backgroundImage: "url('/about-us-cover.webp')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-yellow-400">{t("aboutUs.heroTitle")}</h1>
        <p className="text-xl mb-8 text-gray-200">{t("aboutUs.heroDescription")}</p>
        <Link href="/contact" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300">
          {t("aboutUs.contactUs")}
        </Link>
      </div>
    </section>

    {/* Page Content */}
    <div className="container mx-auto py-16 px-4 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Our Business */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <FaBuilding className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            <Link className="flex justify-center items-center" href={`/${currentLocale}/contact`}>
              {t("aboutUs.ourBusiness")}
              <FaArrowRight className="ml-2" />
            </Link>
          </h3>
          <p className="text-gray-300">{t("aboutUs.ourBusinessDescription")}</p>
        </div>

        {/* Vision */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <FaCheckCircle className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            <Link className="flex justify-center items-center" href={`/${currentLocale}/contact`}>
              {t("aboutUs.ourVision")}
              <FaArrowRight className="ml-2" />
            </Link>
          </h3>
          <p className="text-gray-300">{t("aboutUs.ourVisionDescription")}</p>
        </div>

        {/* Corporate Governance */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <FaShieldAlt className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            <Link className="flex justify-center items-center" href={`/${currentLocale}/contact`}>
              {t("aboutUs.corporateGovernance")}
              <FaArrowRight className="ml-2" />
            </Link>
          </h3>
          <p className="text-gray-300">{t("aboutUs.corporateGovernanceDescription")}</p>
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
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <FaHistory className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            <Link className="flex justify-center items-center" href={`/${currentLocale}/contact`}>
              {t("aboutUs.history")}
              <FaArrowRight className="ml-2" />
            </Link>
          </h3>
          <p className="text-gray-300">{t("aboutUs.historyDescription")}</p>
        </div>
      </div>
    </div>

    {/* Description */}
    <section className="text-lg container mx-auto text-center pb-16">
      <p className="">{t("aboutUs.aboutUsDescription")}</p>
    </section>

    {/* Call to Action */}
    <section className="py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">{t("aboutUs.readyToRestore")}</h2>
      <p className="text-xl mb-8 text-gray-300">{t("aboutUs.readyToRestoreDescription")}</p>
      <Link href="/contact" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300">
        {t("aboutUs.contactUs")}
      </Link>
    </section>
  </div>
  );

}