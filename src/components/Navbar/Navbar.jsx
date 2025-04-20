import React from "react";
import Logo from "../../assets/nobglogo.png";
import { motion } from "framer-motion";

const NavLinks = [
  { id: 1, title: "About", link: "#about" },
  { id: 2, title: "Our story", link: "#story" },
  { id: 3, title: "What we provide", link: "#provide" },
  { id: 4, title: "Products", link: "#products" },
  { id: 5, title: "Contact", link: "#contact" },
];


const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-2 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <a href="home">
            <img src={Logo} alt="logo" className="w-16" />
          </a>
          <span className="text-xl font-bold text-[#6c597d]">Scented Aura</span>
        </div>

        {/* Link section */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.link}
                className="inline-block mx-4 text-lg font-medium text-[#5e4a71] hover:text-[#7f6a93] transition duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#7f6a93] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
