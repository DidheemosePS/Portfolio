import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex justify-between items-center pl-32">
      <div className="w-2/4 flex flex-col gap-7">
        <p className="text-4xl font-medium">Frontend Developer</p>
        <div className="text-6xl font-bold">
          Hi, I'm
          <p className="inline text-6xl font-bold text-red-#ff044c">
            {" "}
            Didheemose
          </p>
        </div>
        <p className="text-6xl font-bold">From India</p>
      </div>
      <img
        src="./userImage.png"
        alt="Image"
        className="w-2/4 h-full self-end pt-9"
      />
    </div>
  );
}
