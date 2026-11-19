import type { IconName } from '@/components/ui/Icon';
import { products } from './products';
import { securityServices } from './security';
import { serviceHref, services } from './services';

export type MenuLink = { label: string; href: string; description?: string; icon?: IconName };
export type MenuItem =
  | { label: string; href: string; kind: 'link' }
  | { label: string; kind: 'menu'; columns: 1 | 2; links: MenuLink[]; overview: { label: string; href: string } };

export const mainNav: MenuItem[] = [
  {
    label: 'About',
    kind: 'menu',
    columns: 1,
    links: [
      { label: 'About us', href: '/about', description: 'Our story, mission and values', icon: 'spark' },
      { label: 'Our team', href: '/team', description: 'The people building Cyntax', icon: 'users' },
      { label: 'Industries', href: '/about#industries', description: 'Who we work with', icon: 'store' },
    ],
    overview: { label: 'Get in touch', href: '/contact' },
  },
  {
    label: 'What we do',
    kind: 'menu',
    columns: 2,
    links: services.map((s) => ({ label: s.title, href: serviceHref(s), description: s.summary, icon: s.icon })),
    overview: { label: 'All services', href: '/services' },
  },
  {
    label: 'Cybersecurity',
    kind: 'menu',
    columns: 2,
    links: securityServices.map((s) => ({ label: s.title, href: `/cybersecurity/${s.slug}`, description: s.summary, icon: s.icon })),
    overview: { label: 'Cybersecurity overview', href: '/cybersecurity' },
  },
  {
    label: 'Products',
    kind: 'menu',
    columns: 1,
    links: products.map((p) => ({ label: p.name, href: `/products/${p.slug}`, description: p.tagline, icon: p.icon })),
    overview: { label: 'All products', href: '/products' },
  },
  { label: 'Blog', href: '/blog', kind: 'link' },
  { label: 'Contact', href: '/contact', kind: 'link' },
];
