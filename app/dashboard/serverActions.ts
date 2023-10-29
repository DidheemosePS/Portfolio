"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface SkillsFormState {
  title: string;
  skill: string;
}

export const handleSkillsSubmit = async (
  id: string,
  formState: Partial<SkillsFormState>
) => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.skills.update({
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

interface ExperienceFormState {
  title: string;
  experience: string;
}

export const handleExperienceSubmit = async (
  id: string,
  formState: Partial<ExperienceFormState>
) => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.experience.update({
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

interface EducationFormState {
  title: string;
  education: string;
}

export const handleEducationSubmit = async (
  id: string,
  formState: Partial<EducationFormState>
) => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.education.update({
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
