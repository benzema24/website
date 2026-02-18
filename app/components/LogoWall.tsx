import { motion } from 'motion/react';

interface Logo {
  src: string;
  alt: string;
  accentColor?: string;
}

interface LogoWallProps {
  logos: Logo[];
}

export function LogoWall({ logos }: LogoWallProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.04, y: -4 }}
          className="group relative aspect-video rounded-xl overflow-hidden bg-card border border-border flex items-center justify-center p-8 cursor-pointer"
        >
          {/* Background Glow */}
          <motion.div
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 bg-gradient-to-br ${logo.accentColor || 'from-primary/20 to-white/20'} blur-2xl opacity-0 group-hover:opacity-100`}
          />

          {/* Logo */}
          <div className="relative z-10 max-w-[120px] w-full">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Subtle Glow Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}