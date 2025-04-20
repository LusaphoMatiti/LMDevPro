import React from "react";
import { motion } from "framer-motion";

const Branch = ({ side, title, items, topOffset = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "right" ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`absolute ${
        side === "right" ? "left-full ml-8" : "right-full mr-8"
      }`}
      style={{ top: topOffset }}
    >
      <h2 className="text-3xl font-bebas font-bold mb-5">{title}</h2>
      <ul className="space-y-4 font-bebas text-sm">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex w-500 max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="flex items-center pr-10 pl-2 py-2">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  alt={`Logo of ${item.name}`}
                  src={item.image}
                />
                <div className="mx-3">
                  <p className="text-gray-600 text-lg dark:text-gray-200">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Branch;
