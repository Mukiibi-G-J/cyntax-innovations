import { ImageResponse } from 'next/og';

export const alt = 'Cyntax Innovations: software, systems and strategy, built in Uganda';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Badge geometry from brand/logo/svg/cyntax-icon-color.svg
const badge = (
  <svg width="168" height="168" viewBox="0 0 56 56">
    <path d="M14 0 H42 A14 14 0 0 1 56 14 V42 A14 14 0 0 1 42 56 H14 A14 14 0 0 1 0 42 V14 A14 14 0 0 1 14 0Z" fill="#FFFFFF" />
    <path
      d="M37.874 15.626 A17.5 17.5 0 1 0 37.874 40.374 A3.5 3.5 0 0 0 32.925 35.425 A10.5 10.5 0 1 1 32.925 20.575 A3.5 3.5 0 0 0 37.874 15.626Z"
      fill="#0F2B5B"
    />
    <path d="M45 17 A3 3 0 0 1 48 20 V36 A3 3 0 0 1 45 39 A3 3 0 0 1 42 36 V20 A3 3 0 0 1 45 17Z" fill="#2F8CFF" />
  </svg>
);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0F2B5B',
          padding: 80,
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand rule: the wordmark is never retyped in a font, so the badge stands alone here. */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {badge}
          <div style={{ fontSize: 28, color: '#B4C3DC' }}>cyntaxinnovations.com</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ width: 96, height: 8, borderRadius: 4, background: '#2F8CFF' }} />
          <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.15, maxWidth: 950 }}>
            Technology that runs your business. Built in Uganda.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
