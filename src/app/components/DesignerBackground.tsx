import { motion } from 'motion/react';

export function DesignerBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Animated Gradient Orbs - Futuristic colors */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-gradient-radial from-cyan-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.4, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-gradient-radial from-purple-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"
      />

      {/* Scanning Lines */}
      <motion.div
        animate={{
          y: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)',
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)',
        }}
      />

      <motion.div
        animate={{
          y: ['-100%', '200%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
        className="absolute left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent)',
          boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
        }}
      />

      {/* Holographic Frames */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[15%] w-64 h-64"
        style={{
          border: '1px solid rgba(34, 211, 238, 0.2)',
          borderRadius: '4px',
          boxShadow: 'inset 0 0 20px rgba(34, 211, 238, 0.1), 0 0 20px rgba(34, 211, 238, 0.1)',
        }}
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.02, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[25%] left-[10%] w-48 h-48"
        style={{
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '4px',
          boxShadow: 'inset 0 0 20px rgba(168, 85, 247, 0.1), 0 0 20px rgba(168, 85, 247, 0.1)',
        }}
      />

      {/* Digital Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [Math.random() * 1000, -100],
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? 'rgba(34, 211, 238, 0.6)' : 'rgba(168, 85, 247, 0.6)',
            boxShadow: i % 2 === 0 
              ? '0 0 4px rgba(34, 211, 238, 0.8)' 
              : '0 0 4px rgba(168, 85, 247, 0.8)',
          }}
        />
      ))}

      {/* Corner HUD Elements */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-6 left-6"
      >
        <div className="w-20 h-20 border-l-2 border-t-2 border-cyan-400/30" style={{
          boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)',
        }} />
        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full" style={{
          boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)',
        }} />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-6 right-6"
      >
        <div className="w-20 h-20 border-r-2 border-t-2 border-purple-400/30" style={{
          boxShadow: '0 0 10px rgba(168, 85, 247, 0.2)',
        }} />
        <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full" style={{
          boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)',
        }} />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-6 left-6"
      >
        <div className="w-20 h-20 border-l-2 border-b-2 border-cyan-400/30" style={{
          boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)',
        }} />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400 rounded-full" style={{
          boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)',
        }} />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-6 right-6"
      >
        <div className="w-20 h-20 border-r-2 border-b-2 border-purple-400/30" style={{
          boxShadow: '0 0 10px rgba(168, 85, 247, 0.2)',
        }} />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-400 rounded-full" style={{
          boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)',
        }} />
      </motion.div>

      {/* Data Stream Lines */}
      <motion.div
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.3), transparent)',
        }}
      />

      <motion.div
        animate={{
          x: ['200%', '-100%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute top-[65%] left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent)',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
        }}
      />
    </div>
  );
}