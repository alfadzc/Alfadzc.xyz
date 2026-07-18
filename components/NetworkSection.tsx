"use client";
import React from "react";

import { useState, useEffect } from "react";
import { MAINNET, TESTNET, ARCHIVE, NetworkItem } from "@/data/ecosystem";
import ChainLogo from "./chainLogo";

interface ValidatorStatus {
  [key: string]: "online" | "offline";
}

export default function NetworkSection() {
  const [tab, setTab] = useState<"all" | "mainnet" | "testnet" | "archive">("all");
  const [validatorStatus, setValidatorStatus] = useState<ValidatorStatus>({ Epix: "offline" });
  const [loading, setLoading] = useState(true);

  const ALL_NETWORKS = [...MAINNET, ...TESTNET];
  const data: NetworkItem[] = tab === "all" ? ALL_NETWORKS : tab === "mainnet" ? MAINNET : tab === "testnet" ? TESTNET : ARCHIVE;

  // Fetch real-time status dari API
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`/api/validators/status?t=${Date.now()}`, {
        cache: "no-store",
        });
   if (res.ok) {
        const status = await res.json();
        status.Epix = "offline"; // Hardcode Epix offline
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
           <rect x="3" y="4" width="18" height="6" rx="2"/>
           <rect x="3" y="14" width="18" height="6" rx="2"/>
           <circle cx="7" cy="7" r="1"/>
           <circle cx="7" cy="17" r="1"/>
           <line x1="11" y1="7" x2="17" y2="7"/>
           <line x1="11" y1="17" x2="17" y2="17"/>
          </svg>

          {/* TITLE */}
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-[#ff7b00]">
           𝐎𝐮𝐫 𝐍𝐞𝐭𝐰𝐨𝐫𝐤
          </h2>
        </div>

       {/* DESCRIPTION */}
        <p className="mt-2 max-w-2xl text-sm font-semibold md:text-base leading-relaxed text-slate-800 dark:text-slate-200">
         We support multiple mainnet and tesnet ecosystem<br/>
         Providing reliable validation and infrastructure service<br/>
         Across Cosmos-based network.
        </p>
      </div>
  
    {/* STAKE WITH US */}
      <div className="relative z-10 flex flex-col items-center text-center mt-2">           
   
    {/* MAIN BOX */}
      <div className="relative overflow-hidden rounded-2xl px-4 py-5 border border-pink-500 dark:bg-slate-800/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 dark:hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] dark:hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] dark:hover:bg-slate-800">
        
    {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b00]/10 via-white/5 to-[#3b82f6]/10" />

    {/* TEXT */}
      <div className="relative z-10">
    <h3 className="text-lg md:text-3xl font-black tracking-widest leading-none"> 
          <span className="text-blue-600 dark:text-[#ff7b00]">
     𝐒𝐓𝐀𝐊𝐄</span>{" "}
           <span className="text-[#ff7b00] dark:text-white">
     𝐖𝐢𝐭𝐡 𝐔𝐬 !</span>
           </h3>
           <p className="mt-7 text-sm font-semibold md:text-base text-slate-700 dark:text-slate-300">
           Stake your tokens with us and earn passive income everyday.
         </p>
        </div>
       </div>
      </div>  

     {/* TABS */}
       <div className="w-full flex justify-start mt-16 mb-12">
         <div className="flex gap-2 p-1 rounded-2xl border bg-slate-200/60 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          <TabButton active={tab === "all"} onClick={() => setTab("all")} label="All Network" />
          <TabButton active={tab === "mainnet"} onClick={() => setTab("mainnet")} label="Mainnet" />
          <TabButton active={tab === "testnet"} onClick={() => setTab("testnet")} label="Tesnet" />
          <TabButton active={tab === "archive"} onClick={() => setTab("archive")} label="Archive" />
        </div>
      </div>

    {/* TABS INDICATOR */}
      <div className="w-full flex items-center justify-start mb-10">
         <div className="px-5 py-2 rounded-lg border border-emerald-500 dark:bg-slate-800/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] dark:hover:bg-slate-800">
         {data.length} <span>Network</span>
        </div>
      </div>

    {/* GRID CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {data.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="relative flex flex-col items-center p-6 transition-all duration-500 group rounded-3xl border border-blue-500 dark:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.7)]">

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

           {/* BUTTON */}
            <div className="flex gap-2 w-full mt-auto flex-wrap">
            
            {/* TOMBOL DELEGATE */}
              {item.delegateUrl ? (
                <a href={item.delegateUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-1 min-w-fit flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-400 text-white text-[11px] py-2 px-3 rounded-full font-bold shadow-lg active:scale-95 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                  </svg>
                  Delegate
                </a>
               ) : (
                <span className="flex-1 min-w-fit flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600/40 to-blue-600/40 text-white/40 text-[11px] py-2 px-3 rounded-full font-bold cursor-not-allowed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                  </svg>
                  Delegate
                </span>
              )}

              {/* EXPLORER / Services */}
              {item.servicesUrl ? (
                <a href={item.servicesUrl} target="_blank" rel="noopener noreferrer" 
                  className="flex-1 min-w-fit flex items-center justify-center gap-1 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 text-[11px] py-2 px-3 rounded-full font-bold transition-all">
                  Services
                </a>
               ) : item.explorerUrl ? (
                <a href={item.explorerUrl} target="_blank" rel="noopener noreferrer" 
                  className="flex-1 min-w-fit flex items-center justify-center gap-1 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 text-[11px] py-2 px-3 rounded-full font-bold transition-all">
                  Explorer
                </a>
                ) : (
                <span className="flex-1 min-w-fit flex items-center justify-center gap-1 border border-slate-200 dark:border-slate-800 text-slate-400/40 dark:text-slate-600 bg-slate-50 dark:bg-slate-900 text-[11px] py-2 px-3 rounded-full font-bold cursor-not-allowed">
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

{/* COMPONEN TAB BUTTON */}
const TAB_ICONS: { [key: string]: React.ReactElement } = {
  "All Network": (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"/>
    </svg>
  ),
  "Mainnet": (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  "Tesnet": (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  "Archive": (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
};

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-xl whitespace-nowrap text-base font-semibold transition-all duration-300 cursor-pointer w-full flex items-center justify-center gap-2
        ${active
          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-2 border-sky-500 scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.5)] rounded-xl"
          : "text-slate-800 dark:text-slate-200"
        }`}>

      {TAB_ICONS[label]}
      {label}
    </button>
  )
}
