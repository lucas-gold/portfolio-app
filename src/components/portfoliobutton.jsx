import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const PortfolioButton = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
     <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
          animate={{ scale: 1.5 }}
          transition={{delay:0.5, duration:1}}
        />
      </motion.div>
      </div>
  );
};
