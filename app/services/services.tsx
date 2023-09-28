"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import { Services_Buttons } from "@/components/buttons";
import ServicesAction from "./serverAction";

export default function ServicesClientSide() {
  interface Data {
    id: string;
    title: string;
    description: string;
  }

  const [data, setData] = useState<Data[]>([]);
  const [count, setCount] = useState<Number>();
  const [isLoading, setIsLoading] = useState(true);

  const getServicesData = async (skip: number) => {
    try {
      const { data, count } = (await ServicesAction(skip)) as {
        data: Data[];
        count: number;
      };
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
    getServicesData(0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center gap-5 py-5">
      <p className="text-2xl font-bold lg:self-start md:text-3xl lg:text-4xl">
        My Services
      </p>
      <div className="w-full flex flex-wrap gap-4 text-white">
        {data?.map((items: Data) => {
          return (
            <div
              key={items.id}
              className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color transition duration-500 ease-in-out hover:bg-red-#ff044c "
            >
              <p className="text-2xl font-bold">{items?.title}</p>
              <p className="text-sm">{items?.description}</p>
              <button className="w-fit text-sm">Learn More</button>
            </div>
          );
        })}
      </div>
      {typeof count === "number" && count > 3 && (
        <Services_Buttons getServicesData={getServicesData} count={count} />
      )}
    </div>
  );
}
