"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        <a href="#" className="text-[15px] font-semibold tracking-[0.08em] text-deep-green">
          Crosslayer Labs
        </a>

        <nav className="hidden items-center gap-8 text-[14px] text-[#2e3833] md:flex">
          <a href="#solutions" className="transition hover:text-deep-green">Solutions</a>
          <a href="#why-us" className="transition hover:text-deep-green">Why Choose Us</a>
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
  );
}
