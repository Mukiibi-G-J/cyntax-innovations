import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SecurityCard } from '@/components/Cards';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { Eyebrow, PageHero, Section, SectionHeader } from '@/components/ui/Section';
import { photos, securityPhoto } from '@/lib/photos';
import { getSecurityService, securityFramework, securityServices } from '@/lib/security';
import { site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return securityServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<'/cybersecurity/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const s = getSecurityService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/cybersecurity/${s.slug}` },
    openGraph: { url: `/cybersecurity/${s.slug}`, title: `${s.title} | ${site.name}`, description: s.metaDescription },
  };
}

export default async function SecurityServicePage({ params }: PageProps<'/cybersecurity/[slug]'>) {
  const { slug } = await params;
  const s = getSecurityService(slug);
  if (!s) notFound();

  const idx = securityServices.findIndex((x) => x.slug === s.slug);
  const related = [1, 2, 3].map((n) => securityServices[(idx + n) % securityServices.length]);

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: s.title,
        serviceType: 'Cybersecurity',
        description: s.metaDescription,
        url: `${site.url}/cybersecurity/${s.slug}`,
        provider: { '@id': `${site.url}/#organization` },
        areaServed: 'UG',
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'Cybersecurity', href: '/cybersecurity' },
          { label: s.title, href: `/cybersecurity/${s.slug}` },
        ]}
        photo={photos[securityPhoto[s.slug]]}
        eyebrow={s.title}
        title={s.headline}
        intro={s.summary}
      >
        <Button href={`/contact?topic=${s.slug}`} variant="onDark" arrow>
          Talk to a security specialist
        </Button>
      </PageHero>

      <Section labelledBy="overview-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7" data-reveal="left">
            <Eyebrow>Overview</Eyebrow>
            <h2 id="overview-title" className="text-h2 font-extrabold tracking-tight">
              Why it matters
            </h2>
            <div className="mt-5 space-y-5 text-[1.0625rem] leading-7 text-steel">
              {s.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5" data-reveal="right">
            <div className="rounded-3xl bg-navy p-8 text-white">
              <h3 className="font-display text-lg font-bold">What you receive</h3>
              <ul className="mt-5 space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-signal text-midnight">
                      <Icon name="check" className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-steel-200">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="includes-title">
        <SectionHeader id="includes-title" eyebrow="What is included" title="How we help" />
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2">
          {s.includes.map((x) => (
            <li key={x.title} className="flex gap-4 rounded-[var(--radius-card)] bg-white p-6 shadow-card">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-mist text-navy">
                <Icon name={s.icon} />
              </span>
              <div>
                <h3 className="text-h3 font-bold">{x.title}</h3>
                <p className="mt-1 text-steel">{x.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="lifecycle-title">
        <SectionHeader id="lifecycle-title" eyebrow="Our approach" title="Part of a complete security lifecycle" />
        <ol data-stagger="" className="grid gap-4 sm:grid-cols-5">
          {securityFramework.map((f, i) => (
            <li key={f.step} className="border-t-2 border-navy pt-4">
              <span className="font-mono text-small text-steel">0{i + 1}</span>
              <h3 className="mt-1 font-display text-lg font-bold text-navy">{f.step}</h3>
              <p className="mt-1 text-small text-steel">{f.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist" labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="faq-title" eyebrow="FAQs" title="Common questions" />
          </div>
          <div className="divide-y divide-line rounded-[var(--radius-card)] bg-white px-6 shadow-card lg:col-span-8">
            {s.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.0625rem] font-bold text-navy [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Icon name="chevronDown" className="size-5 shrink-0 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <p className="mt-3 text-steel">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section labelledBy="related-title">
        <SectionHeader id="related-title" eyebrow="Related" title="More cybersecurity services" />
        <ul data-stagger="" className="grid gap-5 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <SecurityCard service={r} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="Let's secure your business" text="Tell us what worries you most. We will recommend the simplest effective next step, in plain language." />
      <JsonLd data={ld} />
    </>
  );
}
