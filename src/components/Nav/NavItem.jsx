import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles.css";

const itemVariants = {
  open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
  closed: { y: 30, opacity: 0, transition: { y: { stiffness: 1000 } } },
};

const baseLinkStyle = (item) => ({
  color: item.color,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 14,
  fontFamily: "Space Grotesk",
});

export const Item = ({ item, onNavigate, onEmailClick }) => {
  return (
    <motion.li variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      {item.internal ? (
        <Link
          to={item.href}
          onClick={item.action === "email_modal" ? onEmailClick : onNavigate}
          style={baseLinkStyle(item)}        
        >
          <i className={`nav-icon ${item.icon}`} style={{ fontSize: 24, marginTop: 10 }} />
          {item.name}
        </Link>
      ) : (
        <a
          href={item.href}
          target={item.target || undefined}
          rel={item.target ? "noopener noreferrer" : undefined}
          onClick={item.action === "email_modal" ? onEmailClick : onNavigate}
          style={baseLinkStyle(item)}        
        >
          <i className={`nav-icon ${item.icon}`} style={{ fontSize: 24, marginTop: 10 }}/>
          {item.name}
        </a>
      )}
    </motion.li>
  );
};