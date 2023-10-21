import { HandleSignOut } from "@/components/buttons";
import HomePageDashBoard from "./homePage";
import AboutPageDashboard from "./aboutPage";
import ServicesPageDashboard from "./servicesPage";
import PortfolioPageDashboard from "./portfolio";
import ContactPageDashboard from "./contactPage";

export default async function Dashboard() {
  return (
    <>
      {/* <HomePageDashBoard /> */}
      {/* <AboutPageDashboard /> */}
      <ServicesPageDashboard />
      {/* <PortfolioPageDashboard />
      <ContactPageDashboard /> */}
    </>
  );
}
