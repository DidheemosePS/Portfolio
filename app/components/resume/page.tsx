import { Metadata } from "next";
import LineComponent from "@/components/spare/lineComponent";

export const metadata: Metadata = {
  title: "Services",
  description: "Services",
};

const experienceData = [
  {
    jobTitle: "Software Developer Intern",
    companyName: "Drafteq Engineering",
    fromTo: "May 2023 - Present",
    description:
      "In my current internship at Drafteq Engineering, I'm working as a Full Stack Developer focusing on the frontend development using React JS, where I work on creating interactive and user-friendly interfaces. Additionally, I am responsible for building the backend API using Node.js, Express.js, and MongoDB, enabling data storage and retrieval for the application.",
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
    <div id="resume" className="m-auto min-h-full px-8 py-12">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-2xl font-black text-gray-400">Resume</h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <p className="text-[1rem] font-medium text-gray-600">
        Here are my experiences and qualifications.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 px-2 py-5 sm:px-4 md:px-8 lg:gap-14 xl:gap-16 xl:px-16 2xl:gap-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="border-2 border-gray-300 rounded-full text-yellow-500 px-7 py-1 justify-self-center text-xl font-medium">
            Experience
          </div>
          {experienceData?.map((value, index) => {
            return (
              <div key={index} className="relative">
                <LineComponent />
                <div className="border-2 border-yellow-400 rounded-lg p-3 shadow-md lg:w-[25rem] lg:h-[16.2rem]">
                  <p className="text-xl font-medium">{value?.jobTitle}</p>
                  <p className="font-semibold text-gray-500 my-1">
                    {value?.companyName}
                  </p>
                  <p className="font-semibold text-yellow-500">
                    {value?.fromTo}
                  </p>
                  <p className="text-sm text-justify text-gray-500 my-1">
                    {value?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="border-2 border-gray-300 rounded-full text-yellow-500 px-7 py-1 justify-self-center text-xl font-medium">
            Education
          </div>
          {educationData?.map((value, index) => {
            return (
              <div key={index} className="relative">
                <LineComponent />
                <div className="border-2 border-yellow-400 rounded-lg p-3 shadow-md lg:w-[25rem] lg:h-[16.2rem]">
                  <p className="text-xl font-medium">{value?.qualification}</p>
                  <p className="font-semibold text-gray-500 my-1">
                    {value?.collegeName}
                  </p>
                  <p className="font-semibold text-yellow-500">
                    {value?.fromTo}
                  </p>
                  <p className="text-sm text-justify text-gray-500 my-1">
                    {value?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
