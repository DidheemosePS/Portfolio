"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface SkillsFormState {
  id: string;
  title: string;
  skill: string;
}

export const handleSkillsSubmit = async (formState: SkillsFormState) => {
  try {
    const newFormState: Partial<Pick<SkillsFormState, "title" | "skill">> = {};

    if (formState.title !== "") {
      newFormState.title = formState.title;
    }

    if (formState.skill !== "") {
      newFormState.skill = formState.skill;
    }

    const prisma = new PrismaClient();
    await prisma.skills.update({
      where: {
        id: formState?.id,
      },
      data: newFormState,
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

interface ExperienceFormState {
  id: string;
  title: string;
  experience: string;
}

export const handleExperienceSubmit = async (
  formState: ExperienceFormState
) => {
  try {
    const newFormState: Partial<
      Pick<ExperienceFormState, "title" | "experience">
    > = {};

    if (formState.title !== "") {
      newFormState.title = formState.title;
    }

    if (formState.experience !== "") {
      newFormState.experience = formState.experience;
    }

    const prisma = new PrismaClient();
    await prisma.experience.update({
      where: {
        id: formState?.id,
      },
      data: newFormState,
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

interface EducationFormState {
  id: string;
  title: string;
  education: string;
}

export const handleEducationSubmit = async (formState: EducationFormState) => {
  try {
    const newFormState: Partial<
      Pick<EducationFormState, "title" | "education">
    > = {};

    if (formState.title !== "") {
      newFormState.title = formState.title;
    }

    if (formState.education !== "") {
      newFormState.education = formState.education;
    }

    const prisma = new PrismaClient();
    await prisma.education.update({
      where: {
        id: formState?.id,
      },
      data: newFormState,
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

interface DescriptionFormState {
  id: string;
  title: string;
  description: string;
}

export const handleServicesSubmit = async (formState: DescriptionFormState) => {
  try {
    const newFormState: { title?: string; description?: string } = {};

    if (formState.title !== "") {
      newFormState.title = formState.title;
    }

    if (formState.description !== "") {
      newFormState.description = formState.description;
    }

    const prisma = new PrismaClient();
    await prisma.services.update({
      where: {
        id: formState?.id,
      },
      data: newFormState,
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};
