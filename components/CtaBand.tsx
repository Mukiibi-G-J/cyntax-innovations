import Button from './ui/Button';
import { Container } from './ui/Section';

export default function CtaBand({
  title = 'Have a project in mind?',
  text = 'Tell us what you are trying to achieve. We will come back with honest advice, a clear plan and a quote.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-16 sm:py-24">
      <Container>
        <div data-reveal="zoom" className="relative overflow-hidden rounded-3xl rounded-br-[4rem] bg-navy px-6 py-12 sm:px-12 sm:py-16">
          <div aria-hidden="true" className="bg-dots absolute inset-0" />
          <div aria-hidden="true" className="absolute -bottom-32 -left-20 size-96 animate-drift rounded-full bg-signal/20 blur-3xl" />
          {/* Decorative: the open C ring from the badge, oversized */}
          <svg
            aria-hidden="true"
            viewBox="0 0 56 56"
            className="pointer-events-none absolute -right-16 -top-16 size-80 animate-float text-white/[0.06] sm:-right-8"
          >
            <path
              fill="currentColor"
              d="M37.874 15.626 A17.5 17.5 0 1 0 37.874 40.374 A3.5 3.5 0 0 0 32.925 35.425 A10.5 10.5 0 1 1 32.925 20.575 A3.5 3.5 0 0 0 37.874 15.626Z"
            />
          </svg>
          <div className="relative max-w-2xl">
            <h2 id="cta-title" className="text-h2 font-extrabold text-white sm:text-[2.25rem] sm:leading-[2.75rem]">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-steel-200">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="onDark" arrow>
                Start a project
              </Button>
              <Button href="/services" variant="onDarkSecondary">
                See our services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
