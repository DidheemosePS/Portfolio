import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const urlSkip = new URL(req.url).searchParams.get("skip");
  const skip = parseInt(urlSkip as string);
  const [data, count] = await prisma.$transaction([
    prisma.services.findMany({ skip, take: 3 }),
    prisma.services.count(),
  ]);
  return NextResponse.json({ data, count });
};
