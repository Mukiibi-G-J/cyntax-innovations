import Image from 'next/image';
import Link from 'next/link';
import Icon from './ui/Icon';
import { photos, postPhoto, productPhoto, securityPhoto, servicePhoto, type PhotoKey } from '@/lib/photos';
import type { SecurityService } from '@/lib/security';
import type { Post } from '@/lib/posts';
import { formatDate } from '@/lib/posts';
import type { Product } from '@/lib/products';
import { serviceHref, type Service } from '@/lib/services';

const cardBase =
  'group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-card';

function More({ label }: { label: string }) {
  return (
    <span className="mt-5 inline-flex items-center gap-1.5 text-small font-semibold text-navy">
      {label}
      <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
    </span>
  );
}

/** Photo header that zooms gently on hover. Decorative: card text carries the meaning. */
function CardPhoto({ photo, className = 'h-44' }: { photo?: PhotoKey; className?: string }) {
  if (!photo) return null;
  return (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      <Image
        src={photos[photo].src}
        alt=""
        fill
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
    </div>
  );
}

export function ServiceCard({ service: s }: { service: Service }) {
  return (
    <Link href={serviceHref(s)} className={cardBase}>
      <CardPhoto photo={servicePhoto[s.slug]} />
      <div className="relative flex flex-1 flex-col p-6 pt-0">
        <span className="-mt-6 inline-flex size-12 items-center justify-center rounded-xl bg-navy text-white shadow-lg ring-4 ring-white">
          <Icon name={s.icon} />
        </span>
        <h3 className="mt-4 text-h3 font-bold">{s.title}</h3>
        <p className="mt-2 flex-1 text-steel">{s.summary}</p>
        <More label="Learn more" />
      </div>
    </Link>
  );
}

export function SecurityCard({ service: s }: { service: SecurityService }) {
  return (
    <Link href={`/cybersecurity/${s.slug}`} className={cardBase}>
      <CardPhoto photo={securityPhoto[s.slug]} className="h-40" />
      <div className="relative flex flex-1 flex-col p-6 pt-0">
        <span className="-mt-6 inline-flex size-12 items-center justify-center rounded-xl bg-navy text-white shadow-lg ring-4 ring-white">
          <Icon name={s.icon} />
        </span>
        <h3 className="mt-4 text-h3 font-bold">{s.title}</h3>
        <p className="mt-2 flex-1 text-steel">{s.summary}</p>
        <More label="Learn more" />
      </div>
    </Link>
  );
}

export function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link href={`/products/${p.slug}`} className={cardBase}>
      <CardPhoto photo={productPhoto[p.slug]} className="h-52" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy text-white">
            <Icon name={p.icon} />
          </span>
          <div>
            <h3 className="text-h3 font-bold">{p.name}</h3>
            <p className="text-[0.8125rem] font-medium text-steel">{p.category}</p>
          </div>
        </div>
        <p className="mt-4 flex-1 text-steel">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.name} highlights`}>
          {p.tags.map((t) => (
            <li key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-navy">
              {t}
            </li>
          ))}
        </ul>
        <More label={`Explore ${p.name}`} />
      </div>
    </Link>
  );
}

export function PostCard({ post: p, authorName }: { post: Post; authorName?: string }) {
  return (
    <Link href={`/blog/${p.slug}`} className={cardBase}>
      <CardPhoto photo={postPhoto[p.slug]} />
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-[0.8125rem] font-medium text-steel">
          <span className="rounded-full bg-mist px-2.5 py-0.5 text-navy">{p.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={p.date}>{formatDate(p.date)}</time>
        </p>
        <h3 className="mt-4 text-h3 font-bold">{p.title}</h3>
        <p className="mt-2 flex-1 text-steel">{p.excerpt}</p>
        <p className="mt-5 flex items-center justify-between text-small text-steel">
          <span>{authorName}</span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="clock" className="size-4" />
            {p.readMinutes} min read
          </span>
        </p>
      </div>
    </Link>
  );
}
