"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ScanSearch, ShieldAlert, Library } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const proseLines = [
  "The Crosslayer Labs founding team",
  "invented Multi-Perspective Issuance",
  "Corroboration which now secures",
  "the issuance of every HTTPS certificate."
];

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%",
        end: "+=600",
        scrub: 1,
        pin: true,
      }
    });

    linesRef.current.forEach((line) => {
      if (line) {
        tl.fromTo(line, 
          { opacity: 0.1, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power2.out"
          }
        );
      }
    });
  }, []);

  return (
    <section id="why-us" className="mx-auto max-w-7xl px-5 py-24 md:px-0 lg:py-32">
      {/* Title — Gowun Batang, same size as Team section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display mb-[59px] text-[42px] leading-[1.1] tracking-[-0.04em] text-[#7A7A7A] md:text-[52px]"
      >
        Trust the team that already secured <br /> 500 million+ HTTPS websites
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
            className="relative flex flex-col items-start justify-between rounded-[40px] border border-[#E3E3E3] bg-[#FAFAFA] p-[35px] py-[38px]"
            style={{ width: "414px", height: "493px" }}
          >
            {/* Top Frame — Icon + Title */}
            <div className="flex flex-row items-center gap-[8px]">
              <card.icon className="h-[18px] w-[18px] text-[#171717]" strokeWidth={2.5} />
              <h3
                className="text-[16px] font-medium leading-[110%] tracking-[0.01em] text-[#171717]"
              >
                {card.title}
              </h3>
            </div>

            {/* Bottom Copy — 16px, Normal, 110%/130%, #8A8A8A */}
            <p
              className="text-[16px] font-normal tracking-[0.01em] text-[#8A8A8A]"
              style={{
                width: "275px",
                lineHeight: card.lh || "110%"
              }}
            >
              {card.text.includes("Princeton University") ? (
                <>
                  {card.text.split("Princeton University")[0]}
                  <span className="text-[#171717]">Princeton University</span>
                  {card.text.split("Princeton University")[1]}
                </>
              ) : (
                card.text
              )}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Founders Invention Section — Gowun Batang, 4 lines, 1.4 leading */}
      <div ref={containerRef} className="mt-[200px] mb-[120px] flex flex-col items-center justify-center text-center">
        <h2 
          className="font-display text-[42px] leading-[1.4] tracking-[-0.02em] text-[#101915] md:text-[52px] max-w-5xl"
        >
          {proseLines.map((line, idx) => (
            <span 
              key={idx} 
              ref={el => { linesRef.current[idx] = el; }}
              className="block opacity-0"
            >
              {line}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
