"use client";

import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

function HeroIllustrationLoop() {
  const [index, setIndex] = useState(0);
  const images = ["/1hero.png", "/hero.png"];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const cycle = () => {
      setIndex((prev) => {
        const next = (prev + 1) % images.length;
        // If next is 0 (1hero.png), use 2s. If next is 1 (hero.png), use 4s.
        const delay = next === 0 ? 2000 : 4000;
        timer = setTimeout(cycle, delay);
        return next;
      });
    };
    
    timer = setTimeout(cycle, 1500); // Initial delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[540px] overflow-hidden rounded-[40px] bg-transparent">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="h-full w-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 px-5 pb-10 pt-[164px] md:px-8 md:pb-14 md:pt-[180px] lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:pb-16">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-[48px] font-medium leading-[1] tracking-[-0.04em] text-[#101915] md:text-[64px] lg:text-[76px]">
            Securing web <br />
            infrastructure.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-[#575656]">
            Companies and enterprises across the world rely on the web for secure operations.
            We protect them from ongoing website and API hijacks.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="group flex items-center justify-center gap-2 rounded-full bg-deep-green px-8 py-5 text-sm font-semibold text-white transition-all hover:bg-deep-green-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Security Assessment
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solutions"
              className="rounded-full border border-deep-green/14 px-8 py-5 text-center text-sm font-semibold text-deep-green transition-all hover:border-deep-green/30 hover:bg-deep-green/4"
            >
              Learn More
            </a>
          </div>

          {/* Backed By Section */}
          <div className="mt-20 border-t border-black/6 pt-10">
            <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.16em] text-[#8E8D8D]">
              Backed By
            </p>
            <div className="flex flex-wrap items-center gap-12">
              {/* Y Combinator */}
              <div className="flex items-center gap-2 transition-opacity hover:opacity-100">
                <img src="/yc.svg" alt="Y Combinator" className="h-6 w-auto" />
                <span className="text-[18px] font-bold tracking-tight text-[#FF6600]">Combinator</span>
              </div>

              {/* AE Investments */}
              <div className="flex items-center transition-opacity hover:opacity-100">
                <img src="/ae-investments.svg" alt="AE Investments" className="h-[20px] w-auto" />
              </div>

              {/* Long Journey */}
              <div className="flex items-center transition-opacity hover:opacity-100">
                <img src="/long-journey.webp" alt="Long Journey" className="h-[22px] w-auto" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Illustration Loop */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <HeroIllustrationLoop />
        </motion.div>
      </div>
    </section>
  );
}
