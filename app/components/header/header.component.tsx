import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./header.module.css";

const Header = () => {
  return (
    <nav className={`${styles.container} ${styles.nav}`}>
      <div className={styles.navInner}>
        <h2 className={styles.navHeading}>
          <Link href="/">Promad</Link>
        </h2>
        <ul className={styles.navIcons}>
          <li className={styles.navIcon}>
            <a
              href="https://www.instagram.com/getpromad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
