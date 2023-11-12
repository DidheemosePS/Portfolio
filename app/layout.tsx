import "./globals.css";
import type { Metadata } from "next";
import SonnerProvider from "./sonner-provider";
import Aos from "./aos";
import CustomScript from "../public/customScript";

export const metadata: Metadata = {
  title: "Didheemose",
  description:
    "Explore my portfolio—a showcase of my passion and expertise. From design to development, each project tells a unique story. Join me on this journey of creativity and innovation!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <CustomScript />
      </head>
      <body>
        <Aos>
          <SonnerProvider>{children}</SonnerProvider>
        </Aos>
      </body>
    </html>
  );
}
