'use client'
import { useState, useEffect } from 'react'
import styles from './navbar.module.css'
import { GetSongInfo } from '@/actions/spotify'
import Link from 'next/link'
export default function MusicItem() {
  // useState hook to store the current time
  const [currentTrack, setCurrentTrack] = useState('')
  const [currentUrl, setCurrentUrl] = useState('')
  // if on mobile return null

  const fetchTrack = async () => {
    const info = await GetSongInfo()
    setCurrentTrack(info.track)
    setCurrentUrl(info.url)
    // console.log(info);
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return
    } else {
      const intervalId = setInterval(fetchTrack, 1000 * 30)
      fetchTrack()
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      {currentTrack &&
        currentUrl &&
        currentTrack.length > 0 &&
        currentUrl.length > 0 && (
          <Link
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.navbarItems} ${styles.hideOnMobile} ${styles.tight} ${styles.button}`}
          >
            LISTENING TO:
            <span className={styles.horizontalScrollContainer}>
              <span>
                {currentTrack.length > 30
                  ? currentTrack.slice(0, 30) + '...'
                  : currentTrack.toUpperCase()}
              </span>
            </span>
          </Link>
        )}
    </>
  )
}
