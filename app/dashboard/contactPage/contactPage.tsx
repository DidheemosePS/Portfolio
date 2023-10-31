"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { handleContactSubmit } from "./serverAction";

interface Contact {
  id: string;
  mail: string;
  phone: string;
  facebookLink: string;
  xLink: string;
  instagramLink: string;
  linkedinLink: string;
  resume: {
    resumeKEY: string;
    resumeURL: string;
  };
}

export default function ContactPageDashboard({
  contact,
}: {
  contact: Contact;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState(
    {} as Omit<Contact, "resume"> & {
      resume: File;
    }
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: string, id: string) =>
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (field === "resume" && event.target.files) {
        const file = event.target.files[0];
        setFormState((prevFormState) => ({
          ...(prevFormState as Omit<Contact, "resume"> & {
            resume: File;
          }),
          [field]: file,
          id,
        }));
      } else {
        setFormState((prevFormState) => ({
          ...(prevFormState as Omit<Contact, "resume"> & {
            resume: File;
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
      const newFormState: Partial<Omit<Contact, "id">> = {};
      const formData = new FormData();
      if (formState?.mail) {
        newFormState.mail = formState.mail;
      }
      if (formState?.phone) {
        newFormState.phone = formState.phone;
      }
      if (formState?.facebookLink) {
        newFormState.facebookLink = formState.facebookLink;
      }
      if (formState?.xLink) {
        newFormState.xLink = formState.xLink;
      }
      if (formState?.instagramLink) {
        newFormState.instagramLink = formState.instagramLink;
      }
      if (formState?.linkedinLink) {
        newFormState.linkedinLink = formState.linkedinLink;
      }
      if (formState?.resume) {
        formData.append("upload", formState.resume);
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
          newFormState.resume = { resumeKEY: "", resumeURL: "" };
          newFormState.resume.resumeKEY = data.key;
          newFormState.resume.resumeURL = data.url;
        }
      }
      const serverAction = await handleContactSubmit(
        formState.id,
        contact.resume.resumeKEY,
        newFormState
      );
      if (serverAction.status !== 200) {
        throw new Error(`${serverAction.status}`);
      }
      setIsLoading(false);
      setFormState(
        {} as Omit<Contact, "resume"> & {
          resume: File;
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
    <div>
      <p className="text-center text-2xl font-bold my-4 bg-box-color md:text-3xl lg:text-4xl">
        Contact Page
      </p>
      <form
        onSubmit={handleSubmit}
        ref={formRef as React.RefObject<HTMLFormElement>}
        className="grid grid-cols-2 row-auto gap-4"
      >
        <label>Contact Email</label>
        <input
          type="text"
          name="mail"
          defaultValue={contact?.mail}
          onChange={handleChange("mail", contact?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Phone No</label>
        <input
          type="text"
          name="phone"
          defaultValue={contact?.phone}
          onChange={handleChange("phone", contact?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Facebook</label>
        <input
          type="text"
          name="facebookLink"
          defaultValue={contact?.facebookLink}
          onChange={handleChange("facebookLink", contact?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Twitter</label>
        <input
          type="text"
          name="xLink"
          defaultValue={contact?.xLink}
          onChange={handleChange("xLink", contact?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Instagram</label>
        <input
          type="text"
          name="instagramLink"
          defaultValue={contact?.instagramLink}
          onChange={handleChange("instagramLink", contact?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Linked In</label>
        <input
          type="text"
          name="linkedinLink"
          defaultValue={contact?.linkedinLink}
          onChange={handleChange("linkedinLink", contact?.id)}
          disabled={isLoading}
          className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-500"
        />
        <label>Change Resume</label>
        <input
          type="file"
          name="resume"
          accept="application/pdf"
          onChange={handleChange("resume", contact?.id)}
          disabled={isLoading}
        />
        <Link
          href={contact?.resume?.resumeURL}
          target="_blank"
          className={`col-start-2 col-end-3 text-blue-500 underline text-ellipsis overflow-hidden ${
            !formState?.id && "mb-4"
          }`}
        >
          {contact?.resume?.resumeURL}
        </Link>
        {formState?.id && (
          <button
            type="submit"
            disabled={isLoading}
            className="w-fit border rounded-lg border-red-#ff044c px-6 py-2 mb-4 col-start-1 col-end-3 justify-self-center flex gap-2"
          >
            {isLoading && <CgSpinner className="w-6 h-6 animate-spin" />}
            {isLoading ? "Updating..." : "Update"}
          </button>
        )}
      </form>
    </div>
  );
}
