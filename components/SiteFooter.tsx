import Link from 'next/link';
import Logo from './Logo';
import { Container } from './ui/Section';
import { products } from '@/lib/products';
import { securityServices } from '@/lib/security';
import { serviceHref, services } from '@/lib/services';
import { formatPhone, site } from '@/lib/site';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our team', href: '/team' },
      { label: 'Industries', href: '/about#industries' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  { title: 'What we do', links: services.map((s) => ({ label: s.title, href: serviceHref(s) })) },
  {
    title: 'Cybersecurity',
    links: [
      ...securityServices.map((s) => ({ label: s.title.split(' & ')[0].split(',')[0], href: `/cybersecurity/${s.slug}` })),
    ],
  },
  {
    title: 'Products',
    links: [...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })), { label: 'All products', href: '/products' }],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Privacy policy', href: '/privacy' },
    ],
  },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-midnight text-steel-200">
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo variant="reverse" width={172} />
          <p className="mt-6 max-w-xs text-small">{site.tagline}</p>
          <address className="mt-6 space-y-2 text-small not-italic">
            <p>
              <a href={`mailto:${site.email}`} className="text-white underline decoration-signal underline-offset-4 hover:decoration-2">
                {site.email}
              </a>
            </p>
            {site.whatsapp && (
              <p>
                <a href={`tel:+${site.whatsapp}`} className="hover:text-white">
                  {formatPhone(site.whatsapp)}
                </a>
              </p>
            )}
            <p>{site.location}</p>
          </address>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 xl:grid-cols-5">
          {columns.map((col) => (
            <nav key={col.title} aria-label={`Footer: ${col.title}`}>
              <h2 className="font-display text-small font-bold text-white">{col.title}</h2>
              <ul className="mt-4 space-y-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block py-1.5 text-small hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Registered in Uganda · Photography:{' '}
            <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              Unsplash
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
