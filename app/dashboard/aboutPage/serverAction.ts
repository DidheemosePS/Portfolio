"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

interface AboutFormState {
  description: string;
  imageUpload: {
    imageKEY: string;
    imageURL: string;
  };
}

export const handleAboutSubmit = async (
  id: string,
  imageKEY: string,
  formState: Partial<AboutFormState>
): Promise<{ status: number; statusText: string }> => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.about.update({
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

interface AddSkillFormState {
  title: string;
  skill: string;
}

export const handleAddSkillSubmit = async (
  aboutId: string,
  formState: AddSkillFormState
) => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.skills.create({
      data: {
        title: formState.title,
        skill: formState.skill,
        aboutId,
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

interface AddExperienceFormState {
  title: string;
  experience: string;
}

export const handleAddExperienceSubmit = async (
  aboutId: string,
  formState: AddExperienceFormState
) => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.experience.create({
      data: {
        title: formState.title,
        experience: formState.experience,
        aboutId,
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

interface AddEducationFormState {
  title: string;
  education: string;
}

export const handleAddEducationSubmit = async (
  aboutId: string,
  formState: AddEducationFormState
) => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.education.create({
      data: {
        title: formState.title,
        education: formState.education,
        aboutId,
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
