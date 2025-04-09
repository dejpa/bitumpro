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
        <div ref={menuRef}  className={` ${isMobile ? "w-full" : ""}`}>
            <Link
                href={link.href}
                onClick={() => setOpenDropdown(isOpen ? null : link.href)}
                className={`flex items-center justify-between w-full font-medium text-white hover:text-yellow-400 transition ${
                    isMobile ? "py-2 px-4" : ""
                }`}
            >
                {link.label} {link.subLinks && <ChevronDownIcon className="w-4 h-4 ml-1" />}
            </Link>

            {link.subLinks && isOpen && (
                <div className={`bg-gray-800 shadow-lg transition-all duration-300 z-50 rounded-lg ${isMobile ? "pl-6" : "absolute left-0 top-full w-full"}`}>
                    <div className={`max-w-[1200px] mx-auto p-6 ${isMobile ? "p-2" : ""}`}>
                        <div className="grid grid-cols-3 gap-6">
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
