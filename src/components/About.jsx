import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <FadeInWhenVisible>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          I am a frontend developer skilled in React.js, TailwindCSS, and Nuxt 3. 
          I also have conceptual knowledge of Python/Django, C, C++, and Advanced Java. 
          I have completed workshops and hackathons and love building efficient web applications.
        </p>
      </div>
    </FadeInWhenVisible>
  </section>
);

export default About;
