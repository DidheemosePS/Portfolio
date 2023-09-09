import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-3rem)] relative overflow-hidden">
      <div className="w-fit h-full flex flex-col justify-center">
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
      <div className="w-full max-w-30 h-full max-h-40 absolute bottom-0 -right-32 -z-50 pt-5 sm:-right-32 lg:right-0 xl:max-w-xl-imageWidth-35rem">
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
