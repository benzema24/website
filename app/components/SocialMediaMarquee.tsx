import { motion } from 'motion/react';
import { useState } from 'react';

interface SocialMediaPost {
  id: string;
  platform: string;
  contentType: string;
  imageSrc: string;
  accentColor: string;
}

interface SocialMediaMarqueeProps {
  posts: SocialMediaPost[];
}

export function SocialMediaMarquee({ posts }: SocialMediaMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate posts for seamless infinite loop
  const duplicatedPosts = [...posts, ...posts, ...posts];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <motion.div
        className="flex gap-6"
        animate={{
          x: isPaused ? undefined : [0, -100 * posts.length / 3 + '%'],
        }}
        transition={{
          x: {
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => setIsPaused(false)}
      >
        {duplicatedPosts.map((post, index) => (
          <motion.div
            key={`${post.id}-${index}`}
            className="group relative flex-shrink-0 w-[320px] h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-black/80 backdrop-blur-xl" />

            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-cyan-500/40 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[1.5px] rounded-2xl bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-transparent" />
            </div>

            {/* Image Container */}
            <div className="relative z-10 w-full h-full p-4 flex flex-col">
              {/* Image */}
              <div className="flex-1 rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={post.imageSrc}
                  alt={`${post.platform} ${post.contentType}`}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${post.accentColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>

              {/* Labels */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium">
                  {post.platform}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-medium">
                  {post.contentType}
                </span>
              </div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyan-500/20 via-blue-500/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Edge Highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
