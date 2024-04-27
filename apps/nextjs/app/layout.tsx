import classNames from "classnames";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Todo/Next.js",
  description: "Created by Alex McKay",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <html lang="en">
      <body className={classNames(font.className, font.variable)}>
        {children}
      </body>
    </html>
  );
}
