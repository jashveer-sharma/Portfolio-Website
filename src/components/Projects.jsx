import React from "react";

const Projects = () => (
  <section className="px-6 md:px-10 py-20 text-white animate-fade-in">
    <h2 className="text-3xl font-bold mb-10">
      Projects : Created while learning.
    </h2>
    <ul className="space-y-4">
      <br />
      <h2 className="text-2xl font-bold text-gray-600 mb-10">
        Completed Projects{" "}
      </h2>
      <li className="bg-gray-800 p-4 rounded-md">
        <a
          href="https://splitmitra.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 "
        >
          Split Mitra{" "}
          <p className="text-gray-500   ">(Click to view Split Mitra live)</p>
        </a>
        <p className="text-gray-300 mt-2  ">
          Split Mitra is a smart and easy-to-use expense tracker and
          bill-splitting app built for friends, roommates, and groups. Track who
          paid what, split costs fairly, and stay on top of shared expenses —
          all with a clean, intuitive interface.
        </p>
      </li>
      <h2 className="text-2xl font-bold text-gray-600 mb-10">
        Projects In-Progress
      </h2>

      <li className="bg-gray-800 p-4 rounded-md text-green-400">
        Snest{" "}
        <p className="text-gray-300 mt-2  ">
          Snest is a smart college resale platform where students can buy, sell,
          and discover secondhand products within their campus. With features
          like AI-based product verification, condition scanning, and
          location-based listings, Snest aims to create a trusted marketplace
          for student communities. 🛠 Currently in progress — actively building
          core features and UI.
        </p>
        <p className="text-gray-500 text-right  ">
          Planned completion: Jan 2026
        </p>
      </li>
      <li className="bg-gray-800 p-4 rounded-md text-green-400">
        Vale Nova{" "}
        <p className="text-gray-300 mt-2  ">
          Vale Nova is an AI-powered video transformation platform currently in
          progress. It focuses on advanced face detection, identity-based face
          swapping, and real-time video enhancements. Built entirely from
          scratch, the project aims to deliver cutting-edge tools for creative
          and intelligent video editing using deep learning and computer vision.
        </p>
        <p className="text-gray-500 text-right  ">
          Planned completion: Aug 2026
        </p>
      </li>
    </ul>
  </section>
);

export default Projects;
