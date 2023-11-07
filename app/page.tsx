import Navigation from "./components/navigation/page";
import Home from "./components/home/page";
import Skills from "./components/skills/page";
import Works from "./components/works/page";
import Resume from "./components/resume/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";

export default function Page() {
  return (
    <>
      <Navigation />
      <Home />
      <Skills />
      <Works />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
