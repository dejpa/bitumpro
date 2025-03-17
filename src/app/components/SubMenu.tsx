import Link from "next/link";
import { NavLink } from "@/app/constants/navLinks";

interface SubMenuProps {
    subLink: NavLink;
    isMobile?: boolean;
    closeMenu: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ subLink, isMobile = false ,closeMenu}) => {
    return (
        <div className="flex flex-col">
            {subLink.subLinks ? (
                <>
                    <h2 className="font-semibold text-yellow-400 border-b border-gray-600 pb-2 mb-2">
                        {subLink.label}
                    </h2>
                    <div className="mt-2 space-y-2">
                        {subLink.subLinks.map((nestedSubLink, nestedIndex) => (
                            <Link
                                key={nestedIndex}
                                href={nestedSubLink.href}
                                className="text-gray-300 hover:underline transition py-1 flex"
                                onClick={closeMenu}
                            >
                                {nestedSubLink.label}
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <Link 
                    href={subLink.href} 
                    className="font-semibold text-yellow-400 hover:underline transition py-1"
                    onClick={closeMenu}
                >
                    {subLink.label}
                </Link>
            )}
        </div>
    );
};

export default SubMenu;
