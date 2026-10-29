"use client";
import { useEffect, useState, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const initEngine = async (engine: Engine): Promise<void> => { await loadSlim(engine); };

export default function ParticlesBackground() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => setDark(document.documentElement.classList.contains("dark"));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: dark ? "#132d5a" : "#f8fafc" } },
    particles: {
      number: { value: dark ? 90 : 50, density: { enable: true, area: 1000 } },
      color: { value: dark ? "#4da6ff" : "#3b82f6" },
      links: { enable: true, color: dark ? "#4da6ff" : "#3b82f6", distance: 130, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 0.5, direction: "none", random: true, straight: false, outModes: { default: "out" } },
      size: { value: { min: 1.5, max: 3 } },
      opacity: { value: { min: 0.2, max: 0.5 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 180, links: { opacity: 0.5 } } }
    },
    detectRetina: true,
  } as any), [dark]);

  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="particles-bg" options={options} />
    </ParticlesProvider>
  );
}
