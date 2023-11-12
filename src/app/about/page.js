import Link from 'next/link';
import styles from './page.module.css';

// Optional: Define URLs as constants
const URLs = {
  BoringCompany: "https://www.boringcompany.com/",
  Workiva: "https://www.workiva.com/",
  TiiltLab: "https://tiilt.northwestern.edu/",
};

const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        About
      </div>
      <div className={styles.paragraph}>
        Hello! I am a software engineer, currently studying CS and Physics at Northwestern University.
        I am interested in building tools that help people create, learn, and connect.
      </div>
      <div className={styles.paragraph}>
        Previously, I worked at 
        <Link href={URLs.BoringCompany} {...linkProps}> The Boring Company</Link>, 
        <Link href={URLs.Workiva} {...linkProps}> Workiva</Link>, and 
        <Link href={URLs.TiiltLab} {...linkProps}> Northwestern Tiilt Lab</Link>.
      </div>
    </main>
  );
}
