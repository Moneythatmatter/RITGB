import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";

const rightGrotesk = localFont({
  src: [
    { path: "./fonts/RightGrotesk-Medium.otf", weight: "500" },
    { path: "./fonts/RightGrotesk-CompactBlack.otf", weight: "900" },
  ],
  variable: "--font-right-grotesk",
});

export const metadata: Metadata = {
  title: "RITGB",
  description: "We make the internet notice you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rightGrotesk.variable} text-black antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
