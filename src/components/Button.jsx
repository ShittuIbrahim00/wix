// import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", ...props }) => {
  const styles = {
    primary: "bg-[#00274D] text-white",
    secondary: "bg-[#F05A28] text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-lg px-4 py-2 text-sm w-full font-medium ${styles[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
