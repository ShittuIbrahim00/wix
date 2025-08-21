// import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Card = ({ title, icon, buttonText, variant }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-md rounded-lg p-6 md:pb-16 md:pt-10 flex flex-col justify-between items-center gap-4 md:gap-6 text-center"
    >
      <div className="p-3 bg-blue-50 rounded">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <Button variant={variant}>{buttonText}</Button>
    </motion.div>
  );
};

export default Card;
