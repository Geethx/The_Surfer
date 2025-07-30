import React from "react";
import { motion } from "framer-motion";

const Activities = () => {
  const activities = [
    { pic: "act1.JPEG", title: "Have An Unforgettable Surf Holiday" },
    { pic: "act2.JPG", title: "Meet New People From All Around The World" },
    { pic: "act3.jpg", title: "Make New Friends For Life" },
    { pic: "act4.JPG", title: "Boat Party" },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-neutral-400 mb-8 tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            ACTIVITIES
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              pic={activity.pic}
              title={activity.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ActivityCard = ({ pic, title }) => {
  return (
    <motion.div
      className="relative bg-cover bg-center h-[400px] flex items-end justify-center shadow-lg transition-transform duration-300 hover:scale-105"
      style={{
        backgroundImage: `url(/${pic})`,
      }}
      initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white p-4 text-center w-full">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight">{title}</h3>
      </div>
    </motion.div>
  );
};

export default Activities;
