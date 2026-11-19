import type { Metadata } from 'next';
import Image from 'next/image';
import { SecurityCard } from '@/components/Cards';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import Button from '@/components/ui/Button';
import Icon, { type IconName } from '@/components/ui/Icon';
import { Eyebrow, PageHero, Section, SectionHeader } from '@/components/ui/Section';
import { photos } from '@/lib/photos';
import { securityFramework, securityServices } from '@/lib/security';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cybersecurity Services in Uganda',
  description:
    'Penetration testing, firewalls and network security, endpoint and email protection, digital forensics, secure backup, incident response, managed security and awareness training for organisations in Uganda.',
  alternates: { canonical: '/cybersecurity' },
  openGraph: { url: '/cybersecurity' },
};

const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: 'book', title: 'Specialist-led', text: 'Our practice is led by our CTO, a software developer completing a Master’s in Cybersecurity.' },
  { icon: 'compass', title: 'Vendor-neutral', text: 'We recommend the tools that fit your risks and budget, not the ones we are paid to push.' },
  { icon: 'pin', title: 'Local and on site', text: 'Based in Kampala, able to work on site and familiar with Ugandan regulation and realities.' },
  { icon: 'code', title: 'Builders, not just auditors', text: 'As software engineers, we fix problems as well as find them.' },
];

const threats = [
  'Ransomware that locks your files and systems',
  'Phishing and business email compromise',
  'Mobile money and payment fraud',
  'Data theft by outsiders or insiders',
  'Website and application attacks',
  'Downtime from failed or stolen hardware',
];

export default function CybersecurityPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cybersecurity services',
    itemListElement: securityServices.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${site.url}/cybersecurity/${s.slug}`,
      name: s.title,
    })),
  };

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Cybersecurity', href: '/cybersecurity' }]}
        photo={photos.openPadlock}
        eyebrow="Cybersecurity"
        title="Protect your business, your data and your customers"
        intro="From testing and firewalls to forensics, backup and staff training, we secure the systems Ugandan organisations depend on, and help them respond when something goes wrong."
      >
        <Button href="/contact?topic=cybersecurity" variant="onDark" arrow>
          Request a security review
        </Button>
        <Button href="#services" variant="onDarkSecondary">
          Explore our services
        </Button>
      </PageHero>

      {/* Threat context */}
      <Section labelledBy="threats-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <Eyebrow>Why it matters</Eyebrow>
            <h2 id="threats-title" className="text-h2 font-extrabold tracking-tight sm:text-[2.25rem] sm:leading-[2.75rem]">
              Cyber threats are a business risk, not just an IT problem
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-7 text-steel">
              As more of Uganda’s business runs on computers, phones and the cloud, attacks have become more frequent and
              more costly. Most are not sophisticated: they exploit everyday gaps that can be closed.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {threats.map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-xl bg-mist p-4 text-ink">
                  <Icon name="shield" className="mt-0.5 size-5 shrink-0 text-navy" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="right" className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-[4/5]">
            <Image src={photos.analystScreens.src} alt={photos.analystScreens.alt} fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-6 font-display text-lg font-bold text-white">
              Find the gaps before attackers do.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section tone="mist" id="services" labelledBy="security-services-title">
        <SectionHeader
          id="security-services-title"
          eyebrow="What we do"
          title="Complete cybersecurity, from assessment to recovery"
          intro="Choose a single service or let us look after your whole security programme."
        />
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityServices.map((s) => (
            <li key={s.slug}>
              <SecurityCard service={s} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Framework */}
      <Section tone="midnight" labelledBy="framework-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <div className="relative">
          <SectionHeader
            id="framework-title"
            dark
            eyebrow="Our approach"
            title="A complete security lifecycle"
            intro="Our work follows the five functions of the internationally recognised NIST Cybersecurity Framework."
          />
          <ol data-stagger="" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {securityFramework.map((f, i) => (
              <li key={f.step} className="rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10">
                <span className="font-mono text-small text-signal-300">0{i + 1}</span>
                <h3 className="mt-2 text-h3 font-bold text-white">{f.step}</h3>
                <p className="mt-2 text-steel-200">{f.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Why us */}
      <Section labelledBy="why-security-title">
        <SectionHeader id="why-security-title" eyebrow="Why Cyntax" title="Security expertise you can talk to" />
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <li key={r.title} className="rounded-[var(--radius-card)] border border-line p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={r.icon} />
              </span>
              <h3 className="mt-5 text-h3 font-bold">{r.title}</h3>
              <p className="mt-2 text-steel">{r.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Not sure where you stand?"
        text="Start with a security review. We will assess your biggest risks and give you a clear, prioritised plan in plain language."
      />
      <JsonLd data={ld} />
    </>
  );
}
