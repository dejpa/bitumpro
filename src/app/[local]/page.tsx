"use client";

import { usePathname } from "next/navigation";
import { FaLeaf, FaCheckCircle, FaShieldAlt, FaTruck, FaGlobe, FaBoxOpen } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/homepage-cover.webp')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">
            {t("home.heroTitle")}
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            {t("home.heroDescription")}
          </p>
          <div className="space-x-4">
            <Link
              href="/about-us"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              {t("home.learnMore")}
            </Link>
            <a
              href="/contact"
              className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              {t("home.getQuote")}
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
          {t("home.aboutUs")}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {t("home.aboutUsDescription")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <FaLeaf className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400"> {t("home.ourVision")}</h3>
              <p className="text-gray-300">
                {t("home.ourVisionDescription")}
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <FaCheckCircle className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400"> {t("home.ourMission")}</h3>
              <p className="text-gray-300">
               {t("home.ourMissionDescription")}
              </p>
            </div>

            {/* Values */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <FaShieldAlt className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t("home.ourValues")}</h3>
              <p className="text-gray-300">
                {t("home.ourValuesDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
            {t("home.ourProducts")}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("home.ourProductsDescription")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1: Bitumen for Land Restoration */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <FaTruck className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t("home.bitumenForLandRestoration")}</h3>
              <p className="text-gray-300">
               {t("home.bitumenForLandRestorationDescription")}
              </p>
            </div>

            {/* Product 2: Eco-Friendly Packaging */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <FaBoxOpen className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t("home.ecoFriendlyPackaging")}</h3>
              <p className="text-gray-300">
               {t("home.ecoFriendlyPackagingDescription")}
              </p>
            </div>

            {/* Product 3: International Distribution */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <FaGlobe className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t("home.internationalDistribution")}</h3>
              <p className="text-gray-300">
                {t("home.internationalDistributionDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
            {t("home.contactUs")}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("home.contactUsDescription")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t("home.dubaiOffice")}</h3>
              <p className="text-gray-300">
                {t("home.canadaOfficeAddress")}
              </p>
              <p className="text-gray-300">
                {t("home.phone")}: +1 (416) 123-4567
              </p>
              <p className="text-gray-300">
                {t("home.email")}: info@company.com
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t("home.dubaiOfficeAddress")}</h3>
              <p className="text-gray-300">
                {t("home.canadaOfficeAddress")}
              </p>
              <p className="text-gray-300">
                {t("home.phone")}: +971 4 123 4567
              </p>
              <p className="text-gray-300">
                {t("home.email")}: dubai@company.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
            {t("home.readyToRestore")}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t("home.readyToRestore")}
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
             {t("home.contactUs")}
          </a>
        </div>
      </section>
    </div>
  );
}