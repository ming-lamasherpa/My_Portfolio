import React from "react";
import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default FadeInWhenVisible;
