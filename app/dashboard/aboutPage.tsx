"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CgSpinner } from "react-icons/cg";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";

interface About {
  id: string;
  description: string;
  imageUpload: {
    imageKEY: string;
    imageURL: string;
  };
  skills: {
    id: string;
    title: string;
    skill: string;
    aboutId: string;
  }[];
  experience: {
    id: string;
    title: string;
    experience: string;
    aboutId: string;
  }[];
  education: {
    id: string;
    title: string;
    education: string;
    aboutId: string;
  }[];
}

export default function AboutPageDashboard({ about }: { about: About }) {
  const router = useRouter();
  const [formState, setFormState] = useState(
    {} as Pick<About, "id" | "description"> & { imageUpload: File }
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: string, id: string) =>
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (field === "imageUpload" && event.target.files) {
        const file = event.target.files[0];
        setFormState((prevFormState) => ({
          ...(prevFormState as Pick<About, "id" | "description"> & {
            imageUpload: File;
          }),
          [field]: file,
          id,
        }));
      } else {
        setFormState((prevFormState) => ({
          ...(prevFormState as Pick<About, "id" | "description"> & {
            imageUpload: File;
          }),
          [field]: event.target.value,
          id,
        }));
      }
    };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const formData = new FormData();
      if (formState?.description) {
        formData.append("description", formState.description);
      }
      if (formState?.imageUpload) {
        if (about.imageUpload?.imageKEY) {
          formData.append("previousImage", about.imageUpload.imageKEY);
        }
        formData.append("imageUpload", formState.imageUpload);
      }
      const response = await fetch(`/api/dashboard/about/${about?.id}`, {
        method: "PATCH",
        body: formData,
      });
      if (response.status !== 200) {
        throw new Error(`${response.status}`);
      }
      setIsLoading(false);
      setFormState(
        {} as Pick<About, "id" | "description"> & { imageUpload: File }
      );
      toast.success("Profile updated successfully");
      router.refresh();
    } catch (error) {
      setIsLoading(false);
      toast.error("Message failed to update the profile");
      console.log(error);
    }
  };

  return (
    <div>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl">
        About Page
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 row-auto gap-4">
        <label>Description</label>
        <textarea
          name="description"
          defaultValue={about?.description}
          onChange={handleChange("description", about?.id)}
          disabled={isLoading}
          className="h-28 p-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500 resize-none"
        ></textarea>
        <label>Change Image</label>
        <input
          type="file"
          name="imageURL"
          accept="image/*"
          onChange={handleChange("imageUpload", about?.id)}
          disabled={isLoading}
          className="disabled:text-slate-500"
        />
        <Link
          href={about?.imageUpload?.imageURL}
          target="_blank"
          className="col-start-2 col-end-3 text-blue-500 underline text-ellipsis overflow-hidden"
        >
          {about?.imageUpload?.imageURL}
        </Link>
        {formState?.id && (
          <button
            type="submit"
            disabled={isLoading}
            className="w-fit border rounded-lg border-red-#ff044c px-6 py-2 col-start-1 col-end-3 justify-self-center flex gap-2"
          >
            {isLoading && <CgSpinner className="w-6 h-6 animate-spin" />}
            {isLoading ? "Updating..." : "Update"}
          </button>
        )}
      </form>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl col-start-1 col-end-3">
        Skills
      </p>
      <Skills skills={about?.skills} />
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl col-start-1 col-end-3">
        Experience
      </p>
      <Experience experience={about?.experience} />
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl col-start-1 col-end-3">
        Education
      </p>
      <Education education={about.education} />
    </div>
  );
}
