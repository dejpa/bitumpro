export type NavLink = {
    href?: string;
    label: string;
    subLinks?: NavLink[];  
};


export const getNavLinks = (t: (key: string) => string, currentLocale: string) => [
    { href: `/${currentLocale}`, label: t("header.home") },
    {
        label: t("header.about"),
        subLinks: [
            { href: `/${currentLocale}/about-us`, label: t("header.aboutUs") },
            {
                href: `/${currentLocale}/about-us/our-business`,
                label: t("header.ourBusiness"),
                subLinks: [
                    { href: `/${currentLocale}/about-us/our-business/this-is-us`, label: t("header.thisIsUs") },
                    { href: `/${currentLocale}/about-us/our-business/sustainability`, label: t("header.sustainability") },
                    { href: `/${currentLocale}/about-us/our-business/our-rnd`, label: t("header.ourRND") }
                ]
            },
            { href: `/${currentLocale}/about-us/our-vision`, label: t("header.ourVision") },
            {
                href: `/${currentLocale}/about-us/corporate-governance`,
                label: t("header.corporateGovernance"),
                subLinks: [
                    { href: `/${currentLocale}/about-us/corporate-governance/board-of-directors`, label: t("header.boardOfDirectors") },
                    { href: `/${currentLocale}/about-us/corporate-governance/group-management`, label: t("header.groupManagement") }
                ]
            },
            {
                href: `/${currentLocale}/about-us/our-journey`,
                label: t("header.ourJourney"),
                subLinks: [
                    { href: `/${currentLocale}/about-us/history/explore-bitumasphalt`, label: t("header.exploreBitumAsphalt") },
                    { href: `/${currentLocale}/about-us/history/celebrating-our-past`, label: t("header.celebratingOurPast") }
                ]
            }
        ]
    },
    { href: `/${currentLocale}/products`, label: t("header.products") },
    {
        label: t("header.sustainability"),
        subLinks: [
            { href: `/${currentLocale}/sustainability`, label: t("header.sustainability") },
            {
                href: `/${currentLocale}/sustainability/guidingPrinciples`,
                label: t("header.guidingPrinciples"),
                subLinks: [
                    { href: `/${currentLocale}/sustainability/guidingPrinciples/Sustainable-development-policy`, label: t("header.SustainableDevelopmentPolicy") },
                    { href: `/${currentLocale}/sustainability/guidingPrinciples/HSE`, label: t("header.HSE") },
                ]
            },
            { href: `/${currentLocale}/sustainability/sustainableProducts`, label: t("header.sustainableProducts") },
        ]
    },
    { href: `/${currentLocale}/career`, label: t("header.career") },
    { href: `/${currentLocale}/media`, label: t("header.media") },
    { href: `/${currentLocale}/contact`, label: t("header.contact") }
];
