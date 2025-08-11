import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaTools,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb,
  SiFirebase, SiPostman, SiVercel, SiNetlify, SiJsonwebtokens
} from "react-icons/si";

const floatingVariants = {
  float: {
    y: [0, -15, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

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
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-blue-300" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] py-20 px-4 md:px-12 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-14 flex items-center justify-center gap-3 text-blue-400"
        >
          <FaTools className="text-blue-400 text-3xl drop-shadow-glow" />
          <span className="text-blue-400 text-3xl">Skills Overview</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 items-stretch mt-2">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.35}
                glareColor="#22d3ee"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.03}
                className="rounded-3xl h-full"
              >
                <div className="relative z-10 bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 transition-transform duration-500
                  shadow-[10px_10px_0px_#164e63]
                  group-hover:shadow-[0_0_40px_#22d3ee66]
                  group-hover:-translate-y-3
                  flex flex-col justify-between min-h-[400px] h-full"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-center text-cyan-300 drop-shadow-glow">
                      {category.title}
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {category.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4 bg-[#334155]/50 hover:bg-[#475569]/60 transition-colors duration-300 px-4 py-3 rounded-xl text-lg shadow-md hover:shadow-[0_0_15px_#22d3eeaa]"
                        >
                          <span className="text-2xl">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <motion.div variants={floatingVariants} animate="float" className="absolute top-10 left-10 text-orange-500 opacity-20 text-6xl z-0">
        <FaHtml5 />
      </motion.div>
      <motion.div variants={floatingVariants} animate="float" style={{ animationDelay: "1.5s" }} className="absolute top-40 right-20 text-blue-500 opacity-20 text-5xl z-0">
        <FaCss3Alt />
      </motion.div>
      <motion.div variants={floatingVariants} animate="float" style={{ animationDelay: "3s" }} className="absolute bottom-20 left-24 text-yellow-300 opacity-20 text-6xl z-0">
        <SiJavascript />
      </motion.div>
      <motion.div variants={floatingVariants} animate="float" style={{ animationDelay: "2s" }} className="absolute top-52 left-1/2 text-cyan-400 opacity-20 text-6xl z-0">
        <FaReact />
      </motion.div>
      <motion.div variants={floatingVariants} animate="float" style={{ animationDelay: "4s" }} className="absolute bottom-40 right-40 text-green-600 opacity-20 text-6xl z-0">
        <FaNodeJs />
      </motion.div>
      <motion.div variants={floatingVariants} animate="float" style={{ animationDelay: "2.5s" }} className="absolute top-1/3 right-10 text-green-400 opacity-20 text-6xl z-0">
        <SiMongodb />
      </motion.div>
      <motion.div variants={floatingVariants} animate="float" style={{ animationDelay: "5s" }} className="absolute bottom-10 left-1/3 text-red-500 opacity-20 text-5xl z-0">
        <FaGitAlt />
      </motion.div>
    </section>
  );
};

export default Skills;
