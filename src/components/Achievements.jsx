import React from "react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-cyan-600">Achievements</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✅ Completed Nuxt 3 Frontend Framework course at CodeIT</li>
          <li>✅ Participated in 36 hours Hackathon (IIC Quest 3.0, Itahari International College)</li>
          <li>✅ Built Health Appointment System as Final Year Project</li>
          <li>✅ Attended 4 days JavaScript Workshop</li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
