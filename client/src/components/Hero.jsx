import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CirclePattern from "./doodles/CirclePattern";
import Arrows from "./doodles/Arrows";
const Hero = () => {
  return (
    <>
      <section className="grid min-h-screen grid-cols-1 lg:grid lg:grid-cols-2">
        <div className="bg-hero flex items-center justify-center px-10">
          <div className="space-y-6">
            <h1 className="font-heading text-6xl">The Move Global</h1>
            <p className="ms-2">
              The Move Global is a place to grow in Christ, connect with
              believers, and strengthen your faith through shared learning.
            </p>
            <button className="bg-button hover:border-button hover:text-button rounded-2xl px-8 py-3 text-white transition-colors duration-300 hover:border-2 hover:bg-transparent">
              Join us
            </button>
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
      </section>
    </>
  );
};

export default Hero;
