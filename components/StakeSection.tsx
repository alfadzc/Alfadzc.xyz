"use client";
import React from "react";

export default function StakeSection() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-5 w-full max-w-xl mx-auto">
      <style>{`
        @keyframes slideInUpStake {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer-stake {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .stake-container { animation: slideInUpStake 0.7s ease-out; }
        .stake-border-wrap {
          position: relative;
          border-radius: 1rem;
          padding: 2px;
          overflow: hidden;
          background: linear-gradient(135deg, #a855f7, #c084fc, #a855f7);
          box-shadow:
            0 0 12px rgba(168, 85, 247, 0.6),
            0 0 24px rgba(168, 85, 247, 0.4),
            0 0 40px rgba(168, 85, 247, 0.2);
        }
        .stake-border-wrap::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 60deg,
            #a855f7 70deg,
            #e9d5ff 75deg,
            #ffffff 78deg,
            #e9d5ff 81deg,
            #a855f7 86deg,
            transparent 96deg,
            transparent 180deg,
            transparent 240deg,
            #a855f7 250deg,
            #e9d5ff 255deg,
            #ffffff 258deg,
            #e9d5ff 261deg,
            #a855f7 266deg,
            transparent 276deg,
            transparent 360deg
          );
          animation: rotate-border 6s linear infinite;
        }
        .stake-inner {
          position: relative;
          border-radius: 0.9rem;
          background: white;
          z-index: 1;
        }
        .dark .stake-inner {
          background: linear-gradient(to bottom right, rgba(15,23,42,0.9), rgba(30,41,59,0.85), rgba(15,23,42,0.9));
        }
        .shimmer-text-stake {
          background: linear-gradient(
            90deg,
            #ff7b00 0%,
            #ff9a2e 20%,
            #ffb347 40%,
            #ffc76a 50%,
            #ffb347 60%,
            #ff9a2e 80%,
            #ff7b00 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer-stake 8s linear infinite;
        }
        .stake-btn { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .stake-btn:hover { transform: scale(1.03); box-shadow: 0 0 18px rgba(16,185,129,0.5); }

        @media (prefers-reduced-motion: reduce) {
          .stake-container,
          .stake-border-wrap::before,
          .shimmer-text-stake {
            animation: none;
          }
        }
      `}</style>

      <div className="stake-container w-full stake-border-wrap shadow-lg dark:shadow-none">
        <div className="stake-inner p-6 backdrop-blur-md relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/8 rounded-full blur-2xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/8 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-wide">
              <span className="shimmer-text-stake font-bold">
              STAKE</span>
              <span className="text-slate-900 dark:text-white ml-2 font-semibold text-xl md:text-2xl">
              With Us !</span>
            </h3>
            <p className="mt-3 text-xs md:text-base font-medium text-slate-800 dark:text-slate-200 max-w-md mx-auto">
             Stake your tokens with us and earn <span className="text-emerald-500 dark:text-emerald-400 font-bold">
             Passive Income</span> everyday.
            </p>
            <a href="/network" target="_blank" rel="noopener noreferrer" className="stake-btn inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-bold py-2 px-6 rounded-full text-sm md:text-base shadow-md border border-emerald-400/30 mt-6">
              Start Staking Now
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <p className="text-sm text-slate-900 dark:text-slate-100 mt-5">
             🛡️100 % Secure • Instant Rewards • No Lock-up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
