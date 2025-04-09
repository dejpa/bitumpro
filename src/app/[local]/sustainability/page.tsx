"use client";

import { usePathname } from "next/navigation";
import { FaCompass, FaGavel , FaArrowRight } from "react-icons/fa";
import { getTranslator } from "@/i18n";
import Link from "next/link";

const locales = ["en", "fr"];

export default function Sustainability() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
  const t = getTranslator(currentLocale);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/sustainability-cover.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">{t("sustainability.heroTitle")}</h1>
          <p className="text-xl mb-8 text-gray-200">{t("sustainability.heroDescription")}</p>
          <Link
            href={`/${currentLocale}/contact`}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            {t("sustainability.contactUs")}
          </Link>
        </div>
      </section>

    {/* Description Section */}
        <section className="text-lg container mx-auto text-center py-16 ">
            <p>{t("sustainability.description")}</p>
        </section>

    {/* Focus Areas*/}
    <div className="container mx-auto py-16 px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
            href={`/${currentLocale}/sustainability/guiding-principles`}
            className="block p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            >
                <FaCompass className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {t("sustainability.guidingPrinciples")}
                </h3>
                <p className="text-gray-300">{t("sustainability.guidingPrinciplesDesc")}</p>
            </Link>

            <Link
                href={`/${currentLocale}/sustainability/policy`}
                className="block p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                >
                <FaGavel className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {t("sustainability.policy")}
                </h3>
                <p className="text-gray-300">{t("sustainability.policyDesc")}</p>
            </Link>
        </div>
    </div>

     

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">{t("sustainability.readyToAct")}</h2>
        <p className="text-xl mb-8 text-gray-300">{t("sustainability.readyToActDesc")}</p>
        <Link
          href={`/${currentLocale}/contact`}
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          {t("sustainability.contactUs")}
        </Link>
      </section>
    </div>
  );
}

function SustainabilityCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
