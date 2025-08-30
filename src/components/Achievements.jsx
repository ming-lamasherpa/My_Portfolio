import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

const achievements = [
  "36-hour Hackathon at IIC Quest 3.0",
  "Nuxt 3 Frontend Framework Course Completion",
  "Efficient Health Appointment System Project",
  "4-day JavaScript Workshop"
];

const Achievements = () => (
  <section id="achievements" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-indigo-600">Achievements</h2>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {achievements.map((item, i) => (
          <FadeInWhenVisible key={i} delay={i * 0.1}>
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:scale-105 transition transform">
              {item}
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
