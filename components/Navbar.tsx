"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
    className="sticky top-0 z-[100] flex justify-between items-center px-6 md:px-12 py-4
    bg-transparent dark:bg-transparent
    backdrop-blur-md
    border-b border-white/10 dark:border-white/5
    transition-colors duration-300"
   >

   {/* BRAND KIRI */}
    <div className="flex items-center gap-3">
   <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="flex items-center gap-3 group cursor-pointer"
    >
    {/* LOGO + COIN FLIPS) */}
    <div className="relative w-12 h-12 coin-spin">
      <div className="absolute inset-0 rounded-full border-2 border-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
      <img
        src="/logo.png"
        alt="alfadzc logo"
        className="w-full h-full object-cover rounded-full"
        />
      </div>
      <span className="text-xl font-medium tracking-tighter gradient-text">𝐀𝐥𝐟𝐚𝐝𝐳𝐜.𝐱𝐲𝐳</span>
      </button>
     </div>

    {/* MENU KANAN + Toggle */}
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#home" label="Home" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          } />
          <NavLink href="#ecosystem" label="Network" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          } />
          <NavLink href="#tools" label="Monitoring" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 13h4l2-6 3 12 3-8 2 4h4"/>
            </svg>
          } />
          <NavLink href="#docs" label="Docs" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>
          } />
          <NavLink href="https://explorer.alfadzc.xyz" label="Explorer" external icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          } />
          <NavLink href="#contact" label="Contact" icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          } />
        </div>
        <div className="pl-4 border-l border-slate-200 dark:border-slate-700">
          <ThemeToggle />
        </div>

        {/* HAMBURGER - Mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex flex-col gap-4 z-50">
          <MobileNavLink href="#home" label="Home" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#ecosystem" label="Networks" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#tools" label="Monitoring" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#docs" label="Docs" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="https://explorer.alfadzc.xyz" label="Explorer" onClick={() => setMenuOpen(false)} external />
          <MobileNavLink href="#contact" label="Contact" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function MobileNavLink({ href, label, onClick, external }: { href: string; label: string; onClick: () => void; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
    >
      {label}
    </Link>
  );
}

function NavLink({ href, label, icon, external }: { href: string; label: string; icon: React.ReactNode; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-white/80
      hover:text-blue-600 dark:hover:text-white
      transition-colors cursor-pointer"
    >
      {icon}
      {label}
    </Link>
  );
}
