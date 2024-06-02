"use client";

import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { WorksButtons } from "../spare/buttons";

interface Data {
  image: string;
  projectName: string;
  description: string;
  demo: string;
  code: string;
}

const data: Data[] = [
  {
    image: "/lottery.webp",
    projectName: "Lottery (Blockchain)",
    description:
      "Designed and developed a decentralized application (DApp) utilizing blockchain technology, integrating Web3 technologies to enable decentralized interactions and transactions. Implemented core blockchain concepts, such as smart contracts, to ensure secure and transparent lottery operations. Utilized blockchain frameworks like Ethereum for backend infrastructure development and developed smart contracts using Solidity.",
    demo: "https://lottery-didheemose.vercel.app/",
    code: "https://github.com/DidheemosePS/lottery.git",
  },
  {
    image: "/library.webp",
    projectName: "Django Email Package (Package)",
    description:
      "Developed a custom email package for the Django framework, featuring pre-designed HTML templates for various email scenarios and integrated dynamic content placeholders for personalized messages, thereby enhancing the email communication capabilities of Django applications.",
    demo: "https://pypi.org/project/django-email-package/",
    code: "https://github.com/DidheemosePS/django_email_package",
  },
  {
    image: "/take_care.webp",
    projectName: "Pet Adoption Platform (Django)",
    description:
      "Implemented a user-friendly pet adoption platform with Django, utilizing AWS services for deployment and scaling. Ensured application security and integrity using Pylint and Sonar Cloud, delivering a scalable and secure platform for managing pet adoption processes.",
    demo: "https://github.com/DidheemosePS/take_care_django",
    code: "https://github.com/DidheemosePS/take_care_django",
  },
  {
    image: "/kick_off.webp",
    projectName: "Event Management System (Django)",
    description:
      "Developed a cloud-based event management application, implementing user authentication and event management features. Integrated AWS services for enhanced performance and reliability, and streamlined event management processes with automated CI/CD pipelines.",
    demo: "https://github.com/DidheemosePS/Kick_Off_Django",
    code: "https://github.com/DidheemosePS/Kick_Off_Django",
  },
  {
    image: "/portfolio.webp",
    projectName: "Portfolio (Next JS)",
    description:
      "Explore my portfolio—a showcase of my passion and expertise. From design to development, each project tells a unique story. Join me on this journey of creativity and innovation!",
    demo: "https://didheemose.vercel.app/",
    code: "https://github.com/DidheemosePS/Portfolio.git",
  },
  {
    image: "/plantIn.webp",
    projectName: "PlantIn (MERN Stack)",
    description:
      "PlantIn is a platform that mainly focuses on branding people’s work and their innovative ideas.Any finished work that represents the users talent can be published for the world to see.",
    demo: "https://plantin-didheemose.vercel.app/",
    code: "https://github.com/DidheemosePS/PlantIn",
  },
];

export default function Works() {
  return (
    <div id="works" className="m-auto min-h-full px-8 py-12">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-2xl font-black text-gray-400">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <p data-aos="fade-up" className="text-[1rem] font-medium text-gray-600">
        Here are some of my works.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 px-2 py-5 sm:px-4 md:px-8 xl:px-16 lg:gap-14 xl:gap-16 2xl:gap-20">
        {data?.map((value, index) => {
          return (
            <div
              data-aos="zoom-in"
              key={index}
              className="w-fit h-[20rem] flex flex-col justify-center items-center gap-5 shadow-md rounded-lg overflow-hidden relative group/works sm:w-[15rem] md:w-[18rem] lg:w-[25rem]"
            >
              <Image
                src={value?.image}
                alt="Image"
                width={100}
                height={100}
                quality={100}
                priority={true}
                className="w-full h-full object-contain shadow-md"
              />
              <p className="text-lg font-medium text-gray-800 pb-5">
                {value?.projectName}
              </p>
              <div
                key={index}
                className="w-full h-full flex flex-col justify-center items-center gap-5 absolute top-0 left-0 p-5 rounded-lg translate-y-full transition duration-500 ease-in-out group-hover/works:translate-y-0 bg-white bg-opacity-[80%]"
              >
                <p
                  className="text-lg font-medium overflow-y-scroll"
                  style={{ scrollbarWidth: "none" }}
                >
                  {value?.description}
                </p>
                <div className="flex gap-2 md:gap-5">
                  <WorksButtons
                    icon={<AiOutlineLink size={20} />}
                    text="Demo"
                    action={value?.demo}
                  />
                  <WorksButtons
                    icon={<BsGithub size={20} />}
                    text="Code"
                    action={value?.code}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
