/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */

import "../globals.css";

import i18nConfig, { Locale } from "@/i18nConfig";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import localeEN from "../../../locales/en/common.json";
import localeRU from "../../../locales/ru/common.json";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: Locale }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  // read route params
  const { locale } = await params;

  const localeData = locale === "ru" ? localeRU : localeEN;

  return {
    title: localeData.title,
    description: localeData.description,
  };
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { locale } = await params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html className="dark" lang={locale}>
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
