"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="mx-auto max-w-[1106px] px-5 pt-12 md:px-8 lg:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative w-full overflow-hidden rounded-[24px] border border-[#BABABA] bg-[#D0D0D0]"
        style={{ height: "579px" }}
      >
        {/* Background Image */}
        <img 
          src="/security_video_placeholder_1776041167978.png" 
          alt="Security Operations Center" 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 cursor-pointer">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-deep-green shadow-xl">
              <Play className="h-6 w-6 fill-current ml-1" />
            </div>
          </div>
        </div>
        
        {/* Bottom-left overlay text */}
        <div className="absolute bottom-10 left-10">
          <h2 className="text-[36px] font-medium leading-[110%] text-[#8E8D8D]" style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>
            Our Security Solutions
          </h2>
          <p className="mt-3 text-[16px] font-medium leading-[110%] tracking-[-0.01em] text-[#8E8D8D]" style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>
            How does GeoShield work?
          </p>
        </div>
      </motion.div>
    </section>
  );
}
