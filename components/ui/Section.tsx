import Image from 'next/image';
import Breadcrumbs, { type Crumb } from '../Breadcrumbs';
import type { Photo } from '@/lib/photos';

type Tone = 'white' | 'mist' | 'navy' | 'midnight';

const tones: Record<Tone, string> = {
  white: 'bg-white',
  mist: 'bg-mist',
  navy: 'bg-navy text-white',
  midnight: 'bg-midnight text-white',
};

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  tone = 'white',
  id,
  className = '',
  labelledBy,
}: {
  children: React.ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Small label above a heading. The Signal Blue bar echoes the "I" in the logo. */
export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2.5 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.14em] ${
        dark ? 'text-steel-200' : 'text-steel'
      }`}
    >
      <span aria-hidden="true" className="h-4 w-1 rounded-full bg-signal" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  id,
  dark = false,
  align = 'left',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <div data-reveal="" className={`mb-10 max-w-2xl sm:mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`text-h2 font-extrabold tracking-tight sm:text-[2.25rem] sm:leading-[2.75rem] ${dark ? 'text-white' : ''}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[1.0625rem] leading-7 ${dark ? 'text-steel-200' : 'text-steel'}`}>{intro}</p>
      )}
    </div>
  );
}

/** Page hero for inner pages: navy, textured, with the curved corner from the home hero. */
export function PageHero({
  crumbs,
  photo,
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  children?: React.ReactNode;
  crumbs?: Crumb[];
  photo?: Photo;
}) {
  return (
    <section className="relative overflow-hidden rounded-br-[3rem] bg-navy text-white sm:rounded-br-[5rem]">
      {photo && (
        <>
          <Image src={photo.src} alt="" fill priority sizes="100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/75 lg:via-navy/70 lg:to-navy/30" />
        </>
      )}
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <div aria-hidden="true" className="absolute -right-24 -top-32 size-[26rem] animate-drift rounded-full bg-signal/20 blur-3xl" />
      <svg aria-hidden="true" viewBox="0 0 56 56" className="absolute -bottom-24 -right-16 size-80 text-white/[0.04]">
        <path
          fill="currentColor"
          d="M37.874 15.626 A17.5 17.5 0 1 0 37.874 40.374 A3.5 3.5 0 0 0 32.925 35.425 A10.5 10.5 0 1 1 32.925 20.575 A3.5 3.5 0 0 0 37.874 15.626Z"
        />
      </svg>
      <Container className="relative py-14 sm:py-20 lg:py-24">
        {crumbs && <Breadcrumbs items={crumbs} dark />}
        <div className="max-w-3xl" data-reveal="">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="text-h1 font-extrabold tracking-tight text-white sm:text-[3.25rem] sm:leading-[3.5rem]">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-steel-200">{intro}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
