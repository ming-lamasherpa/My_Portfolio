import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

const projects = [
  { name: "Health Appointment System", desc: "Built with React & Django, efficient and user-friendly." },
  { name: "Portfolio Website", desc: "This professional portfolio using React & TailwindCSS." },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-indigo-600">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <FadeInWhenVisible key={i} delay={i * 0.1}>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-700">{proj.desc}</p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
