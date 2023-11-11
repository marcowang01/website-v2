'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './sidebar.module.css';
import Link from 'next/link';

export default function SidebarButton({ name, link }) {
  const router = useRouter();
  const pathname = usePathname()
  const isExternalLink = link.includes('http');
  const startingChar = name.charAt(0);
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
    if (event.key.toLowerCase() === startingChar.toLowerCase()) {
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

    return (
      <Link href={link} {...linkProps} className={isSelected ? `${styles.sidebarButtonContainer} ${styles.selected}` : styles.sidebarButtonContainer}>
        <div>
          {name}
        </div>
        <div className={isSelected ? `${styles.sidebarKey} ${styles.selected}` : styles.sidebarKey}>
          {startingChar}
        </div>
      </Link>
    );
  }
