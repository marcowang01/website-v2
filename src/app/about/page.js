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

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <RandomGreeter/>
      </div>
      <div className={styles.paragraph}>
        {`I'm Marco. I am currently building software for AI agents at `}
        <Link href={URLs.rabbit} {...linkProps}>rabbit</Link>.
      </div>
      <div className={styles.paragraph}>
        I hope to build tools for people to create, learn, and connect.
      </div>
      <div className={styles.paragraph}>
        {`Previously, I worked at `} 
        <Link href={URLs.BoringCompany} {...linkProps}>The Boring Company</Link>{`, `} 
        <Link href={URLs.Workiva} {...linkProps}>Workiva</Link>{`, and `} 
        <Link href={URLs.TiiltLab} {...linkProps}>NU Tiilt Lab</Link>.
      </div>
    </main>
  );
}
