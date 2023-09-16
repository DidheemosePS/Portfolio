"use client";

import { Toaster } from "sonner";

export default function SonnerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Toaster position="top-right" expand={true} richColors />
    </>
  );
}
