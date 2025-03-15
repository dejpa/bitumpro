"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon} from '@heroicons/react/24/solid';
import { usePathname, useRouter } from "next/navigation";
import { getTranslator } from "@/i18n";
import { getNavLinks, NavLink } from "../constants/navLinks";
import NavItem from "./NavItem";

const locales = ["en", "fr"];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
     

    const navLinks = getNavLinks(t, currentLocale)
    

    return (
        <header className="w-full bg-gray-900 text-white shadow-md fixed z-50 px-6 py-3">
            <div className="relative flex justify-between items-center">
                {/* لوگو */}
                <Link href={`/${currentLocale}`}
                >
                    <img src="/logo.png" alt="Company Logo" className="w-24 lg:w-32 h-auto mx-auto" />
                </Link>

                {/* نویگیشن دسکتاپ */}
                <nav className="hidden ab lg:flex space-x-8">
                    {navLinks.map((link) => (
                        <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
                    ))}
                </nav>

                {/* دکمه‌های سمت راست */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/request-consultation">
                        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">
                            {t("header.requestConsultation")}
                        </button>
                    </Link>
                    <select
                        className="bg-gray-800 text-white border border-gray-700 px-2 py-1 rounded-lg"
                        onChange={changeLanguage}
                        value={currentLocale}
                        disabled={isPending}
                    >
                        {locales.map((locale) => (
                            <option key={locale} value={locale}>
                                {locale === "en" ? "English" : "Français"}
                            </option>
                        ))}
                    </select>
                </div>

                {/* آیکون همبرگر برای موبایل */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* منوی موبایل */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-16 right-0 bg-gray-900 w-full p-4">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} isMobile />
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}