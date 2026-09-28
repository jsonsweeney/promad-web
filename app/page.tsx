import Link from "next/link";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faApple,
  faAppStore,
  faGooglePlay,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Review from "./components/review/review.component";
import ReviewList from "./components/reviewList/reviewList.component";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <nav className={`${styles.container} ${styles.nav}`}>
        <div className={styles.navInner}>
          <h2 className={styles.navHeading}>Promad</h2>
          <ul className={styles.navIcons}>
            <li className={styles.navIcon}>
              <a
                href="https://www.instagram.com/gopromad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className={`${styles.heroContainer}`}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className={styles.heading}>
                Take your <span>adventures</span> <br />
                to the <span>next level.</span>
              </h1>
              <p className={styles.subtext}>
                The minimalist travel companion for explorers. Discover
                destinations, plan trips, track your stats, and share your
                adventures.
              </p>
              <ul className={styles.storeButtons}>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/promad/id6762510695"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.storeButton}
                  >
                    <FontAwesomeIcon icon={faApple} size="2x" />
                    <span>
                      Download on <br />
                      the App Store
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.jsonsweeney.promad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.storeButton}
                  >
                    <FontAwesomeIcon icon={faGooglePlay} size="2x" />
                    <span>
                      Download on <br />
                      Google Play
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.mockup}>
              <img
                src="/mockup-3.png"
                alt="Promad app preview on a phone"
                className={styles.mockupImage}
              />
            </div>
          </div>
        </div>

        {/* Oval mask curve */}
        {/* <div className={styles.mask}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#F8F7F4"
            ></path>
          </svg>
        </div> */}
      </section>

      {/* Beta Join Section */}
      <section className={`${styles.container} ${styles.section}`}>
        <ReviewList>
          <div className={styles.sectionHeaderBlock}>
            <h2>
              <span>Review</span> destinations to help fellow promads
            </h2>
            <p>
              Share your experiences and insights to help the Promad community
              discover the best travel destinations.
            </p>
          </div>
        </ReviewList>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerContainer}`}>
          <p className={styles.footerLogo}>Promad</p>
          <div className={styles.footerLinks}>
            <Link href="/support">Support</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <p className={styles.footerCopy}>
            © 2026 Promad. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
