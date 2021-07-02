import * as React from "react";
import { motion } from "framer-motion";
import './styles.css';


const variants = {
  open: {
    y: 0,
    opacity: 1,
    visibility:"visible",
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    visibility: "hidden",
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF", "#4400FF"];
const links = ["/", "projects", "experience", "/LucasGoldCV.pdf", "mailto:lucasgold01@gmail.com", "https://github.com/lucas-gold"]
const target = ["","","","_blank", "_blank", "_blank"]
const names = ["Home", "Projects", "Experience", "Resumé", "Email", "GitHub"]
const icons = ["home.png", "projects.png", "experience.png", "resume.png", "email.png", "github.png"]
export const Item = ({ i }) => {

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={links[i]} style={{color:`${colors[i]}`, textDecoration:"none"}} target={target[i]}>
      <img src={(`./img/icons/nav/${icons[i]}`)} className="icon-placeholder" alt=""/>
      {names[i]}</a>
    </motion.li>
  );
};
