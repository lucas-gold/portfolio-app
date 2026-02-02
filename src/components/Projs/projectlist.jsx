import * as React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Project } from "./Project";
import { projectData } from "./project-data";
import "./projectstyle.css";

export const ProjectList = () => (
  <AnimateSharedLayout>
    <div className="pjul">
      <motion.ul className="projList" layout>
        {projectData.map((data) => (
          <Project key={data.id} data={data} />
        ))}
      </motion.ul>
    </div>
  </AnimateSharedLayout>
);
