import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import { join } from "path";
import Link from "next/link";

export default async function PortfolioPageDashboard() {
  const getDashboardData = async () => {
    const prisma = new PrismaClient();
    const portfolio = await prisma.portfolio.findMany();
    return portfolio;
  };

  const portfolio = await getDashboardData();

  const handleFormUpdate = async (formData: FormData) => {
    "use server";
    try {
      let imageURL;
      const file: File | null = formData?.get("imageURL") as File;

      if (file?.size) {
        const bytes = await file?.arrayBuffer();
        const buffer = Buffer?.from(bytes);

        const path = join("public", "images", Math.random() + file?.name);
        await writeFile(path, buffer);
        imageURL = path.slice(7, path?.length);
      }

      const prisma = new PrismaClient();
      await prisma.portfolio.update({
        where: {
          id: formData.get("submit")?.toString(),
        },
        data: {
          title: formData.get("title")?.toString(),
          description: formData.get("description")?.toString(),
          imageUrl: imageURL,
        },
      });
      revalidatePath("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl">
        Portfolio Page
      </p>
      {portfolio?.map((value, index, array) => {
        return (
          <form
            action={handleFormUpdate}
            className="grid grid-cols-2 row-auto gap-4"
            key={value.id}
          >
            <label className="self-center">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={value?.title}
              required
              className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
            />
            <label className="self-center">Description</label>
            <input
              type="text"
              name="description"
              defaultValue={value?.description}
              required
              className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
            />
            <label>Change Image</label>
            <input type="file" name="imageURL" accept="image/*" required />
            <Link
              href={value?.imageUrl}
              target="_blank"
              className="col-start-2 col-end-3 text-blue-500 underline"
            >
              {value?.imageUrl}
            </Link>
            <button
              type="submit"
              value={value?.id}
              name="submit"
              className="w-fit border rounded-lg border-red-#ff044c px-6 py-1 col-start-1 col-end-3 justify-self-center"
            >
              Update
            </button>
            {index !== array.length - 1 && (
              <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-box-color col-start-1 col-end-3"></hr>
            )}
          </form>
        );
      })}
    </div>
  );
}
