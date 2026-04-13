"use client";

import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-[66px] left-1/2 z-50 flex h-[54px] w-full max-w-[664px] -translate-x-1/2 flex-col items-start gap-[10px] rounded-[99px] border-[0.5px] border-[rgba(160,160,160,0.34)] bg-white p-[10px] shadow-sm backdrop-blur-xl">
      <div className="flex h-[34px] w-full flex-row items-center justify-center gap-[101px]">
        
        {/* Logo Frame */}
        <a href="#" className="flex h-[34px] w-[154px] flex-row items-center justify-center gap-1 p-[10px]">
          {/* Logo Graphic */}
          <div className="flex h-[24.01px] w-[28.29px] items-center justify-center rounded-sm bg-gradient-to-b from-[#00FA08] to-[#015404]">
             <ShieldCheck className="h-4 w-4 text-white" strokeWidth={2.5}/>
          </div>
          {/* Default Logo Fallback */}
          <span 
            className="w-[114px] text-[16px] font-medium leading-[110%] tracking-[-0.01em] text-[#575656]"
            style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
          >
            CrossLayer Labs
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="flex h-[19px] w-[352px] flex-row items-center gap-6">
          <a 
            href="#solutions" 
            className="w-[73px] text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#575656] transition-colors hover:text-[#2A2A2A]"
            style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
          >
            Solutions
          </a>
          <a 
            href="#why-us" 
            className="w-[107px] text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#575656] transition-colors hover:text-[#2A2A2A]"
            style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
          >
            Why Choose Us
          </a>
          <a 
            href="#team" 
            className="w-[43px] text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#575656] transition-colors hover:text-[#2A2A2A]"
            style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
          >
            Team
          </a>
          <a 
            href="#industries" 
            className="w-[57px] text-[16px] font-normal leading-[110%] tracking-[-0.01em] text-[#575656] transition-colors hover:text-[#2A2A2A]"
            style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}
          >
            Industry
          </a>
        </nav>

      </div>
    </header>
  );
}
