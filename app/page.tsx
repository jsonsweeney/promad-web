import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.logo}>
          Pro<em>mad</em>
        </h1>
        <p className={styles.tagline}>Discover. Review. Explore.</p>
        <div className={styles.divider} />
        <p className={styles.description}>
          A travel app for backpackers and explorers — discover new
          destinations, share reviews, plan trips, and track everywhere
          you&apos;ve been.
        </p>
      </main>

      <footer className={styles.footer}>
        <Link href="/terms">Terms &amp; Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </footer>
    </>
  );
}
