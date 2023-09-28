"use server";

import { PrismaClient } from "@prisma/client";

export default async function ServicesAction(skip: number) {
  try {
    const prisma = new PrismaClient();
    const [data, count] = await prisma.$transaction([
      prisma.services.findMany({ skip, take: 3 }),
      prisma.services.count(),
    ]);
    return { data, count };
  } catch (error) {
    console.log(error);
  }
}
