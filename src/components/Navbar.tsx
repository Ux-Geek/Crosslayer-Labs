"use client";

export default function Navbar() {
  return (
    <header className="fixed top-[66px] left-[144px] z-50 flex h-[60px] w-[664px] flex-col items-start gap-[10px] rounded-[99px] border-[0.5px] border-[rgba(160,160,160,0.12)] bg-white p-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="flex h-[40px] w-full flex-row items-center justify-center gap-[90px]">
        
        {/* Logo Frame */}
        <a href="#" className="flex h-[34px] w-auto flex-row items-center justify-center gap-1.5 p-[10px] pl-[14px]">
          {/* Logo Graphic */}
          <img src="/logo.svg" alt="CrossLayer Labs Logo" className="h-[24.01px] w-[28.29px] flex-none" />
          
          {/* Default Logo Fallback */}
          <span 
            className="w-auto whitespace-nowrap text-[16px] font-medium leading-[110%] tracking-[-0.01em] text-[#575656]"
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
