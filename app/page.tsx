import { PostCard, ProductCard, ServiceCard } from '@/components/Cards';
import CtaBand from '@/components/CtaBand';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import PhotoBand from '@/components/PhotoBand';
import { photos } from '@/lib/photos';
import CountUp from '@/components/motion/CountUp';
import Marquee from '@/components/motion/Marquee';
import ProcessSteps from '@/components/ProcessSteps';
import Button from '@/components/ui/Button';
import Icon, { type IconName } from '@/components/ui/Icon';
import { Container, Eyebrow, Section, SectionHeader } from '@/components/ui/Section';
import { sortedPosts } from '@/lib/posts';
import { products } from '@/lib/products';
import { industries, services } from '@/lib/services';
import { team } from '@/lib/team';

const platforms = ['Microsoft Business Central', 'URA EFRIS', 'Mobile money', 'NSSF', 'OWASP', 'React & Next.js', 'React Native', 'Django', 'n8n'];

const securityPractices: { icon: IconName; title: string; text: string }[] = [
  { icon: 'code', title: 'Secure code', text: 'Code reviewed against OWASP Top 10 risks before it ships.' },
  { icon: 'users', title: 'Least-privilege access', text: 'Strong authentication and role-based permissions for every user.' },
  { icon: 'shield', title: 'Encrypted data', text: 'Data protected in transit and at rest, with tested backups.' },
  { icon: 'chart', title: 'Monitored systems', text: 'Logging and alerts so problems are caught early, not after the damage.' },
];

const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: 'pin', title: 'Local know-how', text: 'Based in Kampala. We build for URA, EFRIS, NSSF and mobile money from day one.' },
  { icon: 'shield', title: 'Security first', text: 'Engineering led by a cybersecurity specialist. Security is designed in, not bolted on.' },
  { icon: 'users', title: 'Straight talk', text: 'Clear scope, honest estimates and a direct line to the people building your system.' },
  { icon: 'chart', title: 'Focused on results', text: 'We measure success by the time and money our work saves your business.' },
];

/** Section header with a "see all" button aligned to the right on larger screens. */
function HeaderWithLink({
  id,
  eyebrow,
  title,
  intro,
  href,
  label,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  href: string;
  label: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end sm:gap-6">
      <SectionHeader id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <Button href={href} variant="secondary" arrow className="mb-10 shrink-0 self-start sm:mb-14 sm:self-auto">
        {label}
      </Button>
    </div>
  );
}

export default function Home() {
  const cto = team[0];
  return (
    <>
      <HeroSlider />

      {/* Platforms ticker */}
      <section aria-labelledby="platforms-title" className="bg-white pb-6 pt-12">
        <Container>
          <h2 id="platforms-title" className="mb-6 text-center font-sans text-small font-medium text-steel">
            Platforms and standards we work with
          </h2>
        </Container>
        <Marquee items={platforms} label="Platforms and standards" />
      </section>

      {/* About us */}
      <Section labelledBy="about-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <Eyebrow>About us</Eyebrow>
            <h2 id="about-title" className="text-h2 font-extrabold tracking-tight sm:text-[2.25rem] sm:leading-[2.75rem]">
              A Ugandan technology company built on engineering and security
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-7 text-steel">
              Cyntax Innovations is a Kampala-based, Uganda-registered technology company. We exist to help businesses
              across Africa run better on technology that is secure, reliable and built for how they actually work.
            </p>
            <p className="mt-4 text-[1.0625rem] leading-7 text-steel">
              We combine client services with our own products, so we understand both sides: what it takes to build
              great software, and what it takes to run it every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about" arrow>
                More about us
              </Button>
              <Button href="/team" variant="secondary">
                Meet the team
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div data-reveal="right" className="relative col-span-2 flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl bg-navy p-8 text-white">
              <Image src={photos.boardroom.src} alt={photos.boardroom.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/10" />
              <p className="relative font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-steel-200">Our mission</p>
              <p className="relative mt-3 font-display text-xl font-bold leading-snug">
                Help African businesses run on technology that is secure, reliable and built for them.
              </p>
            </div>
            {[
              { v: services.length, l: 'Core services' },
              { v: products.length, l: 'Products built' },
              { v: industries.length, l: 'Industries served' },
              { v: 100, suffix: '%', l: 'Ugandan-owned & Kampala-based' },
            ].map((f, i) => (
              <div key={f.l} data-reveal="zoom" data-delay={String(i * 90)} className="rounded-3xl bg-mist p-6 transition hover:-translate-y-1 hover:shadow-card">
                <p className="font-display text-4xl font-extrabold text-navy">
                  <CountUp to={f.v} suffix={f.suffix} />
                </p>
                <p className="mt-1 text-small text-steel">{f.l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section tone="mist" labelledBy="services-title">
        <HeaderWithLink
          id="services-title"
          eyebrow="What we do"
          title="Everything you need to build, run and protect your systems"
          intro="From a single integration to a full ERP rollout or security programme, we cover the whole journey."
          href="/services"
          label="All services"
        />
        <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Security by design */}
      <Section tone="midnight" labelledBy="security-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <div aria-hidden="true" className="absolute -left-40 top-1/3 size-[30rem] animate-drift rounded-full bg-signal/15 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              id="security-title"
              dark
              eyebrow="Secure by design"
              title="Security built into everything we deliver"
              intro="Our engineering is led by a software developer completing a Master’s in Cybersecurity. Every system we build follows secure development practice from day one, and we help you protect the systems you already have."
            />
            <div className="-mt-4 flex flex-wrap gap-3">
              <Button href="/cybersecurity" variant="onDark" arrow>
                Cybersecurity services
              </Button>
              <Button href="/contact?topic=cybersecurity" variant="onDarkSecondary">
                Request a security review
              </Button>
            </div>
          </div>
          <ul data-stagger="" className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {securityPractices.map((p) => (
              <li key={p.title} className="rounded-[var(--radius-card)] bg-white/[0.05] p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.09] hover:ring-signal/50">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-signal text-midnight">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mt-5 text-h3 font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-steel-200">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Products */}
      <Section labelledBy="products-title">
        <HeaderWithLink
          id="products-title"
          eyebrow="Our products"
          title="Platforms we build and run"
          intro="Our own software, built for sectors we know well and secured by the same team."
          href="/products"
          label="All products"
        />
        <ul data-stagger="" className="grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Kampala photo band */}
      <PhotoBand photo={photos.kampalaSunset} labelledBy="kampala-title">
        <div data-reveal="left" className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2.5 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-steel-200">
            <span aria-hidden="true" className="h-4 w-1 rounded-full bg-signal" />
            Kampala, Uganda
          </p>
          <h2 id="kampala-title" className="text-h2 font-extrabold tracking-tight text-white sm:text-[2.75rem] sm:leading-[3.25rem]">
            Built in Kampala. Ready for the rest of Africa.
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel-200">
            We know the realities of doing business here, from URA EFRIS and mobile money to unreliable connections,
            and we build technology that thrives in them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" variant="onDark" arrow>
              Our story
            </Button>
            <Button href="/contact" variant="onDarkSecondary">
              Visit or call us
            </Button>
          </div>
        </div>
      </PhotoBand>

      {/* Process */}
      <Section tone="mist" labelledBy="process-title">
        <SectionHeader id="process-title" eyebrow="How we work" title="A clear process, from first call to long-term support" />
        <ProcessSteps />
      </Section>

      {/* Why us */}
      <Section tone="navy" labelledBy="why-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <div className="relative">
        <SectionHeader id="why-title" dark eyebrow="Why Cyntax" title="A technology partner that understands how business works here" />
        <ul data-stagger="" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <li key={r.title} className="rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.1] hover:ring-signal/50">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-signal text-midnight">
                <Icon name={r.icon} />
              </span>
              <h3 className="mt-5 text-h3 font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-steel-200">{r.text}</p>
            </li>
          ))}
        </ul>
        </div>
      </Section>

      {/* Team */}
      {cto && (
        <Section labelledBy="team-title">
          <div data-reveal="" className="bg-dots-navy grid items-center gap-10 rounded-3xl bg-mist p-6 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span
                aria-hidden="true"
                className="flex aspect-square w-full max-w-56 items-center justify-center rounded-3xl bg-navy font-display text-6xl font-extrabold text-white"
              >
                {cto.initials}
              </span>
            </div>
            <div className="lg:col-span-8">
              <Eyebrow>Our team</Eyebrow>
              <h2 id="team-title" className="text-h2 font-extrabold tracking-tight">
                Led by engineers who build and secure systems every day
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-7 text-steel">{cto.bio}</p>
              <p className="mt-4 font-display font-bold text-navy">
                {cto.name} <span className="font-sans font-medium text-steel">· {cto.role}</span>
              </p>
              <div className="mt-6">
                <Button href="/team" variant="secondary" arrow>
                  Meet the team
                </Button>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Blog */}
      <Section tone="mist" labelledBy="blog-title">
        <HeaderWithLink id="blog-title" eyebrow="From the blog" title="Insights on software, security and compliance" href="/blog" label="All articles" />
        <ul data-stagger="" className="grid gap-5 md:grid-cols-3">
          {sortedPosts.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <PostCard post={p} authorName={team.find((t) => t.slug === p.author)?.name} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
