import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";
import { join } from "path";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";

export default async function AboutPageDashboard() {
  const getDashboardData = async () => {
    const prisma = new PrismaClient();
    const about = await prisma.about.findMany({
      include: {
        skills: true,
        education: true,
        experience: true,
      },
    });
    return about;
  };

  const [about] = await getDashboardData();

  const handleFormUpdate = async (formData: FormData) => {
    "use server";

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
    await prisma.about.update({
      where: {
        id: about?.id,
      },
      data: {
        description: formData.get("description")?.toString(),
        imageUrl: imageURL,
      },
    });
    revalidatePath("/");
  };

  return (
    <div>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl">
        About Page
      </p>
      <form
        action={handleFormUpdate}
        className="grid grid-cols-2 row-auto gap-4"
      >
        <label>Description</label>
        <textarea
          name="description"
          defaultValue={about?.description}
          className="h-28 p-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200 resize-none"
        ></textarea>
        <label>Change Image</label>
        <input type="file" name="imageURL" accept="image/*" />
        <Link
          href={about?.imageUrl}
          target="_blank"
          className="col-start-2 col-end-3 text-blue-500 underline"
        >
          {about?.imageUrl}
        </Link>
        <button
          type="submit"
          className="w-fit border rounded-lg border-red-#ff044c px-6 py-1 col-start-1 col-end-3 justify-self-center"
        >
          Update
        </button>
      </form>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl col-start-1 col-end-3">
        Skills
      </p>
      <Skills skills={about?.skills} />
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl col-start-1 col-end-3">
        Experience
      </p>
      <Experience experience={about?.experience} />
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl col-start-1 col-end-3">
        Education
      </p>
      <Education education={about.education} />
    </div>
  );
}
