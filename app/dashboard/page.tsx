import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";
import { revalidatePath } from "next/cache";

export default async function Dashboard() {
  const getDashboardData = async () => {
    const prisma = new PrismaClient();
    const [home, about, services, portfolio, contact] =
      await prisma.$transaction([
        prisma.home.findMany(),
        prisma.about.findMany(),
        prisma.services.findMany(),
        prisma.portfolio.findMany(),
        prisma.contact.findMany(),
      ]);
    return { home, about, services, portfolio, contact };
  };

  const { home, about, services, portfolio, contact } =
    await getDashboardData();

  const handleFormUpdate = async (formData: FormData) => {
    "use server";

    const prisma = new PrismaClient();
    const updateHomeData = await prisma.home.update({
      where: {
        id: home[0]?.id,
      },
      data: {
        name: formData.get("name")?.toString(),
      },
    });
    revalidatePath("/");
  };

  return (
    <div>
      <div className="bg-slate-500 text-black">
        <p>Home Page</p>
        <form action={handleFormUpdate} className="flex flex-col">
          <label>Job Role</label>
          <input type="text" name="role" defaultValue={home[0]?.role} />
          <label>Name</label>
          <input type="text" name="name" defaultValue={home[0]?.name} />
          <label>Country</label>
          <input type="text" name="country" defaultValue={home[0]?.country} />
          <button type="submit">Update</button>
        </form>
      </div>
      <div>About Page</div>
      <div>Services Page</div>
      <div>Portfolio Page</div>
      <div>Contact Page</div>
    </div>
  );
}
