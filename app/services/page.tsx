import { Metadata } from "next";
import { Services_Portfolio_Buttons } from "@/components/commonButtons";

export const metadata: Metadata = {
  title: "Services",
  description: "Services",
};

export default function Services() {
  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center gap-5 pt-5 pb-5">
      <p className="text-2xl font-bold lg:self-start md:text-3xl lg:text-4xl">
        My Services
      </p>
      <div className="w-full flex flex-wrap gap-4">
        <div className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color transition duration-500 ease-in-out hover:bg-red-#ff044c ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="17 0 24 24"
            fill="white"
          >
            <path d="M16.46 5.79l.3.01a5.6 5.6 0 0 1 4.38 2.38c-.1.07-2.62 1.53-2.59 4.57.04 3.63 3.19 4.84 3.22 4.86-.02.08-.5 1.72-1.66 3.41-1 1.46-2.04 2.92-3.67 2.95-1.6.03-2.13-.96-3.96-.96-1.84 0-2.42.93-3.94.99-1.57.06-2.78-1.58-3.78-3.04-2.07-2.98-3.64-8.42-1.53-12.1a5.87 5.87 0 0 1 4.97-3c1.55-.03 3.01 1.04 3.96 1.04.95 0 2.73-1.29 4.6-1.1zM16.78 0a5.3 5.3 0 0 1-1.25 3.83 4.46 4.46 0 0 1-3.56 1.7 5.03 5.03 0 0 1 1.27-3.71A5.38 5.38 0 0 1 16.78 0z" />
          </svg>
          <p className="text-2xl font-bold">Web Design</p>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ad
            temporibus in voluptatem eos perferendis.
          </p>
          <button className="w-fit text-sm">Learn More</button>
        </div>
        <div className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color transition duration-500 ease-in-out hover:bg-red-#ff044c ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="17 0 24 24"
            fill="white"
          >
            <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
          </svg>
          <p className="text-2xl font-bold">Backend Development</p>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ad
            temporibus in voluptatem eos perferendis.
          </p>
          <button className="w-fit text-sm">Learn More</button>
        </div>
        <div className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color transition duration-500 ease-in-out hover:bg-red-#ff044c">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="15 0 24 24"
            fill="white"
          >
            <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" />
          </svg>
          <p className="text-2xl font-bold">Mobile Design</p>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ad
            temporibus in voluptatem eos perferendis.
          </p>
          <button className="w-fit text-sm">Learn More</button>
        </div>
      </div>
      <Services_Portfolio_Buttons />
    </div>
  );
}
