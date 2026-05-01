"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function TripRedirect() {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      window.location.href = `promad://trips/${id}`;
    }
  }, [id]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 16,
        padding: 24,
      }}
    >
      <p
        style={{ fontFamily: "var(--font-dm-sans)", color: "var(--ink-muted)" }}
      >
        Opening Promad...
      </p>
      <a
        href={`promad://trips/${id}`}
        style={{ color: "var(--teal)", fontSize: 14 }}
      >
        Tap here if the app doesn&apos;t open
      </a>
    </main>
  );
}
