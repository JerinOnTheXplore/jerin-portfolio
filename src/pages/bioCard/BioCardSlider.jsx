import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCode, FaBolt, FaPuzzlePiece } from "react-icons/fa";

const bios = [
  {
    id: 1,
    content: (
      <p className="text-2xl md:text-3xl leading-relaxed font-medium tracking-wide">
        I’m <span className="font-bold text-blue-400">Jerin</span> — A self-motivated MERN Stack Developer with hands-on experience building real-world full-stack projects.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p className="text-3xl text-gray-300 italic">
        <FaGraduationCap className="inline text-pink-400 mr-2" />
        Completing my B.Sc. in Food & Nutrition. My curiosity for tech sparked a self-taught coding journey.
      </p>
    ),
  },
  {
    id: 3,
    content: (
      <p className="text-3xl text-cyan-300">
        <FaCode className="inline mr-2 text-cyan-400" />
        Built full-stack MERN apps with clean and scalable code.
      </p>
    ),
  },
  {
    id: 4,
    content: (
      <p className="text-3xl text-blue-300">
        <FaBolt className="inline mr-2 text-blue-400" />
        Passionate about solving problems and learning new tools.
      </p>
    ),
  },
  {
    id: 5,
    content: (
      <p className="text-3xl text-purple-300">
        <FaPuzzlePiece className="inline mr-2 text-purple-400" />
        Love balancing creativity and logic in functional UI design.
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
      className="relative w-full max-w-xl h-[360px] md:h-[420px] mx-auto overflow-visible cursor-pointer perspective"
      onClick={nextCard}
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
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-50">
        {bios.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === activeIndex
              ? "bg-cyan-400 scale-125"
              : "bg-cyan-700/40"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BioCardSlider;
