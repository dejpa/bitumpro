"use client";

import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SocialMediaLink } from '../constants/socialMedia';

interface SocialMediaIconProps {
  social: SocialMediaLink;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8'
};

export default function SocialMediaIcon({ 
  social, 
  size = 'md', 
  className = '', 
  showLabel = false 
}: SocialMediaIconProps) {
  // Map icon names to actual components
  const iconMap: { [key: string]: any } = {
    'FaInstagram': FaInstagram,
    'FaLinkedin': FaLinkedin,
    'FaTwitter': FaTwitter,
    'FaFacebook': FaFacebook,
    'FaYoutube': FaYoutube
  };
  
  const IconComponent = iconMap[social.icon];
  
  if (!IconComponent) {
    console.warn(`Icon component not found for: ${social.icon}`);
    return null;
  }
  
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card p-4 hover-lift hover-cursor-expand group ${className}`}
      aria-label={social.name}
    >
      <IconComponent className={`${sizeClasses[size]} ${social.color} ${social.hoverColor} transition-colors duration-300`} />
      {showLabel && (
        <span className="text-xs text-gray-300 mt-1 group-hover:text-primary-400 transition-colors duration-300">
          {social.name}
        </span>
      )}
    </a>
  );
}

// Component for rendering all social media icons
interface SocialMediaIconsProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
  spacing?: 'tight' | 'normal' | 'wide';
}

const spacingClasses = {
  tight: 'space-x-2',
  normal: 'space-x-4',
  wide: 'space-x-6'
};

export function SocialMediaIcons({ 
  size = 'md', 
  className = '', 
  showLabel = false,
  spacing = 'normal'
}: SocialMediaIconsProps) {
  const { getAllSocialMediaLinks } = require('../constants/socialMedia');
  const socialLinks = getAllSocialMediaLinks();
  
  return (
    <div className={`flex ${spacingClasses[spacing]} ${className}`}>
      {socialLinks.map((social: SocialMediaLink, index: number) => (
        <SocialMediaIcon
          key={index}
          social={social}
          size={size}
          showLabel={showLabel}
        />
      ))}
    </div>
  );
}
