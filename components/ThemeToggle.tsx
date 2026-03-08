"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full
      bg-gray-200 dark:bg-gray-800 transition"
    >
      <span
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full
        flex items-center justify-center text-xs transition-transform
        ${dark ? "translate-x-7" : ""}`}
      >
        {dark ? "🌙" : "🔆"}
      </span>
    </button>
  );
}
