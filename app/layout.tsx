import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Peas | Organic Produce",
  description: "A small organic produce shop built with Next.js App Router.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
