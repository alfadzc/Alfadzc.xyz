"use client";

import { useEffect, useState } from "react";

interface ValidatorMetrics {
  chain: string;
  moniker: string;
  operatorAddress: string;
  totalBonded: string;
  totalBondedUSD: string;
  price: number;
  validators: number;
  uptime: number;
  lastUpdated: string;
}

const CHAINS = ["lava", "shido", "paxi", "bitbadges", "cnho", "lumen", "empeiria", "safrochain", "pushchain", "republic", "monolythium"];

const CHAIN_LOGOS: { [key: string]: string } = {
  lava: "/chains/lava.png",
  shido: "/chains/shido.png",
  paxi: "/chains/paxi.png",
  bitbadges: "/chains/bitbadges.png",
  cnho: "/chains/cnho.png",
  lumen: "/chains/lumen.png",
  empeiria: "/chains/empeiria.png",
  safrochain: "/chains/safrochain.png",
  pushchain: "/chains/pushchain.png",
  republic: "/chains/republic.png",
  monolythium: "/chains/monolythium.png",
};

export default function ValidatorMonitor() {
  const [validators, setValidators] = useState<ValidatorMetrics[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedChain, setSelectedChain] = useState<string | null>(null);

  useEffect(() => {
    const fetchValidators = async () => {
      try {
        const results = await Promise.allSettled(
          CHAINS.map(chain =>
            fetch(`/api/validators/${chain}`)
              .then(res => res.json())
              .catch(() => null)
          )
        );

        const validatorsData = results
          .filter(r => r.status === "fulfilled" && r.value !== null)
          .map(r => (r as PromiseFulfilledResult<ValidatorMetrics>).value);

        setValidators(validatorsData);
      } catch (error) {
        console.error("Error fetching validators:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchValidators();
    const interval = setInterval(fetchValidators, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToHome = () => {
    if (window.opener) {
      window.opener.focus();
      window.close();
    } else {
      window.location.href = "/";
    }
  };

  const getUptimeColor = (uptime: number) => {
    if (uptime >= 99.5) return "text-emerald-400";
    if (uptime >= 99) return "text-yellow-400";
    return "text-red-400";
  };

  const getUptimeBgColor = (uptime: number) => {
    if (uptime >= 99.5) return "bg-emerald-900/30 border-emerald-700/50";
    if (uptime >= 99) return "bg-yellow-900/30 border-yellow-700/50";
    return "bg-red-900/30 border-red-700/50";
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={handleBackToHome}
            className="text-sm text-slate-400 hover:text-slate-300 mb-4 inline-block cursor-pointer hover:underline"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold text-[#ff7b00] mb-2 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751
h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
            </svg>
            𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 𝐌𝐨𝐧𝐢𝐭𝐨𝐫
          </h1>
          <p className="text-slate-900 dark:text-slate-300">Track uptime, performance, and reliability across all validators</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
            <p className="text-sm text-slate-900 dark:text-slate-300 mb-2">Total Validators</p>
            <p className="text-3xl font-bold text-emerald-400">{validators.length}</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
            <p className="text-sm text-slate-900 dark:text-slate-300 mb-2">Avg Uptime</p>
            <p className="text-3xl font-bold text-blue-400">
              {validators.length > 0
                ? (validators.reduce((sum, v) => sum + v.uptime, 0) / validators.length).toFixed(2)
                : "—"}%
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
            <p className="text-sm text-slate-900 dark:text-slate-300 mb-2">Last Updated</p>
            <p className="text-sm text-slate-900 dark:text-slate-300">
              {validators[0]?.lastUpdated
                ? new Date(validators[0].lastUpdated).toLocaleTimeString()
                : "—"}
            </p>
          </div>
        </div>

        {/* Validators Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#ff7b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="4" width="20" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="14" width="20" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h.01M6 17h.01"/>
            </svg>
            𝐎𝐮𝐫 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫
          </h2>
          {loading ? (
            <div className="text-center py-12 text-slate-300">Loading validators...</div>
          ) : validators.length === 0 ? (
            <div className="text-center py-12 text-slate-300">No validators found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {validators.map((validator, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow-[0_0_
20px_rgba(56,189,248,0.3)] dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] dark:hover:bg-[#1e2444] cursor-pointer"
                  onClick={() => setSelectedChain(validator.chain)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-600 flex-shrink-0">
                        {CHAIN_LOGOS[validator.chain.toLowerCase()] ? (
                          <img
                            src={CHAIN_LOGOS[validator.chain.toLowerCase()]}
                            alt={validator.chain}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-700 flex items-center justify-center text-xs font-bold">
                            {validator.chain?.[0]}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-300">{validator.moniker}</h3>
                        <p className="text-xs text-slate-900 dark:text-slate-300">{validator.chain}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full border text-sm font-semibold ${getUptimeBgColor(validator.uptime)}`}>
                      <span className={getUptimeColor(validator.uptime)}>
                        {validator.uptime.toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-slate-700/30 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-900 dark:text-slate-300">Total Staked:</span>
                      <span className="text-slate-900 dark:text-slate-300">${validator.totalBondedUSD}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-900 dark:text-slate-300">Tokens:</span>
                      <span className="text-slate-900 dark:text-slate-300">{validator.totalBonded}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-900 dark:text-slate-300">Network Validators:</span>
                      <span className="text-slate-900 dark:text-slate-300">{validator.validators}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-700/30">
                    <p className="text-xs text-slate-900 dark:text-slate-300">
                      Updated: {new Date(validator.lastUpdated).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
