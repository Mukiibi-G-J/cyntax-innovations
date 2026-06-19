'use client';

import { motion, type Variants } from 'framer-motion';
import RadarIcon from './ui/RadarIcon';
import GreenButton from './ui/GreenButton';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f4fcf6] px-6">
      {/* Decorative radar — top right */}
      <div className="absolute top-[-60px] right-[-60px] pointer-events-none select-none" aria-hidden="true">
        <RadarIcon size={420} decorative />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-mono text-xs text-[#004d26] tracking-[0.4em] uppercase font-bold"
        >
          // BUILDING THE FUTURE //
        </motion.p>

        <div className="flex flex-col items-center">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-mono font-bold text-[#0a1a0f] leading-none"
            style={{ fontSize: 'clamp(52px, 10vw, 96px)' }}
          >
            CYNTAX
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-mono text-[#004d26] tracking-[0.35em] uppercase font-bold"
            style={{ fontSize: 'clamp(14px, 2.5vw, 24px)' }}
          >
            INNOVATIONS
          </motion.p>
        </div>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-[#2d4a35] text-lg leading-relaxed max-w-xl"
        >
          We engineer digital solutions that push boundaries.
          <br />
          <span className="text-[#0a1a0f] font-semibold">Software. Systems. Strategy.</span>
          <br />
          Uganda &amp; Beyond.
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 justify-center"
        >
          <GreenButton href="#work" onClick={() => scrollTo('#work')}>
            OUR WORK
          </GreenButton>
          <GreenButton href="#contact" variant="outlined" onClick={() => scrollTo('#contact')}>
            CONTACT US
          </GreenButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-2 mt-8 animate-bounce"
        >
          <span className="font-mono text-xs text-[#2d4a35] tracking-widest">SCROLL</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
            <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="#004d26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f4fcf6] to-transparent pointer-events-none" />
    </section>
  );
}
