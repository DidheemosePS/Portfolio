"use client";

import { BiLogoInstagramAlt, BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FooterButtons } from "../spare/buttons";

export default function Footer() {
  return (
    <footer className="m-auto min-w-full h-[18.75rem] flex flex-col items-center justify-center gap-6 bg-yellow-500 py-6 mt-6">
      <p
        data-aos="zoom-out"
        className="font-bold text-2xl lg:text-3xl xl:text-4xl"
      >
        Let's Talk
      </p>
      <div className="flex gap-6">
        <FooterButtons
          icon={
            <BiLogoTelegram
              size={30}
              className="transition duration-300 ease-in-out hover:scale-125"
            />
          }
          text="Telegram"
          action="https://t.me/Didheemose"
          aos={{ style: "fade-up", duration: 1000 }}
        />
        <FooterButtons
          icon={
            <IoLogoWhatsapp
              size={30}
              className="transition duration-300 ease-in-out hover:scale-125"
            />
          }
          text="WhatsApp"
          action="https://wa.me/7736903623"
          aos={{ style: "fade-up", duration: 1200 }}
        />
        <FooterButtons
          icon={
            <BiLogoInstagramAlt
              size={30}
              className="transition duration-300 ease-in-out hover:scale-125"
            />
          }
          text="Instagram"
          action="https://www.instagram.com/_didhee_/"
          aos={{ style: "fade-up", duration: 1400 }}
        />
      </div>
    </footer>
  );
}
