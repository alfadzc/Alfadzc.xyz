"use client";
import React from "react";

export default function StakeSection() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-6 w-full max-w-xl mx-auto">
      <style>{`
        @keyframes slideInUpStake {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse-glow-stake {
          0%, 100% { box-shadow: 0 0 12px rgba(249,115,22,0.15); border-color: rgba(249,115,22,0.35); }
          50% { box-shadow: 0 0 30px rgba(249,115,22,0.35); border-color: rgba(249,115,22,0.75); }
        }
        @keyframes shimmer-stake {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .stake-container { animation: slideInUpStake 0.7s ease-out; }
        .stake-border { animation: pulse-glow-stake 3s ease-in-out infinite; }
        .shimmer-text-stake {
          background: linear-gradient(90deg, #ff7b00, #ffb347, #ff7b00);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer-stake 4s linear infinite;
        }
        .stake-btn { transition: all 0.22s ease; }
        .stake-btn:hover { transform: scale(1.03); box-shadow: 0 0 18px rgba(249,115,22,0.28); }
      `}</style>

      <div className="stake-container w-full stake-border border-2 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 p-6 backdrop-blur-md relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/8 rounded-full blur-2xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/8 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        <div className="relative z-10 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-wide">
            <span className="shimmer-text-stake font-bold">STAKE</span>
            <span className="text-white ml-2 font-semibold text-xl md:text-2xl">With Us !</span>
          </h3>
          <p className="mt-3 text-xs md:text-sm font-medium text-slate-300 max-w-md mx-auto">
            Stake your tokens with us and earn <span className="text-emerald-400 font-bold">passive income</span> everyday.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto my-4"></div>
          <div className="flex flex-wrap justify-center gap-5 mb-4 text-center">
            <div><p className="text-xl md:text-2xl font-bold text-orange-500">12%</p><p className="text-[10px] text-slate-400">APR Yield</p></div>
            <div><p className="text-xl md:text-2xl font-bold text-emerald-400">24/7</p><p className="text-[10px] text-slate-400">Monitoring</p></div>
            <div><p className="text-xl md:text-2xl font-bold text-blue-400">100%</p><p className="text-[10px] text-slate-400">Secure</p></div>
          </div>
          <a href="/network" target="_blank" rel="noopener noreferrer" className="stake-btn inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-6 rounded-full text-sm md:text-base shadow-md border border-orange-400/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            Start Staking Now
          </a>
          <p className="text-[10px] text-slate-500 mt-2">
           🔒 Secure • Instant Rewards • No Lock-up</p>
        </div>
      </div>
    </div>
  );
}
