import { BiLogoInstagramAlt, BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 bg-yellow-500 py-6 mt-6">
      <p className="text-2xl font-bold">Let's Talk</p>
      <div className="flex gap-6">
        <button className="flex flex-col items-center">
          <BiLogoTelegram size={25} />
          <p className="text-xs font-bold text-white">Telegram</p>
        </button>
        <button className="flex flex-col items-center">
          <IoLogoWhatsapp size={25} />
          <p className="text-xs font-bold text-white">WhatsApp</p>
        </button>
        <button className="flex flex-col items-center">
          <BiLogoInstagramAlt size={25} />
          <p className="text-xs font-bold text-white">Instagram</p>
        </button>
      </div>
    </footer>
  );
}
