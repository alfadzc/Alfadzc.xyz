"use client";
import { useEffect, useState } from "react";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "hidden";
    setMounted(true);
    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    const doneTimer = setTimeout(() => {
      setLoading(false);
      document.documentElement.style.overflow = "";
    }, 2700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!mounted) return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "linear-gradient(135deg, #0a0e27 0%, #0d1535 100%)",
    }} />
  );

  if (!loading) return <>{children}</>;
  
{/* UBAH WAVE (dot) DALAM CINCIN GANTI (5px|-5px) -> (3px|-3px) */}
{/* UBAH WAVE (dot) BELAKANG TEXT GANTI (3px|-3px) -> (2px|-2px) */}  
  return (
    <>
      <style jsx global>{`
        @keyframes waveBounce {
          0%, 100% { transform: translateY(5px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes waveSmall {
          0%, 100% { transform: translateY(3px); }
          50% { transform: translateY(-3px); }
        }
        .dot-wave { animation: waveBounce 1.2s cubic-bezier(0.45, 0, 0.55, 1) infinite; }
        .dot-wave-small { animation: waveSmall 1.2s cubic-bezier(0.45, 0, 0.55, 1) infinite; }
        .dot-delay-1 { animation-delay: -0.4s; }
        .dot-delay-2 { animation-delay: -0.2s; }
        .dot-delay-3 { animation-delay: 0s; }
      `}</style>

      <div style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #0a0e27 0%, #0d1535 100%)",
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}> 
  
{/* UBAH UKURAN CINCIN GANTI w-20 h-20 -> w-16 h-16 */}  
        <div className="relative w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-inner mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-[#1e1e1e]"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0088ff] border-l-[#0088ff] border-b-[#0088ff] animate-spin"></div>
          <div className="flex space-x-1 z-10 items-center h-4">
            <div className="w-1.5 h-1.5 bg-white rounded-full dot-wave dot-delay-1"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full dot-wave dot-delay-2"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full dot-wave dot-delay-3"></div>
          </div>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <p className="text-slate-300 font-medium m-0">
  Initializing Network</p>
          <div className="flex space-x-1 items-center h-5">
            <span className="text-slate-300 dot-wave-small dot-delay-1" style={{ display: "inline-block" }}>•</span>
            <span className="text-slate-300 dot-wave-small dot-delay-2" style={{ display: "inline-block" }}>•</span>
            <span className="text-slate-300 dot-wave-small dot-delay-3" style={{ display: "inline-block" }}>•</span>
          </div>
        </div>
      </div>

      <div style={{ visibility: fadeOut ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
