"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export default function TripRedirect() {
  const params = useParams();
  const tripId = params.id;

  const appLink = `promad://profile/${tripId}`;

  useEffect(() => {
    if (!tripId) return;
    // Attempt to automatically open the app on mount
    window.location.replace(appLink);
  }, [tripId, appLink]);

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Opening Promad...</h1>

        <p className={styles.subtext}>
          You are being redirected to the profile. If the app does not open
          automatically, tap the button below.
        </p>

        <ul className={styles.storeButtons}>
          <li>
            <a
              href={appLink}
              className={`${styles.storeButton} ${styles.primaryButton}`}
            >
              Open in App
            </a>
          </li>
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
    </main>
  );
}
