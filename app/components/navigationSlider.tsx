"use client";

import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { close } from "../../redux/features/navigationSlider-slice";

export default function NavigationSlider() {
  const { isOpen } = useSelector((state: RootState) => state.navigationSlider);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-full h-fit absolute top-0 right-0 z-20 transition duration-500 ease-in-out origin-top ${isOpen} pb-12 bg-box-color lg:hidden`}
    >
      <div className="w-full h-12 flex justify-end items-end pr-5 sm:pr-10">
        <button onClick={() => dispatch(close())}>
          <VscThreeBars size={30} className="text-red-#ff044c" />
        </button>
      </div>
      <div className="flex flex-col gap-12 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
