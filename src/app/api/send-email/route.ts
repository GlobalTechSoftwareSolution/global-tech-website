import { NextRequest } from 'next/server';
// @ts-ignore
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !service || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'All fields are required' 
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Create transporter using Gmail SMTP
    // @ts-ignore
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'hrglobaltechsoftwaresolutions@gmail.com',
        pass: 'zmwp hxux yzbp qftd', // Your 16-digit Gmail App Password
      },
    });

    //-------------------------------
    // 1️⃣ Email TO COMPANY (You)
    //-------------------------------
    const companyMailOptions = {
      from: '"Global Tech Software Solutions" <hrglobaltechsoftwaresolutions@gmail.com>',
      to: 'hrglobaltechsoftwaresolutions@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
New Inquiry from Website Contact Form

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Interested: ${service}

Message:
${message}
`,
    };

    //-------------------------------
    // 2️⃣ Email TO CUSTOMER (Auto Reply)
    //-------------------------------
    const customerMailOptions = {
      from: '"Global Tech Software Solutions" <hrglobaltechsoftwaresolutions@gmail.com>',
      to: email,
      subject: 'We Received Your Request – Global Tech Software Solutions',
      text: `
Hi ${name},

Thank you for contacting Global Tech Software Solutions.

We have received your request regarding: ${service}.
Our team will contact you soon.

Regards,
Global Tech Software Solutions
`,
    };

    // Send both emails
    // @ts-ignore
    await transporter.sendMail(companyMailOptions);
    // @ts-ignore
    await transporter.sendMail(customerMailOptions);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Both emails sent successfully!' 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error sending emails: ' + (error as Error).message 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}