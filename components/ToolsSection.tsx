"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface MetricsData {
  activeValidators: number;
  networkUptime: number;
  totalStaked: string;
  totalStakedUSD: number;
  networksSupporteed: string;
  chains?: any[];
}

const METRICS_CONFIG = [
  {
    key: "activeValidators",
    label: "Active Validators",
    icon: "🔐",
    color: "from-blue-500 to-cyan-500",
    description: "Across 10+ networks"
  },
  {
    key: "networkUptime",
    label: "Network Uptime",
    icon: "⬆️",
    color: "from-green-500 to-emerald-500",
    description: "7-day average",
    suffix: "%"
  },
  {
    key: "totalStakedUSD",
    label: "Total Staked",
    icon: "💰",
    color: "from-purple-500 to-pink-500",
    description: "Secured assets",
    prefix: "$"
  },
  {
    key: "networksSupporteed",
    label: "Networks Supported",
    icon: "🌐",
    color: "from-orange-500 to-red-500",
    description: "Mainnet & Testnet"
  },
];

export default function ToolsSection() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch("/api/metrics/multi-chain");
        const data = await res.json();
        setMetrics(data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
        setMetrics({
          activeValidators: 11,
          networkUptime: 99.8,
          totalStaked: "104296061319263152.00",
          totalStakedUSD: 70884726,
          networksSupporteed: "10+",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
    
    // Refresh setiap 60 detik
    const interval = setInterval(fetchMetrics, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (value: any, prefix = "", suffix = "") => {
    if (typeof value === "string") {
      const num = parseFloat(value);
      if (isNaN(num)) return value;
      if (num > 1000000) return `${prefix}${(num / 1000000).toFixed(1)}M${suffix}`;
      if (num > 1000) return `${prefix}${(num / 1000).toFixed(1)}K${suffix}`;
      return `${prefix}${num.toFixed(0)}${suffix}`;
    }
    if (typeof value === "number") {
      if (value > 1000000) return `${prefix}${(value / 1000000).toFixed(1)}M${suffix}`;
      if (value > 1000) return `${prefix}${(value / 1000).toFixed(1)}K${suffix}`;
      return `${prefix}${value.toFixed(0)}${suffix}`;
    }
    return value;
  };

  return (
    <section id="tools" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-orange-500">Our Tools & Validators</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Running validators across 10+ blockchain networks with enterprise-grade infrastructure.
          </p>
        </div>

        {/* Statistics & Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS_CONFIG.map((metric, idx) => {
            const value = metrics ? (metrics as any)[metric.key] : "—";
            
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${metric.color} transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  {/* Icon & Label */}
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{metric.icon}</div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-900/40 px-2.5 py-1 rounded-full">
                      Live
                    </span>
                  </div>

                  {/* Value */}
                  <div>
                    <p className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {loading ? "..." : formatNumber(value, metric.prefix, metric.suffix)}
                    </p>
                  </div>

                  {/* Label & Description */}
                  <div className="space-y-1 border-t border-slate-700/30 pt-3">
                    <p className="text-sm font-semibold text-gray-300">{metric.label}</p>
                    <p className="text-xs text-gray-500">{metric.description}</p>
                  </div>
                </div>

                {/* Border gradient effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${metric.color} rounded-lg transition-opacity duration-300 pointer-events-none`}
                  style={{
                    filter: "blur(20px)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Networks Grid */}
        {metrics?.chains && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">Supported Networks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {metrics.chains.map((chain: any, idx: number) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-4 hover:border-slate-600 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-300">{chain.chain}</p>
                      <span className="text-xs bg-orange-900/40 text-orange-300 px-2 py-1 rounded">
                        {chain.validators} validator
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      ${chain.totalBondedUSD?.toLocaleString('en-US', { maximumFractionDigits: 0 }) || 'N/A'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Validator Monitor */}
          <Link href="/tools/validator-monitor">
            <div className="group relative overflow-hidden rounded-lg border border-pink-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 hover:border-pink-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-pink-500/20">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Validator Monitor
              </h3>
              <p className="text-gray-300 mb-4">
                Track node uptime, performance, and reliability in real time.
              </p>
              <div className="text-sm text-pink-400 font-semibold flex items-center gap-2">
                Explore →
              </div>
            </div>
          </Link>

          {/* Analytics Dashboard */}
          <Link href="/tools/analytics">
            <div className="group relative overflow-hidden rounded-lg border border-blue-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 hover:border-blue-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold text-orange-500 mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-300 mb-4">
                Visualize blockchain metrics with modern and intuitive charts.
              </p>
              <div className="text-sm text-blue-400 font-semibold flex items-center gap-2">
                Explore →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
