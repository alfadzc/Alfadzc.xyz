"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
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
  };

  return (
    <button
      onClick={handleToggle}
      className="w-10 h-10 flex items-center justify-center rounded-full
      bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl
      border border-slate-200 dark:border-slate-700
      shadow-md hover:scale-110 active:scale-95
      transition-all duration-300 text-lg">
      {isDark ? "🌙" : "🔅"}
    </button>
  );
}
