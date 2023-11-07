import Image from "next/image";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Services",
  description: "Services",
};

const data = [
  {
    image: "/portfolio.jpg",
    projectName: "PlantIn (MERN Stack)",
  },
  {
    image: "/portfolio.jpg",
    projectName: "Portfolio (Next JS)",
  },
];

export default function Works() {
  return (
    <div id="works" className="m-auto min-h-full px-8 py-12">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-2xl font-black text-gray-400">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <p className="text-[1rem] font-medium text-gray-600">
        Here are some of my works.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 px-2 py-5 sm:px-4 md:px-8 xl:px-16 lg:gap-14 xl:gap-16 2xl:gap-20">
        {data?.map((value, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-5 shadow-md rounded-lg overflow-hidden sm:w-[15rem] md:w-[18rem] lg:w-[25rem]"
            >
              <div className="">
                <Image
                  src={value?.image}
                  alt="Image"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-medium text-gray-800 pb-5">
                {value?.projectName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
