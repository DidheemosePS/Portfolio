import { Metadata } from "next";
import HandleContactPage from "@/components/handleContactPage";
import { BiLogoInstagramAlt, BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
};

export default function Contact() {
  return (
    <div className="w-full min-h-full h-fit pt-5 snap-start">
      <p className="text-2xl font-semibold text-gray-400 text-center px-5 mb-2">
        Contact
      </p>
      <h1 className="text-2xl text-center font-bold px-5 mb-6">
        You Need
        <p className="text-sm font-medium text-center mx-5">
          Beautiful design for your website leave a message
        </p>
      </h1>
      <HandleContactPage />
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
    </div>
  );
}
