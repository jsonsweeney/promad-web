import Link from "next/link";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faApple,
  faAppStore,
  faGooglePlay,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heading}>
              <span className={styles.from}>
                {" "}
                From <span className={styles.nomad}>Nomad</span> to
              </span>
              <em className={styles.promad}>Promad</em>
            </h1>
            <p className={styles.subtext}>
              The minimalist travel companion for explorers. Discover
              destinations, plan trips, track your stats, and share your
              adventures.
            </p>

            <div className={styles.community}>
              <p className={styles.communityLabel}>Join the community</p>
              <div className={styles.communityButtons}>
                <a
                  href="https://chat.whatsapp.com/GeLskpj7JuT9Yvvt9Qb696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.whatsapp}`}
                >
                  <FontAwesomeIcon icon={faWhatsapp} height={20} />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/getpromad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.instagram}`}
                >
                  <FontAwesomeIcon icon={faInstagram} height={20} />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className={styles.mockup}>
            <img
              src="/mockup.png"
              alt="Promad app preview on a phone"
              className={styles.mockupImage}
            />
          </div>
        </div>

        {/* Oval mask curve */}
        <div className={styles.mask}>
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
        </div>
      </section>

      {/* Beta Join Section */}
      <section className={styles.beta}>
        <div className={styles.betaInner}>
          <h2 className={styles.betaTitle}>How to join the Beta Test</h2>
          <p className={styles.betaSubtext}>
            Get early access to Promad and help make something awesome for
            like-minded travellers
          </p>

          <div className={styles.betaGrid}>
            {/* Apple */}
            <div className={styles.betaCard}>
              <div className={styles.betaCardIcon}>
                <FontAwesomeIcon icon={faApple} height={32} />
              </div>
              <h3 className={styles.betaCardTitle}>Apple Devices</h3>
              <ol className={styles.betaSteps}>
                <li>Download TestFlight from the App Store</li>
                <li>
                  Click the button below to install the beta app on TestFlight
                </li>
              </ol>
              <a
                href="https://testflight.apple.com/join/bfc9U7Xy"
                className={`${styles.betaBtn} ${styles.betaBtnApple}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faAppStore} height={28} />
                Join via TestFlight
              </a>
            </div>

            {/* Android */}
            <div className={styles.betaCard}>
              <div className={styles.betaCardIcon}>
                <FontAwesomeIcon icon={faAndroid} height={32} />
              </div>
              <h3 className={styles.betaCardTitle}>Android Devices</h3>
              <ol className={styles.betaSteps}>
                <li>
                  <span>
                    Join the{" "}
                    <a
                      href="https://groups.google.com/g/promad"
                      target="_blank"
                    >
                      google group
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    Agree to{" "}
                    <a
                      href="https://play.google.com/apps/testing/com.jsonsweeney.promad"
                      target="_blank"
                    >
                      become a tester
                    </a>
                  </span>
                </li>
                <li>
                  Click the button below to install the app on the play store
                </li>
              </ol>
              <a
                href="https://play.google.com/store/apps/details?id=com.jsonsweeney.promad"
                className={`${styles.betaBtn} ${styles.betaBtnAndroid}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGooglePlay} height={28} />
                Join via Play Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerLogo}>Promad</p>
        <div className={styles.footerLinks}>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <p className={styles.footerCopy}>© 2026 Promad. All rights reserved.</p>
      </footer>
    </>
  );
}
