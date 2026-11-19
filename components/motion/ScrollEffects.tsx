'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Reveals any element with [data-reveal] as it scrolls into view.
 * Optional [data-delay="120"] staggers items in milliseconds.
 * Server components only need the attribute; no client wrapper required.
 */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const show = (el: Element) => el.setAttribute('data-shown', '');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    const scan = (root: ParentNode) => {
      // [data-stagger] on a list: each child reveals in turn.
      root.querySelectorAll('[data-stagger]:not([data-staggered])').forEach((list) => {
        list.setAttribute('data-staggered', '');
        Array.from(list.children).forEach((child, i) => {
          child.setAttribute('data-reveal', child.getAttribute('data-reveal') ?? '');
          child.setAttribute('data-delay', String(Math.min(i, 8) * 90));
        });
      });
      root.querySelectorAll('[data-reveal]:not([data-shown])').forEach((el) => {
        const d = el.getAttribute('data-delay');
        if (d) (el as HTMLElement).style.setProperty('--reveal-delay', `${d}ms`);
        if (reduced) show(el);
        else io.observe(el);
      });
    };

    scan(document);
    const mo = new MutationObserver(() => scan(document));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
