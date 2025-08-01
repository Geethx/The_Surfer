
import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ image, title, subtitle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative overflow-hidden shadow-2xl group cursor-pointer mb-10"
  >
    <div 
      className="aspect-[4/5] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
      style={{
        backgroundImage: `url(/${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-30 transition-all duration-500">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl opacity-90 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  </motion.div>
);
export default ImageCard;