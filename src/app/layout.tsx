import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Chatbot } from "@/components/chatbot/Chatbot";
import Preloader from "@/components/Preloader";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const rightGrotesk = localFont({
  src: [
    { path: "./fonts/RightGrotesk-Medium.otf", weight: "500" },
    { path: "./fonts/RightGrotesk-CompactBlack.otf", weight: "900" },
  ],
  variable: "--font-right-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ritgb.com"),
  title: " RITGB – Digital Marketing & Branding Agency in Bhubaneswar",
  description:
    "RITGB is a full-service digital growth agency in Bhubaneswar offering branding, web design, development & SEO. We make your business impossible to ignore.",
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
        <GoogleAnalytics />
        <Preloader />
        <Navbar />
        {children}
        <ScrollToTop />
        <Chatbot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
