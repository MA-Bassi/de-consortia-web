import type { Metadata } from "next";

import PageHeader from "@/app/shared/layout/page-header";
import PageFooter from "@/app/shared/layout/page-footer";

import "./globals.css";
import { FontSet } from "@/app/shared/constants/font-set";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const regularFont = FontSet["regular"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={regularFont.className}>
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
