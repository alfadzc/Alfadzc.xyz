"use client";

import { useEffect, useState } from "react";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Reset scroll ke atas saat pertama load
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
      background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 40%, #0a0a1a 100%)",
    }} />
  );

  if (!loading) return <>{children}</>;

  return (
    <>
      <style>{`
        @keyframes coinFlip {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes pulse-ring {
          0%   { opacity: 0.6; transform: scale(0.85); }
          50%  { opacity: 0.2; transform: scale(1.1); }
          100% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes pulse-ring2 {
          0%   { opacity: 0.4; transform: scale(0.75); }
          50%  { opacity: 0.1; transform: scale(1.2); }
          100% { opacity: 0.4; transform: scale(0.75); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0);    opacity: 0.4; }
          40%            { transform: translateY(-6px); opacity: 1;   }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .coin-flip {
          animation: coinFlip 1.2s linear infinite;
          transform-style: preserve-3d;
        }
        .ring1 { animation: pulse-ring  2s ease-in-out infinite; }
        .ring2 { animation: pulse-ring2 2s ease-in-out infinite 0.3s; }
        .dot1  { animation: dotBounce 1.2s ease-in-out infinite 0s; }
        .dot2  { animation: dotBounce 1.2s ease-in-out infinite 0.2s; }
        .dot3  { animation: dotBounce 1.2s ease-in-out infinite 0.4s; }
        .fade-in-text { animation: fadeInUp 0.8s ease forwards 0.4s; opacity: 0; }
      `}</style>

      <div style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 40%, #0a0a1a 100%)",
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}>
        <div style={{
          position: "absolute", inset: "12px",
          border: "1.5px solid rgba(236,72,153,0.5)",
          borderRadius: "16px",
          boxShadow: "0 0 30px rgba(236,72,153,0.15), inset 0 0 30px rgba(236,72,153,0.05)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "relative", width: "220px", height: "220px",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "8px",
        }}>
          <div className="ring2" style={{
            position: "absolute", width: "210px", height: "210px",
            borderRadius: "50%", border: "1px solid rgba(168,85,247,0.35)",
            top: 0, left: 0,
          }} />
          <div className="ring1" style={{
            position: "absolute", width: "160px", height: "160px",
            borderRadius: "50%", border: "1.5px solid rgba(168,85,247,0.55)",
            top: "30px", left: "30px",
          }} />
          <div style={{ perspective: "600px", position: "relative", zIndex: 1 }}>
            <div className="coin-flip" style={{
              width: "120px", height: "120px", borderRadius: "50%",
              overflow: "hidden", border: "3px solid #A855F7",
              boxShadow: "0 0 30px rgba(168,85,247,0.7), 0 0 60px rgba(168,85,247,0.3)",
            }}>
              <img src="/logo.png" alt="alfadzc logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
        <div className="fade-in-text" style={{ textAlign: "center" }}>
          <p style={{
            fontSize: "13px", letterSpacing: "0.15em",
            color: "rgba(255,255,255,1)", fontFamily: "monospace",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "4px",
          }}>
            𝙿𝚕𝚎𝚊𝚜𝚎  𝚠𝚊𝚒𝚝
            <span className="dot1" style={{ display:"inline-block", color:"rgba(255,255,255,1)" }}>•</span>
            <span className="dot2" style={{ display:"inline-block", color:"rgba(255,255,255,1)" }}>•</span>
            <span className="dot3" style={{ display:"inline-block", color:"rgba(255,255,255,1)" }}>•</span>
          </p>
        </div>
      </div>

      <div style={{ visibility: fadeOut ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
