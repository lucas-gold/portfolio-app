import * as React from "react";
import { motion } from "framer-motion";

export const Profile = () => {
  return <motion.div
  animate={{ rotate: [0,0, 0, 2, 0, 2, 0], scale: 1}}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
    whileHover={{ scale: 1.2, rotate: [0, 0, 360, 360, 360], borderRadius: ["50%", "35%", "20%", "20%", "20%"]}}
    whileTap={{ scale: 0.8, rotate: [0, 0, 360, 360, 360] }} />;

};
