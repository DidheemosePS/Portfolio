import { Metadata } from "next";
import Image from "next/image";
import AboutButtons from "@/components/aboutButtons";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import { PrismaClient } from "@prisma/client";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export const revalidate = 5;

const getAboutData = async () => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.about.findMany({
      include: {
        skills: true,
        experience: true,
        education: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function About() {
  interface Skills {
    id: string;
    title: string;
    skill: string;
    aboutId: string;
  }

  interface Experience {
    id: string;
    title: string;
    experience: string;
    aboutId: string;
  }

  interface Education {
    id: string;
    title: string;
    education: string;
    aboutId: string;
  }

  interface Data {
    id: string;
    description: string;
    imageUrl: string;
    skills: Skills[];
    experience: Experience[];
    education: Education[];
  }
  const [data] = (await getAboutData()) as Data[];

  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center gap-5 py-5 lg:flex-row">
      <div className="w-full max-w-xs h-80 rounded-lg sm:max-w-md md:max-w-xl lg:max-w-30 lg:h-25">
        <Image
          src={data?.imageUrl}
          alt="Image"
          width={100}
          height={100}
          quality={100}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 lg:h-25 lg:pt-4">
        <p className="text-center text-2xl font-bold md:text-3xl lg:text-start lg:text-4xl">
          About Me
        </p>
        <p className="text-justify text-gray-300">{data?.description}</p>
        <AboutButtons>
          <Skills skills={data?.skills} />
          <Experience experience={data?.experience} />
          <Education education={data?.education} />
        </AboutButtons>
      </div>
    </div>
  );
}
