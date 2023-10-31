import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

export const POST = async (request: Request) => {
  try {
    const utapi = new UTApi();
    const req = await request.formData();
    if (!req?.get("upload")) {
      return NextResponse.error();
    }
    const response = await utapi.uploadFiles(req.get("upload"));
    if (response?.error) {
      return NextResponse.error();
    }
    return NextResponse.json({
      status: 200,
      statusText: "Ok",
      data: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
