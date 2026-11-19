import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';
import { ServiceCard } from '@/components/Cards';
import JsonLd from '@/components/JsonLd';
import ProcessSteps from '@/components/ProcessSteps';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { PageHero, Section, SectionHeader } from '@/components/ui/Section';
import { industries, serviceHref, services } from '@/lib/services';
import { photos } from '@/lib/photos';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'What We Do: Software, Cybersecurity, ERP & Integrations',
  description:
    'Custom web and mobile software, cybersecurity, Microsoft Dynamics 365 Business Central, EFRIS and mobile money integrations, ICT consulting and automation for businesses in Uganda.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services' },
};

const servicesLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${site.url}${serviceHref(s)}`,
    name: s.title,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'What we do', href: '/services' }]}
        photo={photos.code}
        eyebrow="What we do"
        title="Everything you need to build, run and protect your systems"
        intro="Six services that cover the full journey, from advice and design to build, security and long-term support. Start with one, or let us handle the whole stack."
      >
        <Button href="/contact" variant="onDark" arrow>
          Discuss your project
        </Button>
      </PageHero>

      <Section labelledBy="all-services">
        <h2 id="all-services" className="sr-only">
          Our services
        </h2>
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist" id="industries" labelledBy="industries-title">
        <SectionHeader id="industries-title" eyebrow="Industries" title="Who we work with" intro="We understand the systems, regulations and day-to-day realities of the sectors we serve." />
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <li key={i.title} className="flex gap-4 rounded-[var(--radius-card)] bg-white p-6 shadow-card">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={i.icon} />
              </span>
              <div>
                <h3 className="text-h3 font-bold">{i.title}</h3>
                <p className="mt-1 text-steel">{i.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="process-title">
        <SectionHeader id="process-title" eyebrow="How we work" title="A clear process, from first call to long-term support" />
        <ProcessSteps />
      </Section>

      <CtaBand title="Not sure which service you need?" text="Book a free consultation. We will look at where you are today and recommend the simplest next step." />
      <JsonLd data={servicesLd} />
    </>
  );
}
