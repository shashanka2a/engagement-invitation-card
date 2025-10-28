import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Engagement Invitation - Sharath Reddy & Neetha Meghana",
  description: "Join us in celebrating the engagement of Sharath Reddy & Neetha Meghana on Friday, 24th October 2025",
  keywords: ["engagement", "wedding", "invitation", "Sharath Reddy", "Neetha Meghana"],
  authors: [{ name: "Knotify" }],
  icons: {
    icon: "/ring-favicon.svg",
    shortcut: "/ring-favicon.svg",
    apple: "/ring-favicon.svg",
  },
  openGraph: {
    title: "Engagement Invitation - Sharath Reddy & Neetha Meghana",
    description: "Join us in celebrating the engagement of Sharath Reddy & Neetha Meghana on Friday, 24th October 2025",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
