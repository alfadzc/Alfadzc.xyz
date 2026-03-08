import Image from "next/image";

export default function ChainLogo({
  name,
  logo,
}: {
  name: string;
  logo?: string;
}) {
  return (
    // Container utama diperbesar ke w-24 (96px)
    <div className="w-24 h-24 flex items-center justify-center filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          // Width & Height harus sinkron dengan ukuran container agar tidak pecah/kekecilan
          width={96} 
          height={96}
          className="rounded-full object-contain p-1.5 bg-white/5 border border-white/10"
        />
      ) : (
        <div
          className="w-24 h-24 flex items-center justify-center
          rounded-full bg-slate-800 text-white text-2xl font-bold border border-slate-700"
        >
          {name[0]}
        </div>
      )}
    </div>
  );
}
