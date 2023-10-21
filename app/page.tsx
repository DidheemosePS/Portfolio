import Image from "next/image";
import { PrismaClient } from "@prisma/client";

export const revalidate = 5;

const getHomeData = async () => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.home.findMany();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  interface Data {
    id: string;
    name: string;
    role: string;
    country: string;
    imageUrl: string;
  }
  const [data] = (await getHomeData()) as Data[];

  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] relative overflow-hidden">
      <div className="w-fit h-full flex flex-col justify-center absolute left-0">
        <p className="text-xl font-medium lg:text-4xl">{data?.role}</p>
        <div>
          <p className="text-4xl font-bold md:inline lg:text-5xl">Hi, I'm </p>
          <p className="text-4xl font-bold text-red-#ff044c md:inline lg:text-5xl">
            {data?.name}
          </p>
        </div>
        <p className="text-4xl font-bold lg:text-5xl">From {data?.country}</p>
      </div>
      <div className="w-full h-[calc(100vh-3rem)] absolute -right-32 -z-10 pt-5 sm:w-2/4 sm:right-0">
        <Image
          src={data?.imageUrl}
          alt="Image"
          width={100}
          height={100}
          quality={100}
          priority={true}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
