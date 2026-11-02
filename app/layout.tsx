import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhyudaya Mohan Hegde — Portfolio",
  description:
    "Computer science student interested in machine learning and building useful software.",
  keywords: ["portfolio", "developer", "AIML", "CSE", "projects"],
  authors: [{ name: "Abhyudaya Mohan Hegde" }],
  openGraph: {
    title: "Abhyudaya Mohan Hegde — Portfolio",
    description: "Computer science, machine learning, and selected work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
