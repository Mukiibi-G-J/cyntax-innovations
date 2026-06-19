'use client';

interface RadarIconProps {
  size?: number;
  className?: string;
  decorative?: boolean;
}

export default function RadarIcon({ size = 300, className = '', decorative = false }: RadarIconProps) {
  if (decorative) {
    return (
      <div
        className={`pointer-events-none select-none ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: 'spin 60s linear infinite', opacity: 0.06 }}
        >
          <circle cx="150" cy="150" r="140" stroke="#00FF7F" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="150" cy="150" r="100" stroke="#00FF7F" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="150" cy="150" r="60" stroke="#00FF7F" strokeWidth="1.5" strokeDasharray="3 5" />
          <circle cx="150" cy="150" r="20" stroke="#00FF7F" strokeWidth="1.5" />
          <circle cx="150" cy="150" r="6" fill="#00FF7F" />
          <line x1="150" y1="10" x2="150" y2="140" stroke="#00FF7F" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="10" y1="150" x2="290" y2="150" stroke="#00FF7F" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 8" />
          <line x1="150" y1="150" x2="230" y2="70" stroke="#00FF7F" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="225" cy="75" r="4" fill="#00FF7F" fillOpacity="0.8" />
        </svg>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      aria-label="Radar icon"
    >
      <circle cx="150" cy="150" r="140" stroke="#00FF7F" strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx="150" cy="150" r="100" stroke="#00FF7F" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="150" cy="150" r="60" stroke="#00FF7F" strokeWidth="1.5" strokeDasharray="3 5" />
      <circle cx="150" cy="150" r="20" stroke="#00FF7F" strokeWidth="2" />
      <circle cx="150" cy="150" r="6" fill="#00FF7F" />
      <line x1="150" y1="10" x2="150" y2="140" stroke="#00FF7F" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="10" y1="150" x2="290" y2="150" stroke="#00FF7F" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 8" />
      <line x1="150" y1="150" x2="230" y2="70" stroke="#00FF7F" strokeWidth="1.5" strokeOpacity="0.8" />
      <circle cx="225" cy="75" r="5" fill="#00FF7F" fillOpacity="0.9" />
    </svg>
  );
}
