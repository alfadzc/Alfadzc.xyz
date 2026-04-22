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
          color: {
            value: dark ? "#0a192f" : "#f8fafc",
          },
          image: dark
            ? "linear-gradient(180deg, #1e3a8a 0%, #0a192f 100%)"
            : "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
        },
        particles: {
          number: {
            value: dark ? 90 : 50,
            density: { enable: true, area: 1000 }
          },
          color: {
            value: dark ? "#93c5fd" : "#3b82f6"
          },
          links: {
            enable: true,
            color: dark ? "#93c5fd" : "#3b82f6",
            distance: 130,
            opacity: 0.2,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          size: {
            value: { min: 1, max: 2 }
          },
          opacity: {
            value: { min: 0.1, max: 0.3 }
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
              distance: 180,
              links: { opacity: 0.3 }
            }
          }
        },
        retina_detect: true,
      }}
    />
  );
}
