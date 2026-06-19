import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1f12] border-t border-[rgba(0,255,127,0.12)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/cyntax_logo.png"
              alt="CYNTAX INNOVATIONS"
              width={140}
              height={36}
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-widest text-white/50 hover:text-[#00CC65] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="font-mono text-xs text-white/30 tracking-wide">
            © 2025 CYNTAX INNOVATIONS. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20 tracking-wide">Registered in Uganda.</p>
        </div>
      </div>
    </footer>
  );
}
