import { Metadata } from "next";
import { ReactElement } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiSolidFileCss,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

interface Style {
  style1: string;
  style2: string;
  style3: string;
}

const styleForOdd: Style = {
  style1:
    "bg-white rounded-lg shadow-[0px_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center gap-2 p-5 hover:transition hover:duration-300 hover:ease-in-out hover:scale-110",
  style2:
    "w-10 h-10 bg-black rounded-full flex justify-center items-center text-white",
  style3: "text-xs font-semibold",
};
const styleForEven = {
  style1:
    "bg-black rounded-lg shadow-[0px_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center gap-2 p-5 hover:transition hover:duration-300 hover:ease-in-out hover:scale-110",
  style2:
    "w-10 h-10 bg-white rounded-full flex justify-center items-center text-black",
  style3: "text-xs font-semibold text-white",
};

interface Data {
  icon: ReactElement<{ size: number }>;
  skill: string;
}

const data: Data[] = [
  {
    icon: <AiFillHtml5 size={30} />,
    skill: "HTML",
  },
  {
    icon: <BiSolidFileCss size={30} />,
    skill: "CSS",
  },
  {
    icon: <BiLogoTailwindCss size={30} />,
    skill: "Tailwind CSS",
  },
  {
    icon: <BiLogoJavascript size={30} />,
    skill: "JavaScript",
  },
  {
    icon: <BiLogoReact size={30} />,
    skill: "React JS",
  },
  {
    icon: <SiNextdotjs size={30} />,
    skill: "Next JS",
  },
  {
    icon: <BiLogoMongodb size={30} />,
    skill: "MongoDB",
  },
];

export default function Skills() {
  return (
    <div className="min-h-full p-5 text-center sm:px-10 md:pt-12 md:pb-[6.5rem] md:px-14 lg:px-[4.5rem] xl:px-[5.5rem] 2xl:px-[6.5rem] snap-start">
      <p className="text-2xl font-semibold text-gray-400">My Skills</p>
      <p className="text-sm font-semibold text-black mb-6 md:mb-12">
        Here are my skills
      </p>
      <div className="grid row-auto grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 md:gap-8">
        {data?.map((value, index) => {
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? styleForEven.style1 : styleForOdd.style1
              }`}
            >
              <div
                className={`${
                  index % 2 === 0 ? styleForEven.style2 : styleForOdd.style2
                }`}
              >
                {value?.icon}
              </div>
              <p
                className={`${
                  index % 2 === 0 ? styleForEven.style3 : styleForOdd.style3
                }`}
              >
                {value?.skill}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
