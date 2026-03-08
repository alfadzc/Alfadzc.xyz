"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles-bg"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          /* FIX: Biru Royal yang lebih hidup untuk Dark Mode */
          color: {
            value: dark ? "#0a192f" : "#f8fafc",
          },
          image: dark
            ? "linear-gradient(180deg, #1e3a8a 0%, #0a192f 100%)"
            : "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
        },
        particles: {
          number: {
            value: dark ? 100 : 50,
            density: { enable: true, area: 800 }
          },
          color: {
            /* Warna partikel Biru Sky terang agar kontras di BG Biru */
            value: dark ? "#60a5fa" : "#3b82f6"
          },
          links: {
            enable: true,
            color: dark ? "#60a5fa" : "#3b82f6",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          size: {
            value: { min: 1, max: 3 }
          },
          opacity: {
            value: { min: 0.2, max: 0.5 }
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.5 }
            }
          }
        },
        retina_detect: true,
      }}
    />
  );
}
