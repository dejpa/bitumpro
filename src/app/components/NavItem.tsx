import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavLink } from "@/app/constants/navLinks";
import SubMenu from "@/app/components/SubMenu";
import { useRef, useEffect } from "react";

interface NavItemProps {
    link: NavLink;
    openDropdown: string | null;
    setOpenDropdown: (value: string | null) => void;
    isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ link, openDropdown, setOpenDropdown, isMobile = false }) => {
    const isOpen = openDropdown === link.label;
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Click outside handler - improved for mobile
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            // Don't close if clicking on the button itself
            const target = event.target as Element;
            if (target && target.closest('button[type="button"]')) {
                return;
            }
            
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        if (isOpen) {
            // Use click instead of mousedown/touchstart to avoid conflicts
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, setOpenDropdown]);

    return (
        <div ref={menuRef} className={`${isMobile ? "w-full" : "relative"}`}>
            {link.subLinks ? (
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Mobile button clicked:', link.label, 'Current state:', isOpen);
                        setOpenDropdown(isOpen ? null : link.label);
                    }}
                    className={`flex items-center justify-between w-full font-medium text-white/90 hover:text-primary-400 transition-all duration-300 group hover-cursor-glow ${
                        isMobile ? "py-3 px-3 rounded-lg hover:bg-white/5 text-base" : "px-4 py-2 rounded-lg hover:bg-white/5"
                    }`}
                >
                    <span className="transition-colors duration-300">{link.label}</span>
                    <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
            ) : (
                <Link
                    href={link.href!}
                    className={`flex items-center justify-between w-full font-medium text-white/90 hover:text-primary-400 transition-all duration-300 group hover-cursor-glow ${
                        isMobile ? "py-3 px-3 rounded-lg hover:bg-white/5 text-base" : "px-4 py-2 rounded-lg hover:bg-white/5"
                    }`}
                >
                    <span className="transition-colors duration-300">{link.label}</span>
                </Link>
            )}

            {link.subLinks && isOpen && (
                <div className={`glass-card backdrop-blur-xl bg-gray-900/80 transition-all duration-300 z-[60] animate-slide-down ${
                    isMobile ? "mt-2 ml-4 mr-4 w-auto" : "fixed left-8 top-28 right-8 w-auto"
                }`}>
                    <div className={`${isMobile ? "p-4" : "p-6"}`}>
                        <div className={`${isMobile ? "space-y-4" : "grid gap-6 grid-cols-3"}`}>
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