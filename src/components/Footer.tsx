"use client";

export default function Footer() {
  return (
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
              <a href="#why-us" className="transition hover:text-white">Why Choose Us</a>
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
  );
}
