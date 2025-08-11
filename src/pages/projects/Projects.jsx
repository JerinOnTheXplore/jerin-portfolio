import { Link } from "react-router";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    name: "Tourism Flow",
    image: "https://i.ibb.co.com/M59YHbmS/tour.png",
    description:
      "A full-stack tourism management system featuring booking, user roles, and admin controls.",
    tech: ["React", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/JerinOnTheXplore/tourism-client",
    live: "https://tourism-flow.web.app",
  },
  {
    id: 2,
    name: "Online Group Study",
    image: "https://i.ibb.co.com/KzRHd0v8/online.png",
    description:
      "MERN stack platform for group assignments, submission, and grading with JWT auth.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/JerinOnTheXplore/online-group-study-client",
    live: "https://online-group-study-e3eaf.web.app",
  },
  {
    id: 3,
    name: "Plant Care Tracker",
    image: "https://i.ibb.co.com/4wNjckTQ/plant.png",
    description:
      "Full CRUD plant care tracker built with React and Express, with personalized plant management.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/JerinOnTheXplore/plant-care-tracker-client",
    live: "https://plant-care-tracker-80dfe.web.app",
  },
];

const floatingVariants = {
  float: {
    y: [0, -20, 0],
    rotate: [0, 8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

function Projects() {
  return (
    <section
      className="relative bg-[#0f172a] text-white py-16 px-6 md:px-48 min-h-screen overflow-hidden"
      id="projects"
    >
      {/* Floating tech icons background */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 left-10 text-cyan-400 opacity-10 text-7xl z-0 pointer-events-none"
      >
        <FaReact />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "1.5s" }}
        className="absolute bottom-32 right-20 text-green-500 opacity-10 text-7xl z-0 pointer-events-none"
      >
        <FaNodeJs />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "3s" }}
        className="absolute top-40 right-48 text-emerald-400 opacity-10 text-6xl z-0 pointer-events-none"
      >
        <SiMongodb />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "2s" }}
        className="absolute top-10 right-1/3 text-sky-400 opacity-10 text-6xl z-0 pointer-events-none"
      >
        <SiTailwindcss />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "4s" }}
        className="absolute bottom-16 left-1/4 text-gray-300 opacity-10 text-5xl z-0 pointer-events-none"
      >
        <FaGithub />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "2.8s" }}
        className="absolute bottom-1/3 left-10 text-gray-400 opacity-10 text-5xl z-0 pointer-events-none"
      >
        <SiExpress />
      </motion.div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h2 className=" text-3xl font-bold">
          <TypeAnimation
            sequence={[
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
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 items-stretch gap-8 relative z-10">
        {projectsData.map((project) => (
          <Tilt
            key={project.id}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#00ffff"
            glarePosition="all"
            scale={1.01}
            transitionSpeed={800}
          >
            <div className="bg-[#1e293b] border-2 border-cyan-300/30 rounded-lg overflow-hidden shadow-lg 
              hover:shadow-[0_8px_30px_rgba(0,255,255,0.3)] hover:border-cyan-400 
              transition duration-300 flex flex-col min-h-[400px] h-full">
              
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold tracking-wide mb-2 text-cyan-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-auto">
                  <Link
                    to={`/projects/${project.id}`}
                    className="px-3 py-1 rounded bg-blue-500/10 border border-blue-400 text-blue-400 
                      hover:bg-blue-500 hover:text-white transition text-sm"
                  >
                    View Details
                  </Link>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Projects;
