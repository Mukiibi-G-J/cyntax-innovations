import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/Cards';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { Eyebrow, PageHero, Section, SectionHeader } from '@/components/ui/Section';
import { getProduct, products } from '@/lib/products';
import { photos, productPhoto } from '@/lib/photos';
import { site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/products/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.tagline}`,
    description: p.metaDescription,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { url: `/products/${p.slug}`, title: `${p.name} | ${site.name}`, description: p.metaDescription },
  };
}

export default async function ProductPage({ params }: PageProps<'/products/[slug]'>) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const others = products.filter((x) => x.slug !== p.slug);

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.name,
    applicationCategory: 'BusinessApplication',
    description: p.metaDescription,
    url: p.website ?? `${site.url}/products/${p.slug}`,
    publisher: { '@id': `${site.url}/#organization` },
    areaServed: 'UG',
  };

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'Products', href: '/products' },
          { label: p.name, href: `/products/${p.slug}` },
        ]}
        photo={photos[productPhoto[p.slug]]}
        eyebrow={p.category}
        title={`${p.name}: ${p.tagline.charAt(0).toLowerCase()}${p.tagline.slice(1)}`}
        intro={p.summary}
      >
        <Button href={`/contact?topic=${p.slug}`} variant="onDark" arrow>
          Book a demo
        </Button>
        {p.website && (
          <Button href={p.website} variant="onDarkSecondary" external>
            Visit {p.website.replace(/^https?:\/\//, '')}
          </Button>
        )}
      </PageHero>

      <Section labelledBy="about-product">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Overview</Eyebrow>
            <h2 id="about-product" className="text-h2 font-extrabold tracking-tight">
              About {p.name}
            </h2>
            <div className="mt-5 space-y-5 text-[1.0625rem] leading-7 text-steel">
              {p.overview.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-sans text-small font-semibold uppercase tracking-[0.12em] text-steel">Made for</h3>
            <ul className="mt-4 space-y-3">
              {p.audience.map((a) => (
                <li key={a.title} className="rounded-[var(--radius-card)] bg-mist p-5">
                  <p className="font-display font-bold text-navy">{a.title}</p>
                  <p className="mt-1 text-steel">{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="features-title">
        <SectionHeader id="features-title" eyebrow="Features" title={`What ${p.name} does`} />
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f) => (
            <li key={f.title} className="rounded-[var(--radius-card)] bg-white p-6 shadow-card">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-mist text-navy">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-5 text-h3 font-bold">{f.title}</h3>
              <p className="mt-2 text-steel">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="others-title">
        <SectionHeader id="others-title" eyebrow="More from Cyntax" title="Our other products" />
        <ul data-stagger="" className="grid gap-5 md:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <ProductCard product={o} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title={`See ${p.name} in action`} text={`Book a short demo and we will show you how ${p.name} fits your organisation.`} />
      <JsonLd data={ld} />
    </>
  );
}
