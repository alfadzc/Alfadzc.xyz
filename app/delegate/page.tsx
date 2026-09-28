"use client";
import { useState, useMemo, useEffect } from "react";
import { MAINNET, TESTNET, ARCHIVE } from "@/data/ecosystem";

interface NetworkItemBase {
  name: string;
  logo: string;
  delegateUrl?: string;
  explorerUrl?: string;
  servicesUrl?: string;
  isDiscontinued?: boolean;
}

interface ChainMetrics {
  chain: string;
  validators: number;
  totalBonded: string;
  totalBondedUSD: number;
  price: number;
  uptime?: number;
  isFallback?: boolean;
  isNonCosmos?: boolean;
  commission?: number;
}

interface NetworkRow extends NetworkItemBase {
  apr: number | null;
  totalStaked: string;
  totalValueUSD: number | null;
  commission: number;
  validatorCount: number;
  isPactus: boolean;
  chainId: string;
}

const CHAIN_ALIAS: Record<string, string> = {
  "lava": "Lava",
  "shido": "Shido",
  "pactus": "Pactus",
  "paxi": "Paxi",
  "safrochain": "Safrochain",
  "safrochain testnet": "Safrochain Testnet",
  "bitbadges": "Bitbadges Chain",
  "bitbadges chain": "Bitbadges Chain",
  "lumen": "Lumen",
  "jay network": "Jay Network",
  "jaynetwork": "Jay Network",
  "epix": "Epix",
  "empeiria": "Empeiria",
  "pushchain": "Pushchain",
  "republic ai": "Republic AI",
  "republic": "Republic AI",
  "limonata": "Limonata",
  "monolythium": "Monolythium v1",
  "monolythium v1": "Monolythium v1",
};

// Chain ID
const CHAIN_ID_MAP: Record<string, string> = {
  // Mainnet
  "Lava": "lava-mainnet-1",
  "Shido": "shido_9008-1",
  "Paxi": "paxi-mainnet",
  "Pactus": "",
  "Safrochain": "safrochain-1",
  "Bitbadges Chain": "bitbadges-1",
  "Lumen": "lumen",
  "Jay Network": "thejaynetwork",
  // Testnet
  "Empeiria": "empe-testnet-2",
  "Safrochain Testnet": "",
  "Pushchain": "push_42101-1",
  "Republic AI": "raitestnet_77701-1",
  "Limonata": "limonata_10777-1",
  "Worrell Testnet": "worrell-testnet-1",
  // Archive
  "CNHO Stable": "cnho-1",
  "Epix": "epix_1916-1",
  "Monolythium v1": "mono-testnet-1",
};

// Commission per chain (persen). Default 5% kalau tidak ada di map.
const CHAIN_COMMISSION_MAP: Record<string, number> = {
  "Lava": 10,
  "Paxi": 1,
  "Safrochain": 8,
  "Bitbadges Chain": 10,
};

function normalizeChain(name: string): string {
  return CHAIN_ALIAS[name.toLowerCase().trim()] ?? name;
}

function computeApr(totalValueUSD: number, totalBonded: string): number | null {
  if (!totalValueUSD || !totalBonded) return null;
  const bonded = parseFloat(totalBonded);
  if (!Number.isFinite(bonded) || bonded <= 0) return null;
  const raw = (totalValueUSD / bonded) * 100;
  if (raw <= 0) return null;
  return Math.min(raw, 999.99);
}

function formatUSD(v: number | null | undefined): string {
  if (v === null || v === undefined || v === 0) return "–";
  return `$${v.toLocaleString("en-US")}`;
}

function formatStaked(v: string | undefined): string {
  if (!v) return "–";
  const num = parseFloat(v);
  if (!Number.isFinite(num)) return v;
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(2)}K`;
  return num.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

function formatAPR(a: number | null): string {
  return a === null ? "N/A" : `${a.toFixed(2)}%`;
}

export default function DelegatePage() {
  const [tab, setTab] = useState<"mainnet" | "testnet" | "archive">("mainnet");
  const [search, setSearch] = useState("");
  const [metrics, setMetrics] = useState<ChainMetrics[]>([]);
  const [loadingMetrics, setLoadingMetrics] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchMetrics = async () => {
      try {
        const res = await fetch(`/api/metrics/multi-chain?t=${Date.now()}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (mounted && Array.isArray(data.chains)) {
          setMetrics(data.chains);
        }
      } catch (err) {
        console.error("Failed to fetch metrics:", err);
      } finally {
        if (mounted) setLoadingMetrics(false);
      }
    };
    fetchMetrics();
    const id = setInterval(fetchMetrics, 30000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const baseNetworks: NetworkItemBase[] = useMemo(() => {
    if (tab === "mainnet") return MAINNET as unknown as NetworkItemBase[];
    if (tab === "testnet") return TESTNET as unknown as NetworkItemBase[];
    return ARCHIVE as unknown as NetworkItemBase[];
  }, [tab]);

  const metricsMap = useMemo(() => {
    const map: Record<string, ChainMetrics> = {};
    metrics.forEach((m) => {
      map[normalizeChain(m.chain)] = m;
    });
    return map;
  }, [metrics]);

  const rows: NetworkRow[] = useMemo(() => {
    return baseNetworks.map((n) => {
      const m = metricsMap[n.name];
      const totalValueUSD = m?.totalBondedUSD ?? null;

      const isPactus = n.name === "Pactus";

      const apr =
        !isPactus && totalValueUSD && m?.totalBonded
          ? computeApr(totalValueUSD, m.totalBonded)
          : null;

      const commission = isPactus ? 0.2 : (CHAIN_COMMISSION_MAP[n.name] ?? 5);

      const chainId = CHAIN_ID_MAP[n.name] || n.name.toLowerCase();

      return {
        ...n,
        apr,
        totalStaked: m?.totalBonded ? formatStaked(m.totalBonded) : "–",
        totalValueUSD,
        commission,
        validatorCount: m?.validators ?? 0,
        isPactus,
        chainId,
      };
    });
  }, [baseNetworks, metricsMap]);

  const filtered = useMemo(
    () => rows.filter((n) =>
      n.name.toLowerCase().includes(search.toLowerCase()) ||
      n.chainId.toLowerCase().includes(search.toLowerCase())
    ),
    [rows, search]
  );

  const totalValue = filtered.reduce((s, n) => s + (n.totalValueUSD ?? 0), 0);

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-slate-900 dark:text-white px-4 sm:px-6 py-10 max-w-7xl mx-auto font-mono">

      {/* HEADER */}
      <div className="relative flex items-center justify-center mb-8">
        <button
          onClick={() => window.close()}
          className="absolute left-0 text-xs text-slate-300 hover:text-white border border-slate-700 px-3 py-1 rounded hover:border-slate-400 transition">
          ← Close
        </button>
        <div className="flex items-center gap-4">
          <img
            src="/favicon.ico"
            alt="logo"
            className="w-12 h-12 rounded-full"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div>
            <p className="text-xl font-bold">
            Alfadzc Validator</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
            Secure your assets across multi-chains.</p>
          </div>
        </div>
      </div>

      {/* TOTAL VALUE STAKED */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-slate-500 dark:text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}>
            <circle cx="12" cy="12" r="10" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 2.88.879 4.05 0l.879-.659m-5.808 0L7.5 15m4.5 0l-3.879 2.818m5.808 0L16.5 15M9 6h6M9 10h6m-6 4h6"
            />
          </svg>
          <span className="text-sm font-extrabold text-slate-500 dark:text-slate-300">
          Total Value Staked:
          </span>
          <span className="text-sm font-extrabold text-emerald-500 dark:text-emerald-500">
            ${totalValue.toLocaleString("en-US")}
          </span>
        </div>
      </div>

      {/* TAB + SEARCH */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex gap-1">
          {(["mainnet", "testnet", "archive"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1 rounded text-sm font-bold transition cursor-pointer ${
                tab === t
                  ? "bg-emerald-500 text-black"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search networks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white dark:bg-[#161b22] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm px-4 py-2 rounded w-64 focus:outline-none focus:border-purple-400 dark:focus:border-slate-500 placeholder-slate-400 dark:placeholder-slate-500"
        />
      </div>

      {/* SECTION LABEL */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mb-4 flex items-center justify-between">
        <p className="text-slate-500 text-xs">— {tab} —</p>
        {loadingMetrics && (
         <p className="text-slate-500 text-xs animate-pulse">
        Loading metrics...</p>
        )}
      </div>

      {/* TABLE */}
       <div className="rounded-lg border border-blue-500 dark:border-blue-500 bg-slate-50 dark:bg-slate-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-400 shadow-none hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,1)]">
         <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60">
                <th className="text-left px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">Network</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">APR</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">Total Staked</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">Total Value (USD)</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">Commission</th>
                <th className="text-right px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((n, i) => {
                const url = n.delegateUrl || n.explorerUrl;
                return (
                  <tr
                    key={`${n.name}-${i}`}
                    className="border-b border-slate-200 dark:border-slate-700/70 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                  >
                    {/* NETWORK */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center">
                          {n.logo ? (
                            <img
                              src={n.logo}
                              alt={n.name}
                              className="w-full h-full object-cover"
                              onError={(e) => (e.currentTarget.style.display = "none")}
                            />
                          ) : (
                            <span className="text-xs font-bold text-slate-300">
                              {n.name[0]}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-slate-900 dark:text-white truncate">
                           alfadzc
                          </p>
                          <p className="text-xs text-slate-700 dark:text-slate-300 truncate">{n.chainId}</p>
                        </div>
                      </div>
                    </td>

                    {/* APR */}
                    <td className="px-6 py-4">
                      <span
                        className={
                          n.apr === null
                            ? "text-slate-500"
                            : "text-emerald-500 dark:text-emerald-400 font-medium"
                        }
                      >
                        {formatAPR(n.apr)}
                      </span>
                    </td>

                    {/* TOTAL STAKED */}
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                      {n.totalStaked}
                    </td>

                    {/* TOTAL VALUE */}
                    <td className="px-6 py-4">
                      <span
                        className={
                          n.totalValueUSD === null || n.totalValueUSD === 0
                            ? "text-slate-500"
                            : "text-emerald-500 dark:text-emerald-400 font-medium"
                        }>
                       {formatUSD(n.totalValueUSD)}
                      </span>
                    </td>

                    {/* COMMISSION */}
                    <td className="px-6 py-4">
                      {n.isPactus ? (
                        <span className="text-xs text-slate-300">0.20 PAC</span>
                      ) : (
                        <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {n.commission.toFixed(2)}%
                        </span>
                      )}
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-4 text-right">
                      {url ? (
                       <a href={url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors">
                          Delegate
                          {!n.isDiscontinued && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path                                                                                             
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 17L17 7M17 7H8M17 7v9"
                             />
                            </svg>
                           )}
                         </a>
                       ) : (
                      <span className="text-xs text-slate-600">–</span>
                     )}
                   </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-slate-500">
             No networks found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
