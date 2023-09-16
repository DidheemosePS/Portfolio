import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { title } from "process";

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

export const POST = async () => {
  await prisma.about.create({
    data: {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus quod necessitatibus beatae deleniti, nobis ipsum perferendis sunt tenetur natus inventore et nulla accusantium fugiat, eum eveniet voluptas eligendi doloremque.",
      imageUrl:
        "https://utfs.io/f/5bf0f38a-3177-4124-a495-f8aa789b311f_userImage.png",
      skills: {
        create: [
          {
            title: "UI/UX",
            skill: "Designing Web Interfaces",
          },
          {
            title: "Web Development",
            skill: "Web app Development",
          },
        ],
      },
      experience: {
        create: [
          {
            title: "2023 - Current",
            experience:
              "I don't have any experience still I'm looking for oppertunities",
          },
        ],
      },
      education: {
        create: [
          {
            title: "2020 - 2023",
            education: "Bachelor of Computer Application",
          },
        ],
      },
    },
  });
  return NextResponse.json("Ok");
};
