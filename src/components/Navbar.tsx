"use client";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar Pill */}
      <header className="fixed top-[20px] left-8 z-50 hidden h-[60px] w-auto flex-col items-start gap-[10px] rounded-[99px] border-[0.5px] border-[rgba(160,160,160,0.12)] bg-white p-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all md:flex">
        <div className="flex h-[40px] w-full flex-row items-center justify-center gap-12 px-2">
          {/* Logo Frame */}
          <a href="#" className="flex h-[34px] w-auto flex-row items-center justify-center gap-1.5 p-[10px] pl-[14px]">
            <img src="/logo.svg" alt="Logo" className="h-[24px] w-auto" />
            <span className="whitespace-nowrap text-[16px] font-medium leading-[110%] tracking-[-0.01em] text-[#575656]">
              CrossLayer Labs
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-row items-center gap-12 pr-[14px]">
            <a href="#research" className="text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#575656] transition-colors hover:text-[#2A2A2A]">Research</a>
            <a href="#blog" className="text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#575656] transition-colors hover:text-[#2A2A2A]">Blog</a>
          </nav>
        </div>
      </header>

      {/* Mobile Logo (Visible only on small screens) */}
      <div className="fixed top-[20px] left-5 z-50 md:hidden">
        <a href="#" className="flex h-[60px] items-center justify-center rounded-full bg-white/80 px-5 shadow-lg backdrop-blur-md">
          <img src="/logo.svg" alt="Logo" className="h-[24px] w-auto" />
        </a>
      </div>

      {/* Floating CTA Button (Persistent) */}
      <div className="fixed top-[20px] right-5 z-50 flex items-center justify-center md:right-8">
        <a 
          href="#get-started" 
          className="flex h-[60px] items-center justify-center rounded-full bg-[#153C2F] px-6 text-[15px] font-semibold text-white shadow-lg transition-all hover:bg-[#1A4B3A] hover:scale-105 active:scale-95 md:px-8 md:text-[16px]"
        >
          Schedule Demo
        </a>
      </div>
    </>
  );
}
