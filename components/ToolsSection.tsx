"use client";

import { useEffect, useMemo, useState } from "react";

interface ChainMetrics {
  chain: string;
  validators: number;
  totalBonded: string;
  totalBondedUSD: number;
  price: number;
  isFallback?: boolean;
}

interface MetricsData {
  activeValidators: number;
  networkUptime: number;
  totalStaked: string;
  totalStakedUSD: number;
  networksSupported?: string;
  networksSupporteed?: string;
  chains?: ChainMetrics[];
  isRealtime?: boolean;
}

const CHAIN_LOGOS: Record<string, string> = {
  Lava: "/chains/lava.png",
  Shido: "/chains/shido.png",
  Paxi: "/chains/paxi.png",
  "Bitbadges Chain": "/chains/bitbadges.png",
  "CNHO Stables": "/chains/cnho.png",
  Lumen: "/chains/lumen.png",
  Epix: "/chains/epix.png",
  Empeiria: "/chains/empeiria.png",
  Safrochain: "/chains/safrochain.png",
  Pushchain: "/chains/pushchain.png",
  "Republic AI": "/chains/republic.png",
  Monolythium: "/chains/monolythium.png",
};

const NETWORK_TYPE_MAP: Record<string, "mainnet" | "testnet"> = {
  Lava: "mainnet",
  Shido: "mainnet",
  Paxi: "mainnet",
  "Bitbadges Chain": "mainnet",
  "CNHO Stables": "mainnet",
  Lumen: "mainnet",
  Epix: "mainnet",
  Empeiria: "testnet",
  Safrochain: "testnet",
  Pushchain: "testnet",
  "Republic AI": "testnet",
  Monolythium: "testnet",
};

const TOKEN_CODE_MAP: Record<string, string> = {
  Lava: "Lava",
  Shido: "SHIDO",
  Paxi: "PAXI",
  "Bitbadges Chain": "BADGE",
  "CNHO Stables": "CNHO",
  Lumen: "LMN",
  Epix: "EPIX",
  Empeiria: "EMPE",
  Safrochain: "SAF",
  Pushchain: "PC",
  "Republic AI": "RAI",
  Monolythium: "LYTH",
};

const CHAIN_NAME_ALIAS: Record<string, string> = {
  lava: "Lava",
  shido: "Shido",
  paxi: "Paxi",
  bitbadges: "Bitbadges Chain",
  "bitbadges chain": "Bitbadges Chain",
  cnho: "CNHO Stables",
  "cnho stables": "CNHO Stables",
  cnhostables: "CNHO Stables",
  lumen: "Lumen",
  epix: "Epix",
  empeiria: "Empeiria",
  safrochain: "Safrochain",
  pushchain: "Pushchain",
  republic: "Republic AI",
  "republic ai": "Republic AI",
  republicai: "Republic AI",
  monolythium: "Monolythium",
};

function normalizeChainName(name: string): string {
  const raw = (name || "").trim();
  const key = raw.toLowerCase();
  return CHAIN_NAME_ALIAS[key] ?? raw;
}

function getTokenCode(chainName: string): string {
  return TOKEN_CODE_MAP[chainName] ?? chainName.slice(0, 4).toUpperCase();
}

function formatTokenDisplay(totalBonded: string): string {
  const num = Number.parseFloat(totalBonded);
  if (Number.isNaN(num)) return "—";
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(2)}K`;
  return num.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

function formatUsd(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return "—";
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

function aprFromChain(chain: ChainMetrics): string {
  if (!chain.totalBondedUSD || !chain.totalBonded) return "0.00% APR";
  const bonded = Number.parseFloat(chain.totalBonded);
  if (!Number.isFinite(bonded) || bonded <= 0) return "0.00% APR";
  const raw = (chain.totalBondedUSD / bonded) * 100;
  const apr = Math.max(0, Math.min(raw, 99.99));
  return `${apr.toFixed(2)}% APR`;
}

export default function ToolsSection() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const handleToolClick = (url: string) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    let mounted = true;

    const fetchMetrics = async () => {
      try {
        const res = await fetch(`/api/metrics/multi-chain?t=${Date.now()}`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: MetricsData = await res.json();
        if (mounted) setMetrics(data);
      } catch {
        if (mounted) {
          setMetrics({
            activeValidators: 491,
            networkUptime: 99.9,
            totalStaked: "205672.00",
            totalStakedUSD: 205672.0,
            networksSupported: "12",
            isRealtime: false,
            chains: [
              { chain: "lava", validators: 94, totalBonded: "3300947.91", totalBondedUSD: 117214, price: 0 },
              { chain: "shido", validators: 42, totalBonded: "108081256", totalBondedUSD: 22092, price: 0 },
              { chain: "paxi", validators: 37, totalBonded: "442634.49", totalBondedUSD: 4528, price: 0 },
              { chain: "bitbadges", validators: 45, totalBonded: "202974.11", totalBondedUSD: 0, price: 0 },
              { chain: "cnho", validators: 24, totalBonded: "213120", totalBondedUSD: 0, price: 0 },
              { chain: "lumen", validators: 53, totalBonded: "12574.07", totalBondedUSD: 0, price: 0 },
              { chain: "epix", validators: 23, totalBonded: "1823.2", totalBondedUSD: 0, price: 0 },
              { chain: "empeiria", validators: 103, totalBonded: "1340.2", totalBondedUSD: 0, price: 0 },
              { chain: "safrochain", validators: 12, totalBonded: "20199", totalBondedUSD: 0, price: 0 },
              { chain: "pushchain", validators: 18, totalBonded: "78765", totalBondedUSD: 0, price: 0 },
              { chain: "republic", validators: 9, totalBonded: "1120", totalBondedUSD: 0, price: 0 },
              { chain: "Monolythium", validators: 29, totalBonded: "105.000", totalBondedUSD: 0, price: 0 },
            ],
          });
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchMetrics();
    const id = window.setInterval(fetchMetrics, 15000);
    return () => {
      mounted = false;
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const onSlash = (e: KeyboardEvent) => {
      if (e.key === "/") {
        const el = document.getElementById("network-search") as HTMLInputElement | null;
        if (el) { e.preventDefault(); el.focus(); }
      }
    };
    window.addEventListener("keydown", onSlash);
    return () => window.removeEventListener("keydown", onSlash);
  }, []);

  const normalizedNetworksSupported = useMemo(
    () => metrics?.networksSupported ?? metrics?.networksSupporteed ?? "12",
    [metrics]
  );

  const normalizedChains: ChainMetrics[] = useMemo(
    () => (metrics?.chains ?? []).map((c) => ({ ...c, chain: normalizeChainName(c.chain) })),
    [metrics?.chains]
  );

  const filteredChains = useMemo(() => {
    const q = query.trim().toLowerCase();
    return normalizedChains.filter((c) =>
      !q || c.chain.toLowerCase().includes(q) || getTokenCode(c.chain).toLowerCase().includes(q)
    );
  }, [normalizedChains, query]);

  const mainnetChains = useMemo(
    () => filteredChains.filter((c) => NETWORK_TYPE_MAP[c.chain] === "mainnet"),
    [filteredChains]
  );

  const testnetChains = useMemo(
    () => filteredChains.filter((c) => NETWORK_TYPE_MAP[c.chain] === "testnet"),
    [filteredChains]
  );

  const renderCard = (chain: ChainMetrics, keyPrefix: string) => {
    const tokenCode = getTokenCode(chain.chain);
    return (
      <article
        key={`${keyPrefix}-${chain.chain}`}
        className="max-w-[360px] rounded-2xl border border-slate-200 dark:border-slate-800 dark:bg-[#171236] p-6 min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 dark:hover:bg-
[#1a1545] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
            {CHAIN_LOGOS[chain.chain] ? (
              <img src={CHAIN_LOGOS[chain.chain]} alt={chain.chain} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm font-bold text-slate-300">
                {chain.chain?.[0] ?? "?"}
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-bold text-slate-900 dark:text-white">{chain.chain}</p>
            <span className="inline-block rounded-md border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
              {aprFromChain(chain)}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-y-1 text-sm">
          <p className="text-slate-500 dark:text-slate-400">Staked</p>
          <p className="font-semibold text-slate-900 dark:text-white">{formatTokenDisplay(chain.totalBonded)} {tokenCode}</p>
          <p className="text-slate-500 dark:text-slate-400">TVL</p>
          <p className="font-semibold text-slate-900 dark:text-white">{formatUsd(chain.totalBondedUSD)}</p>
          <p className="text-slate-500 dark:text-slate-400">Validators</p>
          <p className="font-semibold text-orange-300">{chain.validators}</p>
        </div>
      </article>
    );
  };

  return (
    <section id="tools" className="relative z-10 px-6 py-16 md:py-20">
      <div className="mx-auto w-full max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 text-[#ff7b00] flex-shrink-0" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1.5" y="1.5" width="21" height="21" rx="5" fill="rgba(0,0,0,0.06)" stroke="none" />
            <path d="M3 13h4l2-6 3 12 3-8 2 4h4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="text-base md:text-3xl font-extrabold tracking-tight">
            <span className="text-2xl md:text-3xl font-bold text-[#ff7b00]">𝐌𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐧𝐠</span>
          </h2>
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-slate-900 dark:text-gray-100">
         𝐑𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐦𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐧𝐠 𝐯𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 𝐚𝐜𝐫𝐨𝐬𝐬 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 𝐧𝐞𝐭𝐰𝐨𝐫𝐤𝐬.
        </p>
      </div>

      <div className="mt-6 mb-12 flex justify-center">
        <div className="relative w-full max-w-sm">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-400">⌕</span>
          <input
            id="network-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#100c2a] py-2.5 pl-11 pr-12 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-n
one transition focus:border-blue-400 dark:focus:border-slate-500"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-500 dark:text-slate-300">
            {'/'}
          </span>
        </div>
      </div>

      <div className="mb-10 grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Networks Supported */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 ho
ver:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-5
00"></span></span>
              Live
            </span>
          </div>
          <p className="text-3xl font-bold text-orange-500">{normalizedNetworksSupported}+</p>
          <div className="border-t border-slate-200 dark:border-slate-700/30 pt-2">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">Networks Supported</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Mainnet & Testnet Validator</p>
          </div>
        </div>

        {/* Network Uptime */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 ho
ver:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-5
00"></span></span>
              Live
            </span>
          </div>
          <p className="text-3xl font-bold text-emerald-400">{metrics?.networkUptime?.toFixed(1) ?? "—"}%</p>
          <div className="border-t border-slate-200 dark:border-slate-700/30 pt-2">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">Network Uptime</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">7-day average</p>
          </div>
        </div>

        {/* Total Staked */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 ho
ver:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.7
51h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-5
00"></span></span>
              Live
            </span>
          </div>
          <p className="text-3xl font-bold text-purple-400">{formatUsd(metrics?.totalStakedUSD ?? 0)}</p>
          <div className="border-t border-slate-200 dark:border-slate-700/30 pt-2">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">Total Staked</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Secured assets</p>
          </div>
        </div>

        {/* Active Validators */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 ho
ver:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="4" width="20" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="14" width="20" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h.01M6 17h.01"/>
              </svg>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-5
00"></span></span>
              Live
            </span>
          </div>
          <p className="text-3xl font-bold text-blue-400">{normalizedChains.length}</p>
          <div className="border-t border-slate-200 dark:border-slate-700/30 pt-2">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">Active Validators</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Across {normalizedNetworksSupported}+ networks</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/60 p-5 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400
dark:hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:bg-slate-800 cursor-pointer">
          <p className="text-4xl font-bold text-slate-800 dark:text-slate-300">24/7</p>
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Support</p>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#171236]" />
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          <div>
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/30 pb-3">
              <h3 className="text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 rounded-full inline-block">𝐌𝐚𝐢𝐧𝐧𝐞𝐭</h3>
              <span className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full">{mainnetChains.length} networks</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {mainnetChains.map((chain) => renderCard(chain, "mainnet"))}
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/30 pb-3">
              <h3 className="text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 rounded-full inline-block">𝐓𝐞𝐬𝐭𝐧𝐞𝐭</h3>
              <span className="text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full">{testnetChains.length} networks</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {testnetChains.map((chain) => renderCard(chain, "testnet"))}
            </div>
          </div>
        </div>
      )}

      {!loading && filteredChains.length === 0 && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#171236] p-10 text-center text-slate-500 dark:text-slate-400">
          Network tidak ditemukan.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-40">
        <button
          onClick={() => handleToolClick("/tools/validator-monitor")}
          className="group relative overflow-hidden rounded-lg border border-pink-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 hover:border-pink-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-pink-500/20
 text-left"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#ff7b00] flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751
h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
            </svg>
            𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 𝐌𝐨𝐧𝐢𝐭𝐨𝐫
          </h3>
          <p className="text-base font-medium text-slate-900 dark:text-gray-200">
            Track validator uptime, health, and reliability in real time.
          </p>
          <div className="text-sm text-pink-400 font-semibold mt-4">Explore →</div>
        </button>
        <button
          onClick={() => handleToolClick("/tools/analytics")}
          className="group relative overflow-hidden rounded-lg border border-blue-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 hover:border-blue-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-blue-500/20
 text-left"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#ff7b00] flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h4l2-6 3 12 3-8 2 4h4"/>
            </svg>
            𝐍𝐞𝐭𝐰𝐨𝐫𝐤 𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬
          </h3>
          <p className="text-base font-medium text-slate-900 dark:text-gray-200">
            Real-time metrics across validator networks.
          </p>
          <div className="text-sm text-blue-400 font-semibold mt-4">Explore →</div>
        </button>
      </div>
    </section>
  );
}
