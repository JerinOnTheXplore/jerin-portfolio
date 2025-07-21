import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiFirebase, SiReact, SiNodedotjs } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    name: "Tourism Flow",
    description: "A full-stack tourism management system with React, Express, and MongoDB, featuring booking, user roles, and admin controls.",
    tech: ["React", "Express", "MongoDB", "TailwindCSS"],
    type: "Full-Stack",
    github: "https://github.com/yourusername/tourism-flow",
    live: "https://tourism-flow.web.app"
  },
  {
    id: 2,
    name: "Lawyer Booking App",
    description: "A dynamic booking app to schedule lawyer appointments, built with React and localStorage for state management.",
    tech: ["React", "LocalStorage", "Recharts"],
    type: "React",
    github: "https://github.com/yourusername/lawyer-booking",
    live: "https://incomparable-kringle-d13bb3.netlify.app/"
  },
  {
    id: 3,
    name: "Subscription Box Platform",
    description: "Subscription service platform for tech accessories with Firebase authentication and protected routes.",
    tech: ["React", "Firebase", "TailwindCSS"],
    type: "Firebase",
    github: "https://github.com/yourusername/subscription-box",
    live: "https://byte-box-service.web.app"
  },
  {
    id: 4,
    name: "Plant Care Tracker",
    description: "Full CRUD plant care tracker with React and Express, featuring dark mode and responsive design.",
    tech: ["React", "Express", "MongoDB"],
    type: "Full-Stack",
    github: "https://github.com/yourusername/plant-care-tracker",
    live: "https://plant-care-tracker-80dfe.web.app"
  },
  {
    id: 5,
    name: "Online Group Study",
    description: "A MERN stack platform for group assignments, submission, and grading with JWT auth and dynamic routing.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    type: "Full-Stack",
    github: "https://github.com/yourusername/online-group-study",
    live: "https://online-group-study-e3eaf.web.app"
  },
  
];

const filterTypes = ["All", "React", "Full-Stack", "Firebase"];

function Projects() {
  const [filter, setFilter] = useState("All");

  // Filter projects based on selected type
  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter(proj => proj.type === filter);

  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 md:px-12 min-h-screen" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Heading with typing animation */}
        <h2 className="text-4xl font-extrabold mb-12 text-center flex items-center justify-center gap-4">
          <TypeAnimation
            sequence={[
              "My Projects", 1500,
              "Showcasing My Work", 1500,
              "Built With Passion", 1500,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className="text-blue-400"
          />
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          {filterTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-lg font-semibold transition 
                ${
                  filter === type
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-blue-700 hover:text-white"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map(({ id, name, description, tech, github, live }) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.7)" }}
              className="bg-[#1e293b] rounded-xl p-6 flex flex-col justify-between shadow-md"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">{name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {tech.map(t => (
                    <span
                      key={t}
                      className="bg-blue-700 text-blue-300 px-3 py-1 rounded-full text-sm font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                  aria-label={`GitHub link for ${name}`}
                >
                  <FaGithub size={20} /> GitHub
                </a>
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                  aria-label={`Live demo link for ${name}`}
                >
                  <FaExternalLinkAlt size={18} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
