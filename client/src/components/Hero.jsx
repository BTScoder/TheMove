import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CirclePattern from "./doodles/CirclePattern";
import Arrows from "./doodles/Arrows";
const Hero = () => {
  return (
    <>
      <section className="min-h-screen py-20 lg:mt-0">
        <div className="mx-auto max-w-xl space-y-6 text-center">
          <h1 className="font-heading text-6xl uppercase">The Move Global</h1>
          <p className="text-sm font-light text-gray-800">
            The Move Global is a place to grow in Christ, connect with
            believers, and strengthen your faith through shared learning.
          </p>
          <button className="bg-button rounded-md px-6 py-2 text-white">
            Join Us
          </button>
        </div>
        <div className="mt-15 grid h-80 grid-cols-2 gap-3 px-10 lg:grid-cols-3 lg:gap-10">
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
