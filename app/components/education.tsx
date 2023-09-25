"use client";

interface Education {
  id: string;
  title: string;
  education: string;
  aboutId: string;
}

export default function Education({ education }: { education: Education[] }) {
  return (
    <div className="flex flex-col gap-4">
      {education?.map((data) => {
        return (
          <div key={data.id}>
            <p className="text-hibiscus">{data.title}</p>
            <p className="text-gray-300">{data.education}</p>
          </div>
        );
      })}
    </div>
  );
}
