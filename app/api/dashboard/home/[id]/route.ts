import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

interface UpdateData {
  role: string;
  name: string;
  country: string;
  imageUpload: {
    imageKEY: string;
    imageURL: string;
  };
}

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const utapi = new UTApi();
    const updateData: Partial<UpdateData> = {};
    const req = await request.formData();
    const { id } = params;
    if (req?.get("role")) {
      updateData.role = req.get("role") as string;
    }
    if (req?.get("name")) {
      updateData.name = req.get("name") as string;
    }
    if (req?.get("country")) {
      updateData.country = req.get("country") as string;
    }
    if (req?.get("imageUpload")) {
      const response = await utapi.uploadFiles(req.get("imageUpload"));
      updateData.imageUpload = { imageKEY: "", imageURL: "" };
      updateData.imageUpload.imageKEY = response.data?.key as string;
      updateData.imageUpload.imageURL = response.data?.url as string;
    }
    const prisma = new PrismaClient();
    const response = await prisma.home.update({
      where: {
        id,
      },
      data: updateData,
    });
    if (!response) {
      return NextResponse.error();
    }
    if (req.get("previousImage")) {
      await utapi.deleteFiles(req.get("previousImage") as string);
    }
    return NextResponse.json({ status: 200, statusText: "Ok" });
  } catch (error) {
    console.log(error);
  }
};
