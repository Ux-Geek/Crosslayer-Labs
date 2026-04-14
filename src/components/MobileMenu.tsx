"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Research", href: "#research" },
    { name: "Blog", href: "#blog" },
    { name: "Solutions", href: "#solutions" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-[60px] w-auto items-center justify-center gap-3 rounded-full bg-white px-8 text-sm font-semibold text-[#101915] shadow-[0_10px_40px_rgba(0,0,0,0.1)] backdrop-blur-md border border-black/5"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f7faf8] px-8 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="group flex items-center gap-4 text-[42px] font-medium tracking-tight text-[#101915]"
                >
                  {item.name}
                  <ArrowRight className="h-8 w-8 -translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-32 flex flex-col items-center gap-8"
            >
              <div className="flex gap-6">
                <Twitter className="h-6 w-6 text-[#101915]/40" />
                <Linkedin className="h-6 w-6 text-[#101915]/40" />
                <Github className="h-6 w-6 text-[#101915]/40" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[12px] font-medium uppercase tracking-widest text-black/30">Get in Touch</span>
                <span className="text-[18px] font-medium text-[#101915]">hello@crosslayer.com</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
