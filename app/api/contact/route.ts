import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO = 'hello@cyntaxinnovations.com';
// Replace with a sender on a domain verified in Resend, e.g. "Cyntax Website <website@cyntaxinnovations.com>".
const FROM = process.env.CONTACT_FROM_EMAIL ?? 'Cyntax Innovations <onboarding@resend.dev>';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (clean(body.website, 200)) return NextResponse.json({ success: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const subject = clean(body.subject, 150);
  const message = clean(body.message, 5000);

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Please fill in all fields.' }, { status: 400 });
  }
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'Our contact form is temporarily unavailable.' }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 0;width:90px;color:#55657F;font-size:13px;vertical-align:top">${label}</td><td style="padding:6px 0;color:#0F1B33;font-size:15px">${escapeHtml(value)}</td></tr>`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Website enquiry: ${subject.replace(/[\r\n]+/g, ' ')}`,
    text: `Name: ${name}\nEmail: ${email}\nTopic: ${subject}\n\n${message}`,
    html: `
      <div style="font-family:Inter,Segoe UI,Arial,sans-serif;background:#EEF3FA;padding:32px">
        <div style="max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden">
          <div style="background:#0F2B5B;padding:20px 28px;border-bottom:4px solid #2F8CFF">
            <p style="margin:0;color:#FFFFFF;font-weight:800;font-size:16px;letter-spacing:.04em">CYNTAX INNOVATIONS</p>
            <p style="margin:4px 0 0;color:#B4C3DC;font-size:13px">New website enquiry</p>
          </div>
          <div style="padding:24px 28px">
            <table style="width:100%;border-collapse:collapse">${row('Name', name)}${row('Email', email)}${row('Topic', subject)}</table>
            <p style="margin:24px 0 8px;color:#55657F;font-size:13px">Message</p>
            <p style="margin:0;color:#0F1B33;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
          </div>
        </div>
      </div>`,
  });

  if (error) {
    console.error('Resend error', error);
    return NextResponse.json({ error: 'We could not send your message right now.' }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}
