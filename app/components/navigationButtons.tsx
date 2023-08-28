"use client";
import { useState, memo } from "react";
import Link from "next/link";

export default function NavigationButtons() {
  const style1 = "border-b-2 border-transparent";

  const style2: string = "border-b-2 border-red-#ff044c";

  const [homeStyle, setHomeStyle] = useState<string>(style2);

  const [aboutStyle, setAboutStyle] = useState<string>(style1);

  const [servicesStyle, setServicesStyle] = useState<string>(style1);

  const [portfolioStyle, setPortfolioStyle] = useState<string>(style1);

  const [contactStyle, setContactStyle] = useState<string>(style1);

  return (
    <div className="hidden lg:flex gap-12">
      <Link
        href="/"
        className={homeStyle}
        onClick={() => {
          setHomeStyle(style2);
          setAboutStyle(style1);
          setServicesStyle(style1);
          setPortfolioStyle(style1);
          setContactStyle(style1);
        }}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={aboutStyle}
        onClick={() => {
          setAboutStyle(style2);
          setHomeStyle(style1);
          setServicesStyle(style1);
          setPortfolioStyle(style1);
          setContactStyle(style1);
        }}
      >
        About
      </Link>
      <Link
        href="/services"
        className={servicesStyle}
        onClick={() => {
          setServicesStyle(style2);
          setHomeStyle(style1);
          setAboutStyle(style1);
          setPortfolioStyle(style1);
          setContactStyle(style1);
        }}
      >
        Services
      </Link>
      <Link
        href="/portfolio"
        className={portfolioStyle}
        onClick={() => {
          setPortfolioStyle(style2);
          setHomeStyle(style1);
          setAboutStyle(style1);
          setServicesStyle(style1);
          setContactStyle(style1);
        }}
      >
        Portfolio
      </Link>
      <Link
        href="/contact"
        className={contactStyle}
        onClick={() => {
          setContactStyle(style2);
          setHomeStyle(style1);
          setAboutStyle(style1);
          setServicesStyle(style1);
          setPortfolioStyle(style1);
        }}
      >
        Contact
      </Link>
    </div>
  );
}
