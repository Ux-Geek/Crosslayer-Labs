"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-5 pb-10 pt-16 md:px-8 md:pb-14 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-[48px] font-medium leading-[1] tracking-[-0.04em] text-[#101915] md:text-[64px] lg:text-[72px]">
            Securing web infrastructure
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
            Companies and enterprises across the world rely on the web for secure operations.
            We protect them from ongoing website and API hijacks.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="group flex items-center justify-center gap-2 rounded-full bg-deep-green px-8 py-4 text-sm font-medium text-white transition hover:bg-deep-green-hover"
            >
              Get a Security Assessment
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solutions"
              className="rounded-full border border-deep-green/14 px-8 py-4 text-center text-sm font-medium text-deep-green transition hover:border-deep-green/30 hover:bg-deep-green/4"
            >
              Learn More
            </a>
          </div>

          <div className="mt-16 border-t border-black/6 pt-8">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">
              Backed By
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-deep-green">
              {['Y-Combinator', 'AE Investments', 'Long Journey'].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-black/6 bg-white px-5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:justify-self-end"
        >
          <div className="rounded-[32px] border border-black/6 bg-[#edf2ef] p-4 shadow-[0_20px_80px_rgba(21,60,47,0.08)]">
            <div className="aspect-square overflow-hidden rounded-[24px] bg-[#dbe6df]">
              <div className="h-full w-full bg-gradient-to-br from-[#dbe6df] to-[#c6d7cd] flex items-center justify-center">
                 <div className="text-center p-8">
                    <div className="text-[12px] uppercase tracking-widest text-deep-green/40 mb-2">Internal Operations</div>
                    <div className="text-2xl font-display text-deep-green">Infrastructure Core</div>
                 </div>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-8 -left-8 hidden w-52 rounded-[24px] border border-black/6 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:block"
          >
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#6d7772]">Trusted footprint</div>
            <div className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-deep-green">500M+</div>
            <div className="mt-2 text-[13px] leading-relaxed text-muted">HTTPS websites already protected by research invented by the founding team.</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
