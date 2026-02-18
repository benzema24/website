import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  delay?: number;
  url?: string;
}

export function ProjectCard({ title, description, image, tags, gradient, delay = 0, url }: ProjectCardProps) {
  const cardContent = (
    <>
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10">
        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-3xl opacity-0 group-hover:opacity-100`}
        />

        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10 w-full h-full"
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />

        {/* CTA Badge on Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-medium">
            <span>{url ? 'Visit Website' : 'View Project'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, delay },
    whileHover: { y: -8 },
    className: "group relative rounded-2xl overflow-hidden bg-card border border-border cursor-pointer"
  };

  if (url) {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      {cardContent}
    </motion.div>
  );
}