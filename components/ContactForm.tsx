'use client';

import Link from 'next/link';
import { useState } from 'react';
import { buttonClass } from './ui/Button';
import Icon from './ui/Icon';
import { products } from '@/lib/products';
import { securityServices } from '@/lib/security';
import { services } from '@/lib/services';

const topics = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  ...securityServices.map((s) => ({ value: s.slug, label: `Cybersecurity: ${s.title}` })),
  ...products.map((p) => ({ value: p.slug, label: `${p.name} demo` })),
  { value: 'other', label: 'Something else' },
];

type Field = 'name' | 'email' | 'topic' | 'message';
type Errors = Partial<Record<Field, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (data.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!emailRe.test(data.email.trim())) errors.email = 'Please enter a valid email address, like name@company.com.';
  if (!data.topic) errors.topic = 'Please choose what you need help with.';
  if (data.message.trim().length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';
  return errors;
}

export default function ContactForm({ initialTopic = '' }: { initialTopic?: string }) {
  // Pre-select a topic from links such as /contact?topic=zentroapp
  const startTopic = topics.some((t) => t.value === initialTopic) ? initialTopic : '';
  const [values, setValues] = useState<Record<Field, string>>({ name: '', email: '', topic: startTopic, message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as Field]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    setStatus('sending');
    setServerError('');
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: topics.find((t) => t.value === values.topic)?.label ?? values.topic,
          message: values.message,
          website: form.get('website') ?? '',
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }
      setStatus('sent');
      setValues({ name: '', email: '', topic: '', message: '' });
    } catch (err) {
      setStatus('error');
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputClass = (field: Field) =>
    `mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-body text-ink placeholder:text-steel/70 transition-colors focus:border-navy focus:outline-none focus:ring-4 focus:ring-signal/25 ${
      errors[field] ? 'border-danger' : 'border-line hover:border-steel/50'
    }`;

  const describe = (field: Field) => (errors[field] ? { 'aria-invalid': true, 'aria-describedby': `cf-${field}-error` } : {});

  const errorText = (field: Field) =>
    errors[field] ? (
      <p id={`cf-${field}-error`} className="mt-2 text-small font-medium text-danger">
        {errors[field]}
      </p>
    ) : null;

  if (status === 'sent') {
    return (
      <div role="status" className="mt-8 rounded-2xl bg-mist p-8 text-center">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-navy text-white">
          <Icon name="check" className="size-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 text-h3 font-bold">Thank you, your message is on its way</h3>
        <p className="mt-2 text-steel">We will reply to you by email as soon as we can.</p>
        <button type="button" onClick={() => setStatus('idle')} className={buttonClass('secondary', 'mt-6')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className="text-small font-semibold text-ink">
          Full name
        </label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required value={values.name} onChange={onChange} className={inputClass('name')} {...describe('name')} />
        {errorText('name')}
      </div>

      <div>
        <label htmlFor="cf-email" className="text-small font-semibold text-ink">
          Work email
        </label>
        <input id="cf-email" name="email" type="email" autoComplete="email" inputMode="email" required value={values.email} onChange={onChange} className={inputClass('email')} {...describe('email')} />
        {errorText('email')}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="cf-topic" className="text-small font-semibold text-ink">
          What can we help with?
        </label>
        <select id="cf-topic" name="topic" required value={values.topic} onChange={onChange} className={inputClass('topic')} {...describe('topic')}>
          <option value="" disabled>
            Choose a topic
          </option>
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errorText('topic')}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="text-small font-semibold text-ink">
          Your message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={onChange}
          placeholder="What are you trying to achieve? Any timelines or systems we should know about?"
          className={`${inputClass('message')} resize-y`}
          {...describe('message')}
        />
        {errorText('message')}
      </div>

      {/* Honeypot: hidden from people, bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-steel">
          We only use your details to reply to you. See our{' '}
          <Link href="/privacy" className="font-medium text-navy underline decoration-signal underline-offset-4">
            privacy policy
          </Link>
          .
        </p>
        <button type="submit" disabled={status === 'sending'} className={buttonClass('primary', 'shrink-0 disabled:cursor-wait disabled:opacity-70')}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
          {status !== 'sending' && <Icon name="arrowRight" className="size-4" />}
        </button>
      </div>

      <div aria-live="polite" className="sm:col-span-2">
        {status === 'error' && (
          <p className="rounded-xl bg-danger/5 p-4 text-small font-medium text-danger ring-1 ring-danger/20">
            {serverError} You can also email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
