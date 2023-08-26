import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full flex justify-evenly items-center pt-5">
      <p className="first-letter:text-red-500 text-3xl font-bold">
        Didheemose.
      </p>
      <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
