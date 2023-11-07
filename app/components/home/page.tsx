import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import CircleText from "../spare/circleText";

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
    image: string;
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
    image: "sample.gif",
  };

  return (
    <div
      id="home"
      className="m-auto min-h-[calc(100dvh-5rem)] grid grid-rows-[1fr-auto] grid-cols-1 justify-center items-center px-8 pb-[5rem] lg:h-[calc(100dvh-5rem)] lg:grid-rows-1 lg:grid-cols-2"
    >
      <div className="row-start-2 row-end-3 py-8 flex flex-col gap-1 lg:row-start-1 lg:row-end-2">
        <p className="text-3xl font-bold lg:text-4xl xl:text-5xl">
          Hello, I'm {data?.name}
        </p>
        <p className="text-3xl font-bold text-yellow-500 lg:text-4xl">
          {data?.role}
        </p>
        <p className="text-[1rem] font-medium text-gray-600 mb-5 lg:text-[1.2rem]">
          {data?.description}
        </p>
        <div className="flex gap-5">
          <button className="border rounded-lg border-black bg-black text-white font-bold px-6 py-2 hover:text-yellow-500 lg:px-10">
            Hire Me
          </button>
          <button className="border rounded-lg border-white bg-yellow-500 text-black font-bold px-5 py-2 flex justify-center items-center gap-1 hover:text-white lg:px-8">
            Resume
            <AiOutlineDownload size={17} />
          </button>
        </div>
        <div className="flex gap-6 mt-10">
          <button>
            <BsGithub size={25} />
          </button>
          <button>
            <BsLinkedin size={25} />
          </button>
          <button>
            <BsInstagram size={25} />
          </button>
          <button>
            <BsFacebook size={25} />
          </button>
          <button>
            <FaXTwitter size={25} />
          </button>
        </div>
      </div>
      <div className="w-full h-full relative">
        <Image
          src={data?.image}
          alt="Image"
          width={100}
          height={100}
          quality={100}
          priority={true}
          className="w-full h-full object-contain"
        />
        {/* <CircleText /> */}
      </div>
    </div>
  );
}
