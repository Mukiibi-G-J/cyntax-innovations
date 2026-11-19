import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollEffects from '@/components/motion/ScrollEffects';
import { site } from '@/lib/site';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Cyntax Innovations | Software, Cybersecurity & ERP in Uganda',
    template: '%s | Cyntax Innovations',
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: '/',
    siteName: site.name,
    title: 'Cyntax Innovations | Software, ERP & Digital Solutions in Uganda',
    description: site.tagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyntax Innovations',
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: '#0F2B5B',
  width: 'device-width',
  initialScale: 1,
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/brand/icon-512.png`,
      image: `${site.url}/brand/cyntax-social-avatar-800.png`,
      description: site.description,
      foundingDate: site.founded,
      founder: { '@type': 'Person', name: 'Joseph Mukiibi', jobTitle: 'Co-Founder & CTO' },
      knowsAbout: ['Software development', 'Cybersecurity', 'ERP', 'Microsoft Dynamics 365 Business Central', 'URA EFRIS'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kampala',
        addressCountry: 'UG',
      },
      areaServed: ['Uganda', 'Africa'],
      email: site.email,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        areaServed: 'UG',
        availableLanguage: ['en'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        {/* Mark JS as available before first paint so scroll-reveal never flashes content. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        <ScrollEffects />
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
