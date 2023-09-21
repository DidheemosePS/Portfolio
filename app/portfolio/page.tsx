import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Services_Portfolio_Buttons } from "@/components/commonButtons";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function Portfolio() {
  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center place-content-start gap-5 py-5">
      <p className="text-2xl font-bold lg:self-start md:text-3xl lg:text-4xl">
        My Work
      </p>
      <div className="w-full grid grid-cols-1 auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-full h-96 rounded-lg relative overflow-hidden group/works">
          <Image
            src="https://m.media-amazon.com/images/I/61HHS0HrjpL._SX522_.jpg"
            alt="Image"
            width={100}
            height={100}
            quality={100}
            className="w-full h-full"
          />
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg absolute top-0 translate-y-full transition duration-500 ease-in-out p-5 bg-gradient-to-t from-red-#ff044c group-hover/works:translate-y-0">
            <p>PlantIn Web App</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              veritatis, molestias quisquam ipsum porro saepe quas quis esse,
              atque accusamus iste facilis temporibus fugit. Doloribus sequi
              iste iusto deleniti exercitationem?
            </p>
            <Link href="https://plantin.plantinapp.me/" target="_blank">
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="w-full h-96 rounded-lg relative overflow-hidden group/works">
          <Image
            src="https://m.media-amazon.com/images/I/61HHS0HrjpL._SX522_.jpg"
            alt="Image"
            width={100}
            height={100}
            quality={100}
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg absolute top-0 translate-y-full transition duration-500 ease-in-out p-5 bg-gradient-to-t from-red-#ff044c group-hover/works:translate-y-0">
            <p>PlantIn Web App</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              veritatis, molestias quisquam ipsum porro saepe quas quis esse,
              atque accusamus iste facilis temporibus fugit. Doloribus sequi
              iste iusto deleniti exercitationem?
            </p>
            <Link href="https://plantin.plantinapp.me/" target="_blank">
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
        <div className="w-full h-96 rounded-lg relative overflow-hidden group/works">
          <Image
            src="https://m.media-amazon.com/images/I/61HHS0HrjpL._SX522_.jpg"
            alt="Image"
            width={100}
            height={100}
            quality={100}
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg absolute top-0 translate-y-full transition duration-500 ease-in-out p-5 bg-gradient-to-t from-red-#ff044c group-hover/works:translate-y-0">
            <p>PlantIn Web App</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              veritatis, molestias quisquam ipsum porro saepe quas quis esse,
              atque accusamus iste facilis temporibus fugit. Doloribus sequi
              iste iusto deleniti exercitationem?
            </p>
            <Link href="https://plantin.plantinapp.me/" target="_blank">
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
      </div>
      <Services_Portfolio_Buttons />
    </div>
  );
}
