import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { ChevronRight, Github, Linkedin, Globe, Mail, Shield, Activity, Search, Users, Building2 } from "lucide-react";

const solutions = [
  {
    title: "Attack Surface Discovery",
    text: "Understand the attack surface of APIs and web services to cyber attacks.",
    icon: Search,
  },
  {
    title: "Security Analytics",
    text: "Advanced threat intelligence and analytics to identify patterns and prevent attacks before they happen.",
    icon: Activity,
  },
  {
    title: "Ongoing Monitoring",
    text: "Monitoring and correlating attack signals across layers for rapid response and mitigation.",
    icon: Shield,
  },
];

const industries = [
  {
    title: "Healthcare",
    text: "Healthcare depends on web services to securely deliver and protect data. Attacks on web infrastructure can lead to unauthorized data access, data loss, and ransomware.",
  },
  {
    title: "Cryptocurrency",
    text: "Cryptocurrencies companies are some of the most common victims of web infrastructure attacks leading to the largest unrecoverable losses.",
  },
  {
    title: "Banking/Fintech",
    text: "Modern fintech is has become increasingly reliant in HTTPS connections to users or automated financial systems. We protect this critical backbone.",
  },
];

const team = [
  {
    name: "Henry Birge-Lee",
    role: "Founder & CEO",
    text: "Computer security researcher at Princeton University whose standards and technology shaped the entire certificate authority industry.",
    image: "/Users/MAC/.gemini/antigravity/brain/3f539dcf-f163-4cc8-aeec-3f3af7a649fa/henry_birge_lee_portrait_1776039880410.png",
    links: [{ type: "Web", icon: Globe }],
  },
  {
    name: "Grace Cimaszewski",
    role: "Founder & CTO",
    text: "A graduate student at Princeton University who built global frameworks to understand the threat surface of millions of websites.",
    image: "/Users/MAC/.gemini/antigravity/brain/3f539dcf-f163-4cc8-aeec-3f3af7a649fa/grace_cimaszewski_portrait_1776039908894.png",
    links: [{ type: "GitHub", icon: Github }],
  },
  {
    name: "Dr. Prateek Mittal",
    role: "Founder & Chief Scientist",
    text: "Professor of Electrical and Computer Engineering at Princeton University specializing in network AI security.",
    image: "/Users/MAC/.gemini/antigravity/brain/3f539dcf-f163-4cc8-aeec-3f3af7a649fa/prateek_mittal_portrait_1776039940966.png",
    links: [{ type: "LinkedIn", icon: Linkedin }, { type: "Web", icon: Globe }],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#101915] antialiased selection:bg-deep-green selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <a href="#" className="text-[15px] font-semibold tracking-[0.08em] text-deep-green">
            Crosslayer Labs
          </a>

          <nav className="hidden items-center gap-8 text-[14px] text-[#2e3833] md:flex">
            <a href="#solutions" className="transition hover:text-deep-green">Solutions</a>
            <a href="#research" className="transition hover:text-deep-green">Research</a>
            <a href="#team" className="transition hover:text-deep-green">Team</a>
            <a href="#industries" className="transition hover:text-deep-green">Industries</a>
          </nav>

          <a
            href="#get-started"
            className="rounded-full bg-deep-green px-5 py-2.5 text-sm font-medium text-white transition hover:bg-deep-green-hover"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-grid relative overflow-hidden">
          <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-5 pb-10 pt-16 md:px-8 md:pb-14 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:pb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-5 inline-flex items-center rounded-full border border-deep-green/12 bg-deep-green/4 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-deep-green">
                Network security infrastructure
              </div>
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
                  <video
                    id="hero-video"
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                    poster="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
                  >
                    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                  </video>
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

        {/* Credibility / Why Choose Us Section */}
        <section id="why-us" className="border-t border-black/6 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-12 lg:py-32">
            <div className="mb-16 max-w-3xl">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">Why Choose Crosslayer</p>
              <h2 className="font-display mt-6 text-[48px] leading-[1] tracking-[-0.04em] text-[#101915] md:text-[64px]">
                Elite security infrastructure backed by Princeton research.
              </h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[40px] border border-black/6 bg-[#f7faf8] transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src="/Users/MAC/.gemini/antigravity/brain/3f539dcf-f163-4cc8-aeec-3f3af7a649fa/security_infrastructure_datacenter_1776039817947.png" alt="Security Infrastructure" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-10">
                  <h3 className="text-[32px] font-medium tracking-[-0.03em] text-[#101915]">Global-Scale Protection</h3>
                  <p className="mt-4 text-[18px] leading-relaxed text-muted">
                    We secure the critical backbone of web operations. Our foundation is built on protecting over 500 million HTTPS websites from sophisticated hijacks and infrastructure attacks.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-[40px] border border-black/6 bg-[#f7faf8] transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src="/Users/MAC/.gemini/antigravity/brain/3f539dcf-f163-4cc8-aeec-3f3af7a649fa/princeton_research_lab_1776039852466.png" alt="Princeton Research Lab" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-10">
                  <h3 className="text-[32px] font-medium tracking-[-0.03em] text-[#101915]">Academic Excellence</h3>
                  <p className="mt-4 text-[18px] leading-relaxed text-muted">
                    Born from a cutting-edge network security research lab at Princeton University, we bring academic-grade rigor to real-world security challenges.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <InfoCard 
                title="Comprehensive Discovery" 
                text="Automated mapping of your entire attack surface, including APIs and hidden web services." 
                icon={Search}
              />
              <InfoCard 
                title="Continuous Monitoring" 
                text="24/7 scrutiny of infrastructure signals to identify and neutralize threats in real-time." 
                icon={Shield}
              />
              <InfoCard 
                title="Signal Correlation" 
                text="Advanced cross-layer analytics that connect fragmented patterns into actionable security intelligence." 
                icon={Activity}
              />
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">Our Security Solutions</p>
            <h2 className="font-display mt-4 text-[42px] leading-[1.1] tracking-[-0.04em] text-[#101915] md:text-[52px]">
              Our platform delivers the most critical security solutions all in one place.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {solutions.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-[32px] border border-black/6 bg-white p-8 shadow-[0_14px_50px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-green/8 text-deep-green transition group-hover:bg-deep-green group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#101915]">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="border-t border-black/6 border-b border-black/6 bg-deep-green text-white">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-32">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/65">Why Choose Us</p>
              <h2 className="font-display mt-4 text-[42px] leading-[1.1] tracking-[-0.04em] md:text-[52px]">
                Trust top network security research.
              </h2>
              <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/72">
                Our company was born out of a cutting edge network security research lab at Princeton University by some of the world experts in understanding threats to web services.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#get-started" className="rounded-full bg-white px-8 py-4 text-center text-sm font-medium text-deep-green transition hover:bg-white/90">
                  Get a Security Assessment
                </a>
                <a href="#" className="rounded-full border border-white/18 px-8 py-4 text-center text-sm font-medium text-white transition hover:bg-white/8">
                  Learn About Our Research
                </a>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/65">Research advantage</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <StatCard value="500M+" label="HTTPS websites protected by standards shaped by the founding team" dark />
                <StatCard value="24/7" label="Infrastructure monitoring across first and third-party services" dark />
                <StatCard value="Multi-layer" label="Threat signal correlation across the network stack" dark />
                <StatCard value="Princeton" label="Research roots powering real-world web defense" dark />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">Our Founders</p>
            <h2 className="font-display mt-4 text-[42px] leading-[1.1] tracking-[-0.04em] text-[#101915] md:text-[52px]">
              The world's leading experts in network security.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person, idx) => (
              <motion.div 
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-black/6 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="aspect-[1/1.2] overflow-hidden grayscale transition-[filter] duration-500 group-hover:grayscale-0">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Static Base Content */}
                <div className="p-6 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#101915]">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-deep-green">{person.role}</p>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-[24px] font-semibold text-white">{person.name}</h3>
                    <p className="mt-1 text-sm font-medium text-white/80">{person.role}</p>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/70">{person.text}</p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      {person.links.map((link) => (
                        <a key={link.type} href="#" className="flex items-center gap-1.5 text-xs text-white transition hover:text-deep-green">
                          <link.icon className="h-3.5 w-3.5" />
                          {link.type}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="border-t border-black/6 bg-[#f7faf8]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-12 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#6d7772]">Industries We Secure</p>
              <h2 className="font-display mt-4 text-[42px] leading-[1.1] tracking-[-0.04em] text-[#101915] md:text-[52px]">
                A broad range of industries have exposure to web infrastructure attacks.
              </h2>
            </div>
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {industries.map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-[32px] border border-black/6 bg-white p-8 shadow-[0_14px_50px_rgba(0,0,0,0.03)]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-green/5 text-deep-green">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#101915]">{item.title}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>

      <footer className="relative overflow-hidden border-t border-black/6 bg-[#0c130f] text-white">
        <div className="pointer-events-none absolute inset-x-0 bottom-[-28px] select-none overflow-hidden">
          <div className="whitespace-nowrap text-center font-display text-[72px] font-medium leading-none tracking-[-0.06em] text-white/[0.04] md:text-[140px] lg:text-[220px]">
            Crosslayer Labs
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div className="max-w-lg">
              <div className="text-[18px] font-semibold tracking-[0.08em] text-white">Crosslayer Labs</div>
              <p className="mt-6 text-[16px] leading-relaxed text-white/68">
                Companies and enterprises across the world rely on the web for secure operations. We protect them from ongoing website and API hijacks.
              </p>
            </div>
            <div>
              <div className="text-[12px] uppercase tracking-[0.16em] text-white/45">Navigation</div>
              <div className="mt-8 flex flex-col gap-4 text-[15px] text-white/78">
                <a href="#" className="transition hover:text-white">Home</a>
                <a href="#solutions" className="transition hover:text-white">Solutions</a>
                <a href="#research" className="transition hover:text-white">Research</a>
                <a href="#get-started" className="transition hover:text-white">Get Started</a>
              </div>
            </div>
            <div>
              <div className="text-[12px] uppercase tracking-[0.16em] text-white/45">Contact</div>
              <div className="mt-8 flex flex-col gap-4 text-[15px] text-white/78">
                <a href="mailto:contact@crosslayerlabs.com" className="transition hover:text-white">contact@crosslayerlabs.com</a>
                <span className="text-white/45">© 2026 Crosslayer Labs. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({ title, text, icon: Icon }: { title: string; text: string; icon: any }) {
  return (
    <div className="rounded-[32px] border border-black/6 bg-white p-8 shadow-[0_14px_50px_rgba(0,0,0,0.03)]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-green/5 text-deep-green">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#101915]">{title}</h3>
      <p className="mt-4 text-[16px] leading-relaxed text-muted">{text}</p>
    </div>
  );
}

function StatCard({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  return (
    <div className={`rounded-[24px] border p-6 ${dark ? 'border-white/10 bg-white/5' : 'border-black/6 bg-white'}`}>
      <div className={`text-[32px] font-semibold tracking-[-0.04em] ${dark ? 'text-white' : 'text-deep-green'}`}>{value}</div>
      <div className={`mt-3 text-[14px] leading-relaxed ${dark ? 'text-white/65' : 'text-muted'}`}>{label}</div>
    </div>
  );
}
