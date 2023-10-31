"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

interface ContactFormState {
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

export const handleContactSubmit = async (
  id: string,
  resumeKEY: string,
  formState: Partial<ContactFormState>
): Promise<{ status: number; statusText: string }> => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.contact.update({
      where: {
        id,
      },
      data: formState,
    });
    if (!response) {
      return { status: 503, statusText: "Service unavailable" };
    }
    if (resumeKEY) {
      const utapi = new UTApi();
      await utapi.deleteFiles(resumeKEY);
    }
    revalidatePath("/");
    return { status: 200, statusText: "Ok" };
  } catch (error) {
    console.log(error);
    return { status: 503, statusText: "Service unavailable" };
  }
};
