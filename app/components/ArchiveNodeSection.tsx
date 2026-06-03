"use client";

import { useState } from "react";

export default function ArchiveNodeSection() {
  const [archiveNetworks] = useState(0);

  return (
    <section className="relative w-full py-16 px-6 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#0088ff" opacity="0.5" />
              <circle cx="60" cy="40" r="1" fill="#0088ff" opacity="0.3" />
              <circle cx="80" cy="80" r="1" fill="#0088ff" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between border border-blue-500/40 rounded-2xl bg-blue-900/10 backdrop-blur-md p-8 min-h-[280px]">

         {/* ARCHIVE NODE BUTTON - Left */}
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.8)] transition-all duration-300 whitespace-nowrap">
            Archive
          </button>

         {/* CENTER CONTENT - EMPTY SPACE */}
          <div className="flex-1"></div>

        {/* NETWORK COUNT - RIGHT */}
          <div className="flex items-center gap-4">
            <span className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.8)] transition-all duration-300">
              {archiveNetworks} Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
