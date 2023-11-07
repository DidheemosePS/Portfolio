"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="m-auto min-w-full h-[5rem] flex justify-between items-center px-8 sticky top-0 z-20 shadow-md backdrop-blur-md">
      <Link href="#home" className="font-bold text-3xl">
        Didheemose.
      </Link>
      <div className="hidden lg:font-bold lg:text-xl lg:flex lg:gap-12">
        <Link href="#home">Home</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#works">Works</Link>
        <Link href="#resume">Resume</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
