import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
  image?: string;
  layout?: 'default' | 'full-width' | 'split';
}

export function CaseStudySection({ title, children, image, layout = 'default' }: CaseStudySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h2>
      
      {layout === 'split' && image ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        </div>
      ) : (
        <>
          <div className="prose prose-invert max-w-none mb-8">
            {children}
          </div>
          {image && (
            <div className={`rounded-xl overflow-hidden border border-border ${layout === 'full-width' ? 'w-full' : 'max-w-4xl'}`}>
              <img src={image} alt={title} className="w-full h-auto" />
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
