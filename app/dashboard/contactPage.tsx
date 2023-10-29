"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CgSpinner } from "react-icons/cg";

interface Contact {
  id: string;
  mail: string;
  phone: string;
  facebookLink: string;
  xLink: string;
  instagramLink: string;
  linkedinLink: string;
  resumeUpload: {
    resumeKEY: string;
    resumeURL: string;
  };
}

export default function ContactPageDashboard({
  contact,
}: {
  contact: Contact;
}) {
  const router = useRouter();
  const [formState, setFormState] = useState(
    {} as Omit<Contact, "resumeUpload"> & {
      resumeUpload: File;
    }
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: string, id: string) =>
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      if (field === "resumeUpload" && event.target.files) {
        const file = event.target.files[0];
        setFormState((prevFormState) => ({
          ...(prevFormState as Omit<Contact, "resumeUpload"> & {
            resumeUpload: File;
          }),
          [field]: file,
          id,
        }));
      } else {
        setFormState((prevFormState) => ({
          ...(prevFormState as Omit<Contact, "resumeUpload"> & {
            resumeUpload: File;
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
      if (formState?.mail) {
        formData.append("mail", formState.mail);
      }
      if (formState?.phone) {
        formData.append("phone", formState.phone);
      }
      if (formState?.facebookLink) {
        formData.append("facebookLink", formState.facebookLink);
      }
      if (formState?.xLink) {
        formData.append("xLink", formState.xLink);
      }
      if (formState?.instagramLink) {
        formData.append("instagramLink", formState.instagramLink);
      }
      if (formState?.linkedinLink) {
        formData.append("linkedinLink", formState.linkedinLink);
      }
      if (formState?.resumeUpload) {
        if (contact.resumeUpload?.resumeKEY) {
          formData.append("previousResume", contact.resumeUpload?.resumeKEY);
        }
        formData.append("resumeUpload", formState.resumeUpload);
      }
      const response = await fetch(`/api/dashboard/contact/${contact?.id}`, {
        method: "PATCH",
        body: formData,
      });
      if (response.status !== 200) {
        throw new Error(`${response.status}`);
      }
      setIsLoading(false);
      setFormState(
        {} as Omit<Contact, "resumeUpload"> & {
          resumeUpload: File;
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
        Contact Page
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 row-auto gap-4">
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
          name="resumeUpload"
          accept="application/pdf"
          onChange={handleChange("resumeUpload", contact?.id)}
          disabled={isLoading}
        />
        <Link
          href={contact?.resumeUpload?.resumeURL}
          target="_blank"
          className={`col-start-2 col-end-3 text-blue-500 underline text-ellipsis overflow-hidden ${
            !formState?.id && "mb-4"
          }`}
        >
          {contact?.resumeUpload?.resumeURL}
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
