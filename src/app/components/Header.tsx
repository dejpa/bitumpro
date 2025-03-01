"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from "next/navigation";
import { getTranslator } from "@/i18n";

const locales = ["en", "fr"];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();

    // استخراج زبان فعلی از مسیر
    const pathSegments = pathname.split("/");
    const currentLocale = locales.includes(pathSegments[1]) ? pathSegments[1] : "en";
    const t = getTranslator(currentLocale);

    // تغییر زبان
    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;

        let newPathname;
        if (newLocale === "en") {
            // اگر مسیر شامل زبان بود، فقط زبان رو حذف کن، بقیه مسیر بمونه
            newPathname = `/${pathSegments.slice(2).join("/")}` || "/";
        } else {
            // اگر مسیر زبان نداره، اضافه کن
            if (locales.includes(pathSegments[1])) {
                newPathname = `/${newLocale}/${pathSegments.slice(2).join("/")}`;
            } else {
                newPathname = `/${newLocale}${pathname}`;
            }
        }

        startTransition(() => {
            router.push(newPathname);
        });
    };

    const navLinks = [
        { href: "/", label: t("home") },
        { href: "/about-us", label: t("about") },
        { href: "/applications", label: t("applications") },
        { href: "/environmental-impact", label: t("environmentalImpact") },
        { href: "/case-studies", label: t("caseStudies") },
        { href: "/contact", label: t("contact") }
    ];

    return (
        <header className="w-full bg-gray-900 text-white p-4 flex justify-between items-center drop-shadow-md fixed z-50">
            {/* لوگو */}
            <div className="flex items-center">
                <Link href="/">
                    <img src="/logo.jpeg" alt="Company Logo" className="h-12" />
                </Link>
            </div>

            {/* نویگیشن دسکتاپ */}
            <nav className="hidden lg:flex space-x-6">
                {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="hover:text-yellow-400 transition duration-300">
                        {label}
                    </Link>
                ))}
            </nav>

            {/* دکمه‌های سمت راست (زبان و CTA) */}
            <div className="hidden lg:flex items-center space-x-4">
                <Link href="/request-consultation">
                    <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">
                        {t("requestConsultation")}
                    </button>
                </Link>
                <div>
                    <select
                        className="bg-gray-800 text-white border border-gray-700 px-2 py-1 rounded-lg"
                        onChange={changeLanguage}
                        value={currentLocale}
                        disabled={isPending}
                    >
                        {locales.map((locale) => (
                            <option key={locale} value={locale}>
                                {locale === "en" ? "English" : locale === "fr" ? "France" : "العربية"}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* آیکون همبرگر برای موبایل */}
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                    {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
            </div>

            {/* منوی موبایل */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-16 right-0 bg-gray-900 w-full p-4">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                onClick={() => setIsMenuOpen(false)}
                                href={href}
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-4">
                        <Link href="/request-consultation">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300 w-full"
                            >
                                {t("requestConsultation")}
                            </button>
                        </Link>
                    </div>
                    <div className="mt-4">
                        <select
                            className="bg-gray-800 text-white border border-gray-700 px-2 py-1 rounded-lg w-full"
                            onChange={changeLanguage}
                            value={currentLocale}
                            disabled={isPending}
                        >
                            {locales.map((locale) => (
                                <option key={locale} value={locale}>
                                    {locale === "en" ? "English" : locale === "fr" ? "France" : "العربية"}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </header>
    );
}