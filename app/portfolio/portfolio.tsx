"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Portfolio_Buttons } from "@/components/buttons";
import { useEffect, useState } from "react";
import Loading from "./loading";
import PortfolioAction from "./serverAction";

export default function PortfolioClientSide() {
  interface Data {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }

  const [data, setData] = useState<Data[]>([]);
  const [count, setCount] = useState(Number);
  const [isLoading, setIsLoading] = useState(true);

  const getPortfolioData = async (skip: number) => {
    try {
      const { data, count } = await PortfolioAction(skip);
      data.forEach((element: Data) => {
        setData((current) => [...current, element]);
      });
      setCount(count);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolioData(0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center place-content-start gap-5 py-5">
      <p className="text-2xl font-bold lg:self-start md:text-3xl lg:text-4xl">
        My Work
      </p>
      <div className="w-full grid grid-cols-1 auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((element: Data) => {
          return (
            <div
              key={element?.id}
              className="w-full h-96 rounded-lg relative overflow-hidden group/works"
            >
              <Image
                src={element?.imageUrl}
                alt="Image"
                width={100}
                height={100}
                quality={100}
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg absolute top-0 translate-y-full transition duration-500 ease-in-out p-5 bg-gradient-to-t from-red-#ff044c group-hover/works:translate-y-0">
                <p>{element?.title}</p>
                <p className="text-justify">{element?.description}</p>
                <Link href={element?.link} target="_blank">
                  <HiOutlineExternalLink />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {typeof count === "number" && count > 3 && (
        <Portfolio_Buttons getPortfolioData={getPortfolioData} count={count} />
      )}
    </div>
  );
}
