import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import ProcessSteps from '@/components/ProcessSteps';
import Button from '@/components/ui/Button';
import Icon, { type IconName } from '@/components/ui/Icon';
import { Eyebrow, PageHero, Section, SectionHeader } from '@/components/ui/Section';
import { products } from '@/lib/products';
import { industries, serviceHref, services } from '@/lib/services';
import { photos } from '@/lib/photos';
import { site } from '@/lib/site';
import { team } from '@/lib/team';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Cyntax Innovations is a Uganda-registered technology company in Kampala building secure software, ERP and digital infrastructure for African businesses. Learn about our mission, values and team.',
  alternates: { canonical: '/about' },
  openGraph: { url: '/about' },
};

const values: { icon: IconName; title: string; text: string }[] = [
  { icon: 'spark', title: 'Open to new ideas', text: 'Like the open C in our logo, we stay curious and look for better ways to solve old problems.' },
  { icon: 'shield', title: 'Secure by default', text: 'We treat your data like our own. Security is part of every design decision, not an afterthought.' },
  { icon: 'code', title: 'Craft in the details', text: 'Clean code, clear documentation and interfaces people enjoy using.' },
  { icon: 'users', title: 'Partners, not vendors', text: 'We work alongside your team, explain our choices and share what we know.' },
];

const facts = [
  { label: 'Founded', value: site.founded },
  { label: 'Headquarters', value: 'Kampala' },
  { label: 'Products', value: String(products.length) },
  { label: 'Services', value: String(services.length) },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'About us', href: '/about' }]}
        photo={photos.kampalaSkyline}
        eyebrow="About us"
        title="Building the secure digital infrastructure African businesses run on"
        intro="Cyntax Innovations is a Uganda-registered technology company. We combine strong engineering and cybersecurity skills with a real understanding of how business works here, to deliver software that works reliably, at scale and in the real world."
      >
        <Button href="/team" variant="onDarkSecondary">
          Meet the team
        </Button>
      </PageHero>

      {/* Mission & vision */}
      <Section labelledBy="mission-title">
        <h2 id="mission-title" className="sr-only">
          Mission and vision
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-navy p-8 text-white sm:p-10">
            <Eyebrow dark>Our mission</Eyebrow>
            <p className="font-display text-[1.5rem] font-bold leading-snug">
              To help businesses across Africa run better on technology that is secure, reliable and built for how they actually work.
            </p>
          </div>
          <div className="rounded-3xl bg-mist p-8 sm:p-10">
            <Eyebrow>Our vision</Eyebrow>
            <p className="font-display text-[1.5rem] font-bold leading-snug text-navy">
              A continent where every growing business has access to world-class software and the security to trust it.
            </p>
          </div>
        </div>
      </Section>

      {/* Story */}
      <Section tone="mist" labelledBy="story-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader id="story-title" eyebrow="Our story" title="Why we started Cyntax" />
            <div className="-mt-4 space-y-5 text-[1.0625rem] leading-7 text-steel">
              <p>
                Too many businesses in Uganda are held back by software that was never designed for them: systems that
                ignore local tax rules, break when the internet drops, or cost more to maintain than they save.
              </p>
              <p>
                We started Cyntax Innovations (Cyntax, spelled with a C) in {site.founded} to change that. We build and support software, ERP and
                integrations that fit how East African businesses really operate, from URA EFRIS compliance to mobile
                money, and we stay with our clients long after launch.
              </p>
              <p>
                As more of Uganda’s business moves online, the risks grow too. That is why security sits at the heart of
                Cyntax: our engineering is led by a developer specialising in cybersecurity, so the systems we build are
                designed to protect your business and your customers’ data from the start.
              </p>
            </div>
          </div>
          <div className="space-y-4 self-start lg:col-span-5">
          <div data-reveal="right" className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={photos.officeTeam.src} alt={photos.officeTeam.alt} fill sizes="(min-width: 1024px) 440px, 100vw" className="object-cover" />
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-[var(--radius-card)] bg-white p-5 shadow-sm">
                <dt className="text-small text-steel">{f.label}</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section labelledBy="whatwedo-title">
        <SectionHeader id="whatwedo-title" eyebrow="What we do" title="Services and products under one roof" />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-sans text-small font-semibold uppercase tracking-[0.12em] text-steel">Services</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s)} className="group flex items-center gap-4 py-4">
                    <Icon name={s.icon} className="size-5 shrink-0 text-navy" />
                    <span className="flex-1 font-display font-bold text-navy">{s.title}</span>
                    <Icon name="arrowRight" className="size-4 text-steel transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-small font-semibold uppercase tracking-[0.12em] text-steel">Products</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="group flex items-center gap-4 py-4">
                    <Icon name={p.icon} className="size-5 shrink-0 text-navy" />
                    <span className="flex-1">
                      <span className="block font-display font-bold text-navy">{p.name}</span>
                      <span className="block text-small text-steel">{p.tagline}</span>
                    </span>
                    <Icon name="arrowRight" className="size-4 text-steel transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="mist" labelledBy="values-title">
        <SectionHeader id="values-title" eyebrow="What we stand for" title="Our values" />
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-[var(--radius-card)] bg-white p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={v.icon} />
              </span>
              <h3 className="mt-5 text-h3 font-bold">{v.title}</h3>
              <p className="mt-2 text-steel">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Industries */}
      <Section id="industries" labelledBy="industries-title">
        <SectionHeader id="industries-title" eyebrow="Industries" title="Who we work with" />
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <li key={i.title} className="flex gap-4 rounded-[var(--radius-card)] border border-line p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-mist text-navy">
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

      {/* How we work */}
      <Section tone="mist" labelledBy="process-title">
        <SectionHeader id="process-title" eyebrow="How we work" title="A clear process, from first call to long-term support" />
        <ProcessSteps />
      </Section>

      {/* Team teaser */}
      <Section labelledBy="team-title">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader id="team-title" eyebrow="Leadership" title="The people behind Cyntax" />
          <Button href="/team" variant="secondary" arrow className="mb-10 sm:mb-14">
            Meet the team
          </Button>
        </div>
        <ul data-stagger="" className="grid gap-6 lg:grid-cols-2">
          {team.map((m) => (
            <li key={m.slug} className="flex gap-5 rounded-[var(--radius-card)] border border-line p-6">
              <span aria-hidden="true" className="inline-flex size-16 shrink-0 items-center justify-center rounded-2xl bg-navy font-display text-xl font-extrabold text-white">
                {m.initials}
              </span>
              <div>
                <h3 className="text-h3 font-bold">{m.name}</h3>
                <p className="text-small font-medium text-steel">{m.role}</p>
                <p className="mt-3 text-steel">{m.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="Let's build something that lasts" />
    </>
  );
}
