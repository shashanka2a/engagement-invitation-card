import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wedding Invitation - Sharath Kumar Reddy & Neetha Meghana Reddy",
  description: "Join us in celebrating the wedding of Chi. Sharath Kumar Reddy & Chi.La.Sow. Neetha Meghana Reddy on Wednesday, 26th November 2025",
  keywords: ["wedding", "invitation", "Sharath Kumar Reddy", "Neetha Meghana Reddy", "Telugu wedding"],
  authors: [{ name: "Knotify" }],
  icons: {
    icon: "/ring-favicon.svg",
    shortcut: "/ring-favicon.svg",
    apple: "/ring-favicon.svg",
  },
  openGraph: {
    title: "Wedding Invitation - Sharath Kumar Reddy & Neetha Meghana Reddy",
    description: "Join us in celebrating the wedding of Chi. Sharath Kumar Reddy & Chi.La.Sow. Neetha Meghana Reddy on Wednesday, 26th November 2025",
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
