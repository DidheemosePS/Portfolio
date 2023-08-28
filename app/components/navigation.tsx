import Image from "next/image";
import NavigationButtons from "./navigationButtons";

export default function Navigation() {
  return (
    <div className="w-full h-12 flex justify-between items-end sm:pl-10 lg:pl-14 pr-14 xl:pl-28 xl:pr-28 2xl:pl-40 2xl:pr-40">
      <p className="first-letter:text-red-#ff044c text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
        Didheemose.
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff044c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lg:hidden"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <NavigationButtons />
    </div>
  );
}
