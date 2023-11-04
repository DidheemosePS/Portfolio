import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

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
    role: "Full-Stack Web Developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non animi mollitia, obcaecati cupiditate porro numquam nihil eaque tempora modi explicabo fugiat ipsam illum aliquid quis itaque deleniti iste fuga error.",
    link: {
      gitHubLink: "/",
      linkedinLink: "/",
      instagramLink: "/",
      facebookLink: "/",
      xLink: "/",
    },
    image: "/userImage.png",
  };

  return (
    <div className="min-h-full bg-gradient-to-r from-[#37ff80bf] to-blue-400 grid row-auto grid-cols-1 gap-6 p-5 sm:px-10 md:pt-12 md:pb-[6.5rem] md:px-14 lg:px-[4.5rem] xl:px-[5.5rem] 2xl:px-[6.5rem] md:grid-cols-2 md:gap-8 snap-start">
      <div className="flex flex-col gap-3 row-start-2 row-end-3 md:self-center md:row-start-1 md:row-end-2">
        <p className="text-2xl font-bold">Hello, I'm {data?.name}</p>
        <p className="text-xl font-bold text-yellow-500">{data?.role}</p>
        <p className="text-justify">{data?.description}</p>
        <div className="flex gap-3">
          <button className="w-fit border rounded-lg border-black bg-black text-white font-medium px-6 py-1">
            Hire Me
          </button>
          <button className="w-fit border rounded-lg border-white bg-white text-black font-medium pl-6 pr-5 py-1 flex justify-center items-center gap-2">
            Resume
            <AiOutlineDownload />
          </button>
        </div>
        <div className="flex gap-6 mt-4">
          <button>
            <BsGithub size={20} />
          </button>
          <button>
            <BsLinkedin size={20} />
          </button>
          <button>
            <BsInstagram size={20} />
          </button>
          <button>
            <BsFacebook size={20} />
          </button>
          <button>
            <FaXTwitter size={20} />
          </button>
        </div>
      </div>
      <div className="h-[15rem] bg-yellow-500 rounded-lg overflow-hidden md:h-full lg:h-[25rem]">
        <Image
          src={data?.image}
          alt="Image"
          width={100}
          height={100}
          quality={100}
          priority={true}
          className="w-full h-full object-contain object-bottom"
        />
      </div>
    </div>
  );
}
