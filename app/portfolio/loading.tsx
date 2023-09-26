"use client";

export default function Loading() {
  return (
    <div className="w-full h-fit min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center place-content-start gap-5 py-5">
      <p className="text-2xl font-bold lg:self-start md:text-3xl lg:text-4xl">
        My Work
      </p>
      <div className="w-full grid grid-cols-1 auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="animate-pulse w-full h-96 rounded-lg relative bg-box-color overflow-hidden group/works">
          <div className="w-full h-full"></div>
        </div>
        <div className="animate-pulse w-full h-96 rounded-lg relative bg-box-color overflow-hidden group/works">
          <div className="w-full h-full"></div>
        </div>
        <div className="animate-pulse w-full h-96 rounded-lg relative bg-box-color overflow-hidden group/works">
          <div className="w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}
