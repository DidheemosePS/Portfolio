"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";
import { signOut } from "next-auth/react";
import { handleHomeSubmit } from "./serverAction";

interface Home {
  id: string;
  role: string;
  name: string;
  country: string;
  image: {
    imageKEY: string;
    imageURL: string;
  };
}

export default function HomePageDashboard({ home }: { home: Home }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const [formState, setFormState] = useState(
    {} as Omit<Home, "image"> & { image: File }
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: string, id: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (field === "image" && event.target.files) {
        const file = event.target.files[0];
        setFormState((prevFormState) => ({
          ...(prevFormState as Omit<Home, "image"> & {
            image: File;
          }),
          [field]: file,
          id,
        }));
      } else {
        setFormState((prevFormState) => ({
          ...(prevFormState as Omit<Home, "image"> & {
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
      const newFormState: Partial<Omit<Home, "id">> = {};
      const formData = new FormData();
      if (formState?.role) {
        newFormState.role = formState.role;
      }
      if (formState?.name) {
        newFormState.name = formState.name;
      }
      if (formState?.country) {
        newFormState.country = formState.country;
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
      const serverAction = await handleHomeSubmit(
        formState.id,
        home.image.imageKEY,
        newFormState
      );
      if (serverAction.status !== 200) {
        throw new Error(`${serverAction.status}`);
      }
      setIsLoading(false);
      setFormState({} as Omit<Home, "image"> & { image: File });
      formRef.current!.reset();
      toast.success("Profile updated successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error("Message failed to update the profile");
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    const response = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(response.url);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleSignOut}
        className="self-end w-fit border rounded-lg border-red-#ff044c px-3 py-1 mt-4 "
      >
        Logout
      </button>
      <p className="text-center text-2xl font-bold my-4 bg-box-color">
        Home Page
      </p>
      <form
        onSubmit={handleSubmit}
        ref={formRef as React.RefObject<HTMLFormElement>}
        className="grid grid-cols-2 row-auto gap-4"
      >
        <label>Job Role</label>
        <input
          type="text"
          name="role"
          defaultValue={home?.role}
          onChange={handleChange("role", home?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          defaultValue={home?.name}
          onChange={handleChange("name", home?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Country</label>
        <input
          type="text"
          name="country"
          defaultValue={home?.country}
          onChange={handleChange("country", home?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Change Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange("image", home?.id)}
          disabled={isLoading}
          className="disabled:text-slate-500"
        />
        <Link
          href={home?.image?.imageURL}
          target="_blank"
          className="col-start-2 col-end-3 text-blue-500 underline text-ellipsis overflow-hidden"
        >
          {home?.image?.imageURL}
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
    </div>
  );
}
