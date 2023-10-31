"use client";

import { useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { handleAddExperienceSubmit } from "./serverAction";

interface InitialState {
  title: string;
  experience: string;
}

export default function AddExperience({ aboutId }: { aboutId: string }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState({} as InitialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prevFormState) => ({
        ...prevFormState,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await handleAddExperienceSubmit(aboutId, formState);
      if (response?.status !== 200) {
        throw new Error(`${response?.status}`);
      }
      setIsLoading(false);
      setFormState({} as InitialState);
      formRef.current!.reset();
      toast.success("Profile updated successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error("Message failed to update the profile");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef as React.RefObject<HTMLFormElement>}
      className="grid grid-cols-2 row-auto gap-4"
    >
      <label>Title</label>
      <input
        type="text"
        name="title"
        onChange={handleChange("title")}
        disabled={isLoading}
        required
        className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
      />
      <label>Experience</label>
      <input
        type="text"
        name="experience"
        onChange={handleChange("experience")}
        disabled={isLoading}
        required
        className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
      />
      {(formState?.title || formState?.experience) && (
        <button
          type="submit"
          disabled={isLoading}
          className="w-fit border rounded-lg border-red-#ff044c px-6 py-2 col-start-1 col-end-3 justify-self-center flex gap-2"
        >
          {isLoading && <CgSpinner className="w-6 h-6 animate-spin" />}
          {isLoading ? "Adding..." : "Add"}
        </button>
      )}
    </form>
  );
}
