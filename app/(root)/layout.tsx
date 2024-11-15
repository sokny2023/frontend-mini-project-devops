"use client";

import "@/app/globals.css";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import TelegramChat from "@/components/TelegramChat";
import TutorialPopUp from "@/components/TutorialPopUp";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import React from "react";

import Loading from "@/components/Loading";
import { Suspense } from 'react';
import NavBarRoot from "@/components/NavBarRoot";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <NavBarRoot />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          <TutorialPopUp />
          <BackToTopButton />
          <TelegramChat />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
