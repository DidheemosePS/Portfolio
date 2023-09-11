"use client";

import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { open } from "../../redux/features/navigationSlider-slice";
export default function Navigation() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="w-full h-12 flex justify-between items-end">
      <p className="first-letter:text-red-#ff044c text-2xl font-bold md:text-3xl lg:text-4xl">
        Didheemose.
      </p>
      <button onClick={() => dispatch(open())} className="lg:hidden">
        <VscThreeBars size={30} className="text-red-#ff044c" />
      </button>
      <div className="hidden lg:flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
