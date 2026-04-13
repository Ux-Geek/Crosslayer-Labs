"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-started" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-12 lg:py-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-[48px] bg-[#101915] px-8 py-16 text-white md:px-16 md:py-24 lg:px-24"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/55">Get Started</p>
            <h2 className="font-display mt-6 text-[48px] leading-[1] tracking-[-0.04em] md:text-[64px]">
              Ready to secure your network?
            </h2>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/70">
              Schedule a demo with our security experts to learn more about our platform and how we can protect your infrastructure.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <a href="#" className="rounded-full bg-deep-green px-10 py-5 text-center text-sm font-medium text-white transition hover:bg-deep-green-hover">
              Schedule Demo
            </a>
            <a href="mailto:contact@crosslayerlabs.com" className="flex items-center justify-center gap-2 rounded-full border border-white/14 px-10 py-5 text-center text-sm font-medium text-white transition hover:bg-white/8">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
