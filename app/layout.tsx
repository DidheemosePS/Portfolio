import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import SonnerProvider from "./sonner-provider";
import Aos from "./aos";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PORTFOLIO_URL as string),
  manifest: "manifest.json",
  title: "Didheemose",
  description:
    "Explore my portfolio—a showcase of my passion and expertise. From design to development, each project tells a unique story. Join me on this journey of creativity and innovation!",
  keywords: [
    "Didheemose",
    "Didheemose P S",
    "Didheemose portfolio",
    "Didheemose P S portfolio",
    "Didheemose web developer",
    "Didheemose P S web developer",
    "Didheemose web designer",
    "Didheemose P S web designer",
    "Didheemose projects",
    "Didheemose P S projects",
    "Didheemose contact",
    "Didheemose P S contact",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Aos>
          <SonnerProvider>
            {children}
            <Analytics />
          </SonnerProvider>
        </Aos>
      </body>
    </html>
  );
}
