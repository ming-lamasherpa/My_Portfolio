import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-cyan-600">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Health Appointment System</h3>
            <p className="text-gray-700">
              Built an efficient health appointment system with two team members during my final year project, helping patients schedule appointments with doctors easily.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
            <p className="text-gray-700">
              Designed and developed my own portfolio website using React.js, Vite, and TailwindCSS to showcase my skills and achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
