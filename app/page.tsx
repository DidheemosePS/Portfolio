import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] relative overflow-hidden">
      <div className="w-fit h-full flex flex-col justify-center absolute left-0 z-10">
        <p className="text-xl font-medium lg:text-4xl">Frontend Developer</p>
        <div>
          <p className="text-4xl font-bold md:inline lg:text-5xl">Hi, I'm</p>
          <p className="text-4xl font-bold text-red-#ff044c md:inline lg:text-5xl">
            {" "}
            Didheemose
          </p>
        </div>
        <p className="text-4xl font-bold lg:text-5xl">From India</p>
      </div>
      <div className="w-full h-[calc(100vh-3rem)] absolute -right-32 -z-10 pt-5 sm:w-2/4 sm:right-0">
        <Image
          src="./userImage.png"
          alt="Image"
          width={100}
          height={100}
          quality={100}
          // loading="lazy"
          priority
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
