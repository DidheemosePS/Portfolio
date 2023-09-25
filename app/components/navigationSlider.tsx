"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscThreeBars } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { close } from "../../redux/features/navigationSlider-slice";
import { useEffect, useRef } from "react";

export default function NavigationSlider() {
  const active_route: string = "border-b-2 border-red-#ff044c";

  const inActive_route: string = "border-b-2 border-transparent";

  const pathname = usePathname();

  const { isOpen } = useSelector((state: RootState) => state.navigationSlider);

  const dispatch = useDispatch();

  const SliderRef: any = useRef(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (!SliderRef?.current?.contains(e.target)) {
      dispatch(close());
    }
  };

  useEffect(() => {
    try {
      document.addEventListener("click", handleOutsideClick, true);
      return () => {
        document.removeEventListener("click", handleOutsideClick, true);
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      ref={SliderRef}
      className={`w-full h-fit absolute top-0 right-0 z-20 transition duration-500 ease-in-out ${
        isOpen ? "-translate-y-0" : "-translate-y-full"
      } pb-12 text-white bg-transparent backdrop-blur lg:hidden`}
    >
      <div className="w-full h-12 flex justify-end items-end pr-5 sm:pr-10">
        <button onClick={() => dispatch(close())}>
          <VscThreeBars size={30} className="text-red-#ff044c" />
        </button>
      </div>
      <div className="flex flex-col gap-12 items-center">
        <Link
          href="/"
          className={pathname === "/" ? active_route : inActive_route}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? active_route : inActive_route}
        >
          About
        </Link>
        <Link
          href="/services"
          className={pathname === "/services" ? active_route : inActive_route}
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          className={pathname === "/portfolio" ? active_route : inActive_route}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? active_route : inActive_route}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
