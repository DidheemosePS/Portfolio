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
    id: string;
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
      <div className="grid grid-cols-1 auto-rows-max gap-5 justify-items-center self-center md:justify-items-start md:grid-rows-[2.5rem,2.5rem,8rem]">
        <p className="text-2xl font-bold md:self-center md:text-3xl lg:text-4xl">
          Contact Me
        </p>
        <p className="md:self-center">{data?.mail}</p>
        <div className="flex flex-col justify-between items-center gap-5 md:items-start">
          <p>{data?.phone}</p>
          <div className="flex gap-5">
            <Link href={data?.facebookLink} target="_blank">
              <BsFacebook />
            </Link>
            <Link href={data?.twitterLink} target="_blank">
              <BsTwitter />
            </Link>
            <Link href={data?.instagramLink} target="_blank">
              <BsInstagram />
            </Link>
            <Link href={data?.instagramLink} target="_blank">
              <BsLinkedin />
            </Link>
          </div>
          <Link
            href={data?.resumeUrl}
            target="_blank"
            className="w-fit border rounded-lg border-red-#ff044c px-6 py-2"
          >
            Download Resume
          </Link>
        </div>
      </div>
      <HandleContactPage />
    </div>
  );
}
