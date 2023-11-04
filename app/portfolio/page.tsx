import Image from "next/image";
import { Metadata } from "next";
import { PrismaClient } from "@prisma/client";

export const metadata: Metadata = {
  title: "Services",
  description: "Services",
};

const data = [
  {
    image: "/portfolio.jpg",
    projectName: "PlantIn",
  },
  {
    image: "/portfolio.jpg",
    projectName: "Portfolio",
  },
];

export default async function Portfolio() {
  return (
    <div className="w-full min-h-full h-fit p-5 snap-start">
      <p className="text-2xl font-semibold text-gray-400 text-center">
        My Works
      </p>
      <p className="text-sm font-semibold text-black text-center">
        Here are some of my works
      </p>
      <div className="grid grid-rows-2 grid-cols-1 gap-6 mt-6">
        {data?.map((value, index) => {
          return (
            <div key={index}>
              <div className="w-full h-[13rem] rounded-lg">
                <Image
                  src={value?.image}
                  alt="Image"
                  width={100}
                  height={100}
                  quality={100}
                  priority={true}
                  className="w-full h-full object-fill rounded-lg bg-fuchsia-500"
                />
              </div>
              <p className="text-md font-semibold text-center">
                {value?.projectName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
