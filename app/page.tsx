import Contact from "./contact/page";
import Home from "./home/page";
import Skills from "./skills/page";
import Resume from "./resume/page";
import Works from "./works/page";

export default function Page() {
  return (
    <main className="m-auto min-w-[300px] min-h-[100dvh]">
      <Home />
      <Skills />
      <Works />
      <Resume />
      <Contact />
    </main>
  );
}
