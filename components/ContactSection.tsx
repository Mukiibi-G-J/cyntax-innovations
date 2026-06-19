'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="#004d26" strokeWidth="1.5" />
      <path d="M1 5l7 5 7-5" stroke="#004d26" strokeWidth="1.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="#004d26" strokeWidth="1.5" />
      <path d="M8 1C8 1 5 5 5 8s3 7 3 7M8 1c0 0 3 4 3 7s-3 7-3 7M1 8h14" stroke="#004d26" strokeWidth="1.5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3.5-4.5 8.5-4.5 8.5S3.5 9.5 3.5 6A4.5 4.5 0 0 1 8 1.5z" stroke="#004d26" strokeWidth="1.5" />
      <circle cx="8" cy="6" r="1.5" stroke="#004d26" strokeWidth="1.5" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Something went wrong');
      }
      setStatus('success');
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputClass =
    'w-full bg-white border border-[rgba(0,100,50,0.25)] text-[#0a1a0f] placeholder-[#2d4a35]/60 font-mono text-sm px-4 py-3 outline-none focus:border-[#004d26] transition-colors duration-200';

  return (
    <section id="contact" className="bg-[#f4fcf6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="GET IN TOUCH" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-8"
          >
            <p className="text-[#2d4a35] leading-relaxed text-base">
              Have a project in mind? Looking to build something great? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <MailIcon />
                <a href="mailto:hello@cyntaxinnovations.com" className="font-mono text-sm text-[#0a1a0f] hover:text-[#004d26] transition-colors font-medium">
                  hello@cyntaxinnovations.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <GlobeIcon />
                <a href="https://www.cyntaxinnovations.com" className="font-mono text-sm text-[#0a1a0f] hover:text-[#004d26] transition-colors font-medium">
                  www.cyntaxinnovations.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPinIcon />
                <span className="font-mono text-sm text-[#0a1a0f] font-medium">Kampala, Uganda</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className={inputClass} />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className={inputClass} />
              </div>
              <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required className={inputClass} />
              <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="font-mono text-sm tracking-widest bg-[#00CC65] text-[#0a1a0f] font-bold px-6 py-3 hover:bg-[#00b358] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE →'}
              </button>

              {status === 'success' && (
                <p className="font-mono text-xs text-[#004d26] font-bold tracking-wide">
                  ✓ Message sent! We&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-xs text-red-700 font-bold tracking-wide">✗ {errorMsg}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
