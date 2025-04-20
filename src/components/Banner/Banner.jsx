import React from "react";
import Banner1 from "@assets/banner.png";
import aboutus from "@assets/aboutus.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner = () => {
  return (
    <div className="bg-[#fdfaf6] py-14"
    id="about" 
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={aboutus}
            alt="Who we are"
            className="w-[65%] mx-auto rounded-xl shadow-lg"
          />

          {/* Text Section */}
          <div className="space-y-5">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-serif font-bold text-[#5e4a71]"
            >
              Who We Are
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-[#7a7680] text-sm leading-7"
            >
              At Scented Wax Sachet, we’re a small, heartfelt business rooted in passion and creativity.
              Each sachet is lovingly handcrafted from premium wax, infused with enchanting fragrances,
              and delicately decorated with dried flowers and botanicals. From pouring to packaging,
              every step is done with care — ensuring what reaches you is not just a product, but an experience.
              Whether you’re adding aroma to your space or seeking the perfect gift,
              Scented Wax Sachet brings you elegance, fragrance, and warmth.
            </motion.p>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="inline-block px-6 py-2 bg-[#7f6a93] text-white rounded-full shadow-md hover:bg-[#5e4a71] transition-all duration-300"
            >
              View Our Handcrafted Wax
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
