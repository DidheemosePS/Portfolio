"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "../../../email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const ContactMessage = async (contactData: {
  authorName: string;
  email: string;
  message: string;
}): Promise<{ status: number; statusText: string }> => {
  try {
    const { authorName, email, message } = contactData;
    const response = await resend.emails.send({
      from: `Portfolio <${process.env.EMAIL_FROM}>`,
      to: `${process.env.EMAIL_TO}`,
      reply_to: email,
      subject: "A message from your portfolio",
      react: React.createElement(ContactFormEmail, {
        authorName,
        message,
      }),
    });
    if (!response.id) {
      return { status: 503, statusText: "Service unavailable" };
    }
    return { status: 200, statusText: "OK" };
  } catch (error) {
    console.log(error);
    return { status: 503, statusText: "Service unavailable" };
  }
};
