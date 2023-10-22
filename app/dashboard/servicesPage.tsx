"use client";

import { useState } from "react";
import { handleServicesSubmit } from "./serverActions";

interface Services {
  id: string;
  title: string;
  description: string;
}

export default function ServicesPageDashboard({
  services,
}: {
  services: Services[];
}) {
  const [formState, setFormState] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange =
    (field: keyof typeof formState, id: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({
        ...formState,
        [field]: event.target.value,
        id,
      });
    };

  return (
    <div>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl">
        Services Page
      </p>
      {services?.map((value, index, array) => {
        return (
          <form
            action={() => handleServicesSubmit(formState)}
            className="grid grid-cols-2 row-auto gap-4"
            key={value.id}
          >
            <label className="self-center">Title</label>
            <input
              type="text"
              name="role"
              defaultValue={value?.title}
              onChange={handleChange("title", value.id)}
              required
              className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
            />
            <label className="self-center">Description</label>
            <input
              type="text"
              name="name"
              defaultValue={value?.description}
              onChange={handleChange("description", value.id)}
              required
              className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
            />
            {formState.id === value?.id && (
              <button
                type="submit"
                className="w-fit border rounded-lg border-red-#ff044c px-6 py-1 col-start-1 col-end-3 justify-self-center"
              >
                Update
              </button>
            )}
            {index !== array.length - 1 && (
              <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-box-color col-start-1 col-end-3"></hr>
            )}
          </form>
        );
      })}
    </div>
  );
}
