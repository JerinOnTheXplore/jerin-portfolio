import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import jerinImg from "../../assets/jerin.png";
import ProfileCard from "../portfolioCard/ProfileCard";

const floatingItems = [
  // Repeated with variations
  ...Array.from({ length: 25 }, (_, i) => {
    const symbols = [
      "{ }", "<>", "();", "const", "=>", "<JSX />", "</>", "let", "return", "===", "function", "if()", "for()", "React", "Node.js"
    ];
    const styles = [
      "text-cyan-400", "text-purple-400", "text-blue-400", "text-blue-300", "text-purple-300", "text-cyan-300"
    ];
    const sizes = ["text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl"];
    const opacity = ["opacity-10", "opacity-15", "opacity-20", "opacity-25"];
    const text = symbols[i % symbols.length];
    const style = `${styles[i % styles.length]} ${sizes[i % sizes.length]} font-mono ${opacity[i % opacity.length]}`;
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const delay = (Math.random() * 4).toFixed(2);

    return { text, style, x, y, delay: parseFloat(delay) };
  }),
];

function Hero() {
  return (
    <section className="relative bg-[#0f172a] text-white min-h-screen flex items-center px-4 overflow-hidden">
      {/* Floating background code snippets */}
      {floatingItems.map(({ text, style, x, y, delay }, i) => (
        <motion.div
          key={i}
          initial={{ y }}
          animate={{ y: y + 10 }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay,
          }}
          className={`pointer-events-none absolute select-none ${style}`}
          style={{
            left: `${x}vw`,
            top: `${y}vh`,
          }}
        >
          {text}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:items-center py-36 md:py-20 relative z-10">
        {/* Image Section */}
        <ProfileCard></ProfileCard>

        {/* Text Section */}
        <Fade direction="right" triggerOnce>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm <span>Jerin</span>
            </h1>

            <TypeAnimation
              sequence={[
                "Aspiring MERN Stack Developer",
                1500,
                "Self-Taught Web Developer",
                1500,
                "React & Node.js Enthusiast",
                1500,
                "MongoDB & Express.js Explorer",
                1500,
                "Passionate About Building Real Projects",
                1500,
                "Learning, Improving & Growing Everyday",
                1500,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-2xl font-semibold mb-6 text-cyan-300 min-h-[30px]"
            />

            {/* Glowing Code Snippet */}
            <div
              className="mt-4 mb-6 font-mono text-cyan-400 text-lg select-none"
              style={{
                textShadow:
                  "0 0 6px #22d3ee, 0 0 12px #22d3ee, 0 0 24px #22d3ee, 0 0 48px #3b82f6",
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
                  <span className="block">const jerin = () =&gt; &#123;</span>
                  <span className="block ml-5">return "MERN Stack Learner | Turning Ideas into Code";</span>
                  <span className="block">&#125;;</span>
                  <span
                    className="block mt-1"
                    style={{
                      animation: "blink 1.2s step-start infinite",
                    }}
                  >
                    |
                  </span>
                </code>
              </pre>
            </div>

            <p className="text-gray-300 mb-8 text-lg font-medium leading-relaxed">
              I’ve built several dynamic web apps using the MERN stack during my learning journey.
            </p>

            <div className="flex gap-6 flex-wrap justify-center md:justify-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Hiring%20Opportunity&body=Hi%20Jerin%2C%0D%0A%0D%0AWe%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded transition-transform transform hover:scale-105 shadow-lg font-semibold"
              >
                <BsEnvelope className="text-lg" /> Hire Me
              </a>

              <a
                href="/resume.pdf"
                download="jerin-resume.pdf"
                className="flex items-center gap-3 px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:text-white hover:border-white rounded-full transition-transform transform hover:scale-105 shadow-md font-semibold"
              >
                <FaDownload className="text-lg" /> Download Resume
              </a>
            </div>
          </motion.div>
        </Fade>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            50.1%, 100% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
