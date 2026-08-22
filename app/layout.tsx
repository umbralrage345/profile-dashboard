import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhyudaya Mohan Hegde | CSE-AIML Student",
  description:
    "Personal portfolio and project dashboard of Abhyudaya Mohan Hegde — CSE-AIML Student.",
  keywords: ["portfolio", "developer", "AIML", "CSE", "projects"],
  authors: [{ name: "Abhyudaya Mohan Hegde" }],
  openGraph: {
    title: "Abhyudaya Mohan Hegde | CSE-AIML Student",
    description: "Personal portfolio and project dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-brand-bg text-white antialiased">{children}</body>
    </html>
  );
}
