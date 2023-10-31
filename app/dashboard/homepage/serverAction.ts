"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

interface HomeFormState {
  role: string;
  name: string;
  country: string;
  imageUpload: {
    imageKEY: string;
    imageURL: string;
  };
}

export const handleHomeSubmit = async (
  id: string,
  imageKEY: string,
  formState: Partial<HomeFormState>
): Promise<{ status: number; statusText: string }> => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.home.update({
      where: {
        id,
      },
      data: formState,
    });
    if (!response) {
      return { status: 503, statusText: "Service unavailable" };
    }
    if (imageKEY) {
      const utapi = new UTApi();
      await utapi.deleteFiles(imageKEY);
    }
    revalidatePath("/");
    return { status: 200, statusText: "Ok" };
  } catch (error) {
    console.log(error);
    return { status: 503, statusText: "Service unavailable" };
  }
};
