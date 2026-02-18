import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  name: string;
  delay?: number;
}

export function SkillCard({ icon, name, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className="relative flex items-center gap-3 p-4 bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
    >
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="text-cyan-400 relative z-10">{icon}</div>
      <span className="font-medium relative z-10">{name}</span>
    </motion.div>
  );
}