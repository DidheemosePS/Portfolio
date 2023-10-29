"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";

interface Portfolio {
  id: string;
  title: string;
  description: string;
  imageUpload: {
    imageKEY: string;
    imageURL: string;
  };
}

export default function PortfolioPageDashboard({
  portfolio,
}: {
  portfolio: Portfolio[];
}) {
  const router = useRouter();
  const [formState, setFormState] = useState(
    {} as Omit<Portfolio, "imageUpload"> & {
      key: string;
      imageUpload: File;
    }
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: string, id: string, imageKEY?: string) =>
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (formState?.id !== id) {
        setFormState(
          {} as Omit<Portfolio, "imageUpload"> & {
            key: string;
            imageUpload: File;
          }
        );
      }
      if (field === "imageUpload" && event.target.files) {
        const file = event.target.files[0];
        if (imageKEY) {
          setFormState((prevFormState) => ({
            ...(prevFormState as Omit<Portfolio, "imageUpload"> & {
              key: string;
              imageUpload: File;
            }),
            [field]: file,
            id,
            key: imageKEY,
          }));
        } else {
          setFormState((prevFormState) => ({
            ...(prevFormState as Omit<Portfolio, "imageUpload"> & {
              key: string;
              imageUpload: File;
            }),
            [field]: file,
            id,
          }));
        }
      } else {
        setFormState((prevFormState) => ({
          ...(prevFormState as Omit<Portfolio, "imageUpload"> & {
            key: string;
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
      if (formState?.title) {
        formData.append("title", formState.title);
      }
      if (formState?.description) {
        formData.append("description", formState.description);
      }
      if (formState?.imageUpload) {
        if (formState?.key) {
          formData.append("previousImage", formState.key);
        }
        formData.append("imageUpload", formState.imageUpload);
      }
      const response = await fetch(
        `/api/dashboard/portfolio/${formState?.id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      if (response.status !== 200) {
        throw new Error(`${response.status}`);
      }
      setIsLoading(false);
      setFormState(
        {} as Omit<Portfolio, "imageUpload"> & {
          key: string;
          imageUpload: File;
        }
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
        Portfolio Page
      </p>
      {portfolio?.map((value, index, array) => {
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
            <label>Description</label>
            <textarea
              name="description"
              defaultValue={value?.description}
              onChange={handleChange("description", value?.id)}
              disabled={isLoading}
              className="h-28 p-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500 resize-none"
            ></textarea>
            <label>Change Image</label>
            <input
              type="file"
              name="imageUpload"
              accept="image/*"
              onChange={handleChange(
                "imageUpload",
                value?.id,
                value?.imageUpload?.imageKEY
              )}
              disabled={isLoading}
              className="disabled:text-slate-500"
            />
            <Link
              href={value?.imageUpload?.imageURL}
              target="_blank"
              className="col-start-2 col-end-3 text-blue-500 underline text-ellipsis overflow-hidden"
            >
              {value?.imageUpload?.imageURL}
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
    </div>
  );
}
