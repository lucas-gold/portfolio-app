import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { Toggle } from "./toggle";
import { Navigation } from "./Navigation";
import "./styles.css";
import { HomeButton } from "./HomeButton";

// Query screen size hook
function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = React.useState(getMatch);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);

    onChange();

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

export const NavBar = ({isHome}) => {
  const containerRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 780px)");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!isMobile && isHome); // desktop home => true, everything else => false
  }, [isMobile, isHome]);

  const toggleOpen = () => setIsOpen((v) => !v);

const panelVariants = isMobile
  ? {
      open:  { x: 0, y: 0, transition: { type: "spring", stiffness: 260, damping: 30 } },
      closed:{ x: 0, y: "-110%", transition: { type: "spring", stiffness: 400, damping: 40 } },
    }
  : {
      open:  { x: 0, y: 0, transition: { type: "spring", stiffness: 260, damping: 30 } },
      closed:{ x: "-110%", y: 0, transition: { type: "spring", stiffness: 400, damping: 40 } },
    };

  return (
    <div ref={containerRef}>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            className="nav-backdrop"
            aria-label="Close menu"
            onClick={() => toggleOpen()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.nav key={isMobile ? "mobile" : "desktop"} className={`nav-shell ${isMobile ? "mobile" : "desktop"}`}>
        <motion.div
          className="nav-panel"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={panelVariants}
        >
          <Navigation onNavigate={() => toggleOpen(0)} />
        </motion.div>

        <Toggle toggle={() => toggleOpen()} isOpen={isOpen}/>
        <HomeButton isVisible={!isHome && !isOpen}/>
      </motion.nav>
    </div>
  );
};
