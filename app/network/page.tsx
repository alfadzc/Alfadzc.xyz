"use client";
import { useState } from "react";
import { MAINNET, TESTNET } from "@/data/ecosystem";

export default function NetworkPage() {
  const [tab, setTab] = useState<"mainnet" | "testnet">("mainnet");
  const [search, setSearch] = useState("");

  const data = tab === "mainnet" ? MAINNET : TESTNET;
  const filtered = data.filter(n => n.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-white dark:bg-[#0d1117] text-slate-900 dark:text-white font-mono px-8 py-10 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="relative flex items-center justify-center mb-10">
        <button onClick={() => window.close()} className="absolute left-0 text-xs text-slate-400 hover:text-white border border-slate-700 px-3 py-1 rounded hover:border-slate-400 transition">← Close</button>
        <div className="flex items-center gap-4">
          <img src="/favicon.ico" alt="logo" className="w-12 h-12 rounded-full" onError={e => (e.currentTarget.style.display="none")} />
          <div>
            <p className="text-xl font-bold text-slate-900 dark:text-white">alfadzc validator</p>
            <p className="text-sm text-slate-400">Select a network to delegate.</p>
          </div>
        </div>
      </div>

      {/* TAB + SEARCH */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex gap-1">
          <button onClick={() => setTab("mainnet")} className={`px-4 py-1 rounded text-sm font-bold transition ${tab === "mainnet" ? "bg-emerald-500 text-black" : "text-slate-400 hover:text-white"}`}>mainnet</button>
          <button onClick={() => setTab("testnet")} className={`px-4 py-1 rounded text-sm font-bold transition ${tab === "testnet" ? "bg-emerald-500 text-black" : "text-slate-400 hover:text-white"}`}>testnet</button>
        </div>
        <input
          type="text"
          placeholder="Search networks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-white dark:bg-[#161b22] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm px-4 py-2 rounded w-64 focus:outline-none focus:border-purple-400 dark:focus:border-slate-500 placeholde
r-slate-400 dark:placeholder-slate-500"
        />
      </div>

      {/* SECTION LABEL */}
      <div className="border-t border-slate-800 pt-4 mb-4">
        <p className="text-slate-500 text-xs">— {tab} —</p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filtered.map(n => (
          <a key={n.name} href={n.delegateUrl || n.explorerUrl} target="_blank" rel="noopener noreferrer"
            className="relative flex flex-col items-center justify-center gap-2 p-4 aspect-square rounded-2xl transition-all duration-300 group rounded-2xl border border-blue-500 dark:bg-slate-800/90 hover:-translate-y-1 hover:border-sky
-400 dark:hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]">
            <img src={n.logo} alt={n.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0" onError={e => (e.currentTarget.style.display="none")} />
            <p className="text-sm font-bold text-center text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-emerald-400 transition">{n.name}</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500">[{tab}]</p>
            {n.delegateUrl && (
              <span className="mt-1 flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-
2h12v4"/><path strokeLinecap="round" strokeLinejoin="round" d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path strokeLinecap="round" strokeLinejoin="round" d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>
                Stake Now
              </span>
            )}
          </a>
        ))}
      </div>

      {/* FOOTER */}
      <div className="border-t border-slate-800 mt-12 pt-6 flex flex-wrap justify-between text-xs text-slate-500 gap-2">
        <span>Maintained by alfadzc</span>
        <div className="flex gap-4">
          <a href="https://t.me/alfadzc" target="_blank" className="hover:text-white transition">t.me/alfadzc</a>
          <a href="https://github.com/alfadzc" target="_blank" className="hover:text-white transition">github.com/alfadzc</a>
          <a href="mailto:contact@alfadzc.xyz" className="hover:text-white transition">contact@alfadzc.xyz</a>
        </div>
      </div>
    </main>
  );
}
