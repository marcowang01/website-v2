import Link from 'next/link';
import styles from './page.module.css';
import RandomGreeter from '@/components/randomGreeter/greeter';
import { headers } from "next/headers";
// import { logIP } from '@/actions/ip';

// Define URLs as constants
const URLs = {
  rabbit: "https://www.rabbit.tech/",
  BoringCompany: "https://www.boringcompany.com/",
  Workiva: "https://www.workiva.com/",
  TiiltLab: "https://tiilt.northwestern.edu/",
  Hellsegga: "https://www.hellsegga.site/",
}; 

const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};


export default function About() {
  const headersList = headers();
  // const ip = headersList.get("x-forwarded-for")

  // if (process.env.VERCEL_ENV === 'production') {
  //   logIP(ip);
  // }

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <RandomGreeter/>
      </div>
      <div className={styles.paragraph}>
        {`I'm Marco. I am a software engineer at `}
        <Link href={URLs.rabbit} {...linkProps}>rabbit</Link>.
      </div>
      {/* <div className={styles.paragraph}>
        Currently, I am also building tools to help people create, learn, and connect at <Link href={URLs.Hellsegga} {...linkProps}>Hellsegga</Link>.
      </div> */}
      <div className={styles.paragraph}>
        {`Previously, I worked at `} 
        <Link href={URLs.BoringCompany} {...linkProps}>The Boring Company</Link>{`, `} 
        <Link href={URLs.Workiva} {...linkProps}>Workiva</Link>{`, and `} 
        <Link href={URLs.TiiltLab} {...linkProps}>NU Tiilt Lab</Link>.
      </div>
    </main>
  );
}
