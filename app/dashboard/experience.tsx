"use client";

import { useState } from "react";
import { handleExperienceSubmit } from "./serverActions";

interface Experience {
  id: string;
  title: string;
  experience: string;
  aboutId: string | null;
}

export default function Experience({
  experience,
}: {
  experience: Experience[];
}) {
  const [formState, setFormState] = useState({
    id: "",
    title: "",
    experience: "",
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
    <>
      {experience?.map((value, index, array) => {
        return (
          <form
            action={() => handleExperienceSubmit(formState)}
            className="grid grid-cols-2 row-auto gap-4"
            key={value.id}
          >
            <label>Title</label>
            <input
              type="text"
              name="title"
              defaultValue={value?.title}
              onChange={handleChange("title", value.id)}
              required
              className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
            />
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              defaultValue={value?.experience}
              onChange={handleChange("experience", value.id)}
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
    </>
  );
}
