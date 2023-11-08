import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="m-auto min-w-full h-[5rem] flex justify-between items-center px-8 sticky top-0 z-20 bg-white shadow-md">
      <Link data-aos="fade-down" href="#home" className="font-bold text-3xl">
        Didheemose.
      </Link>
      <div
        data-aos="fade-down"
        className="hidden lg:font-bold lg:text-xl lg:flex lg:gap-12"
      >
        <Link href="#home">Home</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#works">Works</Link>
        <Link href="#resume">Resume</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
