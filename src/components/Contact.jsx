import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyan-600">Contact Me</h2>
        <p className="text-lg mb-6 text-gray-700">
          Interested in working together? Feel free to reach out!
        </p>
        <a
          href="mailto:yourmail@example.com"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-500 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
