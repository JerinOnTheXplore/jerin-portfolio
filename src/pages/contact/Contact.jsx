import { FaEnvelope, FaPhone, FaWhatsapp, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const floatingVariants = {
  float: {
    y: [0, -15, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white py-36 px-4 md:px-12 min-h-screen relative z-0 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl  font-bold mb-10 flex items-center justify-center gap-3 text-blue-400"
        >
          <FaEnvelope className="text-blue-400 text-3xl" /> <span className="text-blue-400 text-3xl">Let’s Connect</span>
        </motion.h2>

        {/* Contact Card with Glassmorphism & Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-[0_0_25px_#22d3eeaa] border border-cyan-400/50 p-8 space-y-6 relative text-left
            transition-shadow duration-500
            hover:shadow-[0_0_35px_#22d3eeff,0_0_50px_#22d3eeaa] "
        >
          {/* Floating icons inside card */}
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="absolute top-4 left-6 text-cyan-400 opacity-30 text-3xl pointer-events-none select-none"
            aria-hidden="true"
          >
            <FaEnvelope />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: "1.7s" }}
            className="absolute top-16 right-10 text-green-400 opacity-20 text-4xl pointer-events-none select-none"
            aria-hidden="true"
          >
            <FaPhone />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: "3.5s" }}
            className="absolute bottom-10 left-20 text-green-500 opacity-25 text-5xl pointer-events-none select-none"
            aria-hidden="true"
          >
            <FaWhatsapp />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: "2.3s" }}
            className="absolute bottom-14 right-14 text-blue-500 opacity-15 text-6xl pointer-events-none select-none"
            aria-hidden="true"
          >
            <FaFacebook />
          </motion.div>

          {/* Actual content */}
          <p className="text-lg text-gray-300 relative z-10">
            I'm open to remote work or internship opportunities. <br />
            <span className="text-cyan-400 font-medium">Let’s build something amazing together!</span>
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-300 text-base relative z-10">
            <FaEnvelope className="text-cyan-400 text-xl" />
            <span> Email: </span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Hiring%20Opportunity&body=Hi%20Jerin%2C%0D%0A%0D%0AWe%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white underline transition duration-300"
            >
              jerinjerin101325@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-gray-300 text-base relative z-10">
            <FaPhone className="text-green-400 text-xl" />
            <span> Phone: </span>
            <a
              href="tel:+8801234567890"
              className="text-cyan-400 hover:text-white underline transition duration-300"
            >
              +8801869659491
            </a>
          </div>

          {/* WhatsApp (Optional) */}
          <div className="flex items-center gap-3 text-gray-300 text-base relative z-10">
            <FaWhatsapp className="text-green-500 text-xl" />
            <span> WhatsApp: </span>
            <a
              href="https://wa.me/8801869659491"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white underline transition duration-300"
            >
              +8801869659491
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 text-3xl mt-6 relative z-10">
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
              href="https://www.linkedin.com/in/nasrinjerin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Soft Glow Background Effect */}
      <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] bg-cyan-300 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -top-20 -right-10 w-[200px] h-[200px] bg-cyan-400 opacity-10 blur-2xl rounded-full z-0"></div>

      {/* Floating icons outside card */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-10 left-10 text-cyan-400 opacity-30 text-5xl z-0 pointer-events-none"
        aria-hidden="true"
      >
        <FaEnvelope />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "1.5s" }}
        className="absolute top-20 right-16 text-green-400 opacity-20 text-4xl z-0 pointer-events-none"
        aria-hidden="true"
      >
        <FaPhone />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "3s" }}
        className="absolute bottom-28 left-24 text-green-500 opacity-20 text-6xl z-0 pointer-events-none"
        aria-hidden="true"
      >
        <FaWhatsapp />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-40 right-20 text-blue-500 opacity-10 text-7xl z-0 pointer-events-none"
        aria-hidden="true"
      >
        <FaFacebook />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "4s" }}
        className="absolute top-36 left-48 text-gray-400 opacity-20 text-5xl z-0 pointer-events-none"
        aria-hidden="true"
      >
        <FaGithub />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: "2.5s" }}
        className="absolute bottom-16 right-48 text-cyan-400 opacity-20 text-6xl z-0 pointer-events-none"
        aria-hidden="true"
      >
        <FaLinkedin />
      </motion.div>
    </section>
  );
};

export default Contact;
