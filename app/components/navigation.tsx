import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-16 flex justify-between items-end pl-32 pr-32">
      <p className="first-letter:text-red-#ff044c text-3xl font-bold">
        Didheemose.
      </p>
      <div className="flex gap-12">
        <Link
          href="/"
          className="border-b-2 border-transparent transition delay-100 ease-in-out hover:border-b-2 hover:border-red-#ff044c hover:transition-all"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="border-b-2 border-transparent transition delay-100 ease-in-out hover:border-b-2 hover:border-red-#ff044c"
        >
          About
        </Link>
        <Link
          href="/services"
          className="border-b-2 border-transparent transition delay-100 ease-in-out hover:border-b-2 hover:border-red-#ff044c"
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          className="border-b-2 border-transparent transition delay-100 ease-in-out hover:border-b-2 hover:border-red-#ff044c"
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className="border-b-2 border-transparent transition delay-100 ease-in-out hover:border-b-2 hover:border-red-#ff044c"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
