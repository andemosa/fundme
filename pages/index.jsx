import { motion } from "framer-motion";

import Footer from "@/components/footer";
import DoveIcon from "@/components/icons/doveicon";
import EarthIcon from "@/components/icons/earthicon";
import HandshakeIcon from "@/components/icons/handshakeicon";
import MissionIcon from "@/components/icons/missionicon";
import VisionIcon from "@/components/icons/visionicon";
import VolunteerIcon from "@/components/icons/volunteericon";
import Navbar from "@/components/navbar";
import TypingText from "@/components/TypingText";
import { fadeIn, staggerContainer, textVariant2 } from "@/utils/motion";
import AnimatedNumbers from "@/components/AnimatedNumbers";

const Home = () => {
  return (
    <>
      {/* Nav and Hero Section */}
      <div className="bg-[url('/hero.webp')] h-[600px] bg-no-repeat bg-cover bg-center flex relative">
        <Navbar />

        <div className="flex-1 bg-[#233989e6] clip-fund"></div>
        <div className="flex-1"></div>

        <div className="absolute inset-0 m-auto capitalize text-white text-center max-w-[650px] flex items-center justify-center p-4">
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <h4 className="text-xl font-semibold">give hope for homeless</h4>
            <h1 className="text-3xl lg:text-5xl lg:leading-tight font-bold mt-2 mb-3 font-playfair">
              Helping each other <br /> can make world better
            </h1>
            <p className="text-base">
              We Seek out world changers and difference makers around the
              globe,and equip them to fulfill their unique purpose.
            </p>
            <button className="bg-white px-4 py-3 rounded-lg text-[#3C4A79] mt-6 text-sm md:text-base">
              Donate now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Start Campaign Section */}
      <section className="relative flex overflow-hidden rounded-2xl w-11/12 sm:w-3/4 max-w-[800px] mx-auto top-[-100px]">
        <div className="w-1/2 bg-[#ECD7C5] p-4 md:py-8 md:px-6 flex items-start justify-center flex-col">
          <h3 className="text-xl md:text-2xl font-extrabold font-playfair">
            Start A Campaign
          </h3>
          <p className="mt-2 mb-4 text-sm md:text-base">
            Create a campaign topic of your choice and let donators support you
            and let you achieve your goal
          </p>
          <button className="bg-white px-2 md:px-4 py-3 rounded-lg text-[#3C4A79] text-sm md:text-base">
            Create Campaign
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src="/background.webp" alt="" className="w-full h-full" />
        </div>
      </section>

      {/* Make a Difference Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-11/12 xl:w-4/5 max-w-7xl mx-auto flex gap-4 my-8 lg:mb-12"
      >
        <div className="flex-1">
          <div className="w-11/12">
            <TypingText title="Welcome to Fund me" textStyles="font-semibold" />
            <motion.h3
              variants={textVariant2}
              initial="hidden"
              whileInView="show"
              className="text-2xl lg:text-3xl my-2 md:my-3 font-bold font-playfair"
            >
              Let Us Come Together <br />
              To Make a Difference
            </motion.h3>
            <motion.p
              variants={textVariant2}
              initial="hidden"
              whileInView="show"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="flex gap-4 my-3 md:my-6"
            >
              <div className="flex-1 bg-[#E0E7FF] rounded-md p-3">
                <div className="flex gap-4 my-1 md:my-2">
                  <MissionIcon />
                  <p>Our Mission</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="flex-1 bg-[#E0E7FF] rounded-md p-3">
                <div className="flex gap-4 my-1 md:my-2">
                  <VisionIcon />
                  <p>Our Vision</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </motion.div>
            <motion.button
              variants={textVariant2}
              initial="hidden"
              whileInView="show"
              className="bg-[#3C4A79] px-4 py-3 rounded-lg text-white"
            >
              Read More
            </motion.button>
          </div>
        </div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="hidden sm:flex flex-1 relative max-h-[450px] rounded-2xl border-2 rounded-br-xl border-solid border-[#8C96B6] bg-[#8C96B6] p-2 md:p-4"
        >
          <img src="/grass.webp" alt="" className="w-full h-full rounded-2xl" />
        </motion.div>
      </motion.section>

      {/* Popular Campaigns Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-11/12 xl:w-4/5 max-w-7xl mx-auto"
      >
        <TypingText
          title="Popular Campaigns"
          textStyles="text-2xl lg:text-3xl font-bold font-playfair"
        />

        <div className="flex gap-4 mt-6 mb-4 py-4 overflow-x-scroll lg:overflow-hidden">
          {Array.from({ length: 4 }).map((_, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("right", "spring", idx * 0.5, 0.75)}
              className="shadow-[0px_10px_25px_rgba(37,42,52,0.08)] rounded-xl bg-white min-w-[220px]"
            >
              <div>
                <img src="/campaign.webp" alt="" />
              </div>
              <div className="p-2">
                <h4 className="font-semibold text-sm">Technology</h4>
                <h3 className="my-2 xl:text-lg font-bold font-playfair">
                  Donate for poor peoples treatment and medicine.
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className="my-3 text-sm">
                  <div className="flex justify-between">
                    <p>Donated</p>
                    <p>60%</p>
                  </div>
                  <div className="rounded-sm overflow-hidden bg-[#B9BFD3] mb-1">
                    <div className="w-[50%] h-1 bg-[#3C4A79]"></div>
                  </div>
                  <div className="flex justify-between">
                    <p>Raised: $600</p>
                    <p>Goal: $1,000</p>
                  </div>
                </div>
                <button className="bg-[#3C4A79] px-3 py-2 rounded-lg text-white text-sm">
                  Donate Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-right">View all</div>
      </motion.section>

      {/* Stats Section */}
      <section className="w-11/12 xl:w-4/5 max-w-7xl mx-auto my-8">
        <h3 className="text-2xl lg:text-3xl font-bold font-playfair">
          We Believe that We can Save <br />
          More Lifes with you
        </h3>

        <div className="flex gap-4 mt-6 mb-4 py-4 overflow-x-scroll lg:overflow-hidden">
          <div className="rounded-md flex-1 bg-[#E0E7FF] flex flex-col justify-center items-center p-6 min-w-[220px]">
            <HandshakeIcon />
            <h3 className="mt-4 mb-2 text-2xl lg:text-3xl font-bold">
              <AnimatedNumbers value={4597} />+
            </h3>
            <p className="font-semibold">People Raised</p>
          </div>

          <div className="rounded-md flex-1 bg-[#E0E7FF] flex flex-col justify-center items-center p-6 min-w-[220px]">
            <VolunteerIcon />
            <h3 className="mt-4 mb-2 text-2xl lg:text-3xl font-bold">4597+</h3>
            <p className="font-semibold">People Raised</p>
          </div>

          <div className="rounded-md flex-1 bg-[#E0E7FF] flex flex-col justify-center items-center p-6 min-w-[220px]">
            <DoveIcon />
            <h3 className="mt-4 mb-2 text-2xl lg:text-3xl font-bold">4597+</h3>
            <p className="font-semibold">People Raised</p>
          </div>

          <div className="rounded-md flex-1 bg-[#E0E7FF] flex flex-col justify-center items-center p-6 min-w-[220px]">
            <EarthIcon />
            <h3 className="mt-4 mb-2 text-2xl lg:text-3xl font-bold">4597+</h3>
            <p className="font-semibold">People Raised</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-11/12 xl:w-4/5 max-w-7xl mx-auto"
      >
        <TypingText
          title="FAQs"
          textStyles="text-2xl lg:text-3xl font-bold font-playfair"
        />

        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>What is Fund ME?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam modi necessitatibus quis maxime porro amet sapiente
                veritatis quod incidunt, temporibus iusto obcaecati a cumque
                repellendus, numquam mollitia quasi unde tenetur!
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam modi necessitatibus quis maxime porro amet sapiente
                veritatis quod incidunt, temporibus iusto obcaecati a cumque
                repellendus, numquam mollitia quasi unde tenetur!
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className="hidden"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam modi necessitatibus quis maxime porro amet sapiente
                veritatis quod incidunt, temporibus iusto obcaecati a cumque
                repellendus, numquam mollitia quasi unde tenetur!
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
