"use client";

import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { open } from "../../redux/features/navigationSlider-slice";
export default function Navigation() {
  const hoverEffect: string =
    "border-b-2 border-transparent transition duration-500 ease-in-out hover:border-b-red-#ff044c";
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
        <Link
          href="/"
          className="border-b-2 border-transparent transition duration-500 ease-in-out hover:border-b-red-#ff044c"
        >
          Home
        </Link>
        <Link href="/about" className={hoverEffect}>
          About
        </Link>
        <Link href="/services" className={hoverEffect}>
          Services
        </Link>
        <Link href="/portfolio" className={hoverEffect}>
          Portfolio
        </Link>
        <Link href="/contact" className={hoverEffect}>
          Contact
        </Link>
      </div>
    </div>
  );
}
