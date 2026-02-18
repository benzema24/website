import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export function DesignerBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform mouse position for spotlight
  const spotlightX = useTransform(mouseX, (value) => value);
  const spotlightY = useTransform(mouseY, (value) => value);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Colorful Gradient Orbs - Reduced opacity */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.3, 1.1, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-gradient-radial from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.4, 1.2, 1],
          rotate: [0, -90, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-gradient-radial from-cyan-400/10 via-blue-500/5 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.25, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-[45%] right-[20%] w-[400px] h-[400px] bg-gradient-radial from-orange-500/8 via-yellow-500/4 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -90, 45, 0],
          y: [0, 70, -35, 0],
          scale: [1, 1.35, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-[10%] left-[5%] w-[380px] h-[380px] bg-gradient-radial from-emerald-400/8 via-teal-500/4 to-transparent rounded-full blur-3xl"
      />

      {/* Mouse Follower Spotlight - Reduced opacity */}
      <motion.div
        className="absolute w-[900px] h-[900px] pointer-events-none"
        style={{
          left: spotlightX,
          top: spotlightY,
          x: '-50%',
          y: '-50%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/[0.03] via-purple-500/[0.015] to-transparent blur-3xl" />
      </motion.div>

      {/* Interactive Floating Designer Elements - More Shapes with Reduced Opacity */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.3, rotate: 180 }}
        className="absolute top-[15%] right-[15%] w-20 h-20"
      >
        <div className="w-full h-full border-2 border-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg shadow-[0_0_20px_rgba(236,72,153,0.15)]" 
             style={{ 
               background: 'linear-gradient(135deg, rgba(236,72,153,0.05) 0%, rgba(168,85,247,0.05) 100%)',
               borderImage: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.2)) 1'
             }} 
        />
      </motion.div>

      {/* Triangle - Cyan */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        whileHover={{ scale: 1.4, rotate: 360 }}
        className="absolute bottom-[25%] left-[20%] w-0 h-0"
        style={{
          borderLeft: '32px solid transparent',
          borderRight: '32px solid transparent',
          borderBottom: '55px solid rgba(34,211,238,0.2)',
          filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.3))',
        }}
      />

      {/* Triangle - Orange */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          x: [0, -25, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        whileHover={{ scale: 1.4, rotate: 360 }}
        className="absolute top-[60%] right-[8%] w-0 h-0"
        style={{
          borderLeft: '32px solid transparent',
          borderRight: '32px solid transparent',
          borderBottom: '55px solid rgba(251,146,60,0.15)',
          filter: 'drop-shadow(0 0 15px rgba(251,146,60,0.25))',
        }}
      />

      {/* Triangle - Emerald */}
      <motion.div
        animate={{
          y: [0, 45, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        whileHover={{ scale: 1.4, rotate: 45 }}
        className="absolute bottom-[15%] right-[25%] w-14 h-14"
        style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(20,184,166,0.1) 100%)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'drop-shadow(0 0 20px rgba(16,185,129,0.2))',
        }}
      />

      {/* New Shapes */}
      {/* Circle - Purple */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5,
        }}
        whileHover={{ scale: 1.5 }}
        className="absolute top-[35%] left-[8%] w-16 h-16 border-2 rounded-full"
        style={{
          borderImage: 'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(147,51,234,0.25)) 1',
          background: 'rgba(168,85,247,0.05)',
          boxShadow: '0 0 25px rgba(168,85,247,0.2)',
        }}
      />

      {/* Diamond/Rhombus - Yellow */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [45, 135, 225, 315, 405],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        whileHover={{ scale: 1.4, rotate: 90 }}
        className="absolute top-[25%] right-[35%] w-14 h-14"
        style={{
          background: 'linear-gradient(135deg, rgba(234,179,8,0.1) 0%, rgba(250,204,21,0.1) 100%)',
          transform: 'rotate(45deg)',
          boxShadow: '0 0 20px rgba(234,179,8,0.25)',
        }}
      />

      {/* Hexagon - Pink */}
      <motion.div
        animate={{
          y: [0, -45, 0],
          x: [0, -35, 0],
          rotate: [0, 60, 120, 180, 240, 300, 360],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4.5,
        }}
        whileHover={{ scale: 1.4 }}
        className="absolute top-[70%] left-[35%] w-16 h-16"
        style={{
          background: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(219,39,119,0.08) 100%)',
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
          filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.25))',
        }}
      />

      {/* Pentagon - Teal */}
      <motion.div
        animate={{
          y: [0, 38, 0],
          x: [0, 28, 0],
          rotate: [0, 72, 144, 216, 288, 360],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
        whileHover={{ scale: 1.45 }}
        className="absolute bottom-[40%] right-[12%] w-14 h-14"
        style={{
          background: 'linear-gradient(135deg, rgba(20,184,166,0.1) 0%, rgba(13,148,136,0.1) 100%)',
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          filter: 'drop-shadow(0 0 18px rgba(20,184,166,0.3))',
        }}
      />

      {/* Small Circle - Blue */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        whileHover={{ scale: 1.6 }}
        className="absolute top-[48%] left-[42%] w-10 h-10 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.06) 100%)',
          boxShadow: '0 0 25px rgba(59,130,246,0.25)',
        }}
      />

      {/* Star-like shape - Rose */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.2,
        }}
        whileHover={{ scale: 1.5, rotate: 180 }}
        className="absolute bottom-[55%] left-[28%] w-12 h-12"
        style={{
          background: 'linear-gradient(135deg, rgba(244,63,94,0.1) 0%, rgba(225,29,72,0.1) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          filter: 'drop-shadow(0 0 18px rgba(244,63,94,0.3))',
        }}
      />

      {/* Animated Color Lines - Reduced opacity */}
      <motion.div
        animate={{
          scaleX: [0, 1, 0],
          x: ['-100%', '0%', '100%'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="absolute top-[35%] left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.2), rgba(168,85,247,0.2), transparent)',
          boxShadow: '0 0 6px rgba(236,72,153,0.3)',
        }}
      />

      <motion.div
        animate={{
          scaleY: [0, 1, 0],
          y: ['-100%', '0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
        className="absolute left-[65%] top-0 bottom-0 w-[2px]"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(34,211,238,0.2), rgba(59,130,246,0.2), transparent)',
          boxShadow: '0 0 6px rgba(34,211,238,0.3)',
        }}
      />

      <motion.div
        animate={{
          scaleX: [0, 1, 0],
          x: ['100%', '0%', '-100%'],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.5,
          delay: 3,
        }}
        className="absolute top-[70%] left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(251,146,60,0.2), rgba(234,179,8,0.2), transparent)',
          boxShadow: '0 0 6px rgba(251,146,60,0.3)',
        }}
      />

      {/* Glowing Corner Brackets - Reduced opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2"
        style={{
          borderImage: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.2)) 1',
          filter: 'drop-shadow(0 0 5px rgba(236,72,153,0.25))',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
        className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2"
        style={{
          borderImage: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(59,130,246,0.2)) 1',
          filter: 'drop-shadow(0 0 5px rgba(34,211,238,0.25))',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2"
        style={{
          borderImage: 'linear-gradient(135deg, rgba(251,146,60,0.2), rgba(234,179,8,0.2)) 1',
          filter: 'drop-shadow(0 0 5px rgba(251,146,60,0.25))',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1.8 }}
        className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2"
        style={{
          borderImage: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(20,184,166,0.2)) 1',
          filter: 'drop-shadow(0 0 5px rgba(16,185,129,0.25))',
        }}
      />

      {/* Animated Grid Pattern - Reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="colorfulDots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#ec4899" opacity="0.3">
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="28" cy="15" r="1.5" fill="#22d3ee" opacity="0.3">
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </circle>
              <circle cx="15" cy="35" r="1.5" fill="#a855f7" opacity="0.3">
                <animate
                  attributeName="opacity"
                  values="0.1;0.4;0.1"
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin="1s"
                />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#colorfulDots)" />
        </svg>
      </div>

      {/* Pulsing Concentric Circles - Reduced opacity */}
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.04, 0.1, 0.04],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-[900px] h-[900px] border-2 rounded-full"
             style={{
               borderImage: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(168,85,247,0.15)) 1',
             }}
        />
        <div className="absolute inset-0 w-[700px] h-[700px] m-auto border-2 rounded-full"
             style={{
               borderImage: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(59,130,246,0.15)) 1',
             }}
        />
        <div className="absolute inset-0 w-[500px] h-[500px] m-auto border-2 rounded-full"
             style={{
               borderImage: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(234,179,8,0.15)) 1',
             }}
        />
      </motion.div>

      {/* Vignette Overlay - Softer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />
    </div>
  );
}