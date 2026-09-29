import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

// 1. STANDARD METADATA (Title, Description, Social Cards)
export const metadata: Metadata = {
  metadataBase: new URL("https://promad.app"), // Change to https://www.promad.app if you use www.
  title: "Promad — Discover. Review. Explore.",
  applicationName: "Promad",
  description:
    "A travel app for backpackers and explorers — discover new destinations, share reviews, plan trips, and track everywhere you've been.",
  openGraph: {
    title: "Promad — Discover. Review. Explore.",
    description:
      "A travel app for backpackers and explorers — discover new destinations, share reviews, plan trips, and track everywhere you've been.",
    url: "https://promad.app",
    siteName: "Promad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promad — Discover. Review. Explore.",
    description:
      "A travel app for backpackers and explorers — discover new destinations, share reviews, plan trips, and track everywhere you've been.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. GOOGLE STRUCTURED DATA (Forces the correct Site Name in search results)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Promad",
    alternateName: ["Promad App", "promad.app"],
    url: "https://promad.app/", // Change to https://www.promad.app/ if you use www.
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* Inject the JSON-LD schema into the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: "var(--cream)",
          color: "var(--text)",
        }}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
