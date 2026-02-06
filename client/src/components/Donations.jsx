import Card from "./donations/Card";
import Dots from "./doodles/Dots";
import { Heart } from "lucide-react";
const Donations = () => {
  return (
    <section className="mt-16 mb-20 grid w-full grid-cols-1 overflow-hidden bg-gray-200 px-4 py-10 lg:mx-auto lg:mt-24 lg:h-120 lg:max-w-300 lg:grid-cols-2">
      <div className="">
        <Card />
      </div>
      <div className="mt-10 p-5 lg:mt-0">
        <h1 className="mb-5 text-3xl font-bold lg:text-5xl">
          Support the Mission
        </h1>
        <p className="max-w-md">
          Your generosity helps us grow the community, support outreach, and
          create resources that strengthen faith and fellowship.
        </p>
        <button className="border-button hover:bg-button/80 text-button mt-5 flex items-center gap-2 rounded border-2 px-6 py-3 transition-colors duration-150 hover:border-0 hover:text-white">
          <span>
            <Heart className="text-button mb-1 inline h-6 w-6 hover:animate-pulse hover:fill-red-600" />
          </span>
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default Donations;
