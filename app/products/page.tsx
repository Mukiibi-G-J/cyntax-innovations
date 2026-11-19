import type { Metadata } from 'next';
import { ProductCard } from '@/components/Cards';
import { photos } from '@/lib/photos';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/ui/Icon';
import { PageHero, Section, SectionHeader } from '@/components/ui/Section';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Our Products: ZentroApp, Saccolla & MediLink',
  description:
    'Software products built in Uganda by Cyntax Innovations: ZentroApp POS and inventory, Saccolla SACCO management and MediLink healthcare platform.',
  alternates: { canonical: '/products' },
  openGraph: { url: '/products' },
};

const principles = [
  { title: 'Built for local realities', text: 'URA EFRIS, mobile money and unreliable connections are designed in from day one.' },
  { title: 'Secure by default', text: 'Role-based access, encryption and audit trails in every product.' },
  { title: 'Supported locally', text: 'Training and support from the team that builds the software, here in Kampala.' },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Products', href: '/products' }]}
        photo={photos.shopkeeperPhone}
        eyebrow="Our products"
        title="Software products built for African businesses"
        intro="Alongside client projects, we build and run our own platforms for sectors we know well: retail and hospitality, SACCOs and healthcare."
      />

      <Section labelledBy="products-title">
        <h2 id="products-title" className="sr-only">
          All products
        </h2>
        <ul data-stagger="" className="grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" labelledBy="principles-title">
        <SectionHeader id="principles-title" dark eyebrow="Our approach" title="What every Cyntax product has in common" />
        <ul data-stagger="" className="grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title} className="rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-signal text-midnight">
                <Icon name="check" className="size-4" strokeWidth={2.5} />
              </span>
              <h3 className="mt-4 text-h3 font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-steel-200">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="Need something we have not built yet?" text="Our products started as client problems. Tell us yours and we will design the right solution." />
    </>
  );
}
