"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

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
  networksSupported: string;
  chains?: ChainMetrics[];
  isRealtime?: boolean;
}

const COLORS = ["#ff7b00", "#00d9ff", "#00ff88", "#ff00ff", "#ffaa00", "#ff0055", "#00ffff", "#88ff00", "#ff8800", "#0088ff"];

export default function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch("/api/metrics/multi-chain");
        const data = await res.json();
        setMetrics(data);

        if (data.chains) {
          const sorted = [...data.chains].sort((a, b) => b.totalBondedUSD - a.totalBondedUSD);
          setChartData(sorted);
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

  const handleBackToHome = () => {
    if (window.opener) {
      window.opener.focus();
      window.close();
    } else {
      window.location.href = "/";
    }
  };

  const totalStakedValue = chartData.reduce((sum, item) => sum + item.totalBondedUSD, 0);

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
          <h1 className="text-4xl font-bold text-[#ff7b00] mb-2 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h4l2-6 3 12 3-8 2 4h4"/>
            </svg>
            Analytics Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Visualize blockchain metrics with modern and intuitive charts</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Total Value Staked</p>
            <p className="text-3xl font-bold text-emerald-400">${metrics?.totalStakedUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Networks</p>
            <p className="text-3xl font-bold text-blue-400">{metrics?.networksSupported}</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Active Validators</p>
            <p className="text-3xl font-bold text-purple-400">{metrics?.activeValidators}</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Network Uptime</p>
            <p className="text-3xl font-bold text-emerald-400">{metrics?.networkUptime}%</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-400">Loading analytics...</div>
        ) : (
          <>
            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Bar Chart - Value per Chain */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Total Value per Chain</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="chain" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                      formatter={(value) => `$${Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 })}`}
                    />
                    <Bar dataKey="totalBondedUSD" fill="#ff7b00" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart - Distribution */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Value Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="totalBondedUSD"
                      label={false}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => `$${Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 })}`}
                      contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                      labelFormatter={(label) => chartData[chartData.findIndex(d => d.totalBondedUSD === label)]?.chain || ""}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

            </div>

            {/* Table */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 overflow-hidden">
              <div className="grid grid-cols-5 px-6 py-3 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700/50">
                <p className="text-xs font-semibold text-slate-250 uppercase tracking-wider">Network</p>
                <p className="text-xs font-semibold text-slate-250 uppercase tracking-wider">Validators</p>
                <p className="text-xs font-semibold text-slate-250 uppercase tracking-wider">Total Bonded</p>
                <p className="text-xs font-semibold text-slate-250 uppercase tracking-wider">USD Value</p>
                <p className="text-xs font-semibold text-slate-250 uppercase tracking-wider text-right">% of Total</p>
              </div>
              {chartData.map((chain, idx) => {
                const percentage = ((chain.totalBondedUSD / totalStakedValue) * 100).toFixed(2);
                return (
                  <div key={idx} className="grid grid-cols-5 px-6 py-4 items-center border-b border-slate-200 dark:border-slate-700/30 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{chain.chain}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{chain.validators}</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{Number(chain.totalBonded).toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                    <p className="text-sm font-semibold text-emerald-400">${chain.totalBondedUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 text-right">{percentage}%</p>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="rounded-lg border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/60 p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Total Chains</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{chartData.length}</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Total Validators Across Chains</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{chartData.reduce((sum, c) => sum + c.validators, 0)}</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Avg Value per Chain</p>
                  <p className="text-xl font-semibold text-emerald-400">${(totalStakedValue / chartData.length).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-1">Last Updated</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{metrics?.lastUpdated ? new Date(metrics.lastUpdated).toLocaleTimeString() : "—"}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
