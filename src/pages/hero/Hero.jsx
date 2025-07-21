// src/pages/Home/Hero.jsx
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import Swal from "sweetalert2";
import jerinImg from "../../assets/jerin.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const handleHireClick = () => {
    Swal.fire({
      title: 'Thanks for your interest!',
      text: 'You can contact me at: jerin@example.com',
      icon: 'success',
    });
  };

  return (
    <section className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Image */}
        <motion.div
          animate={{ x: [0, -10, 0, 10, 0], y: [0, -10, 0, 10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-center md:text-left"
        >
          <img
            src={jerinImg}
            alt="Jerin"
            className="rounded w-60 h-90 object-cover mx-auto md:mx-0 shadow-lg"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Jerin</span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1500,
              "Passionate Problem Solver",
              1500,
              "Full-Stack Web Developer",
              1500,
              "React & Node.js Enthusiast",
              1500,
              "Clean Code Lover",
              1500,
              "Eager to Learn & Grow",
              1500,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-2xl font-semibold mb-6 text-gray-300 min-h-[30px]"
          />

          <p className="text-gray-400 mb-6 font-medium">
            I build dynamic web applications using the MERN stack.
          </p>

          <div className="flex gap-4 flex-wrap">
            {/* Gmail Compose Link */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=jerinjerin101325@gmail.com&su=Hiring%20Opportunity&body=Hi%20Jerin,"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              <BsEnvelope /> Hire Me
            </a>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download="jerin-resume.pdf"
              className="flex items-center gap-2 px-5 py-3 border border-gray-400 hover:border-white rounded-lg transition"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
