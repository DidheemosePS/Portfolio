import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const response = await prisma.about.findMany({
    include: {
      skills: true,
      experience: true,
      education: true,
    },
  });
  return NextResponse.json(response);
};
