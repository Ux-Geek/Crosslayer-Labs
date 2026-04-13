"use client";

import { motion } from "motion/react";
import { Shield, Activity, Search } from "lucide-react";

const infoCards = [
  {
    title: "Comprehensive Discovery",
    text: "Automated mapping of your entire attack surface, including APIs and hidden web services.",
    icon: Search,
  },
  {
    title: "Continuous Monitoring",
    text: "24/7 scrutiny of infrastructure signals to identify and neutralize threats in real-time.",
    icon: Shield,
  },
  {
    title: "Signal Correlation",
    text: "Advanced cross-layer analytics that connect fragmented patterns into actionable security intelligence.",
    icon: Activity,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="border-t border-black/6 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mb-16 max-w-3xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">Why Choose Crosslayer</p>
          <h2 className="font-display mt-6 text-[48px] leading-[1] tracking-[-0.04em] text-[#101915] md:text-[64px]">
            Elite security infrastructure backed by Princeton research.
          </h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[40px] border border-black/6 bg-[#f7faf8] transition-all"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/security_infrastructure_datacenter_1776039817947.png" alt="Security Infrastructure" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-10">
              <h3 className="text-[32px] font-medium tracking-[-0.03em] text-[#101915]">Global-Scale Protection</h3>
              <p className="mt-4 text-[18px] leading-relaxed text-muted">
                We secure the critical backbone of web operations. Our foundation is built on protecting over 500 million HTTPS websites from sophisticated hijacks and infrastructure attacks.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-[40px] border border-black/6 bg-[#f7faf8] transition-all"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/princeton_research_lab_1776039852466.png" alt="Princeton Research Lab" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-10">
              <h3 className="text-[32px] font-medium tracking-[-0.03em] text-[#101915]">Academic Excellence</h3>
              <p className="mt-4 text-[18px] leading-relaxed text-muted">
                Born from a cutting-edge network security research lab at Princeton University, we bring academic-grade rigor to real-world security challenges.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {infoCards.map((card) => (
            <div key={card.title} className="rounded-[32px] border border-black/6 bg-white p-8 shadow-[0_14px_50px_rgba(0,0,0,0.03)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-green/5 text-deep-green">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#101915]">{card.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
