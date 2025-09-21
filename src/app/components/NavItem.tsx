import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavLink } from "@/app/constants/navLinks";
import  SubMenu  from "@/app/components/SubMenu";
import { useEffect, useRef } from "react";


interface NavItemProps {
    link: NavLink;
    openDropdown: string | null;
    setOpenDropdown: (value: string | null) => void;
    isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ link, openDropdown, setOpenDropdown, isMobile = false }) => {
    const isOpen = openDropdown === link.href;
    const menuRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenDropdown]);

    return (
        <div ref={menuRef} className={`${isMobile ? "w-full" : "relative"}`}>
            <Link
                href={link.href}
                onClick={() => setOpenDropdown(isOpen ? null : link.href)}
                className={`flex items-center justify-between w-full font-medium text-white/90 hover:text-primary-400 transition-all duration-300 group hover-cursor-glow ${
                    isMobile ? "py-3 px-4 rounded-xl hover:bg-white/5" : "px-4 py-2 rounded-lg hover:bg-white/5"
                }`}
            >
                <span className="transition-colors duration-300">{link.label}</span>
                {link.subLinks && (
                    <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                )}
            </Link>

            {link.subLinks && isOpen && (
                <div className={`glass-card backdrop-blur-xl transition-all duration-300 z-50 animate-slide-down ${
                    isMobile ? "mt-2 ml-4" : "absolute left-0 top-full w-screen max-w-4xl mt-2"
                }`}>
                    <div className={`p-6 ${isMobile ? "p-4" : ""}`}>
                        <div className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
                            {link.subLinks.map((subLink, index) => (
                                <SubMenu 
                                    key={index} 
                                    subLink={subLink} 
                                    isMobile={isMobile} 
                                    closeMenu={() => setOpenDropdown(null)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavItem;
