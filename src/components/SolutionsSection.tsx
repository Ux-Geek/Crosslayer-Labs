"use client";

import { motion } from "motion/react";
import { ShieldCheck, Radar, AlarmClock } from "lucide-react";

const solutions = [
  {
    title: "Attack Surface Discovery.",
    text: "Understand the attack surface of APIs and web services to cyber attacks.",
    icon: ShieldCheck,
    width: "279px",
  },
  {
    title: "Security Analytics.",
    text: "Advanced threat intelligence and analytics to identify patterns and prevent attacks before they happen.",
    icon: Radar,
    width: "337px",
  },
  {
    title: "Ongoing Monitoring.",
    text: "Monitoring and correlating attack signals across layers for rapid response and mitigation.",
    icon: AlarmClock,
    width: "315px",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="mx-auto max-w-[1106px] px-5 pt-12 md:px-8 lg:px-0">
      {/* Big Image — 1106×579, border-radius 24, border 1px #BABABA, 40% black overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden rounded-[24px] border border-[#BABABA]"
        style={{ height: "579px" }}
      >
        <img
          src="/female_workspace_portrait.png"
          alt="Professional in workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* "Our Security Solutions" — left:44, from bottom ~120px, 36px #EBEBEB */}
        <div className="absolute bottom-[104px] left-[44px]">
          <h2
            className="text-[36px] font-medium leading-[110%] text-[#EBEBEB]"
            style={{ width: "529px" }}
          >
            Our Security Solutions
          </h2>
          {/* "How does GeoShield work?" — 16px #EBEBEB */}
          <p
            className="mt-[14px] text-[16px] font-medium leading-[110%] tracking-[-0.01em] text-[#EBEBEB]"
          >
            How does GeoShield work?
          </p>
        </div>
      </motion.div>

      {/* Section title — gap ~100px from image, 24px #8E8D8D */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-[100px] text-[24px] font-medium leading-[110%] text-[#8E8D8D]"
        style={{ width: "390px" }}
      >
        Our platform delivers the most critical security solutions all in one place.
      </motion.p>

      {/* Solutions Bar — gap 20px from title, 1106×167, #F8F8F8, border 1px #D9D9D9, radius 24, gap 70 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-[20px] flex flex-col items-center justify-center rounded-[24px] border border-[#D9D9D9] bg-[#F8F8F8] md:flex-row"
        style={{ height: "167px", gap: "70px" }}
      >
        {solutions.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-[24px] p-[10px]"
            style={{ width: item.width, height: "122px" }}
          >
            {/* Icon — 24×24, #2A2A2A */}
            <item.icon className="h-6 w-6 flex-none text-[#2A2A2A]" strokeWidth={1.5} />

            {/* Text — 16px, 500, 110% line-height, -0.005em tracking, #2A2A2A */}
            <p
              className="text-[16px] font-normal leading-[110%] tracking-[-0.005em] text-[#2A2A2A]"
            >
              <span className="font-semibold">{item.title}</span>{" "}
              <span className="text-[#ACACAC]">{item.text}</span>
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
