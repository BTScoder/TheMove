import { motion } from "framer-motion";
import Circles from "./doodles/Circles";
const About = () => {
  return (
    <>
      <section className="my-25 px-5">
        <div className="mb-10 space-y-5">
          <motion.h2
            className="text-start text-5xl font-bold uppercase lg:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            About The Move Church
          </motion.h2>
          <p className="text-start font-light text-gray-500">
            A people of the word and prayer
          </p>
        </div>

        {/* About 1 */}
        <div
          className="my-15 lg:my-10 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10"
          data-aos="slide-right"
        >
          <div className="h-60 w-full shadow-xl lg:h-80">
            <img
              src="/prayer1.jpeg"
              alt="about"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-10 space-y-2 lg:mt-0 lg:space-y-10">
            <h2 className="text-2xl uppercase lg:text-4xl">
              <span className="">
                <Circles />
              </span>
              Spreading the Word{" "}
            </h2>
            <p className="text-sm font-light text-gray-600 lg:max-w-lg">
              We are passionate about sharing the gospel of Jesus Christ.
              Through teaching, discipleship, and practical ministry, we equip
              believers to live out and proclaim the truth of God’s Word in
              their everyday lives.
            </p>
          </div>
        </div>

        {/* About 2 */}
        <div
          className="my-15 lg:my-10 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10"
          data-aos="slide-left"
        >
          <div className="h-60 w-full lg:hidden lg:h-80">
            <img
              src="/Prayer3.png"
              alt="about"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-10 mb-10 space-y-2 lg:mt-0 lg:mb-0 lg:space-y-10">
            <h2 className="text-4xl uppercase">
              <span className="">
                <Circles />
              </span>
              Fellowshipping Together{" "}
            </h2>
            <p className="text-sm font-light text-gray-600 lg:max-w-lg">
              Grace Community is a family. We value meaningful relationships,
              unity, and love among members. Through fellowship, we encourage
              one another, build strong spiritual bonds, and grow together in
              faith.
            </p>
          </div>
          <div className="hidden h-60 w-full lg:block lg:h-80">
            <img
              src="/Prayer3.png"
              alt="about"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
        {/* About 3 */}
        <div
          className="my-10 lg:my-10 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10"
          data-aos="slide-right"
        >
          <div className="h-60 w-full lg:h-80">
            <img
              src="/prayer1.jpeg"
              alt="about"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-10 space-y-2 lg:mt-0 lg:space-y-10">
            <h2 className="text-4xl uppercase">
              <span className="">
                <Circles />
              </span>
              Growing in Christ{" "}
            </h2>
            <p className="text-sm font-light text-gray-600 lg:max-w-lg">
              We prioritize our personal and collective walk with God. With
              strong accountability structures, prayer, and the study of
              Scripture, we intentionally grow together into mature, Christ-like
              believers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
