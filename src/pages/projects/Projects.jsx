import { Link } from "react-router";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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

function Projects() {
  return (
    <section
      className="relative bg-[#0f172a] text-white py-16 px-6 md:px-12 min-h-screen"
      id="projects"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="bg-[#1e293b] border-2 border-cyan-300/30 rounded-xl overflow-hidden shadow-lg 
              hover:shadow-[0_8px_30px_rgba(0,255,255,0.3)] hover:border-cyan-400 
              transition duration-300 flex flex-col">
              
              {/* Image with gradient overlay */}
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
