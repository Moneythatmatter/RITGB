import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";

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
  icons: {
    icon: "/images/logo/ritgb-favicon.png",
    shortcut: "/images/logo/ritgb-favicon.png",
    apple: "/images/logo/ritgb-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rightGrotesk.variable} text-black antialiased`}>
        <Preloader />
        <Navbar />
        {children}
        <ScrollToTop />
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}
