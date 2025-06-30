import React from "react";
import { FaCode, FaServer, FaRobot } from "react-icons/fa";

const Skills = () => (
  <section className="px-6 md:px-10 py-20 bg-gray-900 text-white animate-slide-in">
    <h2 className="text-3xl font-bold mb-10">
      Currently Exploring
      <br />
      <span className="block text-xl text-gray-200">
        I’m actively building hands-on projects while learning these tools and
        technologies.
      </span>
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gray-800 p-6 rounded-lg">
        <FaServer className="text-green-500 text-3xl mb-3" />
        <h3 className="text-xl font-semibold">Backend & Systems</h3>
        <ul className="text-gray-400 mt-2 list-disc list-inside text-left">
          <li>Node.js (Express), REST APIs</li>
          <li>MongoDB (basic CRUD), Firebase (auth + db)</li>
          <li>Learning how to structure scalable APIs</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <FaCode className="text-green-500 text-3xl mb-3" />
        <h3 className="text-xl font-semibold">Software & Tools</h3>
        <ul className="text-gray-400 mt-2 list-disc list-inside text-left">
          <li>Git & GitHub</li>
          <li>Postman, VSCode, Docker (beginner)</li>
          <li>Deploying via Vercel / Netlify</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <FaRobot className="text-green-500 text-3xl mb-3" />
        <h3 className="text-xl font-semibold">AI/ML (Learning Phase)</h3>
        <ul className="text-gray-400 mt-2 list-disc list-inside text-left">
          <li>React (basics + routing)</li>
          <li>Tailwind CSS (UI design)</li>
          <li>Recharts (for visuals), Framer Motion (animations)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
