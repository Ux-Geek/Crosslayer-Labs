"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const proseLines = [
  "True security requires a multi-perspective",
  "approach to verify every connection",
  "at the absolute root of the web infrastructure."
];

export default function DiscoveryProse() {
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
          { opacity: 0.1, y: 30 },
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
    <div ref={containerRef} className="py-[300px] flex flex-col items-center justify-center text-center bg-white">
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
  );
}
