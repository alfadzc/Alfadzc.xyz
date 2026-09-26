"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") || "dark";
    const dark = saved === "dark";
    setIsDark(dark);
    applyTheme(dark);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) html.classList.add("dark");
    else html.classList.remove("dark");
  };

  const handleToggle = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    applyTheme(newDark);

    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  const tooltipText = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      <style>{`
        @keyframes tooltipFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-6px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        @keyframes tooltipFadeOut {
          from {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateX(-50%) translateY(-6px) scale(0.95);
          }
        }
        .tooltip-show {
          animation: tooltipFadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .tooltip-hide {
          animation: tooltipFadeOut 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* BUTTON */}
      <button
        onClick={handleToggle}
        aria-label="Toggle theme"
        className="relative w-8 h-8 flex items-center justify-center rounded-full
          transition-all duration-300 cursor-pointer
          hover:scale-110 active:scale-95">

        {/* BACKGROUND ABU-ABU - tampil saat LIGHT MODE (lebih tajam) */}
        <span
          className={`absolute inset-0 rounded-full transition-all duration-500 ease-in-out ${
            !isDark
              ? "bg-slate-300 scale-100 opacity-100 shadow-inner"
              : "bg-slate-300 scale-0 opacity-0"
          }`}
        />

        {/* CINCIN BIRU - tampil saat LIGHT MODE */}
        <span
          className={`absolute inset-0 rounded-full border-2 border-blue-500 transition-all duration-500 ease-in-out ${
            !isDark
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
        />

        {/* Cincin biru terang saat diklik */}
        <span
          className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
            clicked
              ? "ring-2 ring-blue-400 scale-125 opacity-100"
              : "ring-0 ring-blue-400/0 scale-100 opacity-0"
          }`}
        />

        {/* MOON - BULAN SABIT TIPIS */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`absolute w-5 h-5 transition-all duration-500 ease-in-out z-10 ${
            !isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
          }`}>
          <defs>
            <mask id="moon-crescent-mask">
              <rect width="24" height="24" fill="white" />
              <circle cx="16.5" cy="9.5" r="7.5" fill="black" />
            </mask>
          </defs>
          <circle
            cx="12"
            cy="12"
            r="9"
            fill={clicked ? "#3b82f6" : "#0f172a"}
            mask="url(#moon-crescent-mask)"
          />
        </svg>

        {/* SUN - tampil saat DARK */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={clicked ? "#3b82f6" : "#ffffff"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`absolute w-5 h-5 transition-all duration-500 ease-in-out z-10 ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
          }`}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      </button>

      {/* TOOLTIP POPUP - DI BAWAH */}
      <div
        className={`absolute top-full left-1/2 mt-3 whitespace-nowrap
          px-3 py-1.5 rounded-lg text-xs font-semibold
          bg-slate-900 dark:bg-white
          text-white dark:text-slate-900
          shadow-lg border border-slate-700 dark:border-slate-200
          pointer-events-none z-50
          ${hovered ? "tooltip-show" : "tooltip-hide"}`}>
        {tooltipText}

        <span
          className={`absolute bottom-full left-1/2 -translate-x-1/2 -mb-px
            w-0 h-0
            border-x-[5px] border-x-transparent
            border-b-[6px]
            border-b-slate-900 dark:border-b-white`}
        />
      </div>
    </div>
  );
}
