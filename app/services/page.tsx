import { Metadata } from "next";
import { PrismaClient } from "@prisma/client";

export const metadata: Metadata = {
  title: "Services",
  description: "Services",
};

export const revalidate = 5;

const getServicesData = async () => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.services.findMany();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Services() {
  interface Data {
    id: string;
    title: string;
    description: string;
  }

  const data = (await getServicesData()) as Data[];

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
    </div>
  );
}
