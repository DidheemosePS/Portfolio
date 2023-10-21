"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";
import { IoIosSend } from "react-icons/io";

export default function HandleContactPage() {
  const initialFormState = {
    authorName: "",
    email: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange =
    (field: keyof typeof formState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({
        ...formState,
        [field]: event.target.value,
      });
    };

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (response.status === 200) {
        toast.success("Message sent successfully");
      }
      setFormState(initialFormState);
      setIsLoading(false);
    } catch (error) {
      toast.error("Message failed to be sent");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleContactSubmit}
      className="grid grid-cols-1 grid-rows-[2.5rem,2.5rem,8rem,auto] gap-5 pb-5 md:relative md:grid-rows-[2.5rem,2.5rem,8rem] md:self-center md:pb-0"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={formState.authorName}
        onChange={handleChange("authorName")}
        required
        disabled={isLoading}
        className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formState.email}
        onChange={handleChange("email")}
        required
        disabled={isLoading}
        className="px-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200"
      />
      <textarea
        placeholder="Your Message"
        value={formState.message}
        onChange={handleChange("message")}
        required
        disabled={isLoading}
        className="p-2 border border-box-color dark:bg-box-color rounded-md dark:text-white text-box-color placeholder:text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 disabled:text-slate-500 disabled:border-slate-200 resize-none"
      ></textarea>
      <button
        type="submit"
        disabled={isLoading}
        className="w-fit h-fit border rounded-lg flex items-center gap-2 border-red-#ff044c pl-4 pr-6 py-2 justify-self-center md:absolute md:left-0 md:-bottom-16"
      >
        {isLoading && <CgSpinner className="w-6 h-6 animate-spin" />}
        {isLoading ? (
          "Sending..."
        ) : (
          <>
            <IoIosSend className="w-6 h-6" />
            Send
          </>
        )}
      </button>
    </form>
  );
}
