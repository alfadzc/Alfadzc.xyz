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

const CHAINS = ["lava", "shido", "paxi", "bitbadges", "cnho", "lumen", "empeiria", "safrochain", "pushchain", "republic", "monolythium v1"];

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

function formatPrice(price: number): string {
  if (!price || price === 0) return "—";
  if (price < 0.000001) return `$${price.toExponential(2)}`;
  if (price < 0.01) return `$${price.toFixed(6)}`;
  if (price < 1) return `$${price.toFixed(4)}`;
  return `$${price.toFixed(2)}`;
}

function formatBonded(value: string, chain: string): string {
  const num = parseFloat(value || "0");
  if (num === 0) return "—";
  const symbol = chain?.toUpperCase() ?? "";
  if (num >= 1_000_000) return `${num.toLocaleString("en-US", { maximumFractionDigits: 0 })} ${symbol}`;
  if (num >= 1_000) return `${num.toLocaleString("en-US", { maximumFractionDigits: 0 })} ${symbol}`;
  return `${num.toLocaleString("en-US", { maximumFractionDigits: 2 })} ${symbol}`;
}

export default function ValidatorMonitor() {
  const [validators, setValidators] = useState<ValidatorMetrics[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedChain, setSelectedChain] = useState<string | null>(null);

  useEffect(() => {
    const fetchValidators = async () => {
      try {
        const [metricsRes, ...validatorResults] = await Promise.allSettled([
          fetch(`/api/metrics/multi-chain?t=${Date.now()}`, { cache: "no-store" }).then(r => r.json()).catch(() => null),
          ...CHAINS.map(chain =>
            fetch(`/api/validators/${chain}`, { cache: "no-store" })
            .then(res => res.json())
            .catch(() => null)
          )
        ]);
        const metricsData = metricsRes.status === "fulfilled" ? metricsRes.value : null;
        const priceMap: Record<string, number> = {};
        const tvlMap: Record<string, number> = {};
        if (metricsData?.chains) {
          metricsData.chains.forEach((c: any) => {
            priceMap[c.chain.toLowerCase()] = c.price;
            tvlMap[c.chain.toLowerCase()] = c.totalBondedUSD;
          });
        }
        const validatorsData = validatorResults
          .filter(r => r.status === "fulfilled" && r.value !== null)
          .map(r => {
           const v = (r as PromiseFulfilledResult<ValidatorMetrics>).value;
           if (priceMap[v.chain?.toLowerCase()]) v.price = priceMap[v.chain.toLowerCase()];
           if (tvlMap[v.chain?.toLowerCase()]) v.totalBondedUSD = tvlMap[v.chain.toLowerCase()].toFixed(2);
           return v;
          });
        setValidators(validatorsData);
      } catch (error) {
        console.error("Error fetching validators:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchValidators();
    const interval = setInterval(fetchValidators, 30000); // Update setiap 30 detik
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
            className="text-sm text-slate-900 dark:text-slate-200 mb-4 inline-block hover:underline cursor-pointer">
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold text-[#ff7b00] mb-4 flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751 h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
            </svg>
            𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 𝐌𝐨𝐧𝐢𝐭𝐨𝐫
          </h1>
          <p className="text-center font-semibold text-slate-900 dark:text-slate-300">Track Uptime, Performance and Reliability Across all Validator</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] dark:hover:bg-slate-800">
            <p className="text-base font-bold text-center text-slate-800 dark:text-slate-300 mb-2">Total Validators</p>
            <p className="text-2xl text-center font-bold text-blue-500">{validators.length}</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] dark:hover:bg-slate-800">
            <p className="text-base font-bold text-center text-slate-800 dark:text-slate-300 mb-2">Avg Uptime</p>
            <p className="text-2xl text-center font-bold text-emerald-500">
             {validators.length > 0
              ? (validators.reduce((sum, v) => sum + v.uptime, 0) / validators.length).toFixed(2)
              : "—"}%
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] dark:hover:bg-slate-800">
            <p className="text-base font-bold text-center text-slate-800 dark:text-slate-300 mb-2">Last Updated</p>
            <p className="text-lg text-center text-[#ff7b00]">
              {validators[0]?.lastUpdated
              ? new Date(validators[0].lastUpdated).toLocaleTimeString()
              : "—"}
            </p>
          </div>
        </div>

        {/* VALIDATOR GRID */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#ff7b00] mt-10 mb-6 flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#ff7b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="4" width="20" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="14" width="20" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h.01M6 17h.01"/>
            </svg>
            𝐎𝐮𝐫 𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫
          </h2>
  
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex flex-col items-center gap-4">
                {/* Blue circle with rotating border */}
                <style>{`
                  @keyframes spin {
                    to { transform: rotate(360deg); }
                  }
                  @keyframes bounce {
                    0%, 100% { opacity: 0.3; transform: translateY(0); }
                    50% { opacity: 1; transform: translateY(-8px); }
                  }
                  .animate-spin-custom {
                    animation: spin 1.5s linear infinite;
                  }
                  .animate-bounce-custom {
                    animation: bounce 1.4s ease-in-out infinite;
                  }
                `}</style>
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-700 dark:border-slate-600"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sky-500 dark:border-t-sky-400 animate-spin-custom"></div>
                  
                  {/* LOADING SCANN VALIDATOR */}
                  <div className="absolute inset-0 flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-bounce-custom" style={{animationDelay: "0ms"}}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-bounce-custom" style={{animationDelay: "150ms"}}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 animate-bounce-custom" style={{animationDelay: "300ms"}}></div>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Scanning Validators...</p>
              </div>
            </div>
          ) : validators.length === 0 ? (
            <div className="text-center py-12 text-slate-300">Validators Not Found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {validators.map((validator, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,1)] dark:hover:bg-slate-800"
                  onClick={() => setSelectedChain(validator.chain)}>
                  <div className="flex items-start justify-between mb-4">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-600 flex-shrink-0">
                       {CHAIN_LOGOS[validator.chain?.toLowerCase() ?? ""] ? (
                        <img
                        src={CHAIN_LOGOS[validator.chain?.toLowerCase() ?? ""]}
                        alt={validator.chain}
                        className="w-full h-full object-cover"/>
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
                      {(validator.uptime ?? 99.9).toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  {/* PRICE BADGE TAMBAHAN HARGA REALTIME */}
                  <div className="mb-3 flex items-center justify-between bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/30 dark:to-purple-900/30 px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-900/50">
                   <span className="text-sm font-semibold text-slate-900 dark:text-slate-300">Price:</span>
                   <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{formatPrice(validator.price)}</span>
                  </div>

                  <div className="space-y-2 border-t border-slate-700/30 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-900 dark:text-slate-300">Total Staked:</span>
                      <span className="text-slate-900 dark:text-slate-300">{formatBonded(validator.totalBonded, validator.chain)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-900 dark:text-slate-300">Total Value:</span>
                      <span className="text-slate-900 dark:text-slate-300">${parseFloat(validator.totalBondedUSD || "0").toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-900 dark:text-slate-300">Active Validators:</span>
                      <span className="text-slate-900 dark:text-slate-300">{validator.validators}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-700/30">
                    <p className="text-xs text-slate-900 dark:text-slate-300">
                    Updated: {validator.lastUpdated ? new Date(validator.lastUpdated).toLocaleTimeString() : "—"}
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
