"use client";

import { ReactElement } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiSolidFileCss,
} from "react-icons/bi";
import { FaAws, FaNode } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

interface Style {
  style1: string;
  style2: string;
  style3: string;
}

const styleForOdd: Style = {
  style1:
    "w-[6.5rem] h-[6.5rem] bg-black rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 p-4 hover:transition hover:duration-300 hover:ease-in-out hover:scale-110 sm:w-[8.5rem] sm:h-[8.5rem] md:w-[9.5rem] md:h-[9.5rem] lg:w-[9rem] lg:h-[9rem] xl:w-[10.5rem] xl:h-[10.5rem]",
  style2:
    "w-[2.5rem] h-[2.5rem] bg-white rounded-full flex justify-center items-center text-black sm:w-[3rem] sm:h-[3rem] md:w-[3.5rem] md:h-[3.5rem]",
  style3: "font-medium text-white",
};

const styleForEven = {
  style1:
    "w-[6.5rem] h-[6.5rem] bg-white rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 p-4 hover:transition hover:duration-300 hover:ease-in-out hover:scale-110 sm:w-[8.5rem] sm:h-[8.5rem] md:w-[9.5rem] md:h-[9.5rem] lg:w-[9rem] lg:h-[9rem] xl:w-[10.5rem] xl:h-[10.5rem]",
  style2:
    "w-[2.5rem] h-[2.5rem] bg-black rounded-full flex justify-center items-center text-white sm:w-[3rem] sm:h-[3rem] md:w-[3.5rem] md:h-[3.5rem]",
  style3: "font-medium text-black",
};

interface DataOne {
  icon: ReactElement<{ size: number }>;
  skill: string;
  range: number;
}

interface DataTwo {
  icon: ReactElement<{ size: number }>;
  skill: string;
}

export default function Skills() {
  const dataOne: DataOne[] = [
    {
      icon: <AiFillHtml5 size={30} />,
      skill: "HTML",
      range: 90,
    },
    {
      icon: <BiSolidFileCss size={30} />,
      skill: "CSS",
      range: 85,
    },
    {
      icon: <BiLogoTailwindCss size={30} />,
      skill: "Tailwind CSS",
      range: 80,
    },
    {
      icon: <BiLogoJavascript size={30} />,
      skill: "JavaScript",
      range: 85,
    },
    {
      icon: <FaNode size={30} />,
      skill: "Node JS",
      range: 60,
    },
    {
      icon: <TbApi size={30} />,
      skill: "Rest Api",
      range: 70,
    },
  ];

  const dataTwo: DataTwo[] = [
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
    {
      icon: <FaAws size={30} />,
      skill: "AWS",
    },
  ];

  return (
    <div id="skills" className="m-auto min-h-full px-8 py-12">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-2xl font-black text-gray-400">My Skills</h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <p data-aos="fade-up" className="text-[1rem] font-medium text-gray-600">
        Here are my skills
      </p>
      <div className="grid grid-rows-[auto,1fr] grid-cols-1 px-2 py-5 sm:px-4 md:px-8 lg:grid lg:grid-rows-1 lg:grid-cols-2 xl:px-16">
        <div data-aos="zoom-in" className=" flex flex-col gap-7 lg:self-center">
          {dataOne?.map((value, index) => {
            return (
              <div key={index}>
                <div className="flex gap-[.65rem] items-center mb-1">
                  {value?.icon}
                  <p className="text-sm font-semibold">{value?.skill}</p>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-xl relative">
                  <motion.div
                    className={`h-2 bg-yellow-500 rounded-xl absolute left-0 z-10`}
                    animate={{ width: `${value?.range}%` }}
                    transition={{
                      duration: 3,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 px-5 py-8 sm:px-10 sm:gap-10 md:px-14 lg:pt-0">
          {dataTwo?.map((value, index) => {
            return (
              <div
                data-aos="zoom-in"
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
    </div>
  );
}
