interface Skills {
  id: string;
  title: string;
  skill: string;
  aboutId: string;
}

export default function Skills({ children }: { children: Skills[] }) {
  return (
    <div className="flex flex-col gap-4">
      {children?.map((data) => {
        return (
          <div key={data.id}>
            <p className="text-hibiscus">{data.title}</p>
            <p className="text-gray-300">{data.skill}</p>
          </div>
        );
      })}
    </div>
  );
}
