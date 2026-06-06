import type { Metadata } from "next";
import "./globals.css";
import MainLayoutClient from "@/components/MainLayoutClient";

export const metadata: Metadata = {
  title: "tratech.my.id | Putra Rizky - Fullstack Developer Portfolio",
  description:
    "Personal portfolio of Putra Rizky Nugraha — Fullstack Developer specializing in PHP (Laravel), Golang, and React. Building clean, scalable digital solutions.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#030308" />
      </head>
      <body className="noise-overlay">
        <MainLayoutClient>{children}</MainLayoutClient>
      </body>
    </html>
  );
}
