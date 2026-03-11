"use client";

const TICKER_LOGOS = [
  { name: "Cosmos",      logo: "/chains/cosmos.png" },
  { name: "Osmosis",     logo: "/chains/osmosis.png" },
  { name: "Lava",        logo: "/chains/lava.png" },
  { name: "Shido",       logo: "/chains/shido.png" },
  { name: "Paxi",        logo: "/chains/paxi.png" },
  { name: "Bitbadges",   logo: "/chains/bitbadges.png" },
  { name: "CNHO",        logo: "/chains/cnho.png" },
  { name: "Lumen",       logo: "/chains/lumen.png" },
  { name: "Epix",        logo: "/chains/epix.png" },
  { name: "Empeiria",    logo: "/chains/empeiria.png" },
  { name: "Safrochain",  logo: "/chains/safrochain.png" },
  { name: "Pushchain",   logo: "/chains/pushchain.png" },
  { name: "Republic AI", logo: "/chains/republic.png" },
];

const ROW1 = [...TICKER_LOGOS, ...TICKER_LOGOS];
const ROW2 = [...TICKER_LOGOS.slice().reverse(), ...TICKER_LOGOS.slice().reverse()];

export default function LogoTicker() {
  return (
    <div className="w-full">
      {/* ── Heading ── */}
      <div className="flex flex-col items-center justify-center text-center pt-10 pb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          <span className="gradient-text">
            𝐃𝐞𝐜𝐞𝐧𝐭𝐫𝐚𝐥𝐢𝐳𝐞𝐝 𝐍𝐞𝐭𝐰𝐨𝐫𝐤
          </span>
        </h2>
        <p className="text-base font-medium text-slate-900 dark:text-gray-100">
          𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠 𝐛𝐥𝐨𝐜𝐤𝐜𝐡𝐚𝐢𝐧 𝐢𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞 𝐰𝐨𝐫𝐥𝐝𝐰𝐢𝐝𝐞
        </p>
      </div>

      {/* ── Marquee ── */}
      <style>{`
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-row {
          display: flex;
          width: max-content;
        }
        .marquee-right {
          animation: scroll-right 40s linear infinite;
        }
        .marquee-left {
          animation: scroll-left 40s linear infinite;
        }
        .marquee-row:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="w-full max-w-4xl mx-auto overflow-hidden py-8"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* Baris 1 – jalan ke kanan */}
        <div className="mb-4">
          <div className="marquee-row marquee-right">
            {ROW1.map((item, i) => (
              <div key={`r1-${i}`} className="mx-4 flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.4)] bg-gray-900/60">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Baris 2 – jalan ke kiri */}
        <div>
          <div className="marquee-row marquee-left">
            {ROW2.map((item, i) => (
              <div key={`r2-${i}`} className="mx-4 flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.4)] bg-gray-900/60">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
