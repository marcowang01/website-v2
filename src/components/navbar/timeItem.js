'use client'
import { useState, useEffect } from 'react';

import styles from './navbar.module.css'
export default function TimeItem() {
  // useState hook to store the current time
  const [currentTime, setCurrentTime] = useState('');

  // Function to update the current time
  const updateTime = () => {
    // Get the current time in Chicago using the 'America/Chicago' IANA timezone string
    const now = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
    const newDate = new Date(now);
    const timeString = newDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    setCurrentTime(timeString.toUpperCase());
  };

  // useEffect hook to set the interval for updating the time
  useEffect(() => {
    updateTime(); // Set current time on initial render (needed for client-side hydration
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className={`${styles.navbarItems} ${styles.hideOnMobile}  ${styles.tight}`}>
      {currentTime}
    </div>
  )
}