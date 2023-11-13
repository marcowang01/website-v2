'use client' // Error components must be Client Components
import { useEffect } from 'react'
import styles from './page.module.css' 

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <div className={styles.title}>Something went wrong!</div>
      <div className={styles.paragraph}
        style={{ cursor: 'pointer' }}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Click to try again
      </div>
    </div>
  )
}