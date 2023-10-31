import { Metadata } from "next";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import HandleContactPage from "@/components/handleContactPage";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
};

export const revalidate = 5;

const getContactData = async () => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.contact.findMany();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Contact() {
  interface Data {
    mail: string;
    phone: string;
    facebookLink: string;
    xLink: string;
    instagramLink: string;
    linkedinLink: string;
    resume: {
      resumeKEY: string;
      resumeURL: string;
    };
  }

  const [data] = (await getContactData()) as Data[];

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
            <Link href={data?.xLink} target="_blank">
              <FaXTwitter />
            </Link>
            <Link href={data?.instagramLink} target="_blank">
              <BsInstagram />
            </Link>
            <Link href={data?.linkedinLink} target="_blank">
              <BsLinkedin />
            </Link>
          </div>
          <Link
            href={data?.resume?.resumeURL}
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
