import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { FaPhone, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c8ixl3r", // 🔁 Replace with actual service ID
        "template_y3byd2i", // 🔁 Replace with actual template ID
        form.current,
        "8nLXo0_DMh7Na6KlQ" // 🔁 Replace with actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: true,
            closeOnClick: true,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again!", {
            position: "top-center",
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: true,
            closeOnClick: true,
          });
        }
      );
  };

  return (
    <section className="bg-[#fdfaf6] py-16"
    id="contact" 
    >
      <div className="container">
        <div className="text-center mb-10">
          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif text-[#5e4a71]"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-sm text-gray-600 mt-2"
          >
            We'd love to hear from you — whether it's a question, feedback, or custom order!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-[#5e4a71]"
          >
            <div className="flex items-center space-x-4">
              <FaPhone className="text-xl" />
              <span className="text-sm">+92 123 4567890</span>
            </div>
            <div className="flex items-center space-x-4">
              <LuMail className="text-xl" />
              <span className="text-sm">scentedaura@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaInstagram className="text-xl" />
              <a
                href="https://www.instagram.com/scented_auraa/?igsh=MXJibjZxYWU0eXk2ag%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                @scented_auraa
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
            className="space-y-4"
          >
            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
              className="w-full border border-[#e3dede] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#5e4a71]"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-[#e3dede] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#5e4a71]"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="w-full border border-[#e3dede] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#5e4a71]"
            />
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border border-[#e3dede] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#5e4a71]"
            />
            <button
              type="submit"
              className="bg-[#5e4a71] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#4b3c5a] transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      {/* Toast Notification Container */}
      <div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactSection;
