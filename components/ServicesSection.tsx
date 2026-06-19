'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { services } from '@/lib/services';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="WHAT WE BUILD" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className="bg-[#f4fcf6] border border-[rgba(0,100,50,0.2)] p-6 flex flex-col gap-4 transition-all duration-200 cursor-default hover:border-[#00CC65] hover:shadow-md"
            >
              <span className="font-mono text-[#004d26] text-2xl font-bold" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="font-mono font-bold text-[#0a1a0f] text-sm tracking-wide">
                {service.title}
              </h3>
              <p className="text-[#2d4a35] text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
