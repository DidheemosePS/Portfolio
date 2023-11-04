import { Metadata } from "next";
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

export default function Resume() {
  return (
    <div className="min-h-full p-5 sm:px-10 md:pt-12 md:pb-[6.5rem] md:px-14 lg:px-[4.5rem] xl:px-[5.5rem] 2xl:px-[6.5rem]">
      <p className="text-2xl font-semibold text-gray-400 text-center">Resume</p>
      <p className="text-sm font-semibold text-black text-center md:mb-6">
        Here are my experiences and qualifications
      </p>
      <div className="grid row-auto grid-cols-1 gap-x-6 sm:grid-cols-2 md:gap-8">
        <div className="grid grid-rows-[auto,1fr] grid-cols-1">
          <div className="w-fit h-fit border-2 border-gray-400 rounded-lg text-yellow-500 px-5 py-1 justify-self-center text-sm font-bold col-start-1 col-end-3 my-6">
            Experience
          </div>
          {experienceData?.map((value, index) => {
            return (
              <div
                key={index}
                className="border-2 border-yellow-500 rounded-lg p-3"
              >
                <p className="font-semibold">{value?.jobTitle}</p>
                <p className="text-gray-400">{value?.companyName}</p>
                <p className="font-semibold text-yellow-500">
                  {value?.companyName}
                </p>
                <p className="text-justify">{value?.description}</p>
              </div>
            );
          })}
        </div>
        <div className="grid row-auto grid-cols-[auto,1fr]">
          <div className="w-fit h-fit border-2 border-gray-400 rounded-lg text-yellow-500 px-5 py-1 justify-self-center text-sm font-bold col-start-1 col-end-3 my-6">
            Education
          </div>
          {educationData?.map((value, index) => {
            return (
              <div
                key={index}
                className="border-2 border-yellow-500 rounded-lg p-3"
              >
                <p className="font-semibold">{value?.qualification}</p>
                <p className="text-gray-400">{value?.collegeName}</p>
                <p className="font-semibold text-yellow-500">{value?.fromTo}</p>
                <p className="text-justify">{value?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
