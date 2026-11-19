import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { photos } from '@/lib/photos';
import Icon from '@/components/ui/Icon';
import { Container, Eyebrow } from '@/components/ui/Section';
import { formatPhone, site, whatsappLink } from '@/lib/site';
import { WhatsAppGlyph } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Talk to Cyntax Innovations about custom software, Business Central ERP, integrations or ZentroApp. Based in Kampala, Uganda.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
};

const nextSteps = [
  'We read your message and reply by email.',
  'We book a short call to understand your goals.',
  'You receive a clear proposal with scope, timeline and cost.',
];

export default async function ContactPage({ searchParams }: PageProps<'/contact'>) {
  const { topic } = await searchParams;
  return (
    <section aria-labelledby="contact-title" className="bg-mist">
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 id="contact-title" className="text-h1 font-extrabold tracking-tight sm:text-[3.25rem] sm:leading-[3.5rem]">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-5 text-lg leading-8 text-steel">
            Tell us a little about what you need. There is no obligation, and we are happy to give advice even if you
            are just exploring.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-navy shadow-card">
                <Icon name="mail" />
              </span>
              <div>
                <p className="text-small text-steel">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-navy underline decoration-signal decoration-2 underline-offset-4 hover:decoration-navy"
                >
                  {site.email}
                </a>
              </div>
            </li>
            {site.whatsapp && (
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-navy shadow-card">
                  <WhatsAppGlyph className="size-5" />
                </span>
                <div>
                  <p className="text-small text-steel">Call or WhatsApp</p>
                  <p className="font-medium">
                    <a href={`tel:+${site.whatsapp}`} className="text-navy underline decoration-signal decoration-2 underline-offset-4 hover:decoration-navy">
                      {formatPhone(site.whatsapp)}
                    </a>
                    <span className="text-steel"> · </span>
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-navy underline decoration-signal decoration-2 underline-offset-4 hover:decoration-navy">
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </li>
            )}
            <li className="flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-navy shadow-card">
                <Icon name="pin" />
              </span>
              <div>
                <p className="text-small text-steel">Office</p>
                <p className="font-medium text-ink">{site.location}</p>
              </div>
            </li>
          </ul>

          <figure className="relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl">
            <Image src={photos.kampalaCity.src} alt={photos.kampalaCity.alt} fill sizes="(min-width: 1024px) 440px, 100vw" className="object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5 pt-12 text-small font-medium text-white">
              Based in Kampala, working with clients across Uganda and Africa
            </figcaption>
          </figure>

          <div className="mt-10 border-t border-line pt-8">
            <h2 className="text-h3 font-bold">What happens next</h2>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-steel">
                  <span className="font-mono text-small font-medium text-navy">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-line sm:p-10">
            <h2 className="text-h3 font-bold">Send us a message</h2>
            <p className="mt-1 text-small text-steel">All fields are required.</p>
            <ContactForm initialTopic={typeof topic === 'string' ? topic : ''} />
          </div>
        </div>
      </Container>
    </section>
  );
}
