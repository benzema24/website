import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface LogoCardProps {
  brandName: string;
  descriptor: string;
  logoSrc: string;
  tags: string[];
  accentColor?: string;
  delay?: number;
  url?: string;
}

export function LogoCard({ brandName, descriptor, logoSrc, tags, accentColor = 'from-primary/20 to-white/20', delay = 0, url }: LogoCardProps) {
  const cardContent = (
    <>
      {/* Logo Display Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center p-2">
        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${accentColor} blur-3xl opacity-0 group-hover:opacity-100`}
        />

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          <img
            src={logoSrc}
            alt={brandName}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {brandName}
        </h3>
        <p className="text-muted-foreground mb-4">
          {descriptor}
        </p>
        
        {/* Tags and Button Container */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
          
          {/* Original Link Button */}
          {url && url !== '#' && (
            <a
              href="https://www.behance.net/gallery/235595395/Workblox-Branding-Identity-Design"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group/btn"
            >
              <span>View Original</span>
              <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
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
    className: "group relative rounded-2xl overflow-hidden bg-card border border-border"
  };

  return (
    <motion.div {...motionProps}>
      {cardContent}
    </motion.div>
  );
}