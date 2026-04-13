"use client";

import { motion } from "motion/react";
import { Building2 } from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    text: "Healthcare depends on web services to securely deliver and protect data. Attacks on web infrastructure can lead to unauthorized data access, data loss, and ransomware.",
  },
  {
    title: "Cryptocurrency",
    text: "Cryptocurrencies companies are some of the most common victims of web infrastructure attacks leading to the largest unrecoverable losses.",
  },
  {
    title: "Banking/Fintech",
    text: "Modern fintech is has become increasingly reliant in HTTPS connections to users or automated financial systems. We protect this critical backbone.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="border-t border-black/6 bg-[#f7faf8]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">Industries We Secure</p>
          <h2 className="font-display mt-4 text-[42px] leading-[1.1] tracking-[-0.04em] text-[#101915] md:text-[52px]">
            A broad range of industries have exposure to web infrastructure attacks.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {industries.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-[32px] border border-black/6 bg-white p-8 shadow-[0_14px_50px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-green/5 text-deep-green">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#101915]">{item.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
