"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Globe } from "lucide-react";

const team = [
  {
    name: "Henry Birge-Lee",
    role: "Founder & CEO",
    text: "Computer security researcher at Princeton University whose standards and technology shaped the entire certificate authority industry.",
    image: "/henry_birge_lee_portrait_1776039880410.png",
    links: [{ type: "Web", icon: Globe }],
  },
  {
    name: "Grace Cimaszewski",
    role: "Founder & CTO",
    text: "A graduate student at Princeton University who built global frameworks to understand the threat surface of millions of websites.",
    image: "/grace_cimaszewski_portrait_1776039908894.png",
    links: [{ type: "GitHub", icon: Github }],
  },
  {
    name: "Dr. Prateek Mittal",
    role: "Founder & Chief Scientist",
    text: "Professor of Electrical and Computer Engineering at Princeton University specializing in network AI security.",
    image: "/prateek_mittal_portrait_1776039940966.png",
    links: [{ type: "LinkedIn", icon: Linkedin }, { type: "Web", icon: Globe }],
  },
];

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 pt-[216px] pb-24 md:px-8 lg:px-12 lg:pt-[248px] lg:pb-32">
      <div className="max-w-3xl">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">Our Founders</p>
        <h2 className="font-display mt-4 text-[42px] leading-[1.1] tracking-[-0.04em] text-[#101915] md:text-[52px]">
          The world's leading experts in network security.
        </h2>
      </div>
      <div className="mt-16 flex flex-col gap-[36px] md:flex-row">
        {team.map((person, idx) => (
          <motion.div 
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-[12px] bg-[#101915] transition-all hover:shadow-2xl"
            style={{ width: "414px", height: "493px" }}
          >
            <div className="relative h-full w-full overflow-hidden grayscale transition-[filter] duration-500 group-hover:grayscale-0">
              <img 
                src={person.image} 
                alt={person.name} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Always visible base info overlay (no white footer) */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-white">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-white/80">{person.role}</p>
              </div>
            </div>

            {/* Hover Content (Bio + Links) */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#101915]/95 via-[#101915]/40 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-[24px] font-semibold text-white">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-white/80">{person.role}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-white/70">{person.text}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  {person.links.map((link) => (
                    <a key={link.type} href="#" className="flex items-center gap-1.5 text-xs text-white transition hover:text-[#00FF00]">
                      <link.icon className="h-3.5 w-3.5" />
                      {link.type}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
