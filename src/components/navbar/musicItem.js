'use client'
import { useState, useEffect } from 'react';

import styles from './navbar.module.css'
export default function MusicItem() {
  // useState hook to store the current time
  const [currentTrack, setCurrentTrack] = useState('');

  const fetchTrack = async () => {
    const response = await fetch('/api/spotify', { cache: 'no-cache' });
    if (response.status !== 200) {
      console.error('Error fetching current track');
      return;
    }
    console.log('Fetched current track: ', response);
    const json = await response.json();
    setCurrentTrack(json.track);
  }

  useEffect(() => {
    const intervalId = setInterval(fetchTrack, 1000 * 10); 
    fetchTrack();
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      {currentTrack && (
        <div className={`${styles.navbarItems} ${styles.hideOnMobile} ${styles.tight}`}>
          LISTENING TO: 
          <span className={styles.horizontalScrollContainer}>
            <span>
                {currentTrack.length > 30 ? currentTrack.slice(0, 30) + '...' : currentTrack.toUpperCase()}
            </span>
          </span>
        </div>
      )}
    </>
  )
}