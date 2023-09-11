"use client";

import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { close } from "../../redux/features/navigationSlider-slice";

export default function NavigationSlider() {
  const hoverEffect =
    "border-b-2 border-transparent transition duration-500 ease-in-out hover:border-b-red-#ff044c";
  const { isOpen } = useSelector((state: RootState) => state.navigationSlider);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-full h-fit absolute top-0 right-0 z-20 transition duration-500 ease-in-out ${isOpen} pb-12 bg-box-color lg:hidden`}
    >
      <div className="w-full h-12 flex justify-end items-end pr-5 sm:pr-10">
        <button onClick={() => dispatch(close())}>
          <VscThreeBars size={30} className="text-red-#ff044c" />
        </button>
      </div>
      <div className="flex flex-col gap-12 items-center">
        <Link href="/" className={hoverEffect}>
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
