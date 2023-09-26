"use client";

export default function Loading() {
  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center gap-5 py-5">
      <p className="text-2xl font-bold lg:self-start md:text-3xl lg:text-4xl">
        My Services
      </p>
      <div className="animate-pulse w-full flex flex-wrap gap-4 text-white">
        <div className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color">
          <p className="text-2xl font-bold"></p>
          <p className="text-sm"></p>
          <button className="w-fit text-sm"></button>
        </div>
        <div className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color">
          <p className="text-2xl font-bold"></p>
          <p className="text-sm"></p>
          <button className="w-fit text-sm"></button>
        </div>
        <div className="w-80 h-56 flex flex-col justify-center grow gap-4 rounded-lg p-5 bg-box-color">
          <p className="text-2xl font-bold"></p>
          <p className="text-sm"></p>
          <button className="w-fit text-sm"></button>
        </div>
      </div>
      <button className="w-fit border rounded-lg border-red-#ff044c px-6 py-2">
        See More
      </button>
    </div>
  );
}
