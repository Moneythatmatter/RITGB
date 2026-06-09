import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-[#f0eeea] text-black antialiased">{children}</body>
    </html>
  );
}
