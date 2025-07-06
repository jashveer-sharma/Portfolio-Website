import React from "react";

const Hero = () => (
  <section className="text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-16 animate-fade-in">
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold text-green-500 leading-tight">
        Aspiring AI/ML Engineer
      </h1>
      <p className="mt-4 text-gray-300">
        Hi, I’m Jashveer Sharma, a tech enthusiast passionate about building
        smart systems and solving real-world problems with AI and full-stack
        development.
      </p>
      <p className="mt-2 text-gray-400">
        On a journey to master cutting-edge technologies and make an impact
        through innovation. Eager to explore and learn cutting-edge technologies
        while building impactful solutions
      </p>
      <a
        href="/publiic/JashveerSharma-Portfolio.pdf"
        download
        className="your-button-styles mt-6 bg-green-500 px-5 py-2 rounded hover:bg-green-600 transition inline-block"
      >
        Download Resume
      </a>

    </div>
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <div className="rounded-full border-4 border-green-500 p-1">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full"
        />
      </div>
    </div>
  </section>
);

export default Hero;
