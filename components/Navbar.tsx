"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-[100] flex justify-between items-center px-6 md:px-12 py-4
      bg-transparent dark:bg-transparent
      backdrop-blur-md
      border-b border-white/10 dark:border-white/5
      transition-colors duration-300"
     >
    {/* Brand Kiri */}
       <div className="flex items-center gap-3">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <img src="/logo.png" alt="alfadzc logo" className="w-full h-full object-cover" />
           </div>
         <span className="text-base font-black tracking-tighter text-slate-800 dark:text-white">𝐀𝐥𝐟𝐚𝐝𝐳𝐜.𝐱𝐲𝐳</span>
        </button>
      </div>

      {/* Menu Kanan + Toggle */}
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#home" label="𝐇𝐨𝐦𝐞" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          } />
          <NavLink href="#network" label="𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          } />
          <NavLink href="#tools" label="𝐓𝐨𝐨𝐥𝐬" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          } />
          <NavLink href="#docs" label="𝐃𝐨𝐜𝐬" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>          
          } />
          <NavLink href="https://explorer.alfadzc.xyz" label="𝐄𝐱𝐩𝐥𝐨𝐫𝐞𝐫" external icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          } />
          <NavLink href="#contact" label="𝐂𝐨𝐧𝐭𝐚𝐜𝐭" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          } />
        </div>
        <div className="pl-4 border-l border-slate-200 dark:border-slate-700">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label, icon, external }: { href: string; label: string; icon: React.ReactNode; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-1.5 text-sm font-bold text-slate-700 dark:text-white/80
      hover:text-blue-600 dark:hover:text-white
      transition-colors cursor-pointer"
    >
      {icon}
      {label}
    </Link>
  );
}
