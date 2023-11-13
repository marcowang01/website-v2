'use client'
import { useState, useEffect } from 'react';
import { GetCurrentSong } from '@/actions/spotify';
import styles from './navbar.module.css'
export default function MusicItem() {
  // useState hook to store the current time
  const [currentTrack, setCurrentTrack] = useState('');

  // if on mobile return null


  const fetchTrack = async () => {
    const track = await GetCurrentSong();
    setCurrentTrack(track);
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    } else {
      const intervalId = setInterval(fetchTrack, 1000 * 10); 
      fetchTrack();
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, []);


  return (
    <>
      {currentTrack && currentTrack.length > 0 && (
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