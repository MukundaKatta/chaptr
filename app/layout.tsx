import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaptr — Your paid community, done right.",
  description:
    "A clean, fast home for subscribers. Messaging, events, gated content. No Discord chaos.",
  openGraph: {
    title: "Chaptr — Your paid community, done right.",
    description:
      "A clean, fast home for subscribers. Messaging, events, gated content. No Discord chaos.",
    images: [
      {
        url: "https://waitlist-api-sigma.vercel.app/api/og?title=Chaptr&accent=indigo&category=Creator",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://waitlist-api-sigma.vercel.app/api/og?title=Chaptr&accent=indigo&category=Creator",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
