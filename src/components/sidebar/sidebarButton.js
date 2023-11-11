'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './sidebar.module.css';
import Link from 'next/link';

export default function SidebarButton({ name, link }) {
  const router = useRouter();
  const isExternalLink = link.includes('http');
  const startingChar = name.charAt(0);


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
    <Link href={link} {...linkProps} className={styles.sidebarButtonContainer}>
      <div>
        {name}
      </div>
      <div className={styles.sidebarKey}>
        {startingChar}
      </div>
    </Link>
  );
}
