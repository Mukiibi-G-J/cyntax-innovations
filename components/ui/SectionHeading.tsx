interface SectionHeadingProps {
  text: string;
  className?: string;
}

export default function SectionHeading({ text, className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`font-mono text-sm tracking-[0.3em] text-[#004d26] uppercase mb-12 ${className}`}
    >
      // {text} //
    </h2>
  );
}
