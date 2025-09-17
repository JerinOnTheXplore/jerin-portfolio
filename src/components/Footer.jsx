import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white  pb-6 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-cyan-800 pt-6">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-semibold text-cyan-300">Mst. Nasrin Howlader Jerin</h2>
          <p className="text-sm text-gray-400 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-6 text-2xl"
        >
          <a
            href="https://github.com/JerinOnTheXplore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:drop-shadow-[0_0_6px_cyan]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nasrinjerin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:drop-shadow-[0_0_6px_cyan]"
          >
            <FaLinkedin />
          </a>
          <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Hiring%20Opportunity&body=Hi%20Jerin%2C%0D%0A%0D%0AWe%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white underline transition duration-300"
            >
              <FaEnvelope />
            </a>
        </motion.div>

        {/* Back to Top */}
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="group flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="text-sm">Back to Top</span>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
