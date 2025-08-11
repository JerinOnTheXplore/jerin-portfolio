import { useParams, Link } from "react-router";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJsonwebtokens, SiExpress } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    name: "Tourism Flow",
    image: "https://i.ibb.co.com/M59YHbmS/tour.png",
    tech: ["React", "Express", "MongoDB", "TailwindCSS"],
    description:
      "A full-stack tourism management system featuring booking, user roles, and admin controls.",
    github: "https://github.com/JerinOnTheXplore/tourism-client",
    live: "https://tourism-flow.web.app",
    challenges:
      "Implementing secure booking and payment logic while keeping UI responsive.",
    improvements:
      "Integrating AI-based travel recommendations and multi-language support.",
  },
  {
    id: 2,
    name: "Online Group Study",
    image: "https://i.ibb.co.com/KzRHd0v8/online.png",
    tech: ["React", "Express", "MongoDB", "JWT"],
    description:
      "MERN stack platform for group assignments, submission, and grading with JWT auth.",
    github: "https://github.com/JerinOnTheXplore/online-group-study-client",
    live: "https://online-group-study-e3eaf.web.app",
    challenges:
      "Building real-time collaboration and secure role-based access control.",
    improvements:
      "Adding video conferencing and AI-assisted grading system.",
  },
  {
    id: 3,
    name: "Plant Care Tracker",
    image: "https://i.ibb.co.com/4wNjckTQ/plant.png",
    tech: ["React", "Express", "MongoDB"],
    description:
      "Full CRUD plant care tracker built with React and Express, with personalized plant management.",
    github: "https://github.com/JerinOnTheXplore/plant-care-tracker-client",
    live: "https://plant-care-tracker-80dfe.web.app",
    challenges:
      "Handling dynamic reminders and syncing across devices.",
    improvements:
      "Adding plant disease detection via image recognition.",
  },
];

// Mapping tech names to icons
const techIcons = {
  React: <FaReact className="text-cyan-400" size={22} />,
  Express: <SiExpress className="text-gray-300" size={22} />,
  MongoDB: <SiMongodb className="text-green-500" size={22} />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" size={22} />,
  JWT: <SiJsonwebtokens className="text-yellow-400" size={22} />,
};

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="text-blue-400 hover:underline mb-6 block">
          ← Back to Projects
        </Link>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-xl mb-8 border border-cyan-300/30"
        />
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Main Technology Stack */}
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          Main Technology Stack Used
        </h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {project.tech.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 px-3 py-2 bg-[#1e293b] rounded-lg border border-cyan-300/20"
            >
              {techIcons[tech]} <span>{tech}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
          Challenges Faced
        </h3>
        <p className="text-gray-300 mb-6">{project.challenges}</p>

        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
          Potential Improvements
        </h3>
        <p className="text-gray-300 mb-6">{project.improvements}</p>

        <div className="flex gap-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
          >
            <FaExternalLinkAlt size={18} /> Live Site
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
