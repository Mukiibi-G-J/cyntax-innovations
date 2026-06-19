import type { Metadata } from 'next';
import { Space_Mono, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cyntaxinnovations.com'),
  title: {
    default: 'CYNTAX INNOVATIONS | Software Development & Digital Solutions — Uganda',
    template: '%s | CYNTAX INNOVATIONS',
  },
  description:
    "CYNTAX INNOVATIONS engineers custom software, enterprise systems, ERP solutions, and digital strategy for businesses in Uganda and across Africa. Builders of ZentroApp — Uganda's EFRIS-compliant POS platform.",
  keywords: [
    'software development Uganda',
    'tech company Uganda',
    'ERP Uganda',
    'Microsoft Dynamics 365 Uganda',
    'EFRIS POS Uganda',
    'ZentroApp',
    'digital solutions Africa',
    'custom software Kampala',
    'CYNTAX INNOVATIONS',
    'Business Central Uganda',
    'web development Uganda',
    'app development Uganda',
  ],
  authors: [{ name: 'CYNTAX INNOVATIONS', url: 'https://www.cyntaxinnovations.com' }],
  creator: 'CYNTAX INNOVATIONS',
  publisher: 'CYNTAX INNOVATIONS',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://www.cyntaxinnovations.com',
    siteName: 'CYNTAX INNOVATIONS',
    title: 'CYNTAX INNOVATIONS | Software Development & Digital Solutions — Uganda',
    description:
      'We engineer digital solutions that push boundaries. Software. Systems. Strategy. Uganda & Beyond.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CYNTAX INNOVATIONS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CYNTAX INNOVATIONS | Uganda Tech',
    description: 'We engineer digital solutions that push boundaries.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'ADD_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE',
  },
  alternates: {
    canonical: 'https://www.cyntaxinnovations.com',
  },
  icons: {
    icon: '/images/cyntax_icon.png',
    apple: '/images/cyntax_icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CYNTAX INNOVATIONS',
  url: 'https://www.cyntaxinnovations.com',
  logo: 'https://www.cyntaxinnovations.com/images/cyntax_logo.png',
  description: 'Uganda-based software development and digital solutions company.',
  foundingLocation: { '@type': 'Place', name: 'Kampala, Uganda' },
  areaServed: ['Uganda', 'Africa'],
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@cyntaxinnovations.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${inter.variable}`}
    >
      <body>
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
