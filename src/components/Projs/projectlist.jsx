import * as React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Project } from "./project";


export const ProjectList = () => (
  <AnimateSharedLayout>
    <div className="pjul">
    <motion.ul layout initial={{ borderRadius: 25 }}>
    {itemIds.map(i => (
      <Project i={i} key={i} />
    ))}
    </motion.ul></div>
  </AnimateSharedLayout>
);

const itemIds = [0, 1, 2, 3, 4, 5, 6];
