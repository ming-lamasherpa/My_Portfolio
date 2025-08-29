import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-cyan-600 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="text-2xl font-bold text-white">
          MyPortfolio
        </a>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-white hover:text-green-300">About</a>
          <a href="#skills" className="text-white hover:text-green-300">Skills</a>
          <a href="#projects" className="text-white hover:text-green-300">Projects</a>
          <a href="#achievements" className="text-white hover:text-green-300">Achievements</a>
          <a href="#contact" className="text-white hover:text-green-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
