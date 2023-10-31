"use client";

import { useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { handleAddPortfolioSubmit } from "./serverAction";

interface InitialState {
  title: string;
  description: string;
  link: string;
  image: File;
}

export default function AddPortfolio() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState({} as InitialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: string) =>
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (field === "imageUpload" && event.target.files) {
        const file = event.target.files[0];
        setFormState((prevFormState) => ({
          ...(prevFormState as InitialState),
          image: file,
        }));
      } else {
        setFormState((prevFormState) => ({
          ...prevFormState,
          [field]: event.target.value,
        }));
      }
    };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const newFormState: Omit<InitialState, "image"> & {
        image: { imageKEY: string; imageURL: string };
      } = {} as Omit<InitialState, "image"> & {
        image: { imageKEY: string; imageURL: string };
      };
      const formData = new FormData();
      if (formState?.title) {
        newFormState.title = formState.title;
      }
      if (formState?.description) {
        newFormState.description = formState.description;
      }
      if (formState?.link) {
        newFormState.link = formState.link;
      }
      if (formState?.image) {
        formData.append("upload", formState.image);
        const response = await fetch("/api/uploadthing", {
          method: "POST",
          body: formData,
        });
        if (response.status !== 200) {
          throw new Error(`${response.status}`);
        }
        const { data }: { data: { key: string; url: string } } =
          await response.json();
        if (data) {
          newFormState.image = { imageKEY: "", imageURL: "" };
          newFormState.image.imageKEY = data.key;
          newFormState.image.imageURL = data.url;
        }
      }
      const serverAction = await handleAddPortfolioSubmit(newFormState);
      if (serverAction.status !== 200) {
        throw new Error(`${serverAction.status}`);
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
      <label>Description</label>
      <textarea
        name="description"
        onChange={handleChange("description")}
        disabled={isLoading}
        required
        className="h-28 p-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500 resize-none"
      ></textarea>
      <label>Link</label>
      <input
        type="text"
        name="link"
        onChange={handleChange("link")}
        disabled={isLoading}
        required
        className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
      />
      <label>Image</label>
      <input
        type="file"
        name="imageUpload"
        accept="image/*"
        onChange={handleChange("imageUpload")}
        disabled={isLoading}
        required
        className="disabled:text-slate-500"
      />
      {(formState?.title ||
        formState?.description ||
        formState?.link ||
        formState?.image) && (
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
