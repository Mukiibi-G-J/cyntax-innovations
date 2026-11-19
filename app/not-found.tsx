import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = { title: 'Page not found', robots: { index: false } };
import { Container, Eyebrow } from '@/components/ui/Section';

export default function NotFound() {
  return (
    <section className="bg-mist">
      <Container className="py-24 sm:py-32">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="text-h1 font-extrabold tracking-tight sm:text-[3.25rem] sm:leading-[3.5rem]">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-steel">
          The link may be out of date or the page may have moved. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" arrow>
            Go to homepage
          </Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
