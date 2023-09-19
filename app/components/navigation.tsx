"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscThreeBars } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { open } from "@/redux/features/navigationSlider-slice";

export default function Navigation() {
  const active_route: string = "border-b-2 border-red-#ff044c";

  const inActive_route: string = "border-b-2 border-transparent";

  const pathname = usePathname();

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
