import * as React from "react";
import { motion } from "framer-motion";
import { Item } from "./NavItem";
import EmailModal from "./EmailModal";

const listVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const navItems = [
  { name: "home", href: "/", internal: true, color: "#FF2D95", icon: "fa-solid fa-house" },

  { name: "projects", href: "/projects", internal: true, color: "#DD3AAB", icon: "fa-solid fa-diagram-project" },

  { name: "experience", href: "/experience", internal: true, color: "#BB47C0", icon: "fa-solid fa-briefcase" },

  { name: "email", action: "email_modal", internal: true, color: "#9954D6", icon: "fa-solid fa-envelope" },

  { name: "github", href: "https://github.com/lucas-gold", internal: false, color: "#775FE1", icon: "fa-brands fa-github", target: "_blank" },

  { name: "fennel ai", href: "https://fennel.garden", internal: false, color: "#556CF0", icon: "fa-solid fa-robot", target: "_blank" },

  { name: "harvest rush", href: "https://harvestrush.fennel.garden", internal: false, color: "#2F7BFF", icon: "fa-solid fa-cow", target: "_blank" },

];


export const Navigation = ({ onNavigate }) => {
  const [emailOpen, setEmailOpen] = React.useState(false);

  const openEmailModal = () => {
    onNavigate?.();
    setEmailOpen(true);
  };

  return (
    <>
      <motion.ul className="nav-list" variants={listVariants}>
        {navItems.map((item) => (
          <Item
            key={item.name}
            item={item}
            onNavigate={onNavigate}
            onEmailClick={openEmailModal}
          />
        ))}
      </motion.ul>

      <EmailModal
        open={emailOpen}
        onClose={() => setEmailOpen(false)}
        email="lucasgold01@gmail.com"
      />
    </>
  );
};
