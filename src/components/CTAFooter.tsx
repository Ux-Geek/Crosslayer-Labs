"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function CTAFooter() {
  return (
    <section className="mx-auto flex w-full flex-col items-center px-8 py-24">
      <div className="relative w-full overflow-hidden rounded-[40px] bg-[#101915] text-white">
        
        {/* Main Content Grid */}
        <div className="relative z-10 grid gap-16 px-10 pt-24 pb-32 md:px-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-20">
          
          {/* Left Column: CTA + Newsletter Style */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Crosslayer" className="h-10 w-auto" />
              <span className="text-[20px] font-semibold tracking-tight text-white">CrossLayer Labs</span>
            </div>
            
            <p className="mt-8 text-sm text-white/50">
              2847 Mission Street<br />
              San Francisco, CA 94110
            </p>

            <h2 className="font-display mt-20 text-[36px] leading-[1.1] tracking-[-0.04em] sm:text-[44px] md:text-[64px] lg:text-[72px]">
              Ready to secure your <br /> 
              infrastructure.
            </h2>

            <div className="mt-12 flex w-full max-w-md items-center gap-2 rounded-full bg-white/5 p-1 pl-4 md:pl-6">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-white/30"
              />
              <button className="flex h-10 flex-none items-center justify-center gap-2 rounded-full bg-[#00FF00] px-4 text-sm font-semibold text-black transition hover:bg-[#00DD00] md:px-6">
                Subscribe
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <span className="text-xs uppercase tracking-widest text-white/30">Socials</span>
              <div className="flex gap-4">
                <Twitter className="h-5 w-5 text-white/50 hover:text-white transition-colors" />
                <Linkedin className="h-5 w-5 text-white/50 hover:text-white transition-colors" />
                <Github className="h-5 w-5 text-white/50 hover:text-white transition-colors" />
              </div>
            </div>
            
            <div className="mt-10 flex gap-6 text-xs text-white/30">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>

          {/* Right Column: Secondary Copy + Navigation */}
          <div className="flex flex-col lg:pl-12">
            <div className="flex flex-col gap-6">
              <h3 className="max-w-[368px] text-[24px] font-medium leading-[130%] text-[#8E8D8D]">
                Trust top network security research. Whatever's holding you back, let's solve it.
              </h3>
              
              <div className="mt-12 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[18px] font-medium text-white hover:text-[#00FF00] transition-colors cursor-pointer">
                  <div className="rounded-full bg-white/5 p-2">
                    <Mail className="h-5 w-5" />
                  </div>
                  hello@crosslayer.com
                </div>
              </div>

              <div className="mt-20 flex flex-col">
                <span className="text-xs uppercase tracking-widest text-white/30">Navigation</span>
                <nav className="mt-8 flex flex-col gap-4 text-[24px] font-medium text-white/70">
                  <a href="#research" className="hover:text-white transition-colors">Research</a>
                  <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Giant Wordmark — 0.9x scale + hover glow */}
        <div className="group/wordmark pointer-events-auto relative z-0 mt-12 mb-[-50px] flex w-full scale-[0.9] items-center justify-center overflow-hidden opacity-5 select-none transition-all duration-700 hover:opacity-10 hover:text-[#00FF00]">
          <div className="flex items-center text-[150px] md:text-[220px] lg:text-[280px] font-display font-bold whitespace-nowrap leading-none tracking-tighter">
            CROSSLAYER
          </div>
        </div>
      </div>
    </section>
  );
}
