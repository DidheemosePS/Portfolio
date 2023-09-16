import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: Request) => {
  try {
    const { name, email, message } = await request.json();
    const response = await resend.emails.send({
      from: `${process.env.EMAIL_FROM}`,
      to: `${process.env.EMAIL_TO}`,
      reply_to: email,
      subject: "This is a test email",
      react: EmailTemplate({ firstName: name }),
      text: "",
    });
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
  }
};
