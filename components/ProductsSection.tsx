'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import GreenButton from './ui/GreenButton';

const tags = ['EFRIS Compliant', 'Multi-Branch', 'Offline-First', 'React Native', 'Django'];

function ZentroMockup() {
  return (
    <svg viewBox="0 0 280 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[220px]" aria-hidden="true">
      <rect x="20" y="10" width="240" height="380" rx="24" stroke="#004d26" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="30" y="50" width="220" height="300" rx="4" fill="rgba(0,77,38,0.05)" stroke="rgba(0,77,38,0.2)" strokeWidth="1" />
      {[70, 100, 130, 160, 190, 220, 250, 280].map((y, i) => (
        <rect key={i} x="45" y={y} width={i % 3 === 0 ? 160 : i % 3 === 1 ? 120 : 80} height="6" rx="3" fill="rgba(0,77,38,0.18)" />
      ))}
      <circle cx="140" cy="390" r="6" fill="rgba(0,77,38,0.4)" />
      <circle cx="140" cy="30" r="4" fill="rgba(0,77,38,0.55)" />
    </svg>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="bg-[#f4fcf6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="OUR PRODUCTS" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="border border-[rgba(0,100,50,0.2)] bg-white p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center shadow-sm"
        >
          {/* Left */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#004d26] text-xs tracking-[0.3em] uppercase font-bold">Featured Product</span>
              <div className="flex-1 h-px bg-[rgba(0,100,50,0.2)]" />
            </div>

            <h3 className="font-mono font-bold text-[#0a1a0f] text-3xl md:text-4xl">ZentroApp</h3>
            <p className="font-mono text-[#004d26] text-sm tracking-wide font-bold">
              Uganda&apos;s EFRIS-Compliant POS &amp; Inventory Platform
            </p>

            <p className="text-[#2d4a35] leading-relaxed">
              ZentroApp is a multi-tenant point-of-sale and inventory management system purpose-built
              for Ugandan retailers, restaurants, and multi-branch businesses. Built with full URA
              EFRIS compliance, real-time stock tracking, and offline-first capabilities.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 border border-[rgba(0,77,38,0.3)] text-[#004d26] tracking-wide bg-[rgba(0,77,38,0.06)] font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <GreenButton href="https://zentroapp.app" variant="outlined" external>
                Learn More →
              </GreenButton>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center items-center min-w-[180px]">
            <ZentroMockup />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-mono text-xs text-[#2d4a35] tracking-[0.3em] text-center mt-8"
        >
          // More products coming soon... //
        </motion.p>
      </div>
    </section>
  );
}
