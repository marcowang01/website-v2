'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import styles from './mobileNav.module.css';
import ArrowIcon from '@/svg/arrow';

export default function MobileNavButton({name, link}) {
  const pathname = usePathname()
  const isExternalLink = link.includes('.com');
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (pathname && link){
      if (pathname.toLowerCase() === link.toLowerCase()) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
  }, [pathname]);

  const linkProps = isExternalLink
  ? { target: '_blank', rel: 'noopener noreferrer' }
  : {};

  return (
    <Link href={link} {...linkProps}>
      <div className={isSelected ? `${styles.button} ${styles.active}` : styles.button}>
        {name}
        {isExternalLink && <ArrowIcon className={styles.arrow} />}
      </div>
    </Link>
  )
}
