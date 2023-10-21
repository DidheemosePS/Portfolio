import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function ContactPageDashboard() {
  const getDashboardData = async () => {
    const prisma = new PrismaClient();
    const contact = await prisma.contact.findMany();
    return contact;
  };

  const [contact] = await getDashboardData();

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
        Contact Page
      </p>
      <form
        // action={handleFormUpdate}
        className="grid grid-cols-2 row-auto gap-4"
      >
        <label className="self-center">Contact Email</label>
        <input
          type="text"
          name="role"
          defaultValue={contact?.mail}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Phone No</label>
        <input
          type="text"
          name="name"
          defaultValue={contact?.phone}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Facebook</label>
        <input
          type="text"
          name="name"
          defaultValue={contact?.facebookLink}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Twitter</label>
        <input
          type="text"
          name="name"
          defaultValue={contact?.twitterLink}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Instagram</label>
        <input
          type="text"
          name="name"
          defaultValue={contact?.instagramLink}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Linked In</label>
        <input
          type="text"
          name="name"
          defaultValue={contact?.linkedinLink}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <label className="self-center">Download Resume Link</label>
        <input
          type="text"
          name="name"
          defaultValue={contact?.resumeUrl}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
        />
        <button
          type="submit"
          className="w-fit border rounded-lg border-red-#ff044c px-6 py-1 col-start-1 col-end-3 justify-self-center mb-4"
        >
          Update
        </button>
      </form>
    </div>
  );
}
