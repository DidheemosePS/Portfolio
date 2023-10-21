import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function PortfolioPageDashboard() {
  const getDashboardData = async () => {
    const prisma = new PrismaClient();
    const portfolio = await prisma.portfolio.findMany();
    return portfolio;
  };

  const portfolio = await getDashboardData();

  // const handleFormUpdate = async (formData: FormData) => {
  //   "use server";

  //   const prisma = new PrismaClient();
  //   await prisma.home.update({
  //     where: {
  //       id: home?.id,
  //     },
  //     data: {
  //       name: formData.get("name")?.toString(),
  //     },
  //   });
  //   revalidatePath("/");
  // };

  return (
    <div>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl">
        Portfolio Page
      </p>
      <form
        // action={handleFormUpdate}
        className="grid grid-cols-2 row-auto gap-4"
      >
        {portfolio?.map((value, index, array) => {
          return (
            <>
              <label className="self-center">Title</label>
              <input
                type="text"
                name="role"
                defaultValue={value?.title}
                className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
              />
              <label className="self-center">Description</label>
              <input
                type="text"
                name="name"
                defaultValue={value?.description}
                className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
              />
              <label className="self-center">Project URL</label>
              <input
                type="text"
                name="name"
                defaultValue={value?.link}
                className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
              />
              {index !== array.length - 1 && (
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-box-color col-start-1 col-end-3"></hr>
              )}
            </>
          );
        })}
        <button
          type="submit"
          className="w-fit border rounded-lg border-red-#ff044c px-6 py-1 col-start-1 col-end-3 justify-self-center"
        >
          Update
        </button>
      </form>
    </div>
  );
}
