import type { Metadata } from 'next';
import Link from 'next/link';
import { PostCard } from '@/components/Cards';
import { photos } from '@/lib/photos';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/ui/Icon';
import { PageHero, Section } from '@/components/ui/Section';
import { formatDate, sortedPosts } from '@/lib/posts';
import { team } from '@/lib/team';

export const metadata: Metadata = {
  title: 'Blog: Insights on Software, Cybersecurity & ERP',
  description:
    'Practical articles from the Cyntax Innovations team on cybersecurity, URA EFRIS, ERP and building software for businesses in Uganda.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog' },
};

const authorName = (slug: string) => team.find((t) => t.slug === slug)?.name;

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Blog', href: '/blog' }]}
        photo={photos.kampalaCity}
        eyebrow="Blog & insights"
        title="Practical advice on software, security and compliance"
        intro="Plain-language articles from our team to help Ugandan businesses make better technology decisions."
      />

      <Section labelledBy="featured-title">
        <h2 id="featured-title" className="sr-only">
          Latest article
        </h2>
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid gap-8 overflow-hidden rounded-3xl bg-navy p-8 text-white transition hover:bg-navy-700 sm:p-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <p className="flex flex-wrap items-center gap-2 text-small text-steel-200">
              <span className="rounded-full bg-signal px-2.5 py-0.5 font-medium text-midnight">Latest · {featured.category}</span>
              <time dateTime={featured.date}>{formatDate(featured.date)}</time>
            </p>
            <h3 className="mt-5 font-display text-[1.75rem] font-extrabold leading-tight text-white sm:text-[2.25rem]">{featured.title}</h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-steel-200">{featured.excerpt}</p>
          </div>
          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <span className="inline-flex items-center gap-2 font-display font-bold">
              Read article <Icon name="arrowRight" className="size-5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <h2 className="mt-16 text-h2 font-extrabold">More articles</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} authorName={authorName(p.author)} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="Have a question we have not answered?" text="Send it to us. We are always happy to share advice, and it might become our next article." />
    </>
  );
}
