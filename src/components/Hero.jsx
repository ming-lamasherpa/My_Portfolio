import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-cyan-500 to-green-400 text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I’m <span className="text-yellow-200">Mingma</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl">
        A passionate <span className="font-semibold">Frontend Developer</span> skilled in React.js, TailwindCSS, Nuxt 3 and experienced in building modern, efficient web applications.
      </p>
      <a
        href="#contact"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-500 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;
