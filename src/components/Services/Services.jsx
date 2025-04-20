import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { FaLeaf, FaPaintBrush, FaCubes, FaHome } from "react-icons/fa";
import { GiFragrance, GiReceiveMoney } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";

const ServiceCard = [
  {
    id: 1,
    title: "Long-Lasting Fragrance",
    description:
      "Our scents are designed to linger, leaving a gentle, refreshing aura in your space.",
    icon: <GiFragrance />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Crafted with premium ingredients and care to ensure long-lasting quality and performance.",
    icon: <FaCubes />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Luxury doesn't have to break the bank. Beautiful fragrances at honest prices.",
    icon: <GiReceiveMoney />,
    link: "#",
    delay: 0.6,
  },
  {
    id: 4,
    title: "Aesthetic Home Decor",
    description:
      "Our wax products are as beautiful as they are functional — perfect for any décor style.",
    icon: <FaHome />,
    link: "#",
    delay: 0.8,
  },
  {
    id: 5,
    title: "Custom Designs Available",
    description:
      "Personalized wax sachets and candles tailored to your vision, style, or occasion.",
    icon: <MdOutlineDesignServices />,
    link: "#",
    delay: 1.0,
  },
  {
    id: 6,
    title: "Eco-Friendly & Natural",
    description:
      "Made with eco-conscious materials and natural essential oils, safe for you and the planet.",
    icon: <FaLeaf />,
    link: "#",
    delay: 1.2,
  },
];
const Services = () => {
  return (
    <div className="bg-[#fdfaf6] py-20"
    id="provide" 
    >
      <div className="container">
        {/* Heading Section */}
        <div className="space-y-2 text-center max-w-[400px] mx-auto mb-12">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-4xl font-bold font-serif text-[#5e4a71]"
          >
            What We Provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-[#7a7680] text-sm"
          >
            Bring your dream home to life with one-on-one design help & handpicked products.
          </motion.p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ServiceCard.map((card) => (
            <motion.div
              variants={SlideUp(card.delay)}
              initial="initial"
              whileInView={"animate"}
              key={card.id}
              className="space-y-4 border border-[#e0d9d0] px-6 py-10 rounded-xl bg-white text-[#5e4a71] hover:bg-[#7f6a93] hover:text-white hover:shadow-[6px_6px_0px_0px_#5e4a71] transition-all duration-300"
            >
              <span className="inline-block text-2xl border border-[#5e4a71] rounded-full p-4 bg-white text-[#5e4a71] hover:bg-white hover:text-[#7f6a93] transition-all">
                {card.icon}
              </span>
              <p className="text-xl font-bold font-serif">{card.title}</p>
              <p className="text-sm text-[#8d8a85] leading-relaxed">
                {card.description}
              </p>
              <a
                href={card.link}
                className="inline-block border-b border-[#5e4a71] hover:border-white transition"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
