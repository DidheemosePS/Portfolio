import { BiLogoInstagramAlt, BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="m-auto min-w-full flex flex-col items-center justify-center gap-6 bg-yellow-500 py-6 mt-6">
      <p className="font-bold text-2xl lg:text-3xl xl:text-4xl">Let's Talk</p>
      <div className="flex gap-6">
        <button className="flex flex-col items-center">
          <BiLogoTelegram size={25} />
          <p className="font-medium text-white">Telegram</p>
        </button>
        <button className="flex flex-col items-center">
          <IoLogoWhatsapp size={25} />
          <p className="font-medium text-white">WhatsApp</p>
        </button>
        <button className="flex flex-col items-center">
          <BiLogoInstagramAlt size={25} />
          <p className="font-medium text-white">Instagram</p>
        </button>
      </div>
    </footer>
  );
}
