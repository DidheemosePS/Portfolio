"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";
import AddPortfolio from "./addPortfolio";
import { handlePortfolioSubmit } from "./serverAction";

interface Portfolio {
  id: string;
  title: string;
  description: string;
  link: string;
  image: {
    imageKEY: string;
    imageURL: string;
  };
}

export default function PortfolioPageDashboard({
  portfolio,
}: {
  portfolio: Portfolio[];
}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState(
    {} as Omit<Portfolio, "image"> & {
      key: string;
      image: File;
    }
  );
  const [isLoading, setIsLoading] = useState(false);
  const [addPortfolio, setAddPortfolio] = useState(false);

  const handleChange =
    (field: string, id: string, imageKEY?: string) =>
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (formState?.id !== id) {
        setFormState(
          {} as Omit<Portfolio, "image"> & {
            key: string;
            image: File;
          }
        );
      }
      if (field === "image" && event.target.files) {
        const file = event.target.files[0];
        if (imageKEY) {
          setFormState((prevFormState) => ({
            ...(prevFormState as Omit<Portfolio, "image"> & {
              key: string;
              image: File;
            }),
            [field]: file,
            id,
            key: imageKEY,
          }));
        } else {
          setFormState((prevFormState) => ({
            ...(prevFormState as Omit<Portfolio, "image"> & {
              key: string;
              image: File;
            }),
            [field]: file,
            id,
          }));
        }
      } else {
        setFormState((prevFormState) => ({
          ...(prevFormState as Omit<Portfolio, "image"> & {
            key: string;
            image: File;
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
      const newFormState: Partial<Omit<Portfolio, "id">> = {};
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
      const serverAction = await handlePortfolioSubmit(
        formState.id,
        formState.key,
        newFormState
      );
      if (serverAction.status !== 200) {
        throw new Error(`${serverAction.status}`);
      }
      setIsLoading(false);
      setFormState(
        {} as Omit<Portfolio, "image"> & {
          key: string;
          image: File;
        }
      );
      formRef.current!.reset();
      toast.success("Profile updated successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error("Message failed to update the profile");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl">
        Portfolio Page
      </p>
      <button
        onClick={() => setAddPortfolio(!addPortfolio)}
        className="self-end w-fit border rounded-lg border-red-#ff044c px-3 py-1 mb-4 "
      >
        {addPortfolio ? "Show Portfolio" : "Add Portfolio"}
      </button>
      {!addPortfolio &&
        portfolio?.map((value, index, array) => {
          return (
            <form
              onSubmit={handleSubmit}
              ref={formRef as React.RefObject<HTMLFormElement>}
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
              <label>Description</label>
              <textarea
                name="description"
                defaultValue={value?.description}
                onChange={handleChange("description", value?.id)}
                disabled={isLoading}
                className="h-28 p-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500 resize-none"
              ></textarea>
              <label>Link</label>
              <input
                type="text"
                name="link"
                defaultValue={value?.link}
                onChange={handleChange("link", value?.id)}
                disabled={isLoading}
                className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
              />
              <label>Change Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange(
                  "image",
                  value?.id,
                  value?.image?.imageKEY
                )}
                disabled={isLoading}
                className="disabled:text-slate-500"
              />
              <Link
                href={value?.image?.imageURL}
                target="_blank"
                className="col-start-2 col-end-3 text-blue-500 underline text-ellipsis overflow-hidden"
              >
                {value?.image?.imageURL}
              </Link>
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
      {addPortfolio && <AddPortfolio />}
    </div>
  );
}
