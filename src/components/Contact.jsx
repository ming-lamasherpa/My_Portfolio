import React from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-indigo-600">Contact Me</h2>
      <FadeInWhenVisible>
        <form className="max-w-xl mx-auto flex flex-col gap-6">
          <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg border-2 border-indigo-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 transition outline-none"/>
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border-2 border-indigo-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 transition outline-none"/>
          <textarea placeholder="Message" className="px-4 py-3 rounded-lg border-2 border-indigo-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 transition outline-none"/>
          <motion.button 
            type="submit"
            className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ff00ff, 0 0 30px #ff00ff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </form>
      </FadeInWhenVisible>
    </div>
  </section>
);

export default Contact;
