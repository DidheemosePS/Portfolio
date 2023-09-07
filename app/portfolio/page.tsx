import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Services_Portfolio_Buttons } from "@/components/commonButtons";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function Portfolio() {
  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center gap-5 pt-5 pb-5">
      <p className="text-2xl font-bold lg:self-start md:text-3xl lg:text-4xl">
        My Work
      </p>
      <div className="w-full grid grid-cols-1 auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-full h-96 rounded-lg relative overflow-hidden group/works">
          <Image
            src="https://m.media-amazon.com/images/I/61HHS0HrjpL._SX522_.jpg"
            width={100}
            height={100}
            alt="Image"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg absolute top-0 translate-y-full transition duration-500 ease-in-out origin-bottom p-5 bg-gradient-to-t from-red-#ff044c group-hover/works:translate-y-0">
            <p>PlantIn Web App</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              veritatis, molestias quisquam ipsum porro saepe quas quis esse,
              atque accusamus iste facilis temporibus fugit. Doloribus sequi
              iste iusto deleniti exercitationem?
            </p>
            <Link href="https://plantin.plantinapp.me/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff044c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="bg-white"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full h-96 rounded-lg relative overflow-hidden group/works">
          <Image
            src="https://cdn1.smartprix.com/rx-izLSMVlI0-w420-h420/samsung-galaxy-s23-u.webp"
            width={100}
            height={100}
            alt="Image"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg absolute top-0 translate-y-full transition duration-500 ease-in-out origin-bottom p-5 bg-gradient-to-t from-red-#ff044c group-hover/works:translate-y-0">
            <p>PlantIn Web App</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              veritatis, molestias quisquam ipsum porro saepe quas quis esse,
              atque accusamus iste facilis temporibus fugit. Doloribus sequi
              iste iusto deleniti exercitationem?
            </p>
            <Link href="https://plantin.plantinapp.me/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff044c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="bg-white"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full h-96 rounded-lg relative overflow-hidden group/works">
          <Image
            src="https://m.media-amazon.com/images/I/51f4A6Tr8zL._SX300_SY300_QL70_FMwebp_.jpg"
            width={100}
            height={100}
            alt="Image"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg absolute top-0 translate-y-full transition duration-500 ease-in-out origin-bottom p-5 bg-gradient-to-t from-red-#ff044c group-hover/works:translate-y-0">
            <p>PlantIn Web App</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              veritatis, molestias quisquam ipsum porro saepe quas quis esse,
              atque accusamus iste facilis temporibus fugit. Doloribus sequi
              iste iusto deleniti exercitationem?
            </p>
            <Link href="https://plantin.plantinapp.me/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff044c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="bg-white"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Services_Portfolio_Buttons />
    </div>
  );
}
