import * as React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2.7"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const HomeButton = ({ isVisible }) => {
  const history = useHistory();

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => history.push("/")}
      className="nav-circle nav-home"
      aria-label="Return home"
    >
      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 24 26"
        initial={false}
        animate={isVisible ? "visible" : "hidden"}
      >        
        <Path
          d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V22H4a1 1 0 0 1-1-1V10.5z"
          stroke="#e2e2e2"
        />
      </motion.svg>
    </button>
  );
};
