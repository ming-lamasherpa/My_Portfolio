import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profilePic from "../assets/profile.jpg"; // put your photo in src/assets/

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center 
                 text-center md:text-left 
                 bg-gradient-to-r from-indigo-500 via-purple-800 to-black
                 text-white px-3 md:px-6"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Hi, I’m <span className="text-7xl text-blue-200 ">Ming</span>
        </h1>

        {/* Neon Typing Animation */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          animate={{ 
            textShadow: [
              "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff",
              "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
              "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ReactTyped
            strings={[
              "Frontend Developer",
              "React.js Enthusiast",
              "TailwindCSS Designer",
              "Nuxt 3 Learner",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.h2>

        <p className="max-w-xl text-2xl">
          I build modern, efficient, and user-friendly web applications using React.js, 
          TailwindCSS, and Nuxt 3. Passionate about clean code and beautiful design.
        </p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="inline-block px-6 py-3 bg-black text-white text-lg
                     rounded-2xl shadow-lg hover:bg-pink-500 transition"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Right Profile Pic with Rotating Glowing Ring */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0 relative"
      >
        {/* Glowing Ring */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r 
                     from-pink-400 via-purple-500 to-indigo-500 blur-3xl opacity-60"
          animate={{ 
            rotate: 360, 
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        ></motion.div>

        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Profile"
          className="relative w-80 h-80 rounded-full border-4 border-white shadow-2xl object-cover"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
