import { PrismaClient } from "@prisma/client";
import HomePageDashBoard from "./homePage";
import AboutPageDashboard from "./aboutPage";
import ServicesPageDashboard from "./servicesPage";
import PortfolioPageDashboard from "./portfolio";
import ContactPageDashboard from "./contactPage";

export default async function Dashboard() {
  const getDashboardData = async () => {
    const prisma = new PrismaClient();
    const services = await prisma.services.findMany();
    return services;
  };

  const services = await getDashboardData();

  return (
    <>
      <HomePageDashBoard />
      <AboutPageDashboard />
      <ServicesPageDashboard services={services} />
      <PortfolioPageDashboard />
      <ContactPageDashboard />
    </>
  );
}
