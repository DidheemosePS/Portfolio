import { Metadata } from "next";
import HandleContactPage from "@/components/handleContactPage";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
};

export default function Contact() {
  return (
    <div className="min-h-full pt-5 sm:px-10 md:pt-12 md:pb-[6.5rem] md:px-14 lg:px-[4.5rem] xl:px-[5.5rem] 2xl:px-[6.5rem] lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 snap-start">
      <p className="text-2xl font-semibold text-gray-400 text-center px-5 lg:col-start-1 lg:col-end-3">
        Contact
      </p>
      <div className="self-center">
        <h1 className="text-2xl text-center font-bold px-5 mb-6 md:mb-12">
          You Need
          <p className="text-sm font-medium text-center">
            Beautiful design for your website leave a message
          </p>
        </h1>
      </div>
      <HandleContactPage />
      <Footer />
    </div>
  );
}
