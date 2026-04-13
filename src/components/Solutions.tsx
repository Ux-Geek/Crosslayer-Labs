"use client";

import { motion } from "motion/react";
import { ShieldCheck, Radar, AlarmClock } from "lucide-react";

const solutions = [
  {
    title: "Attack Surface Discovery.",
    text: "Understand the attack surface of APIs and web services to cyber attacks.",
    icon: ShieldCheck,
  },
  {
    title: "Security Analytics.",
    text: "Advanced threat intelligence and analytics to identify patterns and prevent attacks before they happen.",
    icon: Radar,
  },
  {
    title: "Ongoing Monitoring.",
    text: "Monitoring and correlating attack signals across layers for rapid response and mitigation.",
    icon: AlarmClock,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-[1106px] px-5 py-10 md:px-8 lg:px-0">
      {/* Section Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-[24px] font-medium leading-[110%] text-[#8E8D8D]"
        style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
      >
        Our platform delivers the most critical security solutions all in one place.
      </motion.p>

      {/* Solutions Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-[70px] rounded-[24px] border border-[#D9D9D9] bg-[#F8F8F8] px-10 py-6 md:flex-row"
      >
        {solutions.map((item) => (
          <div key={item.title} className="flex max-w-[337px] flex-col items-start gap-6 p-[10px]">
            {/* Icon */}
            <item.icon className="h-6 w-6 text-[#2A2A2A]" strokeWidth={1.5} />
            
            {/* Text */}
            <p
              className="text-[16px] font-medium leading-[110%] tracking-[-0.005em] text-[#2A2A2A]"
              style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
            >
              <span className="font-semibold">{item.title}</span>{" "}
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
