import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import SonnerProvider from "./sonner-provider";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Didheemose",
    template: "Didheemose | %s",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-[-webkit-fill-available]">
      <body className={`${inter.className} h-[-webkit-fill-available]`}>
        <SonnerProvider>
          <Navigation />
          <main className="m-auto min-w-[300px]">{children}</main>
          <Footer />
        </SonnerProvider>
      </body>
    </html>
  );
}
