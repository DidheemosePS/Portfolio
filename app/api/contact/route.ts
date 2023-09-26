import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const response = await prisma.contact.findMany();
  return NextResponse.json(response);
};
