import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-3rem)] relative overflow-hidden sm:pl-10 lg:pl-14 xl:pl-28 2xl:pl-40">
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
      <div className="w-2sm-imageWidth-20rem h-imageHeight-40rem absolute bottom-0 -right-32 -z-50 sm:right-0 lg:w-lg-imageWidth-30rem xl:w-xl-imageWidth-35rem">
        <Image
          src="./userImage.png"
          alt="Image"
          width={100}
          height={100}
          quality={100}
          loading="lazy"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
}
