import { motion } from "framer-motion";
import { useState } from "react";
import jerinImg from "../../assets/jerin.png";

const ProfileCard = () => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    
    const rotateX = ((y - offsetHeight / 2) / 20) * -1;
    const rotateY = (x - offsetWidth / 2) / 20;

    setTilt({ rotateX, rotateY });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="relative w-[320px] max-w-sm mx-auto h-[420px] rounded-2xl overflow-hidden cursor-pointer group
                 border border-cyan-400/60 shadow-[0_0_25px_rgba(34,211,238,0.7)]
                 transition-transform duration-300 ease-out"
    >
      {/* Cyan glow layer */}
      <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/80 opacity-80 
                      group-hover:opacity-100 group-hover:shadow-[0_0_50px_rgba(34,211,238,0.9)]
                      transition-all duration-500 ease-in-out"></div>

      {/* Profile Image */}
      <img
        src={jerinImg}
        alt="Jerin"
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Overlay content */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/30 to-transparent 
                      rounded-2xl flex flex-col justify-end p-6"
        style={{ transform: "translateZ(40px)" }} // overlay text pop-out effect
      >
        <h2 className="text-2xl font-semibold text-cyan-300 drop-shadow-[0_0_8px_#22d3ee]">
          Jerin
        </h2>
        <p className="text-sm text-cyan-100/90 font-mono drop-shadow-[0_0_6px_#22d3ee]">
          MERN Stack Developer · Exploring Next.js
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
