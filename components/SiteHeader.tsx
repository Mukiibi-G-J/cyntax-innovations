'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import Icon from './ui/Icon';
import { buttonClass } from './ui/Button';
import { Container } from './ui/Section';
import { mainNav, type MenuItem } from '@/lib/nav';

const isActivePath = (pathname: string, href: string) => {
  const path = href.split('#')[0];
  return path !== '/' && (pathname === path || pathname.startsWith(`${path}/`));
};

const menuIsActive = (pathname: string, item: MenuItem) =>
  item.kind === 'link'
    ? isActivePath(pathname, item.href)
    : isActivePath(pathname, item.overview.href) || item.links.some((l) => isActivePath(pathname, l.href));

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close everything when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (openMenu) {
        document.getElementById(`menu-btn-${openMenu}`)?.focus();
        setOpenMenu(null);
      } else setMobileOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [openMenu, mobileOpen]);

  const id = (label: string) => label.toLowerCase().replace(/\s+/g, '-');

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled || mobileOpen || openMenu ? 'border-line shadow-[0_1px_12px_-6px_rgb(15_43_91/0.25)]' : 'border-transparent'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo priority />

        <nav ref={navRef} aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = menuIsActive(pathname, item);
              const activeBar =
                'aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:-bottom-[19px] aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-signal';
              if (item.kind === 'link') {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative block rounded-lg px-3 py-2 text-small font-medium text-ink hover:bg-mist hover:text-navy ${activeBar}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const key = id(item.label);
              const open = openMenu === key;
              return (
                <li key={item.label} className="relative">
                  <button
                    id={`menu-btn-${key}`}
                    type="button"
                    aria-expanded={open}
                    aria-controls={`menu-${key}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpenMenu(open ? null : key)}
                    className={`relative flex items-center gap-1 rounded-lg px-3 py-2 text-small font-medium text-ink hover:bg-mist hover:text-navy aria-expanded:bg-mist aria-expanded:text-navy ${activeBar}`}
                  >
                    {item.label}
                    <Icon name="chevronDown" className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} strokeWidth={2} />
                  </button>
                  {open && (
                    <div
                      id={`menu-${key}`}
                      className={`absolute left-1/2 top-[calc(100%+14px)] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-[0_24px_48px_-16px_rgb(15_43_91/0.3)] ring-1 ring-line ${
                        item.columns === 2 ? 'w-[40rem]' : 'w-[22rem]'
                      }`}
                    >
                      <ul className={`grid gap-1 ${item.columns === 2 ? 'grid-cols-2' : ''}`}>
                        {item.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} onClick={() => setOpenMenu(null)} className="flex gap-3 rounded-xl p-3 hover:bg-mist">
                              {l.icon && (
                                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-mist text-navy">
                                  <Icon name={l.icon} className="size-5" />
                                </span>
                              )}
                              <span>
                                <span className="block font-display text-small font-bold text-navy">{l.label}</span>
                                {l.description && <span className="mt-0.5 block text-[0.8125rem] leading-5 text-steel">{l.description}</span>}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={item.overview.href}
                        onClick={() => setOpenMenu(null)}
                        className="mt-2 flex items-center justify-between rounded-xl bg-mist px-4 py-3 text-small font-semibold text-navy hover:bg-navy hover:text-white"
                      >
                        {item.overview.label}
                        <Icon name="arrowRight" className="size-4" />
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className={buttonClass('primary', 'min-h-11 py-2.5')}>
            Start a project
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-12 items-center justify-center rounded-lg text-navy hover:bg-mist lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <Icon name={mobileOpen ? 'close' : 'menu'} />
        </button>
      </Container>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Main" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <Container className="py-4">
            <ul className="flex flex-col divide-y divide-line">
              {mainNav.map((item) => {
                if (item.kind === 'link') {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        aria-current={menuIsActive(pathname, item) ? 'page' : undefined}
                        className="flex min-h-14 items-center px-1 font-display text-lg font-bold text-navy"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                const key = id(item.label);
                const open = mobileSection === key;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`m-${key}`}
                      onClick={() => setMobileSection(open ? null : key)}
                      className="flex min-h-14 w-full items-center justify-between px-1 font-display text-lg font-bold text-navy"
                    >
                      {item.label}
                      <Icon name="chevronDown" className={`size-5 transition-transform ${open ? 'rotate-180' : ''}`} strokeWidth={2} />
                    </button>
                    {open && (
                      <ul id={`m-${key}`} className="pb-3">
                        {[...item.links, { label: item.overview.label, href: item.overview.href }].map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              onClick={() => setMobileOpen(false)}
                              aria-current={isActivePath(pathname, l.href) ? 'page' : undefined}
                              className="flex min-h-11 items-center rounded-lg px-3 text-ink hover:bg-mist aria-[current=page]:bg-mist aria-[current=page]:font-semibold aria-[current=page]:text-navy"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <Link href="/contact" className={buttonClass('primary', 'mt-4 w-full')}>
              Start a project
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
