import Link from 'next/link';
import JsonLd from './JsonLd';
import { site } from '@/lib/site';

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const all = [{ label: 'Home', href: '/' }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-small ${dark ? 'text-steel-200' : 'text-steel'}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className={`font-medium ${dark ? 'text-white' : 'text-ink'}`}>
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className={`underline-offset-4 hover:underline ${dark ? 'hover:text-white' : 'hover:text-navy'}`}>
                      {c.label}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            item: `${site.url}${c.href === '/' ? '' : c.href}`,
          })),
        }}
      />
    </>
  );
}
