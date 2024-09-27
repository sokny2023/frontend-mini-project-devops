import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider"
import TelegramChat from "@/components/TelegramChat";
import TutorialPopUp from "@/components/TutorialPopUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
          <NavBar />
          {children}
          <TutorialPopUp />
          <TelegramChat />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
