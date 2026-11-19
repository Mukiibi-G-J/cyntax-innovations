import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { products } from '@/lib/products';
import { securityServices } from '@/lib/security';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

type Entry = { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly'; lastModified?: Date };

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Entry[] = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/team', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    ...services.filter((s) => !s.href).map((s) => ({ path: `/services/${s.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    { path: '/cybersecurity', priority: 0.9, changeFrequency: 'monthly' },
    ...securityServices.map((s) => ({ path: `/cybersecurity/${s.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    { path: '/products', priority: 0.9, changeFrequency: 'monthly' },
    ...products.map((p) => ({ path: `/products/${p.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, changeFrequency: 'yearly' as const, lastModified: new Date(p.date) })),
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: r.lastModified ?? now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
