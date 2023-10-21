"use client";

import { useState } from "react";
import { handleEducationSubmit } from "./serverActions";

interface Education {
  id: string;
  title: string;
  education: string;
  aboutId: string | null;
}

export default function Education({ education }: { education: Education[] }) {
  const [formState, setFormState] = useState({
    id: "",
    title: "",
    education: "",
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
      {education?.map((value, index, array) => {
        return (
          <form
            action={() => handleEducationSubmit(formState)}
            className="grid grid-cols-2 row-auto gap-4"
            key={value.id}
          >
            <label>Title</label>
            <input
              type="text"
              name="title"
              defaultValue={value?.title}
              onChange={handleChange("title", value.id)}
              className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
            />
            <label>Education</label>
            <input
              type="text"
              name="education"
              defaultValue={value?.education}
              onChange={handleChange("education", value.id)}
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