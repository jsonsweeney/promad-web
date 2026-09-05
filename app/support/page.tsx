import type { Metadata } from "next";
import Link from "next/link";
import styles from "./support.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleQuestion,
  faPaperPlane,
  faArrowLeft,
  faTrashCan,
  faBug,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Promad Support & Help Center",
  description:
    "Get help with Promad. Contact our support team, find answers to frequently asked questions, report bugs, or submit feedback.",
};

const FAQS = [
  {
    question: "How do I contact Promad customer support?",
    answer:
      "You can contact our support team directly by emailing promadapp@gmail.com. We typically respond within 24 to 48 hours on business days.",
  },
  {
    question: "How can I request account or data deletion?",
    answer:
      "To request deletion of your account and all associated personal data, please email us at promadapp@gmail.com with the subject line 'Account Deletion Request' from the email address associated with your account. We will process your request and permanently remove your data within 30 days in accordance with our Privacy Policy.",
  },
  {
    question: "How do I report a bug or technical issue?",
    answer:
      "If you experience a bug, please email promadapp@gmail.com with the subject 'Bug Report'. Please include your device model (e.g. iPhone 15 Pro), iOS or Android version, app version, a description of what happened, and screenshots or screen recordings if available.",
  },
  {
    question: "How do I submit feedback or feature suggestions?",
    answer:
      "We love hearing from travellers! You can send your ideas and feedback to promadapp@gmail.com or share them directly with us in our WhatsApp community or on Instagram @getpromad.",
  },
  {
    question: "Where can I read your Privacy Policy and Terms of Service?",
    answer:
      "You can review our Privacy Policy at promad.app/privacy and our Terms & Conditions at promad.app/terms.",
  },
];

export default function SupportPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.backLink}>
            <FontAwesomeIcon icon={faArrowLeft} height={14} />
            Back to Promad
          </Link>
          <Link href="/" className={styles.logo}>
            Promad
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <FontAwesomeIcon icon={faCircleQuestion} height={14} />
            Help &amp; Support
          </div>
          <h1 className={styles.title}>How can we help you?</h1>
          <p className={styles.subtitle}>
            Have questions, need help with your Promad account, or want to
            report an issue? Find answers below or get in touch with our team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Contact Grid */}
        <section className={styles.contactGrid} aria-label="Contact Channels">
          {/* Email Support */}
          <div className={styles.contactCard}>
            <div className={styles.contactIconWrap}>
              <FontAwesomeIcon icon={faEnvelope} height={20} />
            </div>
            <h2 className={styles.contactCardTitle}>Email Support</h2>
            <p className={styles.contactCardDesc}>
              Direct email support for technical issues, account queries, and
              general questions.
            </p>
            <a
              href="mailto:promadapp@gmail.com?subject=Promad%20Support%20Request"
              className={styles.contactBtn}
            >
              promadapp@gmail.com →
            </a>
          </div>

          {/* WhatsApp Community */}
          <div className={styles.contactCard}>
            <div
              className={`${styles.contactIconWrap} ${styles.whatsappIconWrap}`}
            >
              <FontAwesomeIcon icon={faWhatsapp} height={22} />
            </div>
            <h2 className={styles.contactCardTitle}>WhatsApp Community</h2>
            <p className={styles.contactCardDesc}>
              Chat with fellow travellers, share feedback, and get quick
              community tips.
            </p>
            <a
              href="https://chat.whatsapp.com/GeLskpj7JuT9Yvvt9Qb696"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              Join WhatsApp Group →
            </a>
          </div>

          {/* Instagram */}
          <div className={styles.contactCard}>
            <div
              className={`${styles.contactIconWrap} ${styles.instagramIconWrap}`}
            >
              <FontAwesomeIcon icon={faInstagram} height={22} />
            </div>
            <h2 className={styles.contactCardTitle}>Instagram</h2>
            <p className={styles.contactCardDesc}>
              Follow @getpromad for product updates, travel tips, and DM
              support.
            </p>
            <a
              href="https://instagram.com/getpromad"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              @getpromad →
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading">
          <div className={styles.sectionHeading}>
            <h2 id="faq-heading" className={styles.sectionTitle}>
              Frequently Asked Questions
            </h2>
            <p className={styles.sectionSubtitle}>
              Quick answers to common questions about Promad
            </p>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, index) => (
              <details
                key={faq.question}
                className={styles.faqItem}
                open={index === 0}
              >
                <summary className={styles.faqSummary}>{faq.question}</summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Action / Contact Banner */}
        <section
          className={styles.actionBanner}
          aria-label="Quick Contact Actions"
        >
          <h2 className={styles.actionBannerTitle}>Still need assistance?</h2>
          <p className={styles.actionBannerDesc}>
            Select a category below to send an email with a pre-configured
            subject to our support team:
          </p>

          <div className={styles.actionButtons}>
            <a
              href="mailto:promadapp@gmail.com?subject=Promad%20Support%20Request"
              className={styles.primaryEmailBtn}
            >
              <FontAwesomeIcon icon={faPaperPlane} height={14} />
              General Support
            </a>
            <a
              href="mailto:promadapp@gmail.com?subject=Promad%20Bug%20Report"
              className={styles.secondaryBtn}
            >
              <FontAwesomeIcon icon={faBug} height={14} />
              Report a Bug
            </a>
            <a
              href="mailto:promadapp@gmail.com?subject=Promad%20Account%20Deletion%20Request"
              className={styles.secondaryBtn}
            >
              <FontAwesomeIcon icon={faTrashCan} height={14} />
              Request Account Deletion
            </a>
            <a
              href="mailto:promadapp@gmail.com?subject=Promad%20Feature%20Feedback"
              className={styles.secondaryBtn}
            >
              <FontAwesomeIcon icon={faComments} height={14} />
              Share Feedback
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerLogo}>Promad</p>
          <div className={styles.footerLinks}>
            <Link href="/">Home</Link>
            <Link href="/support">Support</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <p className={styles.footerCopy}>
            © 2026 Promad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
