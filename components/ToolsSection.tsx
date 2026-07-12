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
  chains?: ChainMetrics[];
  isRealtime?: boolean;
}

const CHAIN_LOGOS: Record<string, string> = {
  Lava: "/chains/lava.png",
  Shido: "/chains/shido.png",
  Paxi: "/chains/paxi.png",
  Safrochain: "/chains/safrochain.png",  
  Bitbadges: "/chains/bitbadges.png",
  "CNHO Stable" : "/chains/cnho.png",
  Lumen: "/chains/lumen.png",
  "Jay Network" : "/chains/jaynetwork.png",  
  Epix: "/chains/epix.png",
  Empeiria: "/chains/empeiria.png",
  "Safrochain Testnet": "/chains/safrochain.png",
  Pushchain: "/chains/pushchain.png",
  "Republic AI": "/chains/republic.png",
  Limonata: "/chains/limonata.png",  
  "Monolythium v1": "/chains/monolythium.png",
};

const NETWORK_TYPE_MAP: Record<string, "mainnet" | "testnet" | "archive"> = {
  Lava: "mainnet",
  Shido: "mainnet",
  Paxi: "mainnet",
  Safrochain: "mainnet",
  Bitbadges: "mainnet",
  "CNHO Stable": "mainnet",
  Lumen: "mainnet",
  "Jay Network": "mainnet",  
  Epix: "mainnet",
  Empeiria: "testnet",
  "Safrochain Testnet": "testnet",
  Pushchain: "testnet",
  "Republic AI": "testnet",
  Limonata: "testnet",  
  "Monolythium v1": "archive",
};

const TOKEN_CODE_MAP: Record<string, string> = {
  Lava: "LAVA",
  Shido: "SHIDO",
  Paxi: "PAXI",
  Safrochain: "SAF",  
  Bitbadges: "BADGE",
  "CNHO Stable": "CNHO",
  Lumen: "LMN",
  "Jay Network": "JAY",  
  Epix: "EPIX",
  Empeiria: "EMPE",
  "Safrochain Testnet": "SAF",
  Pushchain: "PC",
  "Republic AI": "RAI",
  Limonata: "LIMO",  
  "Monolythium v1": "LYTH",
};

function normalizeChainName(name: string): string {
  const raw = (name || "").trim();
  const map: Record<string, string> = {
    lava: "Lava",
    shido: "Shido",
    paxi: "Paxi",
    safrochain: "Safrochain",
    bitbadges: "Bitbadges",
    cnho: "CNHO Stable",
    lumen: "Lumen",
    jay: "Jay Network",
    epix: "Epix",
    empeiria: "Empeiria",
    "safrochain-testnet": "Safrochain Testnet",
    pushchain: "Pushchain",
    republic: "Republic AI",
  limonata: "Limonata",
    monolythium: "Monolythium v1",
  };
  
  return map[raw.toLowerCase()] ?? raw;
}

function getTokenCode(chainName: string): string {
  return TOKEN_CODE_MAP[chainName] ?? chainName.slice(0, 4).toUpperCase();
}

function formatTokenDisplay(totalBonded: string): string {
  const num = Number.parseFloat(totalBonded);
  if (Number.isNaN(num)) return "—";
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
        console.log("Fetched metrics:", data);
        if (mounted) setMetrics(data);
       } catch (error) {
        console.error("Metrics fetch error:", error);
        if (mounted) {
          setMetrics({
            activeValidators: 491,
            networkUptime: 99.9,
            totalStaked: "205672.00",
            totalStakedUSD: 205672.0,
            networksSupported: "12",
            isRealtime: false,
            chains: [
              { chain: "Lava", validators: 88, totalBonded: "6573752.38", totalBondedUSD: 143885.44, price: 0.02188787 },
              { chain: "Shido", validators: 38, totalBonded: "107400299.71", totalBondedUSD: 21953.16, price: 0.000204405 },
              { chain: "Paxi", validators: 32, totalBonded: "676218.33", totalBondedUSD: 9549.92, price: 0.01410782 },
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

  const normalizedNetworksSupported = metrics?.networksSupported ?? "12";

  const normalizedChains: ChainMetrics[] = useMemo(() => {
  const chains = (metrics?.chains ?? []).map((c) => ({
    ...c,
    chain: normalizeChainName(c.chain),
   }));

  const hasMonolythium = chains.some(
    (c) => c.chain === "Monolythium v1"
   );

   if (!hasMonolythium) {
    chains.push({
      chain: "Monolythium v1",
      validators: 1, // sesuaikan
      totalBonded: "Archive",
      totalBondedUSD: 0,
      price: 0,
      isFallback: true,
    });
  }

  return chains;
  }, [metrics?.chains]);
  
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
   
  const archiveChains = useMemo(
  () => filteredChains.filter((c) => NETWORK_TYPE_MAP[c.chain] === "archive"),
  [filteredChains]
  );   
  
  const renderCard = (chain: ChainMetrics) => {
  const tokenCode = getTokenCode(chain.chain);

  return (
    <article
      key={`card-${chain.chain}`}
      className="max-w-[360px] rounded-lg border border-blue-500 dark:border-blue-500 bg-slate-50 dark:bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-400 shadow-none hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,1)]">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-11 w-11 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
          {CHAIN_LOGOS[chain.chain] ? (
            <img
              src={CHAIN_LOGOS[chain.chain]}
              alt={chain.chain}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-bold text-slate-900 dark:text-slate-300">
              {chain.chain?.[0] ?? "?"}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-lg font-bold text-slate-900 dark:text-slate-300">
            {chain.chain}
          </p>

          <span
            className={`inline-block rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
              chain.isFallback
                ? "border border-amber-500/30 bg-amber-500/10 text-[#ff7b00]"
                : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            }`}
            >
            {chain.isFallback
             ? "Cosmos → Rust Migration"
             : aprFromChain(chain)}
          </span>
        </div>
       </div>

     {chain.isFallback ? (
        <div className="text-sm space-y-2">
          <p className="text-[#ff7b00] font-semibold">
           Migration v2.
          </p>

          <p className="text-slate-900 dark:text-slate-200">
           Rust-Based Network Upgrade.
          </p>
        </div>
       ) : (
        <div className="grid grid-cols-[1fr_auto] gap-y-1 text-sm">
          <p className="text-slate-900 dark:text-slate-300">Total Staked</p>
          <p className="text-slate-900 dark:text-slate-300 font-semibold">
            {formatTokenDisplay(chain.totalBonded)} {tokenCode}
          </p>

          <p className="text-slate-900 dark:text-slate-300">Value (USD)</p>
          <p className="text-slate-900 dark:text-slate-300 font-semibold">
            {formatUsd(chain.totalBondedUSD)}
          </p>

          <p className="text-slate-900 dark:text-slate-300">Validators</p>
          <p className="text-orange-400 font-semibold">
            {chain.validators}
          </p>
        </div>
       )}
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
           <span className="text-2xl md:text-3xl font-bold text-[#ff7b00]">
            𝐌𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐧𝐠</span>
          </h2>
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-slate-900 dark:text-slate-200">
  Real-Time Monitoring Validator Across Multiple Network.
        </p>
      </div>

      <div className="mt-6 mb-12 flex justify-center">
        <div className="relative w-full max-w-sm">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-900 dark:text-slate-400">⌕</span>
          <input
            id="network-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#100c2a] py-2.5 pl-11 pr-12 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition focus:border-blue-400 dark:focus:border-slate-500"/>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-900 dark:text-slate-300">
            {'/'}
          </span>
        </div>
      </div>   

     {/* NETWORK SUPPORT */}
      <div className="mb-10 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="rounded-lg border border-orange-500 dark:bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 dark:hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] dark:hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] dark:hover:bg-slate-800">
          <div className="relative flex items-center justify-center mb-4">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#ff7b00]/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#ff7b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-center text-orange-500 mb-2">{normalizedNetworksSupported}+</p>
          <div className="border-t border-slate-700 pt-2">
            <p className="text-sm text-center font-semibold text-slate-900 dark:text-slate-200">Networks Supported</p>
            <p className="text-xs text-center text-slate-900 dark:text-slate-400">Mainnet & Testnet Validator</p>
          </div>
        </div>

        <div className="rounded-lg border border-purple-500 dark:bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] dark:hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] dark:hover:bg-slate-800">
          <div className="relative flex items-center justify-center mb-4">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-purple-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751 h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-center text-purple-500 mb-2">{formatUsd(metrics?.totalStakedUSD ?? 0)}</p>
          <div className="border-t border-slate-700 pt-2">
            <p className="text-sm text-center font-semibold text-slate-900 dark:text-slate-200">Total Value (USD)</p>
            <p className="text-xs text-center text-slate-900 dark:text-slate-400">Secured assets</p>
          </div>
        </div>
        
        <div className="rounded-lg border border-emerald-500 dark:bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] dark:hover:bg-slate-800">
          <div className="relative flex items-center justify-center mb-4">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-center text-emerald-400 mb-2">{metrics?.networkUptime?.toFixed(1) ?? "—"}%</p>
          <div className="border-t border-slate-700 pt-2">
            <p className="text-sm text-center font-semibold text-slate-900 dark:text-slate-200">Network Uptime</p>
            <p className="text-xs text-center text-slate-900 dark:text-slate-400">7-day average</p>
          </div>
        </div>
        
        <div className="rounded-lg border border-blue-500 dark:bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] dark:hover:bg-slate-800">          
          <div className="relative flex items-center justify-center mb-4">
             <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>   
                <rect x="2" y="4" width="20" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="14" width="20" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h.01M6 17h.01"/>
              </svg>
            </div>
           </div>
          <p className="text-2xl text-center font-bold text-blue-500 mb-2">{normalizedChains.length}</p>
          <div className="border-t border-slate-700 pt-2">
            <p className="text-sm text-center font-semibold text-slate-900 dark:text-slate-200">Active Validators</p>
            <p className="text-xs text-center text-slate-900 dark:text-slate-400">Across {normalizedNetworksSupported}+ networks</p>
          </div>
        </div>

        <div className="rounded-lg border border-pink-500 dark:bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 dark:hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] dark:hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] dark:hover:bg-slate-800 flex flex-col items-center justify-center gap-3">        
          <div className="flex justify-center">   
             <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0 1 18 0v6"/>
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
            </svg>
          </div>
          <p className="text-2xl text-center font-bold text-pink-500">24/7</p>
          <p className="text-base text-center font-semibold text-emerald-500">Monitoring</p>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-2xl border border-slate-700 bg-slate-800" />
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          <div>
           <div className="mb-4 flex items-center justify-between transition-all duration-300 text-white font-semibold">
           <h3 className="text-base font-semibold text-slate-200 bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-xl inline-block border border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4)]">
   Mainnet
   </h3>
           <span className="text-base font-semibold text-slate-200 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 rounded-xl border border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4)]">{mainnetChains.length} Network</span>
         </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {mainnetChains.map((chain) => renderCard(chain))}
            </div>
           </div>
          <div>
            <div className="mb-4 flex items-center justify-between transition-all duration-300 text-white font-semibold">
              <h3 className="text-base font-semibold text-slate-200 bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-xl inline-block border border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4)]">
  Testnet
  </h3>
              <span className="text-base font-semibold text-slate-200 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 rounded-xl border border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4)]">{testnetChains.length} Network</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
             {testnetChains.map((chain) => renderCard(chain))}
           </div>
         </div>
          <div>
            <div className="mb-4 flex items-center justify-between transition-all duration-300 text-white font-semibold">
             <h3 className="text-base font-semibold text-slate-200 bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-xl inline-block border border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4)]">
 Archive
 </h3>
             <span className="text-base font-semibold text-slate-200 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 rounded-xl border border-sky-400/80 shadow-[0_0_15px_rgba(255,255,255,0.4)]">{archiveChains.length} Network</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
             {archiveChains.map((chain) => renderCard(chain))}
           </div>
         </div>
        </div>
      )}

      {!loading && filteredChains.length === 0 && (
        <div className="rounded-2xl border border-slate-700 dark:bg-slate-900 p-10 text-center">
          <div className="inline-block mb-4">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-4 border-slate-600 dark:border-slate-700"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-300 font-medium">Searching Networks...</p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">Finding matching networks</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-40 max-w-5xl mx-auto">
        <button onClick={() => handleToolClick("/tools/validator-monitor")}
        className="group rounded-xl border border-pink-500 dark:bg-slate-800 p-5 min-h-[140px] transition-all duration-300 text-center hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:-translate-y-1 dark:hover:bg-slate-800 cursor-pointer">
          <h3 className="text-2xl font-bold mb-6 text-[#ff7b00] flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#ff7b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
          </svg>
           𝐕𝐚𝐥𝐢𝐝𝐚𝐭𝐨𝐫 𝐌𝐨𝐧𝐢𝐭𝐨𝐫
          </h3>
          <p className="text-base font-medium text-slate-900 dark:text-slate-300">
           Track Validator Uptime, Health and Reliability in Real-Time.
          </p>
          <div className="text-sm text-pink-400 font-bold mt-4">
           Explore →
          </div>
        </button>

        <button onClick={() => handleToolClick("/tools/analytics")}
        className="rounded-lg border border-blue-500 dark:border-blue-500 bg-slate-50 dark:bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-400 shadow-none hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,1)]">

          <h3 className="text-2xl font-bold mb-6 text-blue-500 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-blue-500 transition group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h4l2-6 3 12 3-8 2 4h4"/>
          </svg>
          𝐍𝐞𝐭𝐰𝐨𝐫𝐤 𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜𝐬
          </h3>
          <p className="text-base font-medium text-slate-900 dark:text-slate-300">
            Real-Time Metric Across Validator Network.
          </p>
          <div className="text-sm text-blue-500 font-semibold mt-4">
          Explore →
         </div>
        </button>
      </div>
    </section>
  );
}
