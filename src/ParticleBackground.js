import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Loads tsparticles engine full package
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optionally handle load event
  }, []);

  const options = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#f9f9fb" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: "#1976d2" },
      links: {
        enable: true,
        distance: 150,
        color: "#1976d2",
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 1, outModes: "out" },
      number: { value: 60, density: { enable: true, area: 900 } },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 }, random: true },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}
