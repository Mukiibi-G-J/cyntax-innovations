'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { team } from '@/lib/team';

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#f4fcf6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="THE TEAM" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white border border-[rgba(0,100,50,0.18)] p-8 flex flex-col items-center text-center gap-4 hover:border-[#00CC65] hover:shadow-md transition-all duration-200"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#00CC65] flex items-center justify-center bg-[rgba(0,180,90,0.1)]">
                <span className="font-mono font-bold text-[#004d26] text-lg">{member.initials}</span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-mono font-bold text-[#0a1a0f] text-sm tracking-wide">{member.name}</h3>
                <p className="font-mono text-xs text-[#004d26] font-bold tracking-widest">{member.role}</p>
              </div>

              <p className="text-[#2d4a35] text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
