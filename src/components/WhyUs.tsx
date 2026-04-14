"use client";

import { motion } from "motion/react";
import { ScanSearch, ShieldAlert, Library } from "lucide-react";

const cards = [
  {
    title: "Comprehensive Protection.",
    text: "We discover, analyze, and monitor all layers of network infrastructure on first and third-party services.",
    icon: ScanSearch,
    id: "1000010845",
  },
  {
    title: "Advanced Threat Detection.",
    text: "We correlate signals across different layers of the network stack to neutralize threats.",
    icon: ShieldAlert,
    id: "1000010846",
  },
  {
    title: "Our Company",
    text: "Our company was born out of a cutting edge network security research lab at Princeton University by some of the world experts in understanding threats to web services.",
    icon: Library,
    id: "1000010847",
    lh: "130%",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-[1065px] px-5 py-24 md:px-0 lg:py-32">
      {/* Title — Gowun Batang, same size as Team section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display mb-[59px] text-[42px] leading-[1.1] tracking-[-0.04em] text-[#7A7A7A] md:text-[52px]"
      >
        Trust the team that already secured 500 million+ HTTPS websites
      </motion.h2>

      {/* Cards Container — gap 36px */}
      <div className="flex flex-col gap-[36px] md:flex-row">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex flex-col items-start justify-between rounded-[24px] border border-[#CECECE] bg-[#F2F2F2] p-[28px] py-[30px]"
            style={{ width: "331px", height: "394px" }}
          >
            {/* Top Frame — Icon + Title */}
            <div className="flex flex-row items-center gap-[8px]">
              <card.icon className="h-[18px] w-[18px] text-[#171717]" strokeWidth={2.5} />
              <h3
                className="text-[16px] font-medium leading-[110%] tracking-[0.01em] text-[#171717]"
                style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
              >
                {card.title}
              </h3>
            </div>

            {/* Bottom Copy — 16px, 500, 110%/130%, #8A8A8A */}
            <p
              className="text-[16px] font-medium tracking-[0.01em] text-[#8A8A8A]"
              style={{ 
                fontFamily: "'SF Pro Display', -apple-system, sans-serif", 
                width: "275px",
                lineHeight: card.lh || "110%"
              }}
            >
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
