// src/pages/Contact/Contact.jsx
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"

      className="bg-[#0f172a] text-white py-36 px-4 md:px-12 min-h-screen relative z-0 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-10 flex items-center justify-center gap-3 text-white"
        >
          <FaEnvelope className="text-blue-400" /> Let’s Connect
        </motion.h2>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-500 p-8 space-y-6 relative"
        >
          <p className="text-lg text-gray-300">
            I'm open to remote work or internship opportunities. <br />
            <span className="text-blue-400 font-medium">Let’s build something amazing together!</span>
          </p>

          <p className="text-base text-gray-400">
            📧 Email me at:
            <br />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Job%20Inquiry%20-%20Jerin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-cyan-400 hover:text-white underline transition duration-300"
            >
              jerinjerin101325@gmail.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 text-3xl mt-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://github.com/JerinOnTheXplore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://linkedin.com/in/jerinakter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.facebook.com/share/169YLTLZjP/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Soft Glow Background Effect */}
      <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] bg-cyan-300 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -top-20 -right-10 w-[200px] h-[200px] bg-cyan-400 opacity-10 blur-2xl rounded-full z-0"></div>
    </section>
  );
};

export default Contact;
