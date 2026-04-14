"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What exactly does Cross Layer do?",
    answer: "Crosslayer protects your infrastructure from the most critical and often invisible threats — including fake websites impersonating your brand, certificate hijacking, API takeovers, DNS manipulation, and man-in-the-middle attacks. By securing these underlying layers, we stop attackers before they can intercept traffic, misdirect users, or compromise your systems."
  },
  {
    question: "What kind of companies need Crosslayer?",
    answer: "Any company that relies on web infrastructure — including fintech, crypto platforms, SaaS, and enterprise systems — especially those handling sensitive data or financial transactions."
  },
  {
    question: "How is this different from traditional cybersecurity tools?",
    answer: "Most tools focus on applications or endpoints. Crosslayer operates at the infrastructure level, detecting and stopping threats before they reach your systems."
  },
  {
    question: "How quickly can Crosslayer detect a threat?",
    answer: "Our platform continuously monitors network signals in real time, allowing threats to be identified and mitigated almost immediately."
  }
];

const tabs = ["General", "Pricing", "Process", "Result"];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto flex max-w-[492px] flex-col items-center px-5 py-32">
      {/* Header — FAQ 66px */}
      <div className="flex flex-col items-center gap-[15px]">
        <h2 className="font-sans text-[66px] font-medium leading-[130%] text-black">
          FAQ
        </h2>
        
        {/* Tabs */}
        <div className="flex items-center gap-[24px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex h-[44px] items-center justify-center rounded-full px-[15px] text-[16px] font-medium tracking-[0.01em] transition-all
                ${activeTab === tab 
                  ? "bg-[#EDEDED] border border-[#E3E3E3] text-[#171717]" 
                  : "text-[#8A8A8A] border border-transparent hover:text-[#171717]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items — Gap 57px */}
      <div className="mt-[53px] flex w-full flex-col gap-[57px]">
        {faqs.map((faq, idx) => (
          <div key={idx} className="flex flex-col gap-[20px]">
            {/* Question Row */}
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex w-full items-center justify-between text-left"
            >
              <h3 className="text-[18px] font-medium leading-[110%] tracking-[0.01em] text-[#171717]">
                {faq.question}
              </h3>
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#E9E9E9]">
                {openIndex === idx ? (
                  <Minus className="h-[10px] w-[10px] text-black" strokeWidth={3} />
                ) : (
                  <Plus className="h-[10px] w-[10px] text-black" strokeWidth={3} />
                )}
              </div>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-[16px] font-normal leading-[130%] tracking-[0.01em] text-[#7F7F7F]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
