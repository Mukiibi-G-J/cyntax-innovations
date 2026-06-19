import Link from 'next/link';

interface GreenButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outlined';
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function GreenButton({
  href,
  children,
  variant = 'solid',
  external = false,
  className = '',
  onClick,
}: GreenButtonProps) {
  const base =
    'inline-block font-mono text-sm tracking-widest px-6 py-3 transition-all duration-200';
  const solid =
    'bg-[#00CC65] text-[#0d1f12] hover:bg-[#00b358] font-bold shadow-sm';
  const outlined =
    'border border-[#006633] text-[#006633] hover:bg-[rgba(0,102,51,0.08)]';

  const classes = `${base} ${variant === 'solid' ? solid : outlined} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
