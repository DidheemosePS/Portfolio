import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-evenly items-center">
      <div className="flex flex-col gap-3">
        <p className="text-lg">Frontend Developer</p>
        <p className="text-3xl font-bold">Hi, I'm Didheemose</p>
        <p className="text-3xl font-bold">From India</p>
      </div>
      <div className="w-1/2 h-full flex items-center bg-white">
        <Image
          src="/didhee.jpeg"
          alt="Didheemose"
          width="100"
          height="100"
          className=""
        />
      </div>
    </div>
  );
}
