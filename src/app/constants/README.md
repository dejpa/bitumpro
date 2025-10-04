# Social Media Configuration

This directory contains centralized configuration for social media links used throughout the application.

## Files

### `socialMedia.ts`
Central configuration file for all social media links.

## Usage

### Adding New Social Media Links

To add a new social media platform:

1. **Update the configuration** in `src/app/constants/socialMedia.ts`:
   ```typescript
   export const socialMediaLinks: SocialMediaLink[] = [
     // ... existing links
     {
       name: 'TikTok',
       url: 'https://www.tiktok.com/@bitumpro',
       icon: 'FaTiktok',
       color: 'text-black',
       hoverColor: 'hover:text-gray-800'
     }
   ];
   ```

2. **Add the icon import** to `SocialMediaIcon.tsx`:
   ```typescript
   import { FaTiktok } from 'react-icons/fa';
   
   const iconMap: { [key: string]: any } = {
     // ... existing icons
     'FaTiktok': FaTiktok
   };
   ```

### Using Social Media Components

#### Method 1: Using the SocialMediaIcons Component (Recommended)

```tsx
import { SocialMediaIcons } from '../components/SocialMediaIcon';

// Render all social media icons
<SocialMediaIcons size="md" spacing="normal" />

// With custom styling
<SocialMediaIcons 
  size="lg" 
  spacing="wide" 
  className="justify-center" 
  showLabel={true} 
/>
```

#### Method 2: Using Individual SocialMediaIcon Components

```tsx
import { SocialMediaIcon } from '../components/SocialMediaIcon';
import { getSocialMediaLink } from '../constants/socialMedia';

const linkedinLink = getSocialMediaLink('LinkedIn');
if (linkedinLink) {
  <SocialMediaIcon 
    social={linkedinLink} 
    size="lg" 
    showLabel={true} 
  />
}
```

#### Method 3: Direct Access to URLs (for structured data, etc.)

```tsx
import { getSocialMediaUrls } from '../constants/socialMedia';

const urls = getSocialMediaUrls(); // Returns array of all social media URLs
```

### Component Props

#### SocialMediaIcons Props
- `size`: 'sm' | 'md' | 'lg' - Size of the icons
- `spacing`: 'tight' | 'normal' | 'wide' - Spacing between icons
- `className`: string - Additional CSS classes
- `showLabel`: boolean - Whether to show social media names

#### SocialMediaIcon Props
- `social`: SocialMediaLink - The social media configuration object
- `size`: 'sm' | 'md' | 'lg' - Size of the icon
- `className`: string - Additional CSS classes
- `showLabel`: boolean - Whether to show the social media name

### Benefits

1. **Centralized Management**: All social media links in one place
2. **Automatic Updates**: Change once, updates everywhere
3. **Consistent Styling**: Uniform appearance across the application
4. **Type Safety**: TypeScript interfaces ensure consistency
5. **Easy Maintenance**: Simple to add/remove social platforms
6. **SEO Friendly**: Automatic structured data integration

### Current Social Media Platforms

- LinkedIn
- Twitter
- Facebook
- Instagram
- YouTube

### Integration Points

The xfiguration is automatically used in:

- Footer component
- Contact page
- Structured data (SEO)
- Any component using SocialMediaIcons

### Adding Custom Styling

To customize the appearance of social media icons:

1. **Override CSS classes** using the `className` prop
2. **Modify colors** in the `socialMedia.ts` configuration
3. **Create custom components** that extend `SocialMediaIcon`

### Example: Custom Social Media Section

```tsx
import { getAllSocialMediaLinks } from '../constants/socialMedia';
import { SocialMediaIcon } from '../components/SocialMediaIcon';

const CustomSocialSection = () => {
  const socialLinks = getAllSocialMediaLinks();
  
  return (
    <div className="custom-social-section">
      <h3>Connect With Us</h3>
      <div className="social-grid">
        {socialLinks.map((social, index) => (
          <SocialMediaIcon
            key={index}
            social={social}
            size="lg"
            showLabel={true}
            className="custom-social-icon"
          />
        ))}
      </div>
    </div>
  );
};
```
