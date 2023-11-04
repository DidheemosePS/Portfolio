import About from "./about/page";
import Contact from "./contact/page";
import Home from "./home/page";
import Portfolio from "./portfolio/page";
import Services from "./services/page";

export default async function Page() {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}
