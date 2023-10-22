import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import { join } from "path";
import Link from "next/link";

export default async function HomePageDashboard() {
  const getDashboardData = async () => {
    const prisma = new PrismaClient();
    const home = await prisma.home.findMany();
    return home;
  };

  const [home] = await getDashboardData();

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
      await prisma.home.update({
        where: {
          id: home?.id,
        },
        data: {
          role: formData?.get("role")?.toString(),
          name: formData?.get("name")?.toString(),
          country: formData?.get("country")?.toString(),
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
      <p className="text-center text-2xl font-bold my-4 bg-box-color">
        Home Page
      </p>
      <form
        action={handleFormUpdate}
        className="grid grid-cols-2 row-auto gap-4"
      >
        <label>Job Role</label>
        <input
          type="text"
          name="role"
          defaultValue={home?.role}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          defaultValue={home?.name}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label>Country</label>
        <input
          type="text"
          name="country"
          defaultValue={home?.country}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label>Change Image</label>
        <input type="file" name="imageURL" accept="image/*" required />
        <Link
          href={home?.imageUrl}
          target="_blank"
          className="col-start-2 col-end-3 text-blue-500 underline"
        >
          {home?.imageUrl}
        </Link>
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
