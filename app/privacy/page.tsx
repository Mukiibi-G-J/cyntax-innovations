import type { Metadata } from 'next';
import { Container, PageHero } from '@/components/ui/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Cyntax Innovations collects, uses and protects personal information shared through this website.',
  alternates: { canonical: '/privacy' },
};

// NOTE: Plain-language starting point. Have it reviewed against Uganda's Data Protection
// and Privacy Act, 2019 before relying on it.
const sections = [
  {
    title: 'What we collect',
    body: 'When you use our contact form we collect your name, email address, the topic you choose and your message. We do not use advertising or tracking cookies on this website.',
  },
  {
    title: 'How we use it',
    body: 'We use your details only to respond to your enquiry and, if you become a client, to deliver our services. We never sell your information.',
  },
  {
    title: 'Who we share it with',
    body: 'Messages are delivered to us through our email provider. Our website is hosted with a cloud hosting provider. These providers process data on our behalf and only as needed to run the service.',
  },
  {
    title: 'How long we keep it',
    body: 'We keep enquiries for as long as needed to respond and to maintain a record of our correspondence, then delete them.',
  },
  {
    title: 'Your rights',
    body: `You can ask to see, correct or delete the personal information we hold about you. Email ${site.email} and we will respond promptly.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="We respect your privacy. This page explains, in plain language, what we collect through this website and how we use it."
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-h3 font-bold">{s.title}</h2>
                <p className="mt-3 text-steel">{s.body}</p>
              </div>
            ))}
            <p className="border-t border-line pt-6 text-small text-steel">
              {site.legalName}, {site.location}. Last updated November 2026.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
