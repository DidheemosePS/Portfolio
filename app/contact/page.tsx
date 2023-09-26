import { Metadata } from "next";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import HandleContactPage from "@/components/handleContactPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
};

const getContactData = async () => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/api/contact`, {
      cache: "no-cache",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Contact() {
  interface Data {
    mail: string;
    phone: string;
    facebookLink: string;
    twitterLink: string;
    instagramLink: string;
    linkedinLink: string;
    resumeUrl: string;
  }

  const [data]: Data[] = await getContactData();

  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <HandleContactPage />
    </div>
  );
}
