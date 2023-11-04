import Image from "next/image";
import { Metadata } from "next";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import LineComponent from "@/components/lineComponent";

export const metadata: Metadata = {
  title: "Services",
  description: "Services",
};

const experienceData = [
  {
    jobTitle: "Software Developer",
    companyName: "D Company",
    fromTo: "2023 - Present",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat harum ea id quisquam esse eum illo ratione, sequi quos et, aliquam provident necessitatibus magnam incidunt! Officiis repellendus perferendis temporibus.",
  },
];

const educationData = [
  {
    qualification: "Batchelor of computer applications",
    collegeName: "Naipunnya Institute",
    fromTo: "2020 - 2023",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat harum ea id quisquam esse eum illo ratione, sequi quos et, aliquam provident necessitatibus magnam incidunt! Officiis repellendus perferendis temporibus.",
  },
];

export default async function Services() {
  return (
    <div className="w-full min-h-full h-fit p-5 snap-start">
      <p className="text-2xl font-semibold text-gray-400 text-center">Resume</p>
      <p className="text-sm font-semibold text-black text-center">
        Here are my experiences and qualifications
      </p>
      <div className="grid row-auto grid-cols-1 gap-6 mt-6">
        <div className="w-fit border-2 border-gray-400 rounded-2xl text-yellow-500 px-5 py-1 justify-self-center text-sm font-bold">
          Experience
        </div>
        {experienceData?.map((value, index) => {
          return (
            <div
              key={index}
              className="grid grid-rows-1 grid-cols-[auto,1fr] gap-5"
            >
              <LineComponent />
              <div className="border-2 border-yellow-500 rounded-lg p-3 mr-5">
                <p className="font-semibold">{value?.jobTitle}</p>
                <p className="text-gray-400">{value?.companyName}</p>
                <p className="font-semibold text-yellow-500">
                  {value?.companyName}
                </p>
                <p className="text-justify">{value?.description}</p>
              </div>
            </div>
          );
        })}
        <div className="w-fit border-2 border-gray-400 rounded-2xl text-yellow-500 px-5 py-1 justify-self-center text-sm font-bold">
          Education
        </div>
        {educationData?.map((value, index) => {
          return (
            <div
              key={index}
              className="grid grid-rows-1 grid-cols-[auto,1fr] gap-5"
            >
              <LineComponent />
              <div className="border-2 border-yellow-500 rounded-lg p-3 mr-5">
                <p className="font-semibold">{value?.qualification}</p>
                <p className="text-gray-400">{value?.collegeName}</p>
                <p className="font-semibold text-yellow-500">{value?.fromTo}</p>
                <p className="text-justify">{value?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
