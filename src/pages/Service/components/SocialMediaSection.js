// src/pages/Service/components/SocialMediaSection.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SocialMediaSection.css';

// Import social media icons
import facebookIcon from '../../../assets/social/facebook.svg';
import instagramIcon from '../../../assets/social/instagram.svg';
import twitterIcon from '../../../assets/social/twitter.svg';
import tiktokIcon from '../../../assets/social/tiktok.svg';

/**
 * SocialMediaSection component displays social media links with a clean, modern design
 * 
 * @param {Object} props - Component props
 * @param {Object} props.socialMedia - Object containing social media handles
 * @param {string} props.title - Section title
 * @param {string} props.layout - Layout style ('grid' or 'row')
 * @param {string} props.size - Icon size ('small', 'medium', or 'large')
 * @param {boolean} props.showLabels - Whether to show social media platform names
 * @returns {JSX.Element|null} Rendered component or null if no social media provided
 */
const SocialMediaSection = ({ 
  socialMedia = {}, 
  title = "Connect With Us",
  layout = "row",
  size = "medium",
  showLabels = false
}) => {
  // State to track if icons have loaded
  const [iconsLoaded, setIconsLoaded] = useState(false);
  
  // Check if any social media accounts exist
  const hasSocialMedia = Object.values(socialMedia).some(value => Boolean(value));
  
  // Social media platform configurations
  const platforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: instagramIcon,
      url: handle => `https://instagram.com/${handle.replace('@', '')}`,
      ariaLabel: 'Visit our Instagram profile',
      className: 'instagram'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: facebookIcon,
      url: handle => `https://facebook.com/${handle}`,
      ariaLabel: 'Visit our Facebook page',
      className: 'facebook'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: twitterIcon,
      url: handle => `https://twitter.com/${handle.replace('@', '')}`,
      ariaLabel: 'Visit our Twitter profile',
      className: 'twitter'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: tiktokIcon,
      url: handle => `https://tiktok.com/@${handle.replace('@', '')}`,
      ariaLabel: 'Visit our TikTok profile',
      className: 'tiktok'
    }
  ];

  // Filter platforms to only those that have handles
  const availablePlatforms = platforms.filter(platform => 
    socialMedia[platform.id] && socialMedia[platform.id].trim() !== ''
  );

  // Set icons as loaded after component mounts
  useEffect(() => {
    setIconsLoaded(true);
  }, []);

  // If no social media accounts, return null
  if (!hasSocialMedia || availablePlatforms.length === 0) {
    return null;
  }

  return (
    <section className="social-media-section" aria-labelledby="social-media-title">
      <h3 id="social-media-title" className="social-title">{title}</h3>
      
      <div className={`social-icons ${layout} ${size} ${iconsLoaded ? 'icons-loaded' : ''}`}>
        {availablePlatforms.map(platform => {
          const handle = socialMedia[platform.id];
          
          return (
            <a 
              key={platform.id}
              href={platform.url(handle)}
              className={`social-icon ${platform.className}`}
              aria-label={platform.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Use both background image and img element for better compatibility */}
              <div 
                className="icon-background"
                style={{ backgroundImage: `url(${platform.icon})` }}
                aria-hidden="true"
              ></div>
              <img 
                src={platform.icon} 
                alt="" 
                className="social-icon-img"
                aria-hidden="true"
                onLoad={() => console.log(`${platform.name} icon loaded`)}
                onError={(e) => console.error(`Error loading ${platform.name} icon:`, e)}
              />
              
              {showLabels && (
                <span className="social-label">{platform.name}</span>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};

SocialMediaSection.propTypes = {
  socialMedia: PropTypes.shape({
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    tiktok: PropTypes.string
  }),
  title: PropTypes.string,
  layout: PropTypes.oneOf(['row', 'grid']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showLabels: PropTypes.bool
};

export default SocialMediaSection;