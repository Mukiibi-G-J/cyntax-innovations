'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { photos } from '@/lib/photos';
import Button from './ui/Button';
import Icon from './ui/Icon';
import { Container } from './ui/Section';

/* ---------- Slide visuals (decorative) ---------- */

function DeployVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-2xl bg-midnight/90 shadow-2xl ring-1 ring-white/15 backdrop-blur">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="ml-3 font-mono text-xs text-steel-200">cyntax — deploy</span>
        </div>
        <div className="space-y-2 p-5 font-mono text-[0.8125rem] leading-6 text-steel-200">
          <p>
            <span className="text-signal-300">$</span> deploy --env=production
          </p>
          <p>✓ Business Central connected</p>
          <p>✓ EFRIS invoices synced</p>
          <p>✓ Mobile money gateway live</p>
          <p className="text-white">
            All systems running<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-signal" />
          </p>
        </div>
      </div>
      <div className="relative -mt-8 ml-auto mr-2 w-60 animate-float rounded-2xl bg-white p-4 shadow-2xl sm:-mr-6">
        <p className="text-xs font-medium text-steel">Today&apos;s sales · all branches</p>
        <p className="mt-1 font-display text-2xl font-extrabold text-navy">UGX 4,820,000</p>
        <div className="mt-3 flex h-10 items-end gap-1.5">
          {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-sm ${i === 5 ? 'bg-signal' : 'bg-navy/15'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SecurityVisual() {
  const checks = ['Multi-factor authentication', 'Encrypted connections (TLS)', 'Systems patched', 'Backups restored & tested', 'Staff phishing training'];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-transparent via-signal/15 to-transparent" />
        <div className="flex items-center gap-4">
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-navy text-white">
            <Icon name="shield" className="size-7" />
          </span>
          <div>
            <p className="font-display text-lg font-extrabold text-navy">Security review</p>
            <p className="text-small text-steel">Example checklist</p>
          </div>
        </div>
        <ul className="mt-5 space-y-2.5">
          {checks.map((c) => (
            <li key={c} className="flex items-center justify-between gap-3 rounded-xl bg-mist px-4 py-2.5 text-small">
              <span className="text-ink">{c}</span>
              <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-success text-white">
                <Icon name="check" className="size-3.5" strokeWidth={3} />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -left-4 -top-5 animate-float rounded-xl bg-signal px-4 py-2 font-display text-small font-bold text-midnight shadow-xl sm:-left-8">
        Secure by default
      </div>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <p className="font-display font-bold text-navy">New sale · Kampala Road</p>
          <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-navy">EFRIS ✓</span>
        </div>
        <ul className="mt-4 divide-y divide-line text-small">
          {[
            ['Rice 5kg', 'UGX 32,000'],
            ['Cooking oil 3L', 'UGX 27,500'],
            ['Sugar 2kg', 'UGX 9,800'],
          ].map(([item, price]) => (
            <li key={item} className="flex justify-between py-2.5">
              <span className="text-ink">{item}</span>
              <span className="font-mono text-steel">{price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex items-center justify-between border-t-2 border-navy pt-3">
          <span className="font-display font-bold text-navy">Total</span>
          <span className="font-display text-xl font-extrabold text-navy">UGX 69,300</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <span className="rounded-xl bg-navy py-2.5 text-center text-small font-bold text-white">Cash</span>
          <span className="rounded-xl bg-mist py-2.5 text-center text-small font-bold text-navy">Mobile money</span>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-2 flex animate-float items-center gap-3 rounded-2xl bg-midnight px-4 py-3 text-white shadow-xl ring-1 ring-white/15 sm:-right-8">
        <Icon name="wifiOff" className="size-5 text-signal-300" />
        <span className="text-small font-medium">Works offline</span>
      </div>
    </div>
  );
}

/* ---------- Slides ---------- */

const slides = [
  {
    key: 'software',
    eyebrow: 'Software · Systems',
    title: 'Secure software that runs your business. Built in Uganda.',
    text: 'Custom web and mobile software, Business Central ERP and integrations designed around how your business really works.',
    primary: { label: 'Start a project', href: '/contact' },
    secondary: { label: 'What we do', href: '/services' },
    visual: <DeployVisual />,
    photo: photos.devTeam,
  },
  {
    key: 'security',
    eyebrow: 'Cybersecurity',
    title: 'Find the weaknesses before attackers do.',
    text: 'Security assessments, secure code review, hardening and staff training, led by a developer completing a Master’s in Cybersecurity.',
    primary: { label: 'Request a security review', href: '/contact?topic=cybersecurity' },
    secondary: { label: 'Cybersecurity services', href: '/services/cybersecurity' },
    visual: <SecurityVisual />,
    photo: photos.padlock,
  },
  {
    key: 'products',
    eyebrow: 'Our products',
    title: 'Platforms built for how Africa does business.',
    text: 'ZentroApp for EFRIS-compliant retail, Saccolla for SACCOs and MediLink for healthcare: built, secured and supported in Kampala.',
    primary: { label: 'Explore our products', href: '/products' },
    secondary: { label: 'Book a ZentroApp demo', href: '/contact?topic=zentroapp' },
    visual: <ProductVisual />,
    photo: photos.shopCounter,
  },
];

const INTERVAL = 7000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), []);
  const running = !paused && !userPaused && !reduced;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, running, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Cyntax Innovations highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative overflow-hidden rounded-br-[3rem] bg-navy text-white sm:rounded-br-[6rem]"
    >
      {/* Photo backgrounds crossfade with the slides */}
      {slides.map((s, i) => (
        <div
          key={s.key}
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={s.photo.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[8000ms] ease-out ${i === index ? 'scale-105' : 'scale-100'}`}
          />
        </div>
      ))}
      {/* Navy overlay keeps text contrast high (white on ≥88% navy on the text side) */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/80 lg:from-navy/95 lg:via-navy/75 lg:to-navy/25" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

      {/* Living background */}
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <div aria-hidden="true" className="absolute -left-32 -top-32 size-[28rem] animate-drift rounded-full bg-signal/25 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 size-[32rem] animate-drift rounded-full bg-signal/15 blur-3xl [animation-delay:-7s]"
      />
      <svg aria-hidden="true" viewBox="0 0 56 56" className="absolute -right-24 top-10 size-[30rem] text-white/[0.04]">
        <path
          fill="currentColor"
          d="M37.874 15.626 A17.5 17.5 0 1 0 37.874 40.374 A3.5 3.5 0 0 0 32.925 35.425 A10.5 10.5 0 1 1 32.925 20.575 A3.5 3.5 0 0 0 37.874 15.626Z"
        />
      </svg>

      <Container className="relative">
        {/* All slides share one grid cell, so the hero height never jumps. */}
        <div className="grid">
          {slides.map((s, i) => {
            const active = i === index;
            const Heading = i === 0 ? 'h1' : 'h2';
            return (
              <div
                key={s.key}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}: ${s.eyebrow}`}
                aria-hidden={!active}
                inert={!active}
                className={`col-start-1 row-start-1 grid items-center gap-14 pb-28 pt-16 transition-opacity duration-700 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-32 lg:pt-24 ${
                  active ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <div className={`transition-transform duration-700 ${active ? 'translate-y-0' : 'translate-y-6'}`}>
                  <p className="mb-5 inline-flex items-center gap-2.5 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-steel-200">
                    <span aria-hidden="true" className="h-4 w-1 rounded-full bg-signal" />
                    {s.eyebrow}
                  </p>
                  <Heading className="text-h1 font-extrabold tracking-tight text-white sm:text-[3.5rem] sm:leading-[3.875rem]">
                    {s.title}
                  </Heading>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-steel-200">{s.text}</p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button href={s.primary.href} variant="onDark" arrow>
                      {s.primary.label}
                    </Button>
                    <Button href={s.secondary.href} variant="onDarkSecondary">
                      {s.secondary.label}
                    </Button>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className={`hidden transition-all duration-700 lg:block ${active ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                >
                  {s.visual}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-4 right-4 flex items-center gap-4 sm:left-6 lg:bottom-10 lg:left-8">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${s.eyebrow}`}
                aria-current={i === index ? 'true' : undefined}
                className="group relative flex h-11 items-center"
              >
                <span className={`block h-1.5 overflow-hidden rounded-full transition-all ${i === index ? 'w-14 bg-white/25' : 'w-6 bg-white/25 group-hover:bg-white/50'}`}>
                  {i === index && (
                    <span
                      key={`${index}-${running}`}
                      className="block h-full origin-left rounded-full bg-signal"
                      style={running ? { animation: `progress ${INTERVAL}ms linear forwards` } : { transform: 'scaleX(1)' }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setUserPaused((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full text-white ring-1 ring-white/25 hover:bg-white/10"
          >
            <span className="sr-only">{userPaused ? 'Play slideshow' : 'Pause slideshow'}</span>
            {userPaused ? (
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
              </svg>
            )}
          </button>
        </div>
      </Container>
    </section>
  );
}
