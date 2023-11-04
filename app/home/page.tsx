import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDownload } from "react-icons/ai";

export default async function Home() {
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
    <div className="w-full min-h-full h-fit bg-gradient-to-r from-green-400 to-blue-400 grid grid-rows-2 grid-cols-1 gap-6 p-5 snap-start">
      <div className="flex flex-col gap-3 row-start-2 row-end-3">
        <p className="text-2xl font-bold">Hello, I'm {data?.name}</p>
        <p className="text-xl font-bold text-yellow-600">{data?.role}</p>
        <p className="text-justify">{data?.description}</p>
        <div className="flex gap-3">
          <Link
            href="/"
            className="w-fit border rounded-lg border-black bg-black text-white font-medium px-6 py-1"
          >
            Hire Me
          </Link>
          <Link
            href="/"
            className="w-fit border rounded-lg border-white bg-white text-black font-medium px-6 py-1"
          >
            Resume
            {/* <AiOutlineDownload /> */}
          </Link>
        </div>
        <div className="flex gap-6 mt-4">
          <Link href={data?.link?.gitHubLink} target="_blank">
            <BsGithub size={20} />
          </Link>
          <Link href={data?.link?.linkedinLink} target="_blank">
            <BsLinkedin size={20} />
          </Link>
          <Link href={data?.link?.instagramLink} target="_blank">
            <BsInstagram size={20} />
          </Link>
          <Link href={data?.link?.facebookLink} target="_blank">
            <BsFacebook size={20} />
          </Link>
          <Link href={data?.link?.xLink} target="_blank">
            <FaXTwitter size={20} />
          </Link>
        </div>
      </div>
      <Image
        src={data?.image}
        alt="Image"
        width={100}
        height={100}
        quality={100}
        priority={true}
        className="w-full h-full object-contain object-bottom bg-yellow-500 rounded-lg row-start-1 row-end-2"
      />
    </div>
  );
}
