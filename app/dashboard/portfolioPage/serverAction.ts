"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

interface PortfolioFormState {
  title: string;
  description: string;
  link: string;
  image: {
    imageKEY: string;
    imageURL: string;
  };
}

export const handlePortfolioSubmit = async (
  id: string,
  imageKEY: string,
  formState: Partial<PortfolioFormState>
): Promise<{ status: number; statusText: string }> => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.portfolio.update({
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

export const handleAddPortfolioSubmit = async (
  formState: PortfolioFormState
): Promise<{ status: number; statusText: string }> => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.portfolio.create({
      data: formState,
    });
    if (!response) {
      return { status: 503, statusText: "Service unavailable" };
    }
    revalidatePath("/");
    return { status: 200, statusText: "Ok" };
  } catch (error) {
    console.log(error);
    return { status: 503, statusText: "Service unavailable" };
  }
};
