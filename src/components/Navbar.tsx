"use client";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-[24px] left-1/2 -translate-x-1/2 z-50 flex h-[60px] w-auto max-w-[90vw] flex-col items-start gap-[10px] rounded-[99px] border-[0.5px] border-[rgba(160,160,160,0.12)] bg-white p-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all">
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

      {/* Floating CTA Button */}
      <div className="fixed top-[24px] right-8 z-50 flex items-center justify-center">
        <a 
          href="#get-started" 
          className="flex h-[60px] items-center justify-center rounded-full bg-[#00FF00] px-8 text-[16px] font-semibold text-black shadow-lg transition-all hover:bg-[#00DD00] hover:scale-105 active:scale-95"
        >
          Schedule Demo
        </a>
      </div>
    </>
  );
}
