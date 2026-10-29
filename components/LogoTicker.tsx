"use client";

const TICKER = [
  { name: "Cosmos", id: "cosmoshub-4", logo: "/chains/cosmos.png" },
  { name: "Osmosis", id: "osmosis-1", logo: "/chains/osmosis.png" },
  { name: "Lava", id: "lava-mainnet-1", logo: "/chains/lava.png" },
  { name: "Shido", id: "shido_9008-1", logo: "/chains/shido.png" },
  { name: "Paxi", id: "paxi-mainnet", logo: "/chains/paxi.png" },
  { name: "Pactus", id: "pactus", logo: "/chains/pactus.png" },  
  { name: "Safrochain", id: "safrochain-1", logo: "/chains/safrochain.png" },  
  { name: "Bitbadges", id: "bitbadges-1", logo: "/chains/bitbadges.png" },
  { name: "CNHO", id: "cnho_stables-1", logo: "/chains/cnho.png" },
  { name: "Lumen", id: "lumen", logo: "/chains/lumen.png" },
  { name: "Jay Network", id: "thejaynetwork", logo: "/chains/jaynetwork.png" }, 
  { name: "Epix", id: "epix_1916-1", logo: "/chains/epix.png" },
  { name: "Empeiria", id: "empe-testnet-2", logo: "/chains/empeiria.png" },
  { name: "Safrochain Testnet", id: "safro-testnet-1", logo: "/chains/safrochain.png" },
  { name: "Pushchain", id: "push_42101-1", logo: "/chains/pushchain.png" },
  { name: "Republic AI", id: "raitestnet_77701-1", logo: "/chains/republic.png" },
  { name: "Monolythium", id: "mono_6940-1", logo: "/chains/monolythium.png" },
  { name: "Limonata", id: "limonata_10777-1", logo: "/chains/limonata.png" },
  { name: "Worrell Testnet", id: "worrell-testnet-1", logo: "/chains/worrell.png" },
];

const ROW = [...TICKER, ...TICKER];

export default function LogoTicker() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center text-center pt-2 pb-2 px-4 mb-14">
        <h2 className="text-2xl md:text-3xl font-bold"><span className="gradient-text">
        D𝑒c𝑒n𝑡r𝑎l𝑖z𝑒d N𝑒t𝑤o𝑟k</span></h2>
        <p className="mt-2 max-w-2xl text-sm font-semibold md:text-base text-slate-800 dark:text-slate-200">
        Connecting blockchain infrastructure worldwide</p>
      </div>

      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes coin-flip { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); } }
        .marquee-row { display: flex; width: max-content; }
        .marquee-left { animation: scroll-left 90s linear infinite; }
        .marquee-row:hover { animation-play-state: paused; }
        .coin-flip { animation: coin-flip 4s linear infinite; transform-style: preserve-3d; backface-visibility: visible; }
      `}</style>

      <div className="w-full max-w-6xl mx-auto overflow-hidden py-4" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div className="marquee-row marquee-left">
          {ROW.map((item, i) => (
            <div key={`r1-${i}`} className="mx-6 flex-shrink-0 flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-12 h-12">
                <img src={item.logo} alt={item.name} className="coin-flip w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-slate-800 dark:text-white font-bold text-sm leading-tight whitespace-nowrap">{item.name}</span>
                <span className="text-slate-600 dark:text-slate-300 font-mono text-[10px] uppercase leading-tight whitespace-nowrap">{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
