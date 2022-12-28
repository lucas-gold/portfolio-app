import * as React from "react";
import Particles from 'react-tsparticles';

export const Programs = () => {
  return (
    <Particles
    id="tsparticles"
    options={{
      background: {
            color: {
              value: "",
            },
          },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "attract",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          attract: {
            distance: 500,
            duration: 0.3,
            speed: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.3,
            speed: 1,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },

        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "out",
          random: false,
          speed: 3,
          straight: false,
        },

        number: {
          density: {
            enable: true,
            value_area: 250,
          },
          value: 20,
        },
        opacity: {
          value: 1,
        },
        reduceDuplicates: true,
        shape: {
          options: {
            circle: [
              {
                fill: true
              },
              {
                fill: false,
                particles: {
                  stroke: {
                    color: {
                      value: ["#fff", "#f00", "#0f0", "#00f"]
                    },
                    width: 3
                  }
                }
              }
            ],

            image: [
              { src: "./img/icons/Bootstrap.svg" },
              { src: "./img/icons/Angular.svg" },
              { src: "./img/icons/css3.svg" },
              { src: "./img/icons/C.svg" },
              { src: "./img/icons/html5.png" },
              { src: "./img/icons/Java.svg" },
              { src: "./img/icons/JavaScript.svg" },
              { src: "./img/icons/mongodb.svg" },
              { src: "./img/icons/sql.svg" },
              { src: "./img/icons/photoshop.svg" },
              { src: "./img/icons/php2.svg" },
              { src: "./img/icons/Python.svg" },
              { src: "./img/icons/react.svg" },
              { src: "./img/icons/wordpress.png" }

            ]


          },
          type: "image"
        },
        size: {
          random: false,
          value: 35,
        },
      },
      detectRetina: true,
      pauseOnOutsideViewport: true,
    }}
    />

  );
};
