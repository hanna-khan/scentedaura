import React from "react";
import Logo from "@assets/nobglogo.png";
import { FaPhone, FaInstagram } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
      className="bg-[#5e4a71] py-14 text-white"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="Scented Aura Logo" className="w-14" />
              <p className="text-2xl font-semibold">Scented Aura</p>
            </div>
            <p className="text-sm opacity-80">Karachi, Pakistan</p>
            <p className="text-sm opacity-60">@ 2025 Scented Aura, All Rights Reserved</p>
          </div>

          {/* About Us */}
          <div className="space-y-4 mt-4">
            <h1 className="text-xl font-semibold">About Us</h1>
            <p className="text-sm opacity-80 leading-7">
              At Scented Aura, we blend luxury and elegance to create aromatic products that elevate your space.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 mt-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="text-sm space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-white" />
                <a href="tel:+123456789" className="hover:underline">+9230000000</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare className="text-white" />
                <a href="mailto:scentedaura@gmail.com" className="hover:underline">scentedaura@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaInstagram className="text-white" />
                <a
                  href="https://www.instagram.com/scented_auraa/?igsh=MXJibjZxYWU0eXk2ag%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @scented_auraa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-sm font-semibold opacity-70 border-t border-white/30 pt-5 mt-5">
          &copy; 2025 Scented Aura. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
