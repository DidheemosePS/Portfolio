import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

//Components Imports
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-screen-2xl	w-full m-auto pl-5 bg-black text-white`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
