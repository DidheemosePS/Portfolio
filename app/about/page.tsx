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
    <div className="w-full h-[calc(100vh-4rem)] flex justify-between items-center gap-14 pl-32 pr-32 bg-white">
      <div className="w-4/5 h-3/4 rounded-lg">
        <Image
          src="./didhee.jpeg"
          alt="Image"
          width={100}
          height={100}
          quality={100}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* <div className="h-3/4 flex flex-col gap-4 pt-4 pb-4">
        <p className="text-6xl font-bold">About Me</p>
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
      </div> */}
    </div>
  );
}
