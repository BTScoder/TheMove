import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CirclePattern from "./doodles/CirclePattern";
import Arrows from "./doodles/Arrows";
const Hero = () => {
  return (
    <>
      <section className="relative mt-10 min-h-screen lg:mt-0">
        <div className="absolute bottom-0 z-0 w-full">
          <div className="w-full">
            <svg
              className="relative block h-50 w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="waveGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0.1"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-background)"
                    stopOpacity="1"
                  />
                </linearGradient>
              </defs>
              <path
                d="M0,50 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
                fill="url(#waveGradient)"
              />
            </svg>
          </div>
          <div className="h-54 w-full bg-transparent"></div>
        </div>
        <div className="z-50 mx-auto flex min-h-screen max-w-300 flex-col items-center lg:grid lg:grid-cols-2 lg:items-center">
          {/* Text div */}
          <div className="z-50 space-y-6 px-10">
            <h2 className="text-primary text-5xl font-bold uppercase lg:text-7xl">
              Welcome to <span className="text-accent">The move</span> Global
            </h2>
            <p className="text-text lg:max-w-md">
              The Move Global is a training and discipleship group where we're
              equipped for the work of ministry{" "}
            </p>
            <div>
              <button className="bg-primary hover:border-accent hover:text-primary cursor-pointer rounded-2xl px-6 py-3 text-white transition-all duration-200 hover:border-2 hover:bg-white">
                Register
              </button>
            </div>
          </div>

          {/* Design div */}
          <div className="border-background z-50 h-100 w-full rounded-4xl border-2 p-10">
            <img
              src="/HeroImage.png"
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
