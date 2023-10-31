"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface ServicesFormState {
  title: string;
  description: string;
}

export const handleServicesSubmit = async (
  id: string,
  formState: Partial<ServicesFormState>
) => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.services.update({
      where: {
        id,
      },
      data: formState,
    });
    if (!response) {
      return { status: 503, statusText: "Service unavailable" };
    }
    revalidatePath("/");
    return { status: 200, statusText: "Ok" };
  } catch (error) {
    console.log(error);
  }
};

interface AddServicesFormState {
  title: string;
  description: string;
}

export const handleAddServicesSubmit = async (
  formState: AddServicesFormState
) => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.services.create({
      data: {
        title: formState.title,
        description: formState.description,
      },
    });
    if (!response) {
      return { status: 503, statusText: "Service unavailable" };
    }
    revalidatePath("/");
    return { status: 200, statusText: "Ok" };
  } catch (error) {
    console.log(error);
  }
};
