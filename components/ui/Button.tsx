import Link from 'next/link';
import Icon from './Icon';

type Variant = 'primary' | 'secondary' | 'onDark' | 'onDarkSecondary';

/*
 * Contrast-checked variants:
 *  primary          Navy bg / white text      13.8:1
 *  secondary        white bg / Navy text      13.8:1
 *  onDark           Signal Blue / Midnight    ~5.5:1
 *  onDarkSecondary  outline / white text on Navy
 */
const variants: Record<Variant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-700 shadow-sm',
  secondary: 'bg-white text-navy ring-1 ring-inset ring-line hover:ring-navy/40 hover:bg-mist',
  onDark: 'bg-signal text-midnight hover:bg-signal-300',
  onDarkSecondary: 'text-white ring-1 ring-inset ring-white/30 hover:ring-white/70 hover:bg-white/5',
};

export const buttonClass = (variant: Variant = 'primary', extra = '') =>
  `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 font-display text-small font-bold transition-colors duration-150 ${variants[variant]} ${extra}`;

export default function Button({
  href,
  children,
  variant = 'primary',
  arrow = false,
  external = false,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  const content = (
    <>
      {children}
      {external ? (
        <Icon name="external" className="size-4" />
      ) : arrow ? (
        <Icon name="arrowRight" className="size-4" />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass(variant, className)}>
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {content}
    </Link>
  );
}
