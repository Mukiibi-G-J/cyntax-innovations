import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subject, message } = body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'CYNTAX INNOVATIONS <onboarding@resend.dev>',
    to: 'hello@cyntaxinnovations.com',
    replyTo: email,
    subject: `[Contact] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: 'Courier New', monospace; background: #0a0f0a; color: #ffffff; padding: 32px; max-width: 600px;">
        <div style="border-bottom: 1px solid rgba(0,255,127,0.2); padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="color: #00FF7F; font-size: 18px; letter-spacing: 0.2em; margin: 0;">CYNTAX INNOVATIONS</h1>
          <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 4px 0 0;">// New Contact Form Submission //</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="color: rgba(255,255,255,0.4); font-size: 12px; padding: 4px 0; width: 80px;">NAME</td><td style="color: #ffffff; font-size: 14px;">${name}</td></tr>
          <tr><td style="color: rgba(255,255,255,0.4); font-size: 12px; padding: 4px 0;">EMAIL</td><td style="color: #00FF7F; font-size: 14px;">${email}</td></tr>
          <tr><td style="color: rgba(255,255,255,0.4); font-size: 12px; padding: 4px 0;">SUBJECT</td><td style="color: #ffffff; font-size: 14px;">${subject}</td></tr>
        </table>
        <div style="margin-top: 24px; border-top: 1px solid rgba(0,255,127,0.1); padding-top: 16px;">
          <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0 0 8px;">MESSAGE</p>
          <p style="color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
