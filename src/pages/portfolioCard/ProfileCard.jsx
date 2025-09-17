import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jerinImg from "../../assets/jerin.png";

const codeSnippets = [
  `const jerin = "Passionate Developer";`,
  `const field = "Coding & Applied Nutrition";`,
  `const skills = ["React", "MongoDB", "Javascript","Express.JS", "Node.JS"];`,
  `const hobby = "Debugging + Learning";`,
  `const dream = "Full Stack Developer 🚀";`,
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
    <div>  

      {/* Active Card */}
      <AnimatePresence mode="wait">
        <img
              src={jerinImg}
              alt="Jerin"
              className="w-20 h-20 object-cover rounded-full"
            />
      </AnimatePresence>

    </div>
  );
};

export default ProfileCard;
