/** Infinite horizontal ticker. Pauses on hover; static for reduced motion. */
export default function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} aria-label={hidden ? undefined : label} className="flex shrink-0 items-center gap-12 pr-12">
      {items.map((p) => (
        <li key={p} className="flex items-center gap-12 whitespace-nowrap font-display text-lg font-bold text-navy/70">
          {p}
          <span aria-hidden="true" className="h-4 w-1 rounded-full bg-signal" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
