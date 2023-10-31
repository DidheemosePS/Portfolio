"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";
import AddSkill from "./addSkill";
import { handleSkillsSubmit } from "./serverAction";

interface Skills {
  id: string;
  title: string;
  skill: string;
  aboutId: string;
}

export default function Skills({
  aboutId,
  skills,
}: {
  aboutId: string;
  skills: Skills[];
}) {
  const [formState, setFormState] = useState({} as Omit<Skills, "aboutId">);
  const [isLoading, setIsLoading] = useState(false);
  const [addSkill, setAddSkill] = useState(false);

  const handleChange =
    (field: string, id: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (formState?.id !== id) {
        setFormState({} as Omit<Skills, "aboutId">);
      }
      setFormState((prevFormState) => ({
        ...(prevFormState as Omit<Skills, "aboutId">),
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
      const newFormState: Partial<Pick<Skills, "title" | "skill">> = {};
      if (formState.title) {
        newFormState.title = formState.title;
      }
      if (formState.skill) {
        newFormState.skill = formState.skill;
      }
      const response = await handleSkillsSubmit(formState.id, newFormState);
      if (response?.status !== 200) {
        throw new Error(`${response?.status}`);
      }
      setIsLoading(false);
      setFormState({} as Omit<Skills, "aboutId">);
      toast.success("Profile updated successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error("Message failed to update the profile");
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setAddSkill(!addSkill)}
        className="self-end w-fit border rounded-lg border-red-#ff044c px-3 py-1 mb-4 "
      >
        {addSkill ? "Show Skills" : "Add Skill"}
      </button>
      {!addSkill &&
        skills?.map((value, index, array) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 row-auto gap-4"
              key={value.id}
            >
              <label>Title</label>
              <input
                type="text"
                name="title"
                defaultValue={value?.title}
                onChange={handleChange("title", value?.id)}
                disabled={isLoading}
                className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
              />
              <label>Skill</label>
              <input
                type="text"
                name="skill"
                defaultValue={value?.skill}
                onChange={handleChange("skill", value?.id)}
                disabled={isLoading}
                className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
              />
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
      {addSkill && <AddSkill aboutId={aboutId} />}
    </>
  );
}
