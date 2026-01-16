import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CirclePattern from "./doodles/CirclePattern";
import Arrows from "./doodles/Arrows";
const Hero = () => {
  return (
    <>
      <section className="mt-10 lg:mt-0">
        <div className="mx-auto flex min-h-screen max-w-300 flex-col items-center lg:grid lg:grid-cols-2 lg:items-center">
          {/* Text div */}
          <div className="space-y-6 px-10">
            <h2 className="text-5xl font-bold text-gray-400 uppercase lg:text-6xl">
              Welcome to <span className="text-black">The move</span> Global
            </h2>
            <p className="text-black lg:max-w-md">
              The Move Global is a training and discipleship group where we're
              equipped for the work of ministry{" "}
            </p>
            <div>
              <button className="cursor-pointer rounded-2xl bg-black px-6 py-2 text-white transition-all duration-200 hover:border-2 hover:bg-white hover:text-black">
                Register
              </button>
            </div>
          </div>

          {/* Design div */}
          <div className="relative mt-10 flex items-center justify-center rounded-2xl px-20 py-20 lg:mt-0 lg:px-5">
            <div
              className="absolute top-0 left-5 flex h-40 w-40 items-center justify-center rounded-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/heart.svg')" }}
            ></div>
            <div className="absolute top-0 right-50 h-2 w-40">
              <Arrows />
            </div>
            <div
              className="absolute top-0 right-5 h-40 w-40 rounded-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/rename.svg')" }}
            ></div>
            <div
              className="absolute bottom-0 left-5 h-40 w-40 rounded-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/commuity.svg')" }}
            ></div>
            <div
              className="absolute right-5 bottom-0 h-40 w-40 rounded-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/meditation.svg')" }}
            ></div>

            <div
              className="h-70 w-70 rounded-full bg-cover bg-center bg-no-repeat shadow-2xl"
              style={{ backgroundImage: "url('/hero-1.jpeg')" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
