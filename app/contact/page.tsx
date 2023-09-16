import { Metadata } from "next";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Contact_Download_Buttons } from "@/components/commonButtons";
import HandleContactPage from "@/components/handleContactPage";
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
};

export default function Contact() {
  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <div className="grid grid-cols-1 auto-rows-max gap-5 justify-items-center self-center md:justify-items-start md:grid-rows-[2.5rem,2.5rem,8rem]">
        <p className="text-2xl font-bold md:self-center md:text-3xl lg:text-4xl">
          Contact Me
        </p>
        <p className="md:self-center">Contact@example.com</p>
        <div className="flex flex-col justify-between items-center gap-5 md:items-start">
          <p>0123456789</p>
          <div className="flex gap-5">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
          </div>
          <Contact_Download_Buttons />
        </div>
      </div>
      <HandleContactPage />
    </div>
  );
}
