import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiJsonwebtokens,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 animate-spin-slow" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-blue-300" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-20 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 flex items-center justify-center gap-3"
        >
          <FaTools className="text-green-400 text-4xl" /> Skills Overview
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] border border-gray-700 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-cyan-300">
                {category.title}
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 bg-[#334155] hover:bg-[#475569] transition-colors duration-300 px-4 py-3 rounded-xl text-lg"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
