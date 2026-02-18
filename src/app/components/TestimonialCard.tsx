import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, role, company, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-[32px] overflow-hidden cursor-pointer"
    >
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-blue-900/20 backdrop-blur-xl" />
      
      {/* Glowing Border */}
      <div className="absolute inset-0 rounded-[32px] p-[2px] bg-gradient-to-br from-cyan-500/60 via-blue-500/40 to-cyan-500/60 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[2px] rounded-[30px] bg-gradient-to-b from-slate-950 via-slate-900/60 to-transparent" />
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/30 via-blue-500/10 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Quote Icon */}
        <div className="mb-6 text-cyan-400/40 group-hover:text-cyan-400/60 transition-colors duration-300">
          <Quote size={40} />
        </div>

        {/* Quote Text */}
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          "{quote}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Avatar Placeholder with Glow */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border-2 border-cyan-400/30 flex items-center justify-center">
              <span className="text-cyan-300 font-semibold text-lg">
                {author.charAt(0)}
              </span>
            </div>
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md" />
          </div>
          
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-gray-400">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>

      {/* Edge Highlight Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}