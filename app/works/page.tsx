import Image from "next/image";
import { Metadata } from "next";

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

export default function Works() {
  return (
    <div className="min-h-full p-5 sm:px-10 md:pt-12 md:pb-[6.5rem] md:px-14 lg:px-[4.5rem] xl:px-[5.5rem] 2xl:px-[6.5rem]">
      <p className="text-2xl font-semibold text-gray-400 text-center">
        My Works
      </p>
      <p className="text-sm font-semibold text-black text-center mb-6 md:mb-12">
        Here are some of my works
      </p>
      <div className="grid row-auto grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 md:gap-8">
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
