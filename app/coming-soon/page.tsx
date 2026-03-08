"use client";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "linear-gradient(180deg, #1e3a8a 0%, #0a192f 100%)" }}
    >
      <div className="text-5xl mb-6">🚧</div>
      <h1 className="text-2xl md:text-2xl font-extrabold text-white mb-4">
        𝙲𝚘𝚖𝚒𝚗𝚐 𝚂𝚘𝚘𝚗...
      </h1>
      <p className="text-sky-300 text-lg mb-8">
        𝙱𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚘𝚗 𝚙𝚛𝚘𝚐𝚛𝚎𝚜𝚜... 𝚂𝚝𝚊𝚢 𝚝𝚞𝚗𝚎𝚍!
      </p>
      <button
        onClick={() => window.close()}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold hover:opacity-90 transition"
      >
        𝙱𝚊𝚌𝚔
      </button>
    </div>
  );
}
