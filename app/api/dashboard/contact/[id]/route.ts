import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

interface UpdateData {
  id: string;
  mail: string;
  phone: string;
  facebookLink: string;
  xLink: string;
  instagramLink: string;
  linkedinLink: string;
  resumeUpload: {
    resumeKEY: string;
    resumeURL: string;
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
    if (req?.get("mail")) {
      updateData.mail = req.get("mail") as string;
    }
    if (req?.get("phone")) {
      updateData.phone = req.get("phone") as string;
    }
    if (req?.get("facebookLink")) {
      updateData.facebookLink = req.get("facebookLink") as string;
    }
    if (req?.get("xLink")) {
      updateData.xLink = req.get("xLink") as string;
    }
    if (req?.get("instagramLink")) {
      updateData.instagramLink = req.get("instagramLink") as string;
    }
    if (req?.get("linkedinLink")) {
      updateData.linkedinLink = req.get("linkedinLink") as string;
    }
    if (req?.get("resumeUpload")) {
      const response = await utapi.uploadFiles(req.get("resumeUpload"));
      updateData.resumeUpload = { resumeKEY: "", resumeURL: "" };
      updateData.resumeUpload.resumeKEY = response.data?.key as string;
      updateData.resumeUpload.resumeURL = response.data?.url as string;
    }
    const prisma = new PrismaClient();
    const response = await prisma.contact.update({
      where: {
        id,
      },
      data: updateData,
    });
    if (!response) {
      return NextResponse.error();
    }
    if (req.get("previousImage")) {
      await utapi.deleteFiles(req.get("previousResume") as string);
    }
    return NextResponse.json({ status: 200, statusText: "Ok" });
  } catch (error) {
    console.log(error);
  }
};
