'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';
import MobileNav from './mobileNav/mobileNav';

export default function MenuItem() {
  // State to manage the visibility of the MobileNav
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to toggle the MobileNav visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className={`${styles.navbarItems} ${styles.semiBold} ${styles.showOnMobile} ${styles.tight}`} onClick={toggleNav}>
      {isNavVisible ? 
        (<Image src={'/images/cross.svg'} width={16} height={16} alt='close' unoptimized />) :
        (<Image src={'/images/menu.svg'} width={16} height={13} alt='menu' unoptimized />)  
      }
      {isNavVisible && <MobileNav />}
    </div>
  )
}
