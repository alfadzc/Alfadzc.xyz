"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggleUltimate() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const items = [
    { label: "Light", icon: <Sun size={16} />, value: "light" },
    { label: "Dark", icon: <Moon size={16} />, value: "dark" },
    { label: "System", icon: <Monitor size={16} />, value: "system" },
  ];

  // INIT
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    applyTheme(saved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      if (saved === "system") applyTheme("system");
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // CLICK OUTSIDE
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setHoverIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const applyTheme = (mode: string) => {
    const html = document.documentElement;

    if (mode === "dark") html.classList.add("dark");
    else if (mode === "light") html.classList.remove("dark");
    else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      html.classList.toggle("dark", isDark);
    }
  };

  const changeTheme = (mode: string) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
    applyTheme(mode);
    setOpen(false);
  };

  const Icon =
    theme === "light" ? Sun :
    theme === "dark" ? Moon :
    Monitor;

  return (
    <div ref={ref} className="relative">

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-11 h-11 flex items-center justify-center rounded-full
        bg-white/70 dark:bg-slate-800/70
        backdrop-blur-xl
        border border-slate-200 dark:border-slate-700
        shadow-md
        hover:scale-110 active:scale-95
        transition-all duration-300 overflow-hidden"
      >
        <Icon
          size={18}
          className="text-orange-500 dark:text-sky-500"
        />
      </button>

      {/* DROPDOWN */}
      <div
        onMouseLeave={() => setHoverIndex(null)}
        className={`absolute right-0 mt-2 w-32 rounded-xl p-1.5 z-50
        backdrop-blur-2xl
        bg-white/70 dark:bg-slate-800/70
        border border-slate-200 dark:border-slate-700
        shadow-[0_10px_40px_rgba(0,0,0,0.2)]
        transition-all duration-300
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >

    {/* SLIDING BACKGROUND */}
     {(hoverIndex !== null || items.findIndex(i => i.value === theme) !== -1) && (
      <div className="absolute left-1 right-1 h-[30px] rounded-lg bg-sky-100 dark:bg-sky-300/40 transition-all duration-300"
       style={{
       top: 8 + items.findIndex(i => i.value === theme) * 33,
     }}
     />
    )}

    {/* HOVER BACKGROUND (DI ATASNYA) */}
    {hoverIndex !== null && (
    <div className="absolute left-1 right-1 h-[30px] rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
    style={{
      top: 8 + hoverIndex * 33,
    }}
   />
  )}

     {items.map((item, i) => (
      <button
         key={item.value}
           onMouseEnter={() => setHoverIndex(i)}
            onClick={() => changeTheme(item.value)}
            className={`relative z-10 w-full flex items-center gap-1 px-2 h-[33px] rounded-lg text-sm font-medium transition-all
            ${
            hoverIndex === i
           ? "text-white"
           : theme === item.value
           ? "text-slate-900 dark:text-white"
         : "text-slate-900 dark:text-slate-300"
        }`}
        >
         {item.icon}
         {item.label}
        </button>
       ))}
     </div>
    </div>
  );
}
