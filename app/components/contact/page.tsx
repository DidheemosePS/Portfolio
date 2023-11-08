import { Metadata } from "next";
import HandleContactPage from "@/components/spare/handleContactPage";
import { FaArrowUpLong } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
};

export default function Contact() {
  return (
    <div id="contact" className="m-auto min-h-full px-8 py-12">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-2xl font-black text-gray-400">Contact</h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <div className="grid row-auto grid-cols-1 justify-center items-center gap-10 px-2 py-5 sm:px-4 md:px-8 lg:grid-row-1 lg:grid-cols-2 xl:px-16">
        <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:gap-10">
          <div data-aos="zoom-in">
            <p className="text-3xl font-bold">You Need</p>
            <p className="text-lg font-medium">
              Beautiful design for your website leave a message
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="w-fit h-fit p-3 rounded-lg shadow-md text-yellow-500 self-center"
          >
            <FaArrowUpLong size={25} className="rotate-180 lg:rotate-90" />
          </div>
        </div>
        <HandleContactPage />
      </div>
    </div>
  );
}
