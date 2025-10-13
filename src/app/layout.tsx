/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import "./globals.css";

import type { Metadata, Viewport } from "next";

import locale from "./locale_ru.json";

export const metadata: Metadata = {
  title: locale.title,
  description: locale.description,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang={locale.lang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-mono text-text min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
