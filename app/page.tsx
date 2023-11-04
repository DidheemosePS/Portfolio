import Contact from "./contact/page";
import Home from "./home/page";
import Skills from "./skills/page";
import Resume from "./resume/page";
import Works from "./works/page";

export default async function Page() {
  return (
    <>
      <Home />
      <Skills />
      <Works />
      <Resume />
      <Contact />
    </>
  );
}
