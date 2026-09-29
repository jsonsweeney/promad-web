import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import ReviewList from "./components/reviewList/reviewList.component";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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
    </>
  );
}
