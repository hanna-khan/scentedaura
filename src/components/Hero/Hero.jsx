import React from "react";
import HeroPng from "../../assets/herobgimg.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroPng})` }}
    >
      {/* Fullscreen Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center">
        <div className=" w-full">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left px-10">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif text-white"
            >
              SCENTED WAX SACHET
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-300 leading-7"
            >
              Bring a touch of elegance and lasting fragrance to your space with
              our handcrafted scented wax sachets – perfect for wardrobes,
              drawers, and gifting. Discover the art of aroma at Scented Wax
              Sachet.
            </motion.p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <motion.button
              onClick={() => {
                const section = document.getElementById("products");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase bg-[#7f6a93] text-white shadow-[4px_4px_0px_0px_#5e4a71] hover:bg-[#6c597d] transition"
              >
                Lets explore
              </motion.button>
              <motion.button
                onClick={() => {
                  const section = document.getElementById("contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                variants={SlideUp(1.1)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase bg-[#e8e3dc] text-[#6c597d] shadow-[4px_4px_0px_0px_#c1bbb4] hover:bg-[#dcd6cf] transition"
              >
                Contact Us
              </motion.button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
