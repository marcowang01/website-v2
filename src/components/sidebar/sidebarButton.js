'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './sidebar.module.css';
import Link from 'next/link';
import ArrowIcon from '@/svg/arrow';

export default function SidebarButton({ name, link, shortcut }) {
  const router = useRouter();
  const pathname = usePathname()
  const isExternalLink = link.includes('http') || link.includes('mailto');
  const [isSelected, setIsSelected] = useState(false);

  // change the color of the button when selected
  useEffect(() => {
    if (pathname && link){
      if (pathname.toLowerCase() === link.toLowerCase()) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
  }, [pathname]);

  // Function to handle key press
  const handleKeyPress = (event) => {
    if (event.key.toLowerCase() === shortcut.toLowerCase()) {
      if (isExternalLink) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        router.push(link);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const linkProps = isExternalLink
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

    let containerClass = styles.sidebarButtonContainer
    if (isExternalLink) {
      containerClass = styles.sidebarButtonContainer
    }
    if (isSelected) {
      containerClass += ` ${styles.selected}`
    }

    let keyClass = styles.sidebarKey
    if (isSelected) {
      keyClass += ` ${styles.selected}`
    }


    return (
      <Link href={link} {...linkProps} className={containerClass}>
        <div>
          {name} {isExternalLink && <ArrowIcon/>}
        </div>
        <div className={keyClass}>
          {shortcut}  
        </div>
      </Link>
    );
  }
