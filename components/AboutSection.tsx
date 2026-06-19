'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '5+', label: 'Enterprise Clients' },
  { value: '3', label: 'Products Built' },
  { value: 'UG', label: 'Uganda-Based, Africa-Focused' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="WHO WE ARE" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-[#0a1a0f] text-lg leading-relaxed font-semibold">
              CYNTAX INNOVATIONS is a Uganda-registered technology company building the digital
              infrastructure of tomorrow.
            </p>
            <p className="text-[#2d4a35] leading-relaxed">
              We combine deep technical expertise with an understanding of the African business
              landscape to deliver solutions that work — reliably, at scale, and in the real world.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="font-mono text-xs text-[#004d26] font-bold tracking-[0.25em] border border-[rgba(0,77,38,0.3)] bg-[rgba(0,77,38,0.06)] px-3 py-1">
                Registered in Uganda
              </span>
              <span className="font-mono text-xs text-[#004d26] font-bold tracking-[0.25em] border border-[rgba(0,77,38,0.3)] bg-[rgba(0,77,38,0.06)] px-3 py-1">
                Est. 2025
              </span>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="border border-[rgba(0,100,50,0.2)] bg-[#f4fcf6] p-6 flex flex-col gap-2"
              >
                <span className="font-mono font-bold text-[#004d26] text-3xl">{stat.value}</span>
                <span className="text-[#2d4a35] text-sm leading-snug font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
