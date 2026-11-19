import Image from 'next/image';
import Link from 'next/link';

/**
 * Official logo files from brand/logo/svg. Never retype the logo in a font.
 * "color" on white/light backgrounds, "reverse" on Navy/Midnight.
 * Horizontal minimum width is 120px; we use 156px+.
 */
export default function Logo({
  variant = 'color',
  width = 156,
  priority = false,
}: {
  variant?: 'color' | 'reverse';
  width?: number;
  priority?: boolean;
}) {
  const height = Math.round((width * 72) / 324.642);
  return (
    <Link href="/" aria-label="Cyntax Innovations — home" className="inline-flex shrink-0 rounded-md">
      <Image
        src={`/brand/cyntax-horizontal-${variant}.svg`}
        alt="Cyntax Innovations"
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
}
