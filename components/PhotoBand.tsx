import type { Photo } from '@/lib/photos';
import { Container } from './ui/Section';

/**
 * Full-width photo band with a parallax effect on large screens
 * (background-attachment: fixed is skipped on touch devices, where it is unreliable).
 */
export default function PhotoBand({
  photo,
  children,
  labelledBy,
}: {
  photo: Photo;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section aria-labelledby={labelledBy} className="relative isolate overflow-hidden">
      <div
        role="img"
        aria-label={photo.alt}
        className="absolute inset-0 -z-10 bg-cover bg-center lg:bg-fixed"
        style={{ backgroundImage: `url("${photo.src}")` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight/95 via-navy/85 to-navy/40" />
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10" />
      <Container className="py-24 text-white sm:py-32">{children}</Container>
    </section>
  );
}
