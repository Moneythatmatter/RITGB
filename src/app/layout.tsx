import dynamic from "next/dynamic";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { OrganizationSchema } from "@/components/StructuredData";

const Chatbot = dynamic(
  () => import("@/components/chatbot/Chatbot").then((mod) => mod.Chatbot),
);

const WhatsAppButton = dynamic(
  () => import("@/components/WhatsAppButton"),
);

const rightGrotesk = localFont({
  src: [
    { path: "./fonts/RightGrotesk-Medium.otf", weight: "500" },
    { path: "./fonts/RightGrotesk-CompactBlack.otf", weight: "900" },
  ],
  variable: "--font-right-grotesk",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ritgb.com"),
  title: " RITGB – Digital Marketing & Branding Agency in Bhubaneswar",
  description:
    "RITGB is a full-service digital growth agency in Bhubaneswar offering branding, web design, development & SEO. We make your business impossible to ignore.",
  icons: {
    icon: "/images/logo/ritgb-favicon.webp",
    shortcut: "/images/logo/ritgb-favicon.webp",
    apple: "/images/logo/ritgb-favicon.webp",
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
        <OrganizationSchema />
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
