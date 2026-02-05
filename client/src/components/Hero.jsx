import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CirclePattern from "./doodles/CirclePattern";
import Arrows from "./doodles/Arrows";
const Hero = () => {
  return (
    <>
      <section className="min-h-screen pt-0 lg:mt-0 lg:pt-20">
        <div className="bg-button/15 mx-auto w-full px-5 py-20 text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.h1
              className="font-heading text-6xl tracking-[0.15em] uppercase"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
            >
              The Move Global
            </motion.h1>
            <p className="mx-auto max-w-sm font-light text-gray-800 lg:text-sm">
              The Move Global is a place to grow in Christ, connect with
              believers, and strengthen your faith through shared learning.
            </p>
            <Link to="/register">
              <button className="bg-button cursor-pointer rounded-md px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-amber-900/90">
                Join Us
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="mt-15 grid auto-rows-[200px] grid-cols-2 gap-3 px-10 lg:h-150 lg:auto-rows-auto lg:grid-cols-3 lg:gap-10">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/HeroMaybe.png"
              alt="heroflat"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/hero-1.jpeg"
              alt="heroflat"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 overflow-hidden rounded-2xl shadow-2xl lg:col-span-1">
            <img
              src="/HeroImage.png"
              alt="heroflat"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
