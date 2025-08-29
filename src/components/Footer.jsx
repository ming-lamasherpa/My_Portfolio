import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-cyan-600 text-white text-center">
      <p>© {new Date().getFullYear()} Mingma | Frontend Developer</p>
    </footer>
  );
};

export default Footer;
