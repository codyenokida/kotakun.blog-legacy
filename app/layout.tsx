import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import classNames from "classnames";

import ThemeScript from "@/lib/ThemeScript";

import "./globals.scss";

const fontLora = Lora({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "A Small Peek into my Life.",
  description: "Blog by Kota Cody Enokida using NextJS and Google Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={classNames(fontLora.className, fontLora.variable)}>
        {children}
      </body>
    </html>
  );
}
