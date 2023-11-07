import { BiLogoInstagramAlt, BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FooterButtons } from "../spare/buttons";

export default function Footer() {
  return (
    <footer className="m-auto min-w-full flex flex-col items-center justify-center gap-6 bg-yellow-500 py-6 mt-6">
      <p className="font-bold text-2xl lg:text-3xl xl:text-4xl">Let's Talk</p>
      <div className="flex gap-6">
        <FooterButtons
          icon={<BiLogoTelegram size={25} />}
          text="Telegram"
          action="https://t.me/Didheemose"
        />
        <FooterButtons
          icon={<IoLogoWhatsapp size={25} />}
          text="WhatsApp"
          action="https://wa.me/7736903623"
        />
        <FooterButtons
          icon={<BiLogoInstagramAlt size={25} />}
          text="Instagram"
          action="https://www.instagram.com/_didhee_/"
        />
      </div>
    </footer>
  );
}
