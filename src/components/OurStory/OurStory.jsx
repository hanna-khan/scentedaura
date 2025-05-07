import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import womenteam from "../../assets/womenteam.png"; // Add any team/illustrative image you like
import group from "../../assets/group.jpg"; // Add any team/illustrative image you like

const OurStory = () => {
  return (
    <div className="bg-[#fdfaf6] py-16"
    id="story" 
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={womenteam} alt="Our Story" className="rounded-2xl shadow-md w-full max-w-[500px] mx-auto" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={SlideUp(0.3)}
          initial="initial"
          whileInView="animate"
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold font-serif text-[#5e4a71]">Our Story</h2>
          <p className="text-[#7a7680] text-sm leading-7">
            We’re a team of six passionate girls who came together with one vision — to craft
            something beautiful and meaningful. As students from NED University, we turned our love for scents,
            art, and minimal design into a small startup that feels like home to us.
          </p>
          <p className="text-[#7a7680] text-sm leading-7">
            Every wax sachet and candle we create is a blend of creativity, care, and collaboration.
            It’s not just a product — it’s a piece of us, made with heart for homes like yours.
          </p>
          <p className="text-[#7a7680] text-sm leading-7 italic">
            From late-night brainstorming to hand-pouring each sachet — this journey is just getting started.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
