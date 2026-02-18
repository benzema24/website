import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'futuristic' | 'glass';
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export function Button({ children, variant = 'primary', onClick, icon, className = '' }: ButtonProps) {
  const baseStyles = 'px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 justify-center group';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30',
    secondary: 'bg-secondary text-secondary-foreground border border-border hover:bg-accent hover:border-primary/30',
    ghost: 'text-muted-foreground hover:text-foreground hover:bg-secondary/50',
    futuristic: 'relative text-white backdrop-blur-xl shadow-lg shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/40 overflow-hidden',
    glass: 'relative bg-black/40 text-white backdrop-blur-xl border border-white/10 hover:bg-black/50 hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {variant === 'futuristic' && (
        <>
          {/* Glass Background - dark to light gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-blue-900/20 backdrop-blur-xl rounded-lg" />
          
          {/* Glowing Border */}
          <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-br from-cyan-500/60 via-blue-500/40 to-cyan-500/60">
            <div className="absolute inset-[2px] rounded-[7px] bg-gradient-to-b from-slate-950 via-slate-900/60 to-transparent" />
          </div>

          {/* Bottom Glow Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyan-500/30 via-blue-500/10 to-transparent blur-2xl" />
          
          {/* Subtle Inner Glow on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"
          />

          {/* Edge Highlight Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          />
        </>
      )}
      {variant === 'glass' && (
        <>
          {/* iOS-style glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20 backdrop-blur-2xl" />
          {/* Subtle inner glow */}
          <div className="absolute inset-[1px] rounded-[11px] bg-gradient-to-br from-white/5 to-transparent" />
          {/* Soft ambient light */}
          <motion.div
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-white/10 to-pink-400/10 blur-2xl"
          />
          {/* Hover glow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-white/20 blur-xl"
          />
        </>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
}