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
    image: "/plantIn.png",
    projectName: "PlantIn (MERN Stack)",
    description:
      "PlantIn is a platform that mainly focuses on branding people’s work and their innovative ideas.Any finished work that represents the users talent can be published for the world to see.",
    demo: "https://plantin.plantinapp.me/",
    code: "https://github.com/DidheemosePS/_PlantIn_.git",
  },
  {
    image: "/portfolio.png",
    projectName: "Portfolio (Next JS)",
    description:
      "Explore my portfolio—a showcase of my passion and expertise. From design to development, each project tells a unique story. Join me on this journey of creativity and innovation!",
    demo: "https://didheemose.vercel.app/",
    code: "https://github.com/DidheemosePS/Portfolio.git",
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
                className="w-full h-full object-fill"
              />
              <p className="text-lg font-medium text-gray-800 pb-5">
                {value?.projectName}
              </p>
              <div
                key={index}
                className="w-full h-full flex flex-col justify-center items-center gap-5 absolute top-0 left-0 p-5 rounded-lg translate-y-full transition duration-500 ease-in-out group-hover/works:translate-y-0 bg-white bg-opacity-[80%]"
              >
                <p className="text-lg font-medium">{value?.description}</p>
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
