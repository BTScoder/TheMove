import Card from "./donations/Card";
import Dots from "./doodles/Dots";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
const Donations = () => {
  return (
    <motion.section
      className="bg-donations mt-16 mb-20 grid w-full grid-cols-1 overflow-hidden rounded-lg px-4 py-10 lg:mx-auto lg:mt-24 lg:h-120 lg:max-w-300 lg:grid-cols-2 lg:gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="">
        <Card />
      </div>
      <div className="mt-10 p-5 text-neutral-100 lg:mt-0">
        <h1 className="mb-5 text-3xl font-bold lg:text-5xl">
          Support the Mission
        </h1>
        <p className="max-w-md">
          Your generosity helps us grow the community, support outreach, and
          create resources that strengthen faith and fellowship.
        </p>
        <button className="hover:bg-button/80 mt-5 flex items-center gap-2 rounded border-2 border-neutral-100 px-6 py-3 text-neutral-100 transition-colors duration-150 hover:border-0 hover:text-white">
          <span>
            <Heart className="mb-1 inline h-6 w-6 text-neutral-100 hover:animate-pulse hover:fill-red-600" />
          </span>
          Donate Now
        </button>
      </div>
    </motion.section>
  );
};

export default Donations;
