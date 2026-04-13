"use client";

import { motion } from "motion/react";

export default function VideoSection() {
  return (
    <section className="mx-auto max-w-[1106px] px-5 pt-12 md:px-8 lg:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative w-full overflow-hidden rounded-[24px] border border-[#BABABA]"
        style={{ height: "579px" }}
      >
        {/* Background Image */}
        <img 
          src="/female_workspace_portrait.png" 
          alt="Professional in workspace" 
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Black Overlay (40%) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Bottom-left text */}
        <div className="absolute bottom-[104px] left-[44px]">
          <h2
            className="text-[36px] font-medium leading-[110%] text-[#EBEBEB]"
            style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
          >
            Our Security Solutions
          </h2>
          <p
            className="mt-3 text-[16px] font-medium leading-[110%] tracking-[-0.01em] text-[#EBEBEB]"
            style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
          >
            How does GeoShield work?
          </p>
        </div>
      </motion.div>
    </section>
  );
}
