import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { photos, postPhoto } from '@/lib/photos';
import { PostCard } from '@/components/Cards';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/ui/Icon';
import { Container, Section } from '@/components/ui/Section';
import { type Block, formatDate, getPost, sortedPosts } from '@/lib/posts';
import { site } from '@/lib/site';
import { team } from '@/lib/team';

export const dynamicParams = false;

export function generateStaticParams() {
  return sortedPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const author = team.find((t) => t.slug === p.author);
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    authors: author ? [{ name: author.name }] : undefined,
    openGraph: { type: 'article', url: `/blog/${p.slug}`, title: p.title, description: p.excerpt, publishedTime: p.date },
  };
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case 'h2':
      return (
        <h2 key={i} className="mt-12 text-h2 font-extrabold tracking-tight">
          {b.text}
        </h2>
      );
    case 'p':
      return (
        <p key={i} className="mt-5">
          {b.text}
        </p>
      );
    case 'ul':
    case 'ol': {
      const List = b.type;
      return (
        <List key={i} className={`mt-5 space-y-2 pl-6 marker:text-navy ${b.type === 'ul' ? 'list-disc' : 'list-decimal'}`}>
          {b.items.map((it) => (
            <li key={it} className="pl-1">
              {it}
            </li>
          ))}
        </List>
      );
    }
    case 'callout':
      return (
        <aside key={i} className="mt-8 rounded-2xl border-l-4 border-signal bg-mist p-6">
          <p className="font-display font-bold text-navy">{b.title}</p>
          <p className="mt-2 text-[1rem] leading-7">{b.text}</p>
        </aside>
      );
  }
}

export default async function PostPage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const author = team.find((t) => t.slug === p.author);
  const related = sortedPosts.filter((x) => x.slug !== p.slug).slice(0, 2);

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    dateModified: p.date,
    url: `${site.url}/blog/${p.slug}`,
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
    author: author ? { '@type': 'Person', name: author.name, jobTitle: author.role } : undefined,
    publisher: { '@id': `${site.url}/#organization` },
    articleSection: p.category,
    inLanguage: 'en',
  };

  return (
    <>
      <article>
        <header className="border-b border-line bg-mist">
          <Container className="py-12 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: p.title, href: `/blog/${p.slug}` },
                ]}
              />
              <h1 className="text-h1 font-extrabold tracking-tight sm:text-[3rem] sm:leading-[3.375rem]">{p.title}</h1>
              <p className="mt-5 text-lg leading-8 text-steel">{p.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-small text-steel">
                {author && (
                  <span className="flex items-center gap-3">
                    <span aria-hidden="true" className="inline-flex size-10 items-center justify-center rounded-xl bg-navy font-display font-extrabold text-white">
                      {author.initials}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{author.name}</span>
                      {author.role}
                    </span>
                  </span>
                )}
                <time dateTime={p.date}>{formatDate(p.date)}</time>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="clock" className="size-4" /> {p.readMinutes} min read
                </span>
              </div>
            </div>
          </Container>
        </header>

        {postPhoto[p.slug] && (
          <Container className="pt-10 sm:pt-14">
            <div className="relative mx-auto aspect-[21/9] max-w-4xl overflow-hidden rounded-3xl bg-mist">
              <Image
                src={photos[postPhoto[p.slug]].src}
                alt={photos[postPhoto[p.slug]].alt}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          </Container>
        )}

        <Container className="py-12 sm:py-16">
          <div className="mx-auto max-w-[68ch] text-[1.0625rem] leading-8 text-ink">{p.body.map(renderBlock)}</div>

          {author && (
            <div className="mx-auto mt-16 flex max-w-3xl gap-5 rounded-3xl border border-line p-6 sm:p-8">
              <span aria-hidden="true" className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-navy font-display text-lg font-extrabold text-white">
                {author.initials}
              </span>
              <div>
                <p className="text-small text-steel">Written by</p>
                <p className="font-display text-h3 font-bold text-navy">{author.name}</p>
                <p className="text-small font-medium text-steel">{author.role}</p>
                <p className="mt-3 text-steel">{author.bio}</p>
                <Link href={`/team#${author.slug}`} className="mt-3 inline-block text-small font-semibold text-navy underline decoration-signal underline-offset-4">
                  View profile
                </Link>
              </div>
            </div>
          )}
        </Container>
      </article>

      {related.length > 0 && (
        <Section tone="mist" labelledBy="related-title">
          <h2 id="related-title" className="mb-8 text-h2 font-extrabold">
            Keep reading
          </h2>
          <ul data-stagger="" className="grid gap-5 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <PostCard post={r} authorName={team.find((t) => t.slug === r.author)?.name} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CtaBand />
      <JsonLd data={ld} />
    </>
  );
}
