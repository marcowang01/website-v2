'use client'
import { useState, useEffect } from 'react';

import styles from './navbar.module.css'
export default function MusicItem() {
  // useState hook to store the current time
  const [currentTrack, setCurrentTrack] = useState('');

  const fetchTrack = async () => {
    const response = await fetch('/api/spotify', {});
    if (response.status !== 200) {
      console.error('Error fetching current track');
      return;
    }

    const json = await response.json();
    setCurrentTrack(json.track);
  }

  useEffect(() => {
    const intervalId = setInterval(fetchTrack, 1000 * 5); 

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      {currentTrack && (
        <div className={`${styles.navbarItems} ${styles.hideOnMobile}`}>
          LISTENING TO ${currentTrack.toUpperCase()}
        </div>
      )}
    </>
  )
}