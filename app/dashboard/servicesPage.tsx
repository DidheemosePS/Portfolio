"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";
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
  const [formState, setFormState] = useState({} as Services);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: string, id: string) =>
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (formState?.id !== id) {
        setFormState({} as Services);
      }
      setFormState((prevFormState) => ({
        ...prevFormState,
        [field]: event.target.value,
        id,
      }));
    };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const newFormState: Partial<Services> = {};
      if (formState.title) {
        newFormState.title = formState.title;
      }
      if (formState.description) {
        newFormState.description = formState.description;
      }
      const response = await handleServicesSubmit(formState.id, newFormState);
      if (response?.status !== 200) {
        throw new Error(`${response?.status}`);
      }
      setIsLoading(false);
      setFormState({} as Services);
      toast.success("Profile updated successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error("Message failed to update the profile");
      console.log(error);
    }
  };

  return (
    <div>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl">
        Services Page
      </p>
      {services?.map((value, index, array) => {
        return (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 row-auto gap-4"
            key={value.id}
          >
            <label>Title</label>
            <input
              type="text"
              name="role"
              defaultValue={value?.title}
              onChange={handleChange("title", value?.id)}
              disabled={isLoading}
              className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
            />
            <label>Description</label>
            <textarea
              name="description"
              defaultValue={value?.description}
              onChange={handleChange("description", value?.id)}
              disabled={isLoading}
              className="h-28 p-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500 resize-none"
            ></textarea>
            {formState?.id === value?.id && (
              <button
                type="submit"
                disabled={isLoading}
                className="w-fit border rounded-lg border-red-#ff044c px-6 py-2 col-start-1 col-end-3 justify-self-center flex gap-2"
              >
                {isLoading && <CgSpinner className="w-6 h-6 animate-spin" />}
                {isLoading ? "Updating..." : "Update"}
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
