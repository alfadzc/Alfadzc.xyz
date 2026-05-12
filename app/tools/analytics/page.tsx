"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface ChainMetrics {
  chain: string;
  validators: number;
  totalBonded: string;
  totalBondedUSD: number;
  price: number;
  uptime: number;
  isFallback?: boolean;
}
interface MetricsData {
  activeValidators: string;
  networkUptime: number;
  totalStaked: string;
  totalStakedUSD: number;
  networksSupported: string;
  chains?: ChainMetrics[];
  isRealtime?: boolean;
  lastUpdated?: string;
}
const NETWORK_TYPE: Record<string, "mainnet" | "testnet"> = {
  Lava: "mainnet", Shido: "mainnet", Paxi: "mainnet", Bitbadges: "mainnet",
  CNHO: "mainnet", Lumen: "mainnet", Epix: "mainnet",
  Empeiria: "testnet", Safrochain: "testnet", Pushchain: "testnet",
  Republic: "testnet", Monolythium: "testnet",
};

export default function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [chartData, setChartData] = useState<ChainMetrics[]>([]);
  const [networkTypeDistribution, setNetworkTypeDistribution] = useState<Array<{ name: string; value: number; type: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch("/api/metrics/multi-chain");
        const data: MetricsData = await res.json();
        setMetrics(data);
        if (data.chains && data.chains.length > 0) {
          const sorted = [...data.chains].sort((a, b) => b.totalBondedUSD - a.totalBondedUSD);
          setChartData(sorted);
          const mainnetCount = sorted.filter(c => NETWORK_TYPE[c.chain] === "mainnet").length;
          const testnetCount = sorted.filter(c => NETWORK_TYPE[c.chain] === "testnet").length;
          setNetworkTypeDistribution([
            { name: "Mainnet", value: mainnetCount, type: "mainnet" },
            { name: "Testnet", value: testnetCount, type: "testnet" }
          ]);
        }
      } catch (error) {
        console.error("Error fetching metrics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 60000);
    return () => clearInterval(interval);
  }, []);

  const totalStakedValue = chartData.reduce((sum, item) => sum + (item.totalBondedUSD || 0), 0);
  const totalValidators = chartData.reduce((sum, item) => sum + (item.validators || 0), 0);
  const avgUptime = chartData.length > 0 ? (chartData.reduce((sum, item) => sum + (item.uptime || 0), 0) / chartData.length).toFixed(1) : "0";

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 text-slate-800 dark:text-white">
      {/* HEADER */}
      <div className="border-b border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
             <button onClick={() => { window.close(); setTimeout(() => { window.location.href = "/"; }, 100); }} className="text-sm text-slate-800 dark:text-slate-200 mb-4 inline-block cursor-pointer hover:underline">
            ← Back to Home
</button>
           <h1 className="text-3xl font-bold text-blue-500 mb-4 flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h4l2-6 3 12 3-8 2 4h4"/>
            </svg>
            𝐀𝐧𝐚𝐥𝐲𝐭𝐢𝐜s 𝐃𝐚𝐬𝐛𝐨𝐚𝐫𝐝
          </h1>
          <p className="text-center font-semibold text-slate-800 dark:text-slate-300">Real-Time Blockchain Metrics & Validator Insights</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">

        {/* KEY METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 hover:-translate-y-1 transition-all hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
            <p className="text-base font-semibold text-center text-slate-800 dark:text-slate-200 mb-2">Total Value Staked</p>
            <p className="text-2xl font-bold text-center text-purple-500 mb-3">${metrics?.totalStakedUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
            <p className="text-xs text-center text-slate-600 dark:text-slate-300">Across all networks</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 hover:-translate-y-1 transition-all hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
            <p className="text-base font-semibold text-center text-slate-800 dark:text-slate-200 mb-2">Network Uptime</p>
            <p className="text-2xl font-bold text-center text-emerald-500 mb-3">{metrics?.networkUptime}%</p>
            <p className="text-xs text-center text-slate-600 dark:text-slate-300">7-day average</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 hover:-translate-y-1 transition-all hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
            <p className="text-base font-semibold text-center text-slate-800 dark:text-slate-200 mb-2">Total Validators</p>
            <p className="text-2xl font-bold text-center text-blue-500 mb-3">{metrics?.activeValidators}</p>
            <p className="text-xs text-center text-slate-600 dark:text-slate-300">Across {metrics?.networksSupported} networks</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 hover:-translate-y-1 transition-all hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
            <p className="text-base font-semibold text-center text-slate-800 dark:text-slate-200 mb-2">Networks</p>
            <p className="text-2xl font-bold text-center text-orange-500 mb-3">{metrics?.networksSupported}</p>
            <p className="text-xs text-center text-slate-600 dark:text-slate-300">Mainnet & Testnet</p>
          </div>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-slate-700 dark:bg-slate-900/90 p-10 text-center">
            <div className="inline-block mb-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full border-4 border-slate-600"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Loading analytics...</p>
          </div>
        ) : (
          <>
            {/* CHARTS ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {chartData.length > 0 && (
                <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 hover:-translate-y-1 transition-all hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
                  <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <span className="inline-block w-1 h-6 bg-purple-500 rounded"></span>
                    Total Value Per Chain
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="chain" stroke="#94a3b8" interval={0} angle={-35} textAnchor="end" height={58} tickMargin={10} tick={{ fontSize: "12px" }} />
                      <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
                      <Tooltip cursor={{ fill: "rgba(0,0,0,0)" }} contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569", borderRadius: "8px" }} formatter={(value) => `$${Number(value).toLocaleString("en-US", { maximumFractionDigits: 0 })}`} />
                      <Bar dataKey="totalBondedUSD" fill="#9333EA" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
              {networkTypeDistribution.length > 0 && (
                <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 hover:-translate-y-1 transition-all hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
                  <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white flex items-center justify-center gap-2">
                    <span className="inline-block w-1 h-6 bg-cyan-500 rounded"></span>
                    Network Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={networkTypeDistribution} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={false}>
                        {networkTypeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.type === "mainnet" ? "#a855f7" : "#f97316"} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} network${Number(value) > 1 ? 's' : ''}`} contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569", borderRadius: "8px" }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">Mainnet ({networkTypeDistribution.find(d => d.type === "mainnet")?.value || 0})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">Testnet ({networkTypeDistribution.find(d => d.type === "testnet")?.value || 0})</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TABLE + SUMMARY ROW */}
            <div className="flex flex-col gap-6">

              {/* DATA TABLE */}
              {chartData.length > 0 && (
                <div className="w-full rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 hover:-translate-y-1 transition-all hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]">
                  <h3 className="text-lg font-semibold mb-6 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
                    <span className="inline-block w-1 h-6 bg-blue-500 rounded"></span>
                    Chain Details
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100 dark:bg-slate-800/60 border-b border-slate-300 dark:border-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold text-slate-800 dark:text-slate-200">Network</th>
                          <th className="px-4 py-3 text-center font-bold text-slate-800 dark:text-slate-200">Type</th>
                          <th className="px-4 py-3 text-center font-bold text-slate-800 dark:text-slate-200">Validators</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-800 dark:text-slate-200">USD Value</th>
                          <th className="px-4 py-3 text-right font-bold text-slate-800 dark:text-slate-200">% Total</th>
                          <th className="px-4 py-3 text-center font-bold text-slate-800 dark:text-slate-200">Uptime</th>
                        </tr>
                      </thead>
                      <tbody>
                        {chartData.map((chain, idx) => {
                          const percentage = totalStakedValue > 0 ? ((chain.totalBondedUSD || 0) / totalStakedValue * 100).toFixed(1) : "0";
                          const type = NETWORK_TYPE[chain.chain] || "unknown";
                          return (
                            <tr key={idx} className="border-b border-slate-200 dark:border-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-all">
                              <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-300">{chain.chain}</td>
                              <td className="px-4 py-3 text-center">
                                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${type === "mainnet" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"}`}>
                                  {type.charAt(0).toUpperCase() + type.slice(1)}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-center text-slate-600 dark:text-slate-300">{chain.validators}</td>
                              <td className="px-4 py-3 text-right text-slate-600 dark:text-slate-300">${(chain.totalBondedUSD || 0).toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                              <td className="px-4 py-3 text-right text-slate-600 dark:text-slate-300">{percentage}%</td>
                              <td className="px-4 py-3 text-center">
                                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">{chain.uptime}%</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

          {/* SUMMARY STATISTICS */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] dark:hover:bg-slate-800">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200 text-center">Summary Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-300 mt-2">Total Networks</p>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-500">{chartData.length}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-300 mt-2">Total Validators Across Chains</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">{totalValidators}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-300 mt-2">Average Uptime</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">{avgUptime}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-300 mt-2">Last Updated</p>
                  <p className="text-base font-bold text-[#ff7b00]">{metrics?.lastUpdated ? new Date(metrics.lastUpdated).toLocaleTimeString() : "—"}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
