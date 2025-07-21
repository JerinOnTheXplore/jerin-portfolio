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

  return (
    <section
      ref={ref}
      className="bg-[#0f172a] text-white py-16 px-4 md:px-10 min-h-screen"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          animate={headingControls}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-10 text-center flex items-center justify-center gap-3 text-white"
        >
          <FaLaptopCode className="text-blue-400 text-4xl" />
          About Me
        </motion.h2>

        {/* Bio Card */}
        <motion.div
          animate={cardControls}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1e293b] p-6 md:p-8 rounded-2xl shadow-xl text-gray-200 space-y-4"
        >
          <p className="text-lg leading-relaxed tracking-wide">
            I’m <span className="font-semibold text-blue-400">Jerin</span> — a self-motivated developer from a Nutrition background.
            My programming journey began as a hobby, but it soon turned into a passion.
            I’ve built real-world projects and gained experience in full-stack development.
          </p>

          <p className="text-base italic text-gray-400 flex items-center gap-2">
            <FaGraduationCap className="text-pink-400" />
            Currently pursuing B.Sc. in Food & Nutrition • Passionate about tech & creative problem solving.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          animate={techControls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-8 flex items-center justify-center gap-2">
            <FaRocket className="text-green-400" />
            <TypeAnimation
              sequence={[
                "Technologies I Use", 1500,
                "Frontend & Backend Tools", 1500,
                "Modern Web Development", 1500,
                "Creative & Efficient", 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                data-tooltip-id={`tooltip-${index}`}
                data-tooltip-content={tech.name}
              >
                <div className="text-4xl">{tech.icon}</div>
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
