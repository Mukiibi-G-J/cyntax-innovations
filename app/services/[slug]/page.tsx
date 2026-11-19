import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceCard } from '@/components/Cards';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import ProcessSteps from '@/components/ProcessSteps';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { Eyebrow, PageHero, Section, SectionHeader } from '@/components/ui/Section';
import { getService, services } from '@/lib/services';
import { photos, servicePhoto } from '@/lib/photos';
import { site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { url: `/services/${s.slug}`, title: `${s.title} | ${site.name}`, description: s.metaDescription },
  };
}

export default async function ServicePage({ params }: PageProps<'/services/[slug]'>) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: s.title,
        description: s.metaDescription,
        url: `${site.url}/services/${s.slug}`,
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
          { label: 'What we do', href: '/services' },
          { label: s.title, href: `/services/${s.slug}` },
        ]}
        photo={photos[servicePhoto[s.slug]]}
        eyebrow={s.title}
        title={s.headline}
        intro={s.summary}
      >
        <Button href={`/contact?topic=${s.slug}`} variant="onDark" arrow>
          Talk to us about {s.title.toLowerCase()}
        </Button>
      </PageHero>

      <Section labelledBy="overview-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
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
          <ul className="space-y-4 lg:col-span-5">
            {s.benefits.map((b) => (
              <li key={b.title} className="flex gap-4 rounded-[var(--radius-card)] bg-mist p-5">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <Icon name="check" className="size-4" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-display text-[1.0625rem] font-bold text-navy">{b.title}</h3>
                  <p className="mt-1 text-steel">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="mist" labelledBy="deliverables-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader id="deliverables-title" eyebrow="What you get" title="What is included" />
            <ul className="-mt-4 grid gap-3 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-xl bg-white p-4 text-ink shadow-sm">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-navy" strokeWidth={2.25} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-sans text-small font-semibold uppercase tracking-[0.12em] text-steel lg:mt-14">Tools & standards</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.tools.map((t) => (
                <li key={t} className="rounded-full bg-white px-3.5 py-1.5 font-mono text-[0.8125rem] text-navy ring-1 ring-line">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="process-title">
        <SectionHeader id="process-title" eyebrow="How we work" title="How we deliver" />
        <ProcessSteps />
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
        <SectionHeader id="related-title" eyebrow="Related" title="Other services" />
        <ul data-stagger="" className="grid gap-5 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <ServiceCard service={r} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
      <JsonLd data={ld} />
    </>
  );
}
