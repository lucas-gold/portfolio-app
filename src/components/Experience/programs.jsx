import React, { useMemo, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const Programs = () => {
  const iconPaths = [
    "/img/icons/css3.svg",
    "/img/icons/html5.png",
    "/img/icons/JavaScript.svg",
    "/img/icons/Python.svg",
    "/img/icons/react.png",
    "/img/icons/androidstudio.png",
    "/img/icons/Firebase.svg",
    "/img/icons/gcp.png",
    "/img/icons/xcode.png",
    "/img/icons/nodejs.svg",
    "/img/icons/openai.png",
  ];

  const icons = useMemo(
    () => iconPaths.map((p) => `${process.env.PUBLIC_URL}${p}`),
    []
  );

  const manualParticles = useMemo(() => {
  const cols = 5;

  return icons.map((src, idx) => {
    const col = idx % cols;
    const row = Math.floor(idx / cols);

    // Spread them between 10% and 90% of THIS canvas
    const x = 10 + (col * (80 / (cols - 1))); // 10,30,50,70,90
    const y = 20 + row * 22;

    return {
      position: { x, y, mode: "percent" },
      options: {
        shape: {
          type: "image",
          options: { image: { src, width: 64, height: 64 } },
        },
        size: { value: 21 },
        opacity: { value: 1 },
      },
    };
  });
}, [icons]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="expParticlesCanvas"
      init={particlesInit}
      options={{
        style: { left: "50%", width: "50%"},
        fpsLimit: 60,
        background: { color: { value: "" } },
        manualParticles,
        particles: {
          number: { value: manualParticles.length, density: { enable: false } },
          collisions: { enable: true },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outMode: 'bounce'
          },
        },
        detectRetina: true,
        pauseOnOutsideViewport: true,
      }}
    />
  );
};
