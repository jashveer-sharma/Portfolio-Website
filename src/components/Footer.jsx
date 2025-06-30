import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-black text-white text-center py-6">
    <p className="text-gray-400">© 2025 JashveerSharma. All rights reserved.</p>
    <div className="flex justify-center space-x-6 mt-4 text-2xl">
      <a
        href="https://github.com/jashveer-sharma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="hover:text-green-500 cursor-pointer" />
      </a>

      <a
        href="https://wa.me/9980583934" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
      </a>
    </div>
  </footer>
);

export default Footer;
