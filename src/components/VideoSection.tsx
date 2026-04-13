"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative aspect-[16/9] w-full overflow-hidden rounded-[48px] border border-black/10 bg-black shadow-[0_40px_100px_rgba(21,60,47,0.15)]"
      >
        <img 
          src="/security_video_placeholder_1776041167978.png" 
          alt="Security Operations Center" 
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-deep-green shadow-xl">
              <Play className="h-6 w-6 fill-current ml-1" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-10 text-white">
          <div className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/60">System Walkthrough</div>
          <div className="mt-2 text-2xl font-display">Watch our security infrastructure in action</div>
        </div>
      </motion.div>
    </section>
  );
}
