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
    (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      setFormState({
        ...formState,
        [field]: event.target.value,
      });
    };

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    toast.success("Currently this feature is not available");
  };

  return (
    <form
      onSubmit={handleContactSubmit}
      className="grid grid-cols-1 grid-rows-[2.5rem,2.5rem,8rem,auto] gap-6"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={formState.authorName}
        onChange={handleChange("authorName")}
        required
        disabled={isLoading}
        className="border rounded-lg drop-shadow-lg px-2 placeholder:text-sm font-medium focus:outline-none focus:border-yellow-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formState.email}
        onChange={handleChange("email")}
        required
        disabled={isLoading}
        className="border rounded-lg drop-shadow-lg px-2 placeholder:text-sm font-medium focus:outline-none focus:border-yellow-500"
      />
      <textarea
        placeholder="Your Message"
        value={formState.message}
        onChange={handleChange("message")}
        required
        disabled={isLoading}
        className="border rounded-lg drop-shadow-xl p-2 resize-none placeholder:text-sm font-medium focus:outline-none focus:border-yellow-500"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-fit bg-yellow-500 rounded-lg flex gap-2 pl-4 pr-6 py-2 justify-center items-center text-white"
      >
        {isLoading && <CgSpinner className="w-6 h-6 animate-spin" />}
        {isLoading ? (
          <p className="text-sm font-bold">Sending...</p>
        ) : (
          <>
            <IoIosSend className="w-6 h-6" />
            <p className="text-sm font-bold">Send</p>
          </>
        )}
      </button>
    </form>
  );
}
