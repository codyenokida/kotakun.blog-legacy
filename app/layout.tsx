import type { Metadata } from "next";
import { Lora, Lusitana } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import classNames from "classnames";

import ThemeScript from "@/lib/ThemeScript";

import "./globals.scss";

const fontLusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lusitana",
});

export const metadata: Metadata = {
  title: "a peek into my life",
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
      <body className={classNames(fontLusitana.className, fontLusitana.variable)}>
        {children}
      </body>
    </html>
  );
}
