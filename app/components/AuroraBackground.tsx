import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export function AuroraBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Aurora Blobs */}
      <motion.div
        style={{
          x: useSpring(mouseXSpring, { damping: 50, stiffness: 100 }),
          y: useSpring(mouseYSpring, { damping: 50, stiffness: 100 }),
        }}
        className="absolute inset-0"
      >
        {/* 3D Gradient Blob 1 - Blue/Cyan with depth */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[10%] left-[15%] w-[600px] h-[600px]"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-500/20 to-blue-600/25 blur-[120px]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-cyan-400/15 via-transparent to-blue-500/10 blur-[80px] scale-75" />
        </motion.div>

        {/* 3D Gradient Blob 2 - White/Pink with layers */}
        <motion.div
          animate={{
            x: [120, 200, 120],
            y: [80, 140, 80],
            scale: [1, 1.15, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            left: '60%',
            top: '20%',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-fuchsia-500/20 to-pink-500/25 blur-[120px]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-400/15 via-transparent to-white/10 blur-[90px] scale-[0.6]" />
        </motion.div>

        {/* 3D Gradient Blob 3 - Cyan/Blue organic */}
        <motion.div
          animate={{
            x: [0, 60, -100, 0],
            y: [0, -50, 80, 0],
            scale: [1, 1.1, 0.95, 1],
            rotate: [0, 120, 240, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[15%] left-[25%] w-[650px] h-[650px]"
          style={{
            transform: 'translate(-50%, 50%)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-indigo-500/25 blur-[120px]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-blue-300/15 via-transparent to-cyan-600/10 blur-[70px] scale-[0.7]" />
        </motion.div>

        {/* 3D Gradient Blob 4 - White/Blue fluid */}
        <motion.div
          animate={{
            x: [0, -80, 70, 0],
            y: [0, 90, -70, 0],
            scale: [1, 1.15, 0.85, 1],
            rotate: [0, -120, -240, 0],
          }}
          transition={{
            duration: 33,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[25%] right-[15%] w-[550px] h-[550px]"
          style={{
            transform: 'translate(50%, 50%)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/20 to-blue-500/25 blur-[120px]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/15 via-transparent to-white/10 blur-[85px] scale-[0.65]" />
        </motion.div>

        {/* 3D Gradient Blob 5 - Accent Cyan center */}
        <motion.div
          animate={{
            x: [0, 50, -90, 0],
            y: [0, -70, 60, 0],
            scale: [1, 0.95, 1.2, 1],
            rotate: [0, 60, 120, 0],
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[50%] left-[50%] w-[500px] h-[500px]"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/20 via-blue-400/15 to-indigo-400/20 blur-[100px]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-blue-300/12 via-transparent to-cyan-500/8 blur-[60px] scale-[0.8]" />
        </motion.div>

        {/* Organic Fluid Blob 6 - Floating accent */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 80, -40, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 180, 360, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[40%] right-[30%] w-[450px] h-[450px]"
          style={{
            transform: 'translate(50%, -50%)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 via-white/15 to-white/20 blur-[110px]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/12 via-transparent to-indigo-600/8 blur-[75px] scale-[0.7]" />
        </motion.div>

        {/* Organic Fluid Blob 7 - Deep layer */}
        <motion.div
          animate={{
            x: [0, 70, -80, 0],
            y: [0, -90, 70, 0],
            scale: [1, 0.85, 1.25, 1],
            rotate: [0, -150, -300, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[60%] left-[40%] w-[580px] h-[580px]"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 via-cyan-600/15 to-indigo-600/20 blur-[130px]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-cyan-500/12 via-transparent to-blue-700/8 blur-[95px] scale-[0.6]" />
        </motion.div>
      </motion.div>

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
}