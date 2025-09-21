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
            { href: `/${currentLocale}/about-us/our-vision`, label: t("header.ourVision") },
            {
                label: t("header.leadership"),
                subLinks: [
                    { href: `/${currentLocale}/about-us/leadership/executive-team`, label: t("header.executiveTeam") },
                    { href: `/${currentLocale}/about-us/leadership/board-of-directors`, label: t("header.boardOfDirectors") },
                    { href: `/${currentLocale}/about-us/leadership/management-team`, label: t("header.groupManagement") }
                ]
            },
            // {
            //     label: t("header.ourBusiness"),
            //     subLinks: [
            //         { href: `/${currentLocale}/about-us/our-business/company-profile`, label: t("header.companyProfile") },
            //         { href: `/${currentLocale}/about-us/our-business/our-rnd`, label: t("header.ourRND") },
            //         { href: `/${currentLocale}/about-us/our-business/operations`, label: t("header.operations") }
            //     ]
            // },
            // {
            //     label: t("header.corporateGovernance"),
            //     subLinks: [
            //         { href: `/${currentLocale}/about-us/corporate-governance/policies`, label: t("header.policies") },
            //         { href: `/${currentLocale}/about-us/corporate-governance/ethics-compliance`, label: t("header.ethicsCompliance") },
            //         { href: `/${currentLocale}/about-us/corporate-governance/reports`, label: t("header.annualReports") }
            //     ]
            // },
            // {
            //     label: t("header.ourJourney"),
            //     subLinks: [
            //         { href: `/${currentLocale}/about-us/our-journey/history`, label: t("header.history") },
            //         { href: `/${currentLocale}/about-us/our-journey/milestones`, label: t("header.milestones") },
            //         { href: `/${currentLocale}/about-us/our-journey/awards`, label: t("header.awards") }
            //     ]
            // }
        ]
    },
    { href: `/${currentLocale}/products`, label: t("header.products") },
    {
        label: t("header.sustainability"),
        subLinks: [
            { href: `/${currentLocale}/sustainability`, label: t("header.sustainability") },
            { href: `/${currentLocale}/sustainability/our-commitment`, label: t("header.ourCommitment") },
            {
                label: t("header.sustainableProducts"),
                subLinks: [
                    { href: `/${currentLocale}/sustainability/sustainable-products/eco-friendly-solutions`, label: t("header.ecoFriendlySolutions") },
                    { href: `/${currentLocale}/sustainability/sustainable-products/green-technology`, label: t("header.greenTechnology") },
                    { href: `/${currentLocale}/sustainability/sustainable-products/certifications`, label: t("header.certifications") }
                ]
            },
            // {
            //     label: t("header.guidingPrinciples"),
            //     subLinks: [
            //         { href: `/${currentLocale}/sustainability/guiding-principles/environmental-policy`, label: t("header.environmentalPolicy") },
            //         { href: `/${currentLocale}/sustainability/guiding-principles/hse-policy`, label: t("header.hsePolicy") },
            //         { href: `/${currentLocale}/sustainability/guiding-principles/social-responsibility`, label: t("header.socialResponsibility") }
            //     ]
            // },
            // {
            //     label: t("header.environmentalImpact"),
            //     subLinks: [
            //         { href: `/${currentLocale}/sustainability/environmental-impact/carbon-footprint`, label: t("header.carbonFootprint") },
            //         { href: `/${currentLocale}/sustainability/environmental-impact/waste-reduction`, label: t("header.wasteReduction") },
            //         { href: `/${currentLocale}/sustainability/environmental-impact/renewable-energy`, label: t("header.renewableEnergy") }
            //     ]
            // },
            // { href: `/${currentLocale}/sustainability/reports`, label: t("header.sustainabilityReports") }
        ]
    },
    // { href: `/${currentLocale}/career`, label: t("header.career") },
    // { href: `/${currentLocale}/media`, label: t("header.media") },
    { href: `/${currentLocale}/contact`, label: t("header.contact") }
];
