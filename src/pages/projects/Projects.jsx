import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

// Floating code snippets
const floatingSnippets = [
  { text: "<section>", top: "12%", left: "8%" },
  { text: "handleClick()", top: "22%", left: "78%" },
  { text: "const [state]", top: "68%", left: "5%" },
  { text: "if (error)", top: "35%", left: "85%" },
  { text: "<motion.div>", top: "50%", left: "20%" },
  { text: "useContext()", top: "74%", left: "35%" },
  { text: "props.children", top: "20%", left: "60%" },
  { text: "import React", top: "10%", left: "45%" },
  { text: "try { ... }", top: "65%", left: "80%" },
  { text: "setIndex(i)", top: "40%", left: "12%" },
  { text: "<Outlet />", top: "80%", left: "90%" },
  { text: "key={project.id}", top: "28%", left: "72%" },
  { text: "useSwipeable()", top: "55%", left: "48%" },
];

const projectsData = [
  {
    id: 1,
    name: "Tourism Flow",
    description:
      "A full-stack tourism management system with React, Express, and MongoDB, featuring booking, user roles, and admin controls.",
    tech: ["React", "Express", "MongoDB", "TailwindCSS"],
    type: "Full-Stack",
    github: "https://github.com/yourusername/tourism-flow",
    live: "https://tourism-flow.web.app",
  },
  {
    id: 2,
    name: "Lawyer Booking App",
    description:
      "A dynamic booking app to schedule lawyer appointments, built with React and localStorage for state management.",
    tech: ["React", "LocalStorage", "Recharts"],
    type: "React",
    github: "https://github.com/yourusername/lawyer-booking",
    live: "https://incomparable-kringle-d13bb3.netlify.app/",
  },
  {
    id: 3,
    name: "Subscription Box Platform",
    description:
      "Subscription service platform for tech accessories with Firebase authentication and protected routes.",
    tech: ["React", "Firebase", "TailwindCSS"],
    type: "Firebase",
    github: "https://github.com/yourusername/subscription-box",
    live: "https://byte-box-service.web.app",
  },
  {
    id: 4,
    name: "Plant Care Tracker",
    description:
      "Full CRUD plant care tracker built with React and Express, featuring responsive design and personalized plant management.",
    tech: ["React", "Express", "MongoDB"],
    type: "Full-Stack",
    github: "https://github.com/yourusername/plant-care-tracker",
    live: "https://plant-care-tracker-80dfe.web.app",
  },
  {
    id: 5,
    name: "Online Group Study",
    description:
      "A MERN stack platform for group assignments, submission, and grading with JWT auth and dynamic routing.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    type: "Full-Stack",
    github: "https://github.com/yourusername/online-group-study",
    live: "https://online-group-study-e3eaf.web.app",
  },
];

const layeredStyles = [
  "translate-y-6 rotate-[-10deg] scale-95",
  "translate-y-12 rotate-[0deg] scale-90",
  "translate-y-16 rotate-[-14deg] scale-85",
];

function Projects() {
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % projectsData.length),
    onSwipedRight: () =>
      setIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length),
    preventScrollOnSwipe: true,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <section
      className="relative bg-[#0f172a] text-white py-16 px-6 md:px-12 min-h-screen overflow-hidden"
      id="projects"
    >
      {/* Floating Code Snippets */}
      {floatingSnippets.map((snippet, idx) => (
        <motion.div
          key={idx}
          className="absolute text-sm md:text-xl text-cyan-400 font-mono opacity-20 hover:opacity-50 transition duration-300 pointer-events-none"
          style={{
            top: snippet.top,
            left: snippet.left,
            whiteSpace: "nowrap",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1, delay: idx * 0.1 }}
        >
          {snippet.text}
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-12 md:mb-30">
          <TypeAnimation
            sequence={[
              "My Coding Journey",
              1500,
              "My Projects",
              1500,
              "Showcasing My Work",
              1500,
              "What I’ve Built So Far",
              1500,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className="text-blue-400"
          />
        </h2>

        {/* Swipeable Carousel */}
        <div
          {...swipeHandlers}
          className="relative w-full max-w-xl h-[460px] mx-auto cursor-grab touch-pan-y"
        >
          {/* Background Cards */}
          {projectsData.slice(index + 1, index + 4).map((project, idx) => (
            <div
              key={project.id}
              className={`absolute top-0 left-0 w-full h-full p-6 md:p-8 rounded-2xl bg-[#1e293b]/40 backdrop-blur-md border border-cyan-300/20 shadow-cyan-300/10 shadow-xl text-gray-200 pointer-events-none transition-all duration-500 ease-in-out ${layeredStyles[idx]} z-${idx}`}
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-400 text-sm">{project.type}</p>
            </div>
          ))}

          {/* Main Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={projectsData[index].id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-0 w-full h-full p-6 md:p-8 rounded-2xl bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-300/30 ring-1 ring-cyan-400/10 shadow-cyan-400/20 shadow-xl text-gray-100 z-40"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {projectsData[index].name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    {projectsData[index].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {projectsData[index].tech.map((t) => (
                      <span
                        key={t}
                        className="bg-blue-400 text-gray-900 px-3 py-1 rounded text-sm font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-6">
                  <a
                    href={projectsData[index].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                  >
                    <FaGithub size={20} /> GitHub
                  </a>
                  <a
                    href={projectsData[index].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                  >
                    <FaExternalLinkAlt size={18} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Swipe Direction Hint */}
        <div className="mt-20 text-sm text-gray-400">
          <span className="hidden sm:inline-block">← Swipe to view more →</span>
          <span className="sm:hidden">⇄ Swipe left/right</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
