'use client'
import { useState, useEffect } from 'react';

import styles from './navbar.module.css'
export default function DateItem() {
  // useState hook to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to update the current time
  const updateTime = () => {
    // Get the current time in Chicago using the 'America/Chicago' IANA timezone string
    const now = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
    setCurrentTime(new Date(now));
  };

  // useEffect hook to set the interval for updating the time
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time as a string
  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  

  return (
    <div className={`${styles.navbarItems} ${styles.hideOnMobile}`}>
      {timeString.toUpperCase()}
    </div>
  )
}