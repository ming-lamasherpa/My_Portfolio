import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

const skills = [
  "React.js", "TailwindCSS", "Nuxt 3", "JavaScript", 
  "Python", "Django", "C", "C++", "Advanced Java"
];

const Skills = () => (
  <section id="skills" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-indigo-600">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.1}>
            <div className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition transform">
              {skill}
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
