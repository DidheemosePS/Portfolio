"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [hashValue, setHashValue] = useState<string>("");

  const handleOnClick = (value: string) => {
    setHashValue(value);
  };

  useEffect(() => {
    setHashValue(window.location.hash);
    return () => {
      setHashValue("");
    };
  }, []);

  return (
    <nav className="m-auto min-w-full h-[5rem] flex justify-between items-center px-8 sticky top-0 z-20 bg-white shadow-md">
      <Link
        data-aos="fade-down"
        href="#home"
        onClick={() => handleOnClick("#home")}
        className={`${
          hashValue === "home" && "text-yellow-500"
        } font-bold text-3xl`}
      >
        Didheemose.
      </Link>
      <div
        data-aos="fade-down"
        className="hidden lg:font-bold lg:text-xl lg:flex lg:gap-12"
      >
        <Link
          href="#home"
          onClick={() => handleOnClick("#home")}
          className={`${
            (hashValue === "#home" || !hashValue) && "text-yellow-500"
          } transition duration-300 ease-in-out hover:text-yellow-500`}
        >
          Home
        </Link>
        <Link
          href="#skills"
          onClick={() => handleOnClick("#skills")}
          className={`${
            hashValue === "#skills" && "text-yellow-500"
          } transition duration-300 ease-in-out hover:text-yellow-500`}
        >
          Skills
        </Link>
        <Link
          href="#works"
          onClick={() => handleOnClick("#works")}
          className={`${
            hashValue === "#works" && "text-yellow-500"
          } transition duration-300 ease-in-out hover:text-yellow-500`}
        >
          Works
        </Link>
        <Link
          href="#resume"
          onClick={() => handleOnClick("#resume")}
          className={`${
            hashValue === "#resume" && "text-yellow-500"
          } transition duration-300 ease-in-out hover:text-yellow-500`}
        >
          Resume
        </Link>
        <Link
          href="#contact"
          onClick={() => handleOnClick("#contact")}
          className={`${
            hashValue === "#contact" && "text-yellow-500"
          } transition duration-300 ease-in-out hover:text-yellow-500`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
