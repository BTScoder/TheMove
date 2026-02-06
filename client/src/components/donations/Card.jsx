import CirclePattern from "../doodles/CirclePattern";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
const Card = () => {
  return (
    <>
      <motion.div className="bg-button/80 text-card relative flex max-w-xl flex-col gap-5 rounded-lg p-10 shadow-xl backdrop-blur-md lg:gap-10">
        <div className="absolute inset-0 block text-white/5">
          <CirclePattern />
        </div>
        <div className="flex items-start gap-4">
          <div>
            <Shield className="text-card/70 fill-card h-6 w-6" />
            {/* <p className="mt-3 text-sm text-gray-500">Verified account</p> */}
          </div>

          <h1 className="font-heading relative z-10 text-xl uppercase">
            Providus Bank
          </h1>
        </div>

        <div className="relative z-10 space-y-5">
          <p className="font-heading text-card/70 text-sm tracking-wide uppercase">
            Account Number:
          </p>
          <p className="font-mono text-3xl tracking-widest lg:text-4xl">
            130 862 8011
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-20">
          <div className="space-y-2">
            <p className="font-heading text-card/70 text-sm tracking-wide uppercase">
              Account Holder:
            </p>
            <p>John Doe</p>
          </div>

          {/* <div className="space-y-2">
            <p className="font-heading text-card/70 text-sm tracking-wide uppercase">
              Expiry Date:
            </p>
            <p>12/24</p>
          </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
