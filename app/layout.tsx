import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawan Kumar — Lead Frontend Developer",
  description:
    "Portfolio of Pawan Kumar, Lead Frontend Developer specializing in high-performance, responsive and pixel-accurate web experiences.",
  keywords: [
    "Pawan Kumar",
    "Frontend Developer",
    "Lead UI Developer",
    "React Developer",
    "Next.js Developer",
    "UI Developer"
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}