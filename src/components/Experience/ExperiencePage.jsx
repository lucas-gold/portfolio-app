import React from "react";
import "./experience.css";
import Fade from "react-reveal/Fade";
import { experienceItems } from "./experienceData";
import { ExperienceCard } from "./ExperienceCard";
import { Programs } from "./Programs";

export function ExperiencePage() {
  return (
    <section className="expPage">
      {/* HERO */}
      <header className="expHero">
        <div className="expParticles">
          <Programs />
        </div>
        
        <div className="expHeroInner">
          <Fade cascade right delay={100}>
            <h1 className="expTitle">experience</h1>
          </Fade>

          <p className="expSubtitle">
            Full-stack React Native + Node.js • React.js • Python • Firebase • GCP
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="expContent">
        <div className="expGrid">
            {experienceItems.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
      </div>
    </section>
  );
}
