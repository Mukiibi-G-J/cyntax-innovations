'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

export default function WorkSection() {
  return (
    <section id="work" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="WHO WE'VE WORKED WITH" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="border border-[rgba(0,100,50,0.18)] bg-[#f4fcf6] px-10 py-16 flex flex-col items-center text-center gap-4"
        >
          <span className="font-mono text-3xl text-[#00CC65]" aria-hidden="true">◎</span>
          <p className="font-mono text-sm text-[#004d26] font-bold tracking-[0.25em] uppercase">
            Case Studies Coming Soon
          </p>
          <p className="text-[#2d4a35] text-sm leading-relaxed max-w-md">
            We are currently working on documenting our client engagements. Check back soon to see our work and the impact we have delivered.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
