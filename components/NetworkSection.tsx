"use client";

import { useState, useEffect } from "react";
import { MAINNET, TESTNET, NetworkItem } from "@/data/ecosystem";
import ChainLogo from "./chainLogo";

interface ValidatorStatus {
  [key: string]: "online" | "offline";
}

export default function NetworkSection() {
  const [tab, setTab] = useState<"all" | "mainnet" | "testnet">("mainnet");
  const [validatorStatus, setValidatorStatus] = useState<ValidatorStatus>({});
  const [loading, setLoading] = useState(true);
  
  const ALL_NETWORKS = [...MAINNET, ...TESTNET];
  const data: NetworkItem[] = tab === "all" ? ALL_NETWORKS : tab === "mainnet" ? MAINNET : TESTNET;

  // Fetch real-time status dari API
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`/api/validators/status?t=${Date.now()}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const status = await res.json();
          setValidatorStatus(status);
        }
      } catch (error) {
        console.error("Failed to fetch validator status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    
    // Poll setiap 15 detik
    const interval = setInterval(fetchStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (name: string) => {
    const status = validatorStatus[name] || "online";
    const isOnline = status === "online";
    
    return (
      <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 ${
        isOnline 
          ? "bg-emerald-500/10 border border-emerald-400/40" 
          : "bg-red-500/10 border border-red-400/40"
      }`}>
        <div className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOnline ? "bg-emerald-400" : "bg-red-400"
          }`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${
            isOnline ? "bg-emerald-500" : "bg-red-500"
          }`}></span>
        </div>
        <span className={`text-[10px] font-bold ${isOnline ? "text-emerald-400" : "text-red-400"}`}>
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
    );
  };

  return (
    <section id="ecosystem" className="relative z-10 py-16 px-6 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-12 flex flex-col items-center">

        {/* ICON + TITLE */}
        <div className="flex items-center gap-3 mb-4">

          {/* ICON SERVER */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            <rect x="3" y="4" width="18" height="6" rx="2"/>
            <rect x="3" y="14" width="18" height="6" rx="2"/>
            <circle cx="7" cy="7" r="1"/>
            <circle cx="7" cy="17" r="1"/>
            <line x1="11" y1="7" x2="17" y2="7"/>
            <line x1="11" y1="17" x2="17" y2="17"/>
          </svg>

          {/* TITLE */}
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-[#ff7b00]">
           𝐎𝐮𝐫 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬  
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-2 max-w-2xl text-sm md:text-base leading-relaxed text-slate-900 dark:text-gray-300">
          𝐖𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 𝐦𝐚𝐢𝐧𝐧𝐞𝐭 𝐚𝐧𝐝 𝐭𝐞𝐬𝐭𝐧𝐞𝐭 𝐞𝐜𝐨𝐬𝐲𝐬𝐭𝐞𝐦𝐬,<br/>
          𝐩𝐫𝐨𝐯𝐢𝐝𝐢𝐧𝐠 𝐫𝐞𝐥𝐢𝐚𝐛𝐥𝐞 𝐯𝐚𝐥𝐢𝐝𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞 𝐬𝐞𝐫𝐯𝐢𝐜𝐞𝐬<br/>
          𝐚𝐜𝐫𝐨𝐬𝐬 𝐂𝐨𝐬𝐦𝐨𝐬-𝐛𝐚𝐬𝐞𝐝 𝐧𝐞𝐭𝐰𝐨𝐫𝐤𝐬
        </p>
      </div>

      {/* 1. TABS */}
      <div className="flex p-1.5 rounded-2xl border w-full mb-12 bg-slate-100/10 border-sky-400/50 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <div className="grid grid-cols-3 w-full gap-2">
          <TabButton active={tab === "mainnet"} onClick={() => setTab("mainnet")} label="𝐌𝐚𝐢𝐧𝐧𝐞𝐭" />
          <TabButton active={tab === "testnet"} onClick={() => setTab("testnet")} label="𝐓𝐞𝐬𝐭𝐧𝐞𝐭" />
          <TabButton active={tab === "all"} onClick={() => setTab("all")} label="𝐀𝐥𝐥 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬" />
        </div>
      </div>

      {/* 2. STATUS BAR */}
      <div className="w-full flex items-center justify-between mb-10 border-b pb-8 border-slate-200 dark:border-slate-800/50">

        {/* Sisi Kiri */}
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_5px_rgba(255,255,255,0.2)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <h2 className="text-sm font-normal text-white tracking-wide">
            {tab === "mainnet" ? "𝐌𝐚𝐢𝐧𝐧𝐞𝐭 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬" : tab === "testnet" ? "𝐓𝐞𝐬𝐭𝐧𝐞𝐭 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬" : "𝐀𝐥𝐥 𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬"}
          </h2>
        </div>

        {/* Sisi Kanan */}
        <div className="px-5 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 border-2 border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_5px_rgba(255,255,255,0.2)]">
          <p className="text-sm font-normal text-white tracking-wide">
           {data.length} <span className="text-white font-medium">𝐍𝐞𝐭𝐰𝐨𝐫𝐤𝐬</span>
          </p>
        </div>
      </div>

      {/* 3. GRID CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {data.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="relative flex flex-col items-center p-6 transition-all duration-500 group rounded-3xl border
              bg-white border-slate-200 shadow-sm
              dark:bg-slate-800 dark:border-sky-400/60 dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]
              hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]">

            {/* STATUS BADGE - Real-time dari API */}
            {getStatusBadge(item.name)}

            {/* LOGO */}
            <div className="mb-4 transform group-hover:scale-110 transition-all duration-500">
              <ChainLogo name={item.name} logo={item.logo} />
            </div>

            <div className="text-center mb-6">
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-sky-400 transition-colors">
                {item.name}
              </h3>
              {MAINNET.some(m => m.name === item.name) ? (
                <span className="text-[10px] uppercase tracking-[0.15em] font-black px-4 py-1 rounded-full border border-emerald-400/70 text-emerald-400 bg-emerald-400/10">
                  Mainnet
                </span>
              ) : (
                <span className="text-[10px] uppercase tracking-[0.15em] font-black px-4 py-1 rounded-full border border-orange-400/70 text-orange-400 bg-orange-400/10">
                  Testnet
                </span>
              )}
            </div>

            {/* TOMBOL */}
            <div className="flex gap-2 w-full mt-auto">
              {/* Tombol Delegate */}
              {item.delegateUrl ? (
                <a
                  href={item.delegateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-400 text-white text-[11px] py-2 rounded-full font-bold shadow-lg active:scale-95 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                  </svg>
                  Delegate
                </a>
              ) : (
                <span className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600/40 to-blue-600/40 text-white/40 text-[11px] py-2 rounded-full font-bold cursor-not-allowed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                  </svg>
                  Delegate
                </span>
              )}

              {/* Explorer */}
              {item.explorerUrl ? (
                <a
                  href={item.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 text-[11px] py-2 rounded-full font-bold transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Explorer
                </a>
              ) : (
                <span className="flex-1 flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-800 text-slate-400/40 dark:text-slate-600 bg-slate-50 dark:bg-slate-900 text-[11px] py-2 rounded-full font-bold cursor-not-allowed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Explorer
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* KOMPONEN TAB BUTTON */
function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`py-2.5 rounded-xl text-sm font-normal transition-all duration-300 cursor-pointer w-full
        ${active
          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-2 border-sky-400 scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.5)] rounded-full"
          : "text-slate-400 hover:text-sky-400 rounded-full"
        }`}
    >
      {label}
    </button>
  );
}
