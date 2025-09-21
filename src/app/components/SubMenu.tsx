import Link from "next/link";
import { NavLink } from "@/app/constants/navLinks";

interface SubMenuProps {
    subLink: NavLink;
    isMobile?: boolean;
    closeMenu: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ subLink, isMobile = false, closeMenu }) => {
    return (
        <div className={`flex flex-col ${isMobile ? "w-full" : ""}`}>
            {subLink.subLinks ? (
                <>
                    <h2 className={`font-semibold text-yellow-400 border-b border-gray-600 pb-2 mb-2 ${isMobile ? "text-base" : ""}`}>
                        {subLink.label}
                    </h2>
                    <div className={`mt-2 space-y-2 ${isMobile ? "ml-2" : ""}`}>
                        {subLink.subLinks.map((nestedSubLink, nestedIndex) => (
                            <button
                                key={nestedIndex}
                                onClick={() => {
                                    window.location.href = nestedSubLink.href!;
                                    closeMenu();
                                }}
                                className={`text-gray-300 hover:text-white hover:underline transition py-1 flex text-left w-full ${isMobile ? "text-sm py-2" : ""}`}
                            >
                                {nestedSubLink.label}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <button
                    onClick={() => {
                        window.location.href = subLink.href!;
                        closeMenu();
                    }}
                    className={`font-semibold text-yellow-400 hover:text-yellow-300 hover:underline transition py-1 text-left w-full ${isMobile ? "text-base py-2" : ""}`}
                >
                    {subLink.label}
                </button>
            )}
        </div>
    );
};

export default SubMenu;