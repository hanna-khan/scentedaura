import React from "react";
import img2 from "../../assets/img2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner2 = () => {
  return (
    <div className="bg-[#fdfaf6] py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="space-y-5 xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-serif font-bold text-[#5e4a71]"
            >
              Because a Beautiful Home Deserves a Beautiful Scent
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-[#7a7680] text-sm leading-7"
            >
              Fragrance isn’t just a scent — it’s a feeling your home deserves. <br />
              Our scented wax sachets blend elegance and aroma to elevate every corner of your home.
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-6"
            >
              {/* Stats Section */}
              <div className="max-w-[80px] space-y-2 text-center">
                <p className="text-xl font-bold font-serif text-[#5e4a71]">100%</p>
                <p className="text-[#7a7680] text-sm">Handcrafted with Love</p>
              </div>
              <div className="max-w-[80px] space-y-2 text-center">
                <p className="text-xl font-bold font-serif text-[#5e4a71]">5⭐</p>
                <p className="text-[#7a7680] text-sm">Customer Satisfaction</p>
              </div>
              <div className="max-w-[80px] space-y-2 text-center">
                <p className="text-xl font-bold font-serif text-[#5e4a71]">2025</p>
                <p className="text-[#7a7680] text-sm">Launched in</p>
              </div>
            </motion.div>
            {/* Button */}
            <motion.div
              variants={SlideUp(0.8)}
              initial="initial"
              whileInView="animate"
            >
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="inline-block px-6 py-2 bg-[#7f6a93] text-white rounded-full shadow-md hover:bg-[#5e4a71] transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={img2}
              alt="Beautiful Home"
              className="w-[95%] md:w-full mx-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
