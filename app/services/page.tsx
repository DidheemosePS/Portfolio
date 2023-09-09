import { Metadata } from "next";
import { Services_Portfolio_Buttons } from "@/components/commonButtons";
import { BsApple, BsTwitter, BsWhatsapp } from "react-icons/bs";
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
          <BsApple />
          <p className="text-2xl font-bold">Web Design</p>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ad
            temporibus in voluptatem eos perferendis.
          </p>
          <button className="w-fit text-sm">Learn More</button>
        </div>
        <div className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color transition duration-500 ease-in-out hover:bg-red-#ff044c ">
          <BsTwitter />
          <p className="text-2xl font-bold">Backend Development</p>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ad
            temporibus in voluptatem eos perferendis.
          </p>
          <button className="w-fit text-sm">Learn More</button>
        </div>
        <div className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color transition duration-500 ease-in-out hover:bg-red-#ff044c">
          <BsWhatsapp />
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
