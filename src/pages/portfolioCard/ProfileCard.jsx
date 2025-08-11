import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jerinImg from "../../assets/jerin.png";

const codeSnippets = [
  `const jerin = "Frontend Developer";`,
  `const field = "Coding & Applied Nutrition";`,
  `const skills = ["React", "MongoDB","Express.JS", "Node.JS"];`,
  `const hobby = "Journaling + Scrapbooking";`,
  `const dream = "Becoming a Full Stack Developer";`,
];

const layeredStyles = [
  "translate-y-6 rotate-[-4deg] scale-95",
  "translate-y-12 rotate-[5deg] scale-90",
  "translate-y-16 rotate-[-6deg] scale-85",
];

const ProfileCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (codeSnippets.length + 1)); // +1 for initial image only slide
  };

  // For background layers, we need 3 layers after activeIndex
  // but if activeIndex = 0 (image only), background layers should be codeSnippets[0,1,2]
  // else codeSnippets starting from activeIndex (excluding activeIndex itself)

  const backgroundIndices = [];

  if (activeIndex === 0) {
    // first slide (image only), show first 3 codeSnippets as background
    backgroundIndices.push(0, 1, 2);
  } else {
    // slide activeIndex -1 based on codeSnippets array
    // for background, take next 3 indices cycling through codeSnippets length
    for (let i = 1; i <= 3; i++) {
      backgroundIndices.push((activeIndex - 1 + i) % codeSnippets.length);
    }
  }

  return (
    <div
      className="relative w-full max-w-xl h-[460px] mx-auto overflow-visible cursor-pointer"
      onClick={nextSlide}
    >
      {/* Background Layered Cards */}
      {backgroundIndices.map((idx, i) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-72 h-[390px] p-4 rounded-2xl bg-[#0f172a]/40 backdrop-blur-md border border-cyan-300/20 text-cyan-400 font-mono text-sm shadow-cyan-300/10 shadow-xl pointer-events-none ${layeredStyles[i]} z-${i}`}
        >
          <code>{codeSnippets[idx]}</code>
        </div>
      ))}

      {/* Active Card */}
      <AnimatePresence mode="wait">
        {activeIndex === 0 ? (
          // show only image on first slide
          <motion.div
            key="image-only"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-76 h-[390px] bg-[#0f172a]/80 backdrop-blur-lg border-2 border-cyan-400 rounded shadow-lg z-50 overflow-hidden flex items-center justify-center p-5"
          >
            <img
              src={jerinImg}
              alt="Jerin"
              className="w-72 h-96 object-cover rounded"
            />
          </motion.div>
        ) : (
          // show code snippet + image container with code on active slides
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-72 h-[390px] bg-[#0f172a]/80 backdrop-blur-lg border-2 border-cyan-400 rounded shadow-lg z-40 overflow-hidden flex flex-col items-center justify-between p-4"
          >
            <img
              src={jerinImg}
              alt="Jerin"
              className="w-full h-4/5 object-cover rounded"
            />
            <code className="text-cyan-300 font-mono text-sm mt-4 text-center">
              {codeSnippets[(activeIndex - 1) % codeSnippets.length]}
            </code>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-50">
        {[...Array(codeSnippets.length + 1)].map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-cyan-400 scale-125"
                : "bg-cyan-700/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
