import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CirclePattern from "./doodles/CirclePattern";
import Arrows from "./doodles/Arrows";
const Hero = () => {
  return (
    <>
      <motion.section
        className="grid min-h-screen grid-cols-1 lg:grid lg:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:bg-hero relative flex items-center justify-center bg-[url('/hero-1.jpeg')] bg-cover bg-center px-10 lg:bg-none">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 space-y-6 text-white lg:text-black">
            <motion.h1
              className="font-heading text-6xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
            >
              The Move Global
            </motion.h1>
            <motion.p
              className="ms-2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4, duration: 0.8, ease: "easeOut" }}
            >
              The Move Global is a place to grow in Christ, connect with
              believers, and strengthen your faith through shared learning.
            </motion.p>
            <motion.button
              className="bg-button hover:border-button lg:hover:text-button rounded-2xl px-8 py-3 text-white transition-colors duration-300 hover:border-2 hover:bg-transparent hover:text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 5, duration: 0.8, ease: "easeOut" }}
            >
              Join us
            </motion.button>
          </div>
        </div>
        <div className="relative hidden bg-white px-5 py-10 lg:block">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              src="/HeroImage.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute top-70 right-10 h-60 w-60 overflow-hidden rounded-xl">
            <img
              src="/hero-1.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute top-100 h-50 w-90 overflow-hidden rounded-xl">
            <img
              src="/HeroMaybe.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
