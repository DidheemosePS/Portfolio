import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";

export default function CircleText() {
  return (
    <div className="w-[5rem] h-[5rem] absolute right-[1rem] bottom-[0rem] rounded-full overflow-hidden sm:w-[7rem] sm:h-[7rem] sm:right-[3rem] sm:bottom-[1.5rem] md:right-[5rem] md:bottom-[2rem] lg:w-[8rem] lg:h-[8rem] lg:right-[2rem] lg:bottom-0">
      <Image
        src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
        alt="Image"
        width={100}
        height={100}
        quality={100}
        priority={true}
        style={{
          animationName: "spin",
          animationDuration: "12s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
        className="w-full h-full object-cover"
      />
      <BsPlayFill
        size={25}
        className="absolute right-[50%] top-[50%] transform translate-x-2/4 -translate-y-2/4"
      />
    </div>
  );
}
