import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContainer}`}>
        <p className={styles.footerLogo}>Promad</p>
        <div className={styles.footerLinks}>
          <Link href="/support">Support</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <p className={styles.footerCopy}>© 2026 Promad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
