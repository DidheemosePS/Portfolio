// import React from "react";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import ContactFormEmail from "../../../email/contact-form-email";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const POST = async (request: Request) => {
//   try {
//     const { authorName, email, message } = await request.json();
//     const response = await resend.emails.send({
//       from: `Portfolio <${process.env.EMAIL_FROM}>`,
//       to: `${process.env.EMAIL_TO}`,
//       reply_to: email,
//       subject: "A message from your portfolio",
//       react: React.createElement(ContactFormEmail, {
//         authorName,
//         message,
//       }),
//     });
//     return NextResponse.json(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
