import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: Request) {
    try {
      const { email, message } = await request.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASS,
        },
      });
    
      const mailOptions = {
        from: "service.anikettote@gmail.com",
        to: "anikettote2001@gmail.com",
        subject: "New message from your-website",
        text: `Email: ${email}\nMessage: ${message}`,
      };
  
      await transporter.sendMail(mailOptions);
  
      return NextResponse.json(
        { message: "Message sent successfully",status: 200 },
      );
    } catch (error) {
      return new NextResponse("Failed to send message.", { status: 500 })
    }
  }