import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SurfingJourney from "../components/SurfingJourney";
import SurfCampCard from "../components/SurfCard";
import ChooseSurfCamp from "../components/ChooseSurf";
import ImageCard from "../components/ImageCard";
import SurfurWay from "../components/SurfurWay";
import SurfPackageCard from "../components/Packages";
import Difference from "../components/Difference";
import Activities from "../components/Activities";
import MasonryGrid from "../components/Follow";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Blogs from "../components/Blogs";
import { Footer } from "../components/Footer";
import {FooterStats} from "../components/Footer";


const Home = () => {
  const cards = {
    card1: {
      pic: "surfcard1.jpg",
      topic: "The Surfer Beach Surf Camp",
      body1:
        "Join us at the ultimate destination for surf enthusiasts. Experience the thrill of riding the waves and enjoy the serene beauty of the ocean.",
    },

    card2: {
      pic: "surfcard2.jpg",
      topic: "TS2 Surf Camp",
      body1:
        "Feel the magic of surfing as the sun sets over the horizon. Our guided sunset sessions are a perfect way to end your beach day.",
    },

    card3: {
      pic: "surfcard3.jpg",
      topic: "The Wave Surf Camp",
      body1:
        "Create lasting memories with your loved ones on a fun-filled family surf holiday. Safe, guided, and tailored for all age groups.",
    },

    card4: {
      pic: "surfcard4.jpg",
      topic: "The Surfer Surf Style",
      body1:
        "Take your skills to the next level with our advanced surf training camp. Designed for serious surfers seeking to improve technique and form.",
    },
  };

  const destinations = [
    {
      image:"srilanka.jpg",
      title: "Sri Lanka",
    },
    {
      image:"morocco.jpg",
      title: "Morocco",
    },
  ];


  const cardList = Object.values(cards);

  return (
    <div>
      <Header />
      <SurfingJourney />


      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardList.map((card, index) => (
            <motion.div
              key={index}
              className="transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SurfCampCard
                pic={card.pic}
                topic={card.topic}
                body1={card.body1}
                body2={card.body2}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Difference />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ChooseSurfCamp />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <ImageCard
              key={index}
              image={destination.image}
              title={destination.title}
              subtitle={destination.subtitle}
              index={index}
            />
          ))}
        </div>
      </div>

      <SurfurWay />

      <SurfPackageCard />

      <Activities />

      <MasonryGrid />

      <Reviews />

      <FAQ />

      <Blogs />

      <FooterStats />

      <Footer />
    </div>
  );
};

export default Home;