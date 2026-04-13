"use client";

import { motion } from "motion/react";
import { Shield, Activity, Search } from "lucide-react";

const solutions = [
  {
    title: "Attack Surface Discovery",
    text: "Understand the attack surface of APIs and web services to cyber attacks.",
    icon: Search,
  },
  {
    title: "Security Analytics",
    text: "Advanced threat intelligence and analytics to identify patterns and prevent attacks before they happen.",
    icon: Activity,
  },
  {
    title: "Ongoing Monitoring",
    text: "Monitoring and correlating attack signals across layers for rapid response and mitigation.",
    icon: Shield,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-12 lg:py-32">
      <div className="max-w-3xl">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">Our Security Solutions</p>
        <h2 className="font-display mt-4 text-[42px] leading-[1.1] tracking-[-0.04em] text-[#101915] md:text-[52px]">
          Our platform delivers the most critical security solutions all in one place.
        </h2>
      </div>
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {solutions.map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group rounded-[32px] border border-black/6 bg-white p-8 shadow-[0_14px_50px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.06)]"
          >
            <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-green/8 text-deep-green transition group-hover:bg-deep-green group-hover:text-white">
              <item.icon className="h-7 w-7" />
            </div>
            <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#101915]">{item.title}</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
