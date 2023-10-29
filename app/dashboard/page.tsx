import { PrismaClient } from "@prisma/client";
import HomePageDashBoard from "./homePage";
import AboutPageDashboard from "./aboutPage";
import ServicesPageDashboard from "./servicesPage";
import PortfolioPageDashboard from "./portfolio";
import ContactPageDashboard from "./contactPage";

interface About {
  id: string;
  description: string;
  imageUpload: {
    imageKEY: string;
    imageURL: string;
  };
  skills: {
    id: string;
    title: string;
    skill: string;
    aboutId: string;
  }[];
  experience: {
    id: string;
    title: string;
    experience: string;
    aboutId: string;
  }[];
  education: {
    id: string;
    title: string;
    education: string;
    aboutId: string;
  }[];
}

export default async function Dashboard() {
  try {
    const prisma = new PrismaClient();
    const [home, about, services, portfolio, contact] =
      await prisma.$transaction([
        prisma.home.findMany(),
        prisma.about.findMany({
          include: {
            skills: true,
            education: true,
            experience: true,
          },
        }),
        prisma.services.findMany(),
        prisma.portfolio.findMany(),
        prisma.contact.findMany(),
      ]);

    if (!home || !about || !services || !portfolio || !contact) {
      return (
        <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex justify-center items-center">
          Error: Failed to fetch the data
        </div>
      );
    }

    return (
      <>
        <HomePageDashBoard home={home[0]} />
        <AboutPageDashboard about={about[0] as About} />
        <ServicesPageDashboard services={services} />
        <PortfolioPageDashboard portfolio={portfolio} />
        <ContactPageDashboard contact={contact[0]} />
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
