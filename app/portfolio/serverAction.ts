"use server";

import { PrismaClient } from "@prisma/client";

export default async function PortfolioAction(skip: number) {
  try {
    const prisma = new PrismaClient();
    const [data, count] = await prisma.$transaction([
      prisma.portfolio.findMany({ skip, take: 3 }),
      prisma.portfolio.count(),
    ]);
    return { data, count };
  } catch (error) {
    console.log(error);
  }
}
