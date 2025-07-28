import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaBootstrap,
  FaLaptopCode, FaGraduationCap, FaRocket
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiJavascript
} from "react-icons/si";
import { Tooltip } from 'react-tooltip';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import BioCardSlider from "../bioCard/BioCardSlider";

function About() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const headingControls = useAnimation();
  const cardControls = useAnimation();
  const techControls = useAnimation();

  useEffect(() => {
    if (inView) {
      headingControls.start({ opacity: 1, y: 0 });
      cardControls.start({ opacity: 1, y: 0 });
      techControls.start({ opacity: 1, y: 0 });
    } else {
      headingControls.start({ opacity: 0, y: -30 });
      cardControls.start({ opacity: 0, y: 40 });
      techControls.start({ opacity: 0, y: 50 });
    }
  }, [inView]);

  const techs = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 animate-spin-slow" />, name: "React" },
    { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <FaBootstrap className="text-purple-500" />, name: "Bootstrap" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
  ];

  const floatingSnippets = [
  { text: "<div>", top: "20%", left: "5%" },
  { text: "function()", top: "50%", left: "80%" },
  { text: "{...}", top: "75%", left: "10%" },
  { text: "</>", top: "30%", left: "90%" },
  { text: "=>", top: "60%", left: "40%" },
  { text: "console.log()", top: "15%", left: "60%" },
  { text: "useState()", top: "70%", left: "25%" },
  { text: "return ()", top: "35%", left: "15%" },
  { text: "const x = 10;", top: "45%", left: "70%" },
  { text: "<React.Fragment>", top: "80%", left: "85%" },
  { text: "export default", top: "10%", left: "30%" },
  { text: "map()", top: "65%", left: "50%" },
  { text: "<Route />", top: "40%", left: "90%" },
  { text: "await fetch()", top: "55%", left: "20%" },
  { text: "useEffect(() => {})", top: "25%", left: "75%" },
];


  return (
    <section
      ref={ref}
      className="relative bg-[#0f172a] text-white py-20 px-4 md:px-10 min-h-screen overflow-hidden"
      id="about"
    >
      {/* Floating code decorations */}
      {floatingSnippets.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute text-white/10 text-xl font-mono select-none"
          style={{ top: item.top, left: item.left }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6 + idx, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.text}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          animate={headingControls}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-12 text-center flex items-center justify-center gap-3"
        >
          <FaLaptopCode className="text-blue-400 text-4xl" />
          <span className="text-blue-400">About Me</span>
        </motion.h2>

        {/* Bio Card */}
        <BioCardSlider></BioCardSlider>

        {/* Tech Stack */}
        <motion.div
          animate={techControls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-30"
        >
          <h3 className="text-xl md:text-2xl mt-10 font-semibold text-center mb-10 flex items-center justify-center gap-2">
            <FaRocket className="text-green-400" />
            <TypeAnimation
              sequence={[
                "Technologies I Use", 1500,
                "My Stack ", 1500,
                "What I Use", 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </h3>

          {/* Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 justify-items-center mt-24">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center transition duration-300 transform hover:scale-110"
                data-tooltip-id={`tooltip-${index}`}
                data-tooltip-content={tech.name}
              >
                <div className="text-5xl p-4 rounded-xl shadow-lg bg-[#1e293b] group-hover:shadow-[0_0_20px_#3b82f6] transition duration-300">
                  {tech.icon}
                </div>
                <Tooltip
                  id={`tooltip-${index}`}
                  className="z-50 bg-black text-white text-xs px-2 py-1 rounded"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
