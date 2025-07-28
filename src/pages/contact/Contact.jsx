// src/pages/Contact/Contact.jsx
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white py-36 px-4 md:px-12 min-h-screen"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-10 flex items-center justify-center gap-3"
        >
          <FaEnvelope className="text-pink-400" /> Contact Me
        </motion.h2>

        {/* Message & Email */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 text-lg text-gray-300"
        >
          I'm open to freelance work, internships, or full-time job
          opportunities. Let’s collaborate!
          <br />
          📧 You can reach me at:
          <br />
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Job%20Inquiry%20-%20Jerin"
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 underline hover:text-white transition duration-300"
>
  jerinjerin101325@gmail.com
</a>

        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 text-3xl mt-10"
        >
          <a
            href="https://github.com/JerinOnTheXplore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jerinakter" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/169YLTLZjP/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
