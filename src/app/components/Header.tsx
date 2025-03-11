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
        const pathSegments = pathname.split("/").filter(Boolean); // حذف `/` اضافه
    
        let newPathname;
    
        if (locales.includes(pathSegments[0])) {
            // اگر مسیر دارای زبان است، جایگزین زبان فعلی با زبان جدید
            newPathname = `/${newLocale}/${pathSegments.slice(1).join("/")}`;
        } else {
            // اگر مسیر بدون زبان است، زبان جدید را اضافه کن
            newPathname = `/${newLocale}${pathname}`;
        }
    
        startTransition(() => {
            router.push(newPathname);
        });
    };
     

    const navLinks = [
        { href: `/${currentLocale}`, label: t("header.home") },
        { href: `/${currentLocale}/about-us`, label: t("header.about") },
        { href: `/${currentLocale}/products`, label: t("header.products") },
        { href: `/${currentLocale}/sustainability`, label: t("header.sustainability") },
        { href: `/${currentLocale}/career`, label: t("header.career") },
        { href: `/${currentLocale}/media`, label: t("header.media") },
        { href: `/${currentLocale}/contact`, label: t("header.contact") }
    ];
    

    return (
        <header className="w-full bg-gray-900 text-white p-4 flex justify-between items-center drop-shadow-md fixed z-50">
            {/* لوگو */}
            <div className="flex items-center">
                <Link href={`/${currentLocale}`}>
                    <img src="/logo.png" alt="Company Logo" className="w-32 h-auto mx-auto" />
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
                        {t("header.requestConsultation")}
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
                                {t("header.requestConsultation")}
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