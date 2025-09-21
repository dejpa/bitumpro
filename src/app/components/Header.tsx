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
        <header className="w-full glass backdrop-blur-xl border-b border-white/10 fixed z-50 top-0 left-0 right-0">
            <div className="relative flex justify-between items-center px-4 lg:px-8 py-4">
                {/* لوگو */}
                <Link href={`/${currentLocale}`} className="group hover-cursor-glow">
                    <img 
                        src="/logo.png" 
                        alt="Company Logo" 
                        className="w-20 lg:w-28 h-auto transition-all duration-300 group-hover:scale-105" 
                    />
                </Link>

                {/* نویگیشن دسکتاپ */}
                <nav className="hidden lg:flex space-x-1">
                    {navLinks.map((link) => (
                        <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
                    ))}
                </nav>

                {/* دکمه‌های سمت راست */}
                <div className="hidden lg:flex items-center space-x-3">
                    <Link href="/request-consultation" className="hover-cursor-expand">
                        <button className="glass-button px-6 py-3 text-sm font-semibold text-white rounded-xl hover:shadow-glow transition-all duration-300 group">
                            <span className="flex items-center gap-2">
                                {t("header.requestConsultation")}
                                <ChevronDownIcon className="h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                    </Link>
                    <select
                        className="glass bg-white/5 text-white border border-white/20 px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-md hover:bg-white/10 transition-all duration-300 focus:ring-2 focus:ring-primary-400/50"
                        onChange={changeLanguage}
                        value={currentLocale}
                        disabled={isPending}
                    >
                        {locales.map((locale) => (
                            <option key={locale} value={locale} className="bg-neutral-800">
                                {locale === "en" ? "English" : "Français"}
                            </option>
                        ))}
                    </select>
                </div>

                {/* آیکون همبرگر برای موبایل */}
                <div className="lg:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300 hover-cursor-expand"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-white" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* منوی موبایل */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 glass backdrop-blur-xl border-t border-white/10 animate-slide-down">
                    <div className="p-6">
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <NavItem key={link.href} link={link} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} isMobile />
                            ))}
                        </nav>
                        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col space-y-3">
                            <Link href="/request-consultation">
                                <button className="w-full glass-button px-6 py-3 text-sm font-semibold text-white rounded-xl hover:shadow-glow transition-all duration-300">
                                    {t("header.requestConsultation")}
                                </button>
                            </Link>
                            <select
                                className="w-full glass bg-white/5 text-white border border-white/20 px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                                onChange={changeLanguage}
                                value={currentLocale}
                                disabled={isPending}
                            >
                                {locales.map((locale) => (
                                    <option key={locale} value={locale} className="bg-neutral-800">
                                        {locale === "en" ? "English" : "Français"}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

