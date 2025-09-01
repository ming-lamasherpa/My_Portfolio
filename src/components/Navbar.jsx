import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScrollEvents = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScrollEvents);
    return () => window.removeEventListener("scroll", handleScrollEvents);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-yellow-300 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Animated Glowing Logo */}
          <motion.h1
            className="text-2xl font-bold tracking-wide text-white flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {Array.from("MyPortfolio").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="inline-block text-yellow-300 drop-shadow-[0_0_6px_#facc15] animate-pulse"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Desktop Links */}
          <motion.div
            className="hidden md:flex space-x-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                variants={linkVariants}
                onClick={() => handleScroll(link.href)}
                className={`transition ${
                  activeSection === link.href
                    ? "text-yellow-300 font-semibold underline underline-offset-4"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "×" : "≡"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 px-6 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3 }}
                onClick={() => handleScroll(link.href)}
                className={`block text-lg w-full text-left transition ${
                  activeSection === link.href
                    ? "text-yellow-300 font-semibold underline underline-offset-4"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
