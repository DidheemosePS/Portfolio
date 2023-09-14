import { Metadata } from "next";
import Image from "next/image";
import AboutButtons from "@/components/aboutButtons";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export default function About() {
  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center gap-5 py-5 lg:flex-row">
      <div className="w-full max-w-xs h-80 rounded-lg sm:max-w-md md:max-w-xl lg:max-w-30 lg:h-25">
        <Image
          src="./didhee.png"
          alt="Image"
          width={100}
          height={100}
          quality={100}
          // loading="lazy"
          priority
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 lg:h-25 lg:pt-4">
        <p className="text-center text-2xl font-bold md:text-3xl lg:text-start lg:text-4xl">
          About Me
        </p>
        <p className="text-justify text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          ducimus quod necessitatibus beatae deleniti, nobis ipsum perferendis
          sunt tenetur natus inventore et nulla accusantium fugiat, eum eveniet
          voluptas eligendi doloremque.
        </p>
        <AboutButtons>
          <Skills />
          <Experience />
          <Education />
        </AboutButtons>
      </div>
    </div>
  );
}
