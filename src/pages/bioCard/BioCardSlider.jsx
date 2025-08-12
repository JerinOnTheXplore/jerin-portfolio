import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCode, FaBolt, FaPuzzlePiece } from "react-icons/fa";

const bios = [
  {
    id: 1,
    content: (
      <p className="text-xl md:text-3xl  leading-relaxed  tracking-wide">
        I’m a passionate <span className="font-bold text-blue-400">Frontend Developer</span> with a growing interest in full-stack development. I love turning ideas into interactive, visually appealing, and functional web experiences that create real impact.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p className="text-xl  md:text-3xl text-gray-300  flex items-center">
        <FaGraduationCap className="inline mr-3 text-pink-400" />
        Currently pursuing my B.Sc. in Food and Nutrition, I bring a unique blend of creativity, discipline, and analytical thinking from my academic background into my tech journey.
      </p>
    ),
  },
  {
    id: 3,
    content: (
      <p className="text-xl md:text-3xl text-cyan-300 flex items-center">
        <FaCode className="inline mr-3 text-cyan-400" />
        My coding journey began unexpectedly as a casual curiosity, watching YouTube tutorials and building small projects. Over time, it evolved into a deep passion for creating scalable, maintainable, and user-focused applications.
      </p>
    ),
  },
  {
    id: 4,
    content: (
      <p className="text-xl md:text-3xl text-blue-300 flex items-center">
        <FaBolt className="inline mr-3 text-blue-400" />
        I enjoy working on modern, responsive UIs, problem-solving through code, and experimenting with new tools and technologies that challenge my skills and creativity.
      </p>
    ),
  },
  {
    id: 5,
    content: (
      <p className="text-xl md:text-3xl text-purple-300 flex items-center">
        <FaPuzzlePiece className="inline mr-3 text-purple-400" />
        Outside of programming, I love journaling and scrapbooking — activities that let me capture memories, express creativity, and reflect on personal growth. This balance between logic and artistry defines my personality both in and out of tech.
      </p>
    ),
  },
];


const layeredStyles = [
  "translate-y-6 rotate-[-4deg] scale-95",
  "translate-y-12 rotate-[5deg] scale-90",
  "translate-y-16 rotate-[-6deg] scale-85",
];

const BioCardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % bios.length);
  };

  return (
    <div
      className="relative w-full max-w-7xl h-[360px] md:h-[420px] mx-auto overflow-visible cursor-pointer perspective select-none"
      onClick={nextCard}
      aria-label="Click to view next bio card"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          nextCard();
        }
      }}
    >
      {/* Background layered cards */}
      {bios.slice(activeIndex + 1, activeIndex + 4).map((bio, idx) => (
        <div
          key={bio.id}
          className={`absolute top-0 left-0 w-full h-full p-6 md:p-8 rounded-2xl bg-[#0f172a]/40 backdrop-blur-md border border-cyan-300/20 shadow-cyan-300/10 shadow-xl transition-all duration-500 ease-in-out text-gray-200 pointer-events-none ${layeredStyles[idx]} z-${idx}`}
        >
          {bio.content}
        </div>
      ))}

      {/* Active Card with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bios[activeIndex].id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="absolute top-0 left-0 w-full h-full p-6 md:p-8 rounded-2xl bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-300/30 ring-1 ring-cyan-400/10 shadow-cyan-400/20 shadow-2xl text-gray-100 z-40"
        >
          {bios[activeIndex].content}
            {/* Click instruction */}
      <p className="absolute bottom-2 w-full text-center text-cyan-300 text-sm select-none opacity-80">
        Click on the card to see the next →
      </p>
        </motion.div>
          {/* Click instruction */}
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-10 w-full flex justify-center gap-2 z-50">
        {bios.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-cyan-400 scale-125" : "bg-cyan-700/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BioCardSlider;
