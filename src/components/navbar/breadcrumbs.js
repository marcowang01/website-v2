'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navbar.module.css'

export default function Breadcrumbs({}) {
  const pathname = usePathname();
  
  // Split the pathname into segments and filter out empty segments
  const pathSegments = pathname.split('/').filter(Boolean);

  const className = `${styles.navbarItems} ${styles.hideOnMobile} ${styles.semiBold} ${styles.tight}`

  return (
    <>
      {pathSegments.length > 0 && (
        pathSegments.map((segment, index) => {

          // if the segement is not the last one, add a slash
          if (index !== pathSegments.length - 1) {
            // reconstruct the path up to this point
            const path = pathSegments.slice(0, index + 1).join('/');
            return (
              <Link 
                href={`/${path}`} 
                className={`${className} ${styles.button}`} 
                key={`${segment}-${index}`}
              >
                {`${segment}`}
              </Link>
            );
          }

          return (
            <div className={`${className}`} key={`${segment}-${index}`}>
              {`${segment}`}
            </div>
          );
        })
      )}
    </>
  )
}