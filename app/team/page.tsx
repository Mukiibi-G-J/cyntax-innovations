import type { Metadata } from 'next';
import Image from 'next/image';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import Icon, { type IconName } from '@/components/ui/Icon';
import { PageHero, Section, SectionHeader } from '@/components/ui/Section';
import { photos } from '@/lib/photos';
import { site } from '@/lib/site';
import { team } from '@/lib/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the team behind Cyntax Innovations: software engineers and cybersecurity specialists building secure systems for businesses in Uganda.',
  alternates: { canonical: '/team' },
  openGraph: { url: '/team' },
};

const culture: { icon: IconName; title: string; text: string }[] = [
  { icon: 'shield', title: 'Security mindset', text: 'Everyone on the team is trained to think about security, privacy and resilience in their work.' },
  { icon: 'book', title: 'Always learning', text: 'From postgraduate study to certifications, we invest in growing our skills.' },
  { icon: 'users', title: 'Close to clients', text: 'You work directly with the people designing and building your system.' },
];

export default function TeamPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@graph': team.map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.role,
      worksFor: { '@id': `${site.url}/#organization` },
      knowsAbout: m.focus,
      ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
    })),
  };

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'About us', href: '/about' },
          { label: 'Our team', href: '/team' },
        ]}
        photo={photos.workshop}
        eyebrow="Our team"
        title="Engineers and security specialists who care about your business"
        intro="Cyntax is led by people who build and secure systems every day. When you work with us, you work directly with them."
      />

      <Section labelledBy="leadership-title">
        <SectionHeader id="leadership-title" eyebrow="Leadership" title="Leadership" />
        <ul className="space-y-8">
          {team.map((m) => (
            <li key={m.slug} id={m.slug} className="grid gap-8 rounded-3xl border border-line p-6 sm:p-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span
                  aria-hidden="true"
                  className="flex aspect-square w-full max-w-60 items-center justify-center rounded-3xl bg-navy font-display text-6xl font-extrabold text-white"
                >
                  {m.initials}
                </span>
                <h3 className="mt-6 text-h2 font-extrabold">{m.name}</h3>
                <p className="mt-1 font-medium text-steel">{m.role}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-small font-semibold text-navy underline decoration-signal underline-offset-4"
                  >
                    <Icon name="linkedin" className="size-4" /> LinkedIn profile
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-4 text-[1.0625rem] leading-7 text-steel">
                  {m.profile.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="font-sans text-small font-semibold uppercase tracking-[0.12em] text-steel">Areas of focus</h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {m.focus.map((f) => (
                        <li key={f} className="rounded-full bg-mist px-3 py-1 text-small font-medium text-navy">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {m.education && (
                    <div>
                      <h4 className="font-sans text-small font-semibold uppercase tracking-[0.12em] text-steel">Education</h4>
                      <ul className="mt-3 space-y-2">
                        {m.education.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-ink">
                            <Icon name="book" className="mt-1 size-4 shrink-0 text-navy" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist" labelledBy="culture-title">
        <SectionHeader id="culture-title" eyebrow="How we work together" title="Our culture" />
        <div data-reveal="zoom" className="relative mb-10 aspect-[21/8] overflow-hidden rounded-3xl">
          <Image src={photos.devTeam.src} alt={photos.devTeam.alt} fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover" />
        </div>
        <ul data-stagger="" className="grid gap-5 md:grid-cols-3">
          {culture.map((c) => (
            <li key={c.title} className="rounded-[var(--radius-card)] bg-white p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={c.icon} />
              </span>
              <h3 className="mt-5 text-h3 font-bold">{c.title}</h3>
              <p className="mt-2 text-steel">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="join-title">
        <div className="flex flex-col gap-6 rounded-3xl border-2 border-dashed border-line p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <h2 id="join-title" className="text-h2 font-extrabold">
              Want to build with us?
            </h2>
            <p className="mt-3 text-steel">
              We are growing. If you are a developer, security specialist or designer who cares about quality, we would like to hear from you.
            </p>
          </div>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent('Working at Cyntax')}`}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 font-display text-small font-bold text-white hover:bg-navy-700"
          >
            <Icon name="mail" className="size-4" /> Send us your CV
          </a>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={ld} />
    </>
  );
}
