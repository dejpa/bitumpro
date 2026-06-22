export interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  hoverColor: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/bitumproco',
    icon: 'FaLinkedin',
    color: 'text-blue-400',
    hoverColor: 'hover:text-blue-300'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bitumpro.co',
    icon: 'FaInstagram',
    color: 'text-pink-400',
    hoverColor: 'hover:text-pink-300'
  }
];

// Helper function to get social media links by name
export const getSocialMediaLink = (name: string): SocialMediaLink | undefined => {
  return socialMediaLinks.find(social => social.name.toLowerCase() === name.toLowerCase());
};

// Helper function to get all social media links
export const getAllSocialMediaLinks = (): SocialMediaLink[] => {
  return socialMediaLinks;
};

// Helper function to get social media links for structured data
export const getSocialMediaUrls = (): string[] => {
  return socialMediaLinks.map(social => social.url);
};
