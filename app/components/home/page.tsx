"use client";

import { AiOutlineDownload } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { HomeButtons } from "../spare/buttons";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  interface Data {
    name: string;
    role: string;
    description: string;
    link: {
      gitHubLink: string;
      linkedinLink: string;
      instagramLink: string;
      facebookLink: string;
      xLink: string;
    };
    image: {
      imageMP4: string;
      imageWEBM: string;
    };
  }

  const data: Data = {
    name: "Didheemose",
    role: "Web Developer",
    description: "I'm an undergraduate student at Calicut University.",
    link: {
      gitHubLink: "/",
      linkedinLink: "/",
      instagramLink: "/",
      facebookLink: "/",
      xLink: "/",
    },
    image: {
      imageMP4: "didhee.mp4",
      imageWEBM: "didhee.webm",
    },
  };

  return (
    <div
      id="home"
      className="m-auto min-h-[calc(100dvh-5rem)] grid grid-rows-[1fr-auto] grid-cols-1 justify-center items-center p-8 lg:max-h-[calc(100dvh-5rem)] lg:grid-rows-1 lg:grid-cols-2"
    >
      <div className="row-start-2 row-end-3 py-8 flex flex-col gap-1 lg:row-start-1 lg:row-end-2">
        <p
          data-aos="fade-up"
          className="text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl"
        >
          Hello, I'm {data?.name}
        </p>
        <TypeAnimation
          data-aos="fade-up"
          sequence={[`${data?.role}`, 3000, ""]}
          speed={30}
          wrapper="p"
          repeat={Infinity}
          className="text-3xl font-bold text-yellow-500 leading-normal lg:text-4xl"
        />
        <p
          data-aos="fade-up"
          className="text-[1rem] font-medium text-gray-600 mb-5 lg:text-[1.2rem]"
        >
          {data?.description}
        </p>
        <div data-aos="fade-up" className="flex gap-5">
          <HomeButtons
            text="HireMe"
            style="border rounded-lg border-black bg-black text-white font-bold px-6 py-2 transition duration-300 ease-in-out hover:text-yellow-500 lg:px-10"
            action="https://www.linkedin.com/in/didheemose/"
          />
          <HomeButtons
            text="Resume"
            icon={<AiOutlineDownload size={17} />}
            style="border rounded-lg border-white bg-yellow-500 text-black font-bold px-5 py-2 flex justify-center items-center gap-1 transition duration-300 ease-in-out hover:text-white lg:px-8"
            action="Didheemose_Resume.pdf"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex gap-6 mt-10"
        >
          <HomeButtons
            label="Github"
            icon={<BsGithub size={25} />}
            style="transition duration-300 ease-in-out hover:scale-125"
            action="https://github.com/DidheemosePS"
          />
          <HomeButtons
            label="LinkedIn"
            icon={<BsLinkedin size={25} />}
            style="transition duration-300 ease-in-out hover:scale-125"
            action="https://www.linkedin.com/in/didheemose/"
          />
          <HomeButtons
            label="Instagram"
            icon={<BsInstagram size={25} />}
            style="transition duration-300 ease-in-out hover:scale-125"
            action="https://www.instagram.com/_didhee_/"
          />
          <HomeButtons
            label="Facebook"
            icon={<BsFacebook size={25} />}
            style="transition duration-300 ease-in-out hover:scale-125"
            action="https://www.facebook.com/Didheemose"
          />
          <HomeButtons
            label="Twitter"
            icon={<FaXTwitter size={25} />}
            style="transition duration-300 ease-in-out hover:scale-125"
            action="https://twitter.com/didheemose"
          />
        </div>
      </div>
      <video
        autoPlay
        playsInline
        muted
        loop
        data-aos="fade-up"
        className="w-full h-full"
      >
        <source src={data?.image?.imageMP4} type="video/mp4" />
        <source src={data?.image?.imageWEBM} type="video/webm" />
      </video>
    </div>
  );
}
