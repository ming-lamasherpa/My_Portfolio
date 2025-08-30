import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <nav className="fixed w-full bg-indigo-800 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="text-2xl font-bold text-white">MyPortfolio</a>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-white hover:text-pink-300">About</a>
          <a href="#skills" className="text-white hover:text-pink-300">Skills</a>
          <a href="#projects" className="text-white hover:text-pink-300">Projects</a>
          <a href="#achievements" className="text-white hover:text-pink-300">Achievements</a>
          <a href="#contact" className="text-white hover:text-pink-300">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          transition={{ type: "spring", stiffness: 80 }}
          className="fixed top-0 right-0 h-screen w-2/3 bg-indigo-900 shadow-lg flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          <a href="#about" className="text-white text-lg hover:text-pink-300" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="text-white text-lg hover:text-pink-300" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="text-white text-lg hover:text-pink-300" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#achievements" className="text-white text-lg hover:text-pink-300" onClick={() => setIsOpen(false)}>Achievements</a>
          <a href="#contact" className="text-white text-lg hover:text-pink-300" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
