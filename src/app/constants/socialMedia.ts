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
    url: 'https://www.linkedin.com/company/bitumpro',
    icon: 'FaLinkedin',
    color: 'text-blue-400',
    hoverColor: 'hover:text-blue-300'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/Bitumpro',
    icon: 'FaTwitter',
    color: 'text-blue-300',
    hoverColor: 'hover:text-blue-200'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Bitumpro',
    icon: 'FaFacebook',
    color: 'text-blue-500',
    hoverColor: 'hover:text-blue-400'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bitumpro',
    icon: 'FaInstagram',
    color: 'text-pink-400',
    hoverColor: 'hover:text-pink-300'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Bitumpro',
    icon: 'FaYoutube',
    color: 'text-red-500',
    hoverColor: 'hover:text-red-400'
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
