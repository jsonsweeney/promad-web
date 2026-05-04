import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Promad — Discover. Review. Explore.",
  description:
    "A travel app for backpackers and explorers — discover new destinations, share reviews, plan trips, and track everywhere you've been.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
