"use client";

const TICKER_LOGOS = [
  { name: "Cosmos",      logo: "/chains/cosmos.png" },
  { name: "Osmosis",     logo: "/chains/osmosis.png" },
  { name: "Lava",        logo: "/chains/lava.png" },
  { name: "Shido",       logo: "/chains/shido.png" },
  { name: "Paxi",        logo: "/chains/paxi.png" },
  { name: "Pactus",      logo: "/chains/pactus.png" },  
  { name: "Safrochain",  logo: "/chains/safrochain.png" },  
  { name: "Bitbadges",   logo: "/chains/bitbadges.png" },
  { name: "CNHO",        logo: "/chains/cnho.png" },
  { name: "Lumen",       logo: "/chains/lumen.png" },
  { name: "Jay Network", logo: "/chains/jaynetwork.png" }, 
  { name: "Epix",        logo: "/chains/epix.png" },
  { name: "Empeiria",    logo: "/chains/empeiria.png" },
  { name: "Safrochain Testnet",  logo: "/chains/safrochain.png" },
  { name: "Pushchain",   logo: "/chains/pushchain.png" },
  { name: "Republic AI", logo: "/chains/republic.png" },
  { name: "Monolythium", logo: "/chains/monolythium.png" },
  { name: "Limonata", logo: "/chains/limonata.png" },
  { name: "Worrell Testnet", logo: "/chains/worrell.png" },
];

const ROW1 = [...TICKER_LOGOS, ...TICKER_LOGOS];

export default function LogoTicker() {
  return (
    <div className="w-full">    
      {/* ── HEADING ── */}
      <div className="flex flex-col items-center justify-center text-center pt-2 pb-2 px-4 mb-14">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          <span className="gradient-text">
           Decentralized Network
          </span>
        </h2>

        <p className="mt-2 max-w-2xl text-sm font-semibold md:text-base leading-relaxed text-slate-800 dark:text-slate-200">
         Connecting blockchain infrastructure worlwide
        </p>
      </div>

      {/* ── MARQUEE ── */}
      <style>{`
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-row {
          display: flex;
          width: max-content;
        }
        .marquee-right {
          animation: scroll-right 80s linear infinite;
        }
        .marquee-row:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="w-full max-w-4xl mx-auto overflow-hidden py-2"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* Baris 1 – jalan ke kanan */}
        <div>
          <div className="marquee-row marquee-right">
            {ROW1.map((item, i) => (
              <div key={`r1-${i}`} className="mx-4 flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.4)] bg-gray-900/60">
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
