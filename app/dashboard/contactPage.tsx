import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import { join } from "path";
import Link from "next/link";

export default async function ContactPageDashboard() {
  const getDashboardData = async () => {
    const prisma = new PrismaClient();
    const contact = await prisma.contact.findMany();
    return contact;
  };

  const [contact] = await getDashboardData();

  const handleFormUpdate = async (formData: FormData) => {
    "use server";
    try {
      let resumeURL;
      const file: File | null = formData?.get("resumeURL") as File;

      if (file?.size) {
        const bytes = await file?.arrayBuffer();
        const buffer = Buffer?.from(bytes);

        const path = join("public", "pdfs", Math.random() + file?.name);
        await writeFile(path, buffer);
        resumeURL = path.slice(7, path?.length);
      }

      const prisma = new PrismaClient();
      await prisma.contact.update({
        where: {
          id: contact?.id,
        },
        data: {
          mail: formData.get("mail")?.toString(),
          phone: formData.get("phone")?.toString(),
          facebookLink: formData.get("facebookLink")?.toString(),
          twitterLink: formData.get("twitterLink")?.toString(),
          instagramLink: formData.get("instagramLink")?.toString(),
          linkedinLink: formData.get("linkedinLink")?.toString(),
          resumeUrl: resumeURL,
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
        Contact Page
      </p>
      <form
        action={handleFormUpdate}
        className="grid grid-cols-2 row-auto gap-4"
      >
        <label className="self-center">Contact Email</label>
        <input
          type="text"
          name="mail"
          defaultValue={contact?.mail}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Phone No</label>
        <input
          type="text"
          name="phone"
          defaultValue={contact?.phone}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Facebook</label>
        <input
          type="text"
          name="facebookLink"
          defaultValue={contact?.facebookLink}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Twitter</label>
        <input
          type="text"
          name="twitterLink"
          defaultValue={contact?.twitterLink}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Instagram</label>
        <input
          type="text"
          name="instagramLink"
          defaultValue={contact?.instagramLink}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Linked In</label>
        <input
          type="text"
          name="linkedinLink"
          defaultValue={contact?.linkedinLink}
          required
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Change Resume</label>
        <input type="file" name="resumeURL" accept="application/pdf" required />
        <Link
          href={contact?.resumeUrl}
          target="_blank"
          className="col-start-2 col-end-3 text-blue-500 underline"
        >
          {contact?.resumeUrl}
        </Link>
        <button
          type="submit"
          className="w-fit border rounded-lg border-red-#ff044c px-6 py-1 mb-4 col-start-1 col-end-3 justify-self-center"
        >
          Update
        </button>
      </form>
    </div>
  );
}
