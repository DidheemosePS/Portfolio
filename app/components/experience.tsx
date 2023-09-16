"use client";

interface Experience {
  id: string;
  title: string;
  experience: string;
  aboutId: string;
}

export default function Experience({ children }: { children: Experience[] }) {
  return (
    <div className="flex flex-col gap-4">
      {children?.map((data) => {
        return (
          <div key={data.id}>
            <p className="text-hibiscus">{data.title}</p>
            <p className="text-gray-300">{data.experience}</p>
          </div>
        );
      })}
    </div>
  );
}
